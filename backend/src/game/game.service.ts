/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// src/game/game.service.ts
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { UpdateGameDto } from './dto/update-game.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { GameApiService } from '../game-api/game-api.service';
import { User } from '@prisma/client';
import { Util } from 'src/Util/util';

@Injectable()
export class GameService {
  constructor(
    private prisma: PrismaService,
    private gameApiService: GameApiService,
  ) {}

  async create(limit: number, offset: number) {
    try {
      const deals = await this.gameApiService.getDeals(limit, offset);
      let countSynced = 0;

      for (const dealItem of deals) {
        const externalApiId = dealItem.id;

        const info = await this.gameApiService.getGameInfo(externalApiId);

        const gameInfo = info || {};

        const dealMapped = dealItem.deal
          ? {
              shop: {
                id: dealItem.deal.shop?.id || null,
                name: dealItem.deal.shop?.name || null,
              },
              price: {
                amount: dealItem.deal.price?.amount || 0,
                currency: dealItem.deal.price?.currency || 'BRL',
              },
              regular: {
                amount: dealItem.deal.regular?.amount || 0,
                currency: dealItem.deal.regular?.currency || 'BRL',
              },
              cut: dealItem.deal.cut || null,
              voucher: dealItem.deal.voucher || null,

              storeLow: dealItem.deal.storeLow
                ? {
                    amount: dealItem.deal.storeLow.amount,
                    currency: dealItem.deal.storeLow.currency,
                  }
                : null,
              historyLow: dealItem.deal.historyLow
                ? {
                    amount: dealItem.deal.historyLow.amount,
                    currency: dealItem.deal.historyLow.currency,
                  }
                : null,
              historyLow_1y: dealItem.deal.historyLow_1y
                ? {
                    amount: dealItem.deal.historyLow_1y.amount,
                    currency: dealItem.deal.historyLow_1y.currency,
                  }
                : null,
              historyLow_3m: dealItem.deal.historyLow_3m
                ? {
                    amount: dealItem.deal.historyLow_3m.amount,
                    currency: dealItem.deal.historyLow_3m.currency,
                  }
                : null,
            }
          : null;

        const gameData = {
          externalApiId: externalApiId,
          title: dealItem.title,
          url: dealItem.url || dealItem.deal?.url || null,
          assets: dealItem.assets
            ? {
                boxart: dealItem.assets.boxart,
                banner200: dealItem.assets.banner200,
                banner400: dealItem.assets.banner400,
                banner600: dealItem.assets.banner600,
              }
            : null,
          deal: dealMapped,

          earlyAccess: gameInfo.earlyAccess ?? false,
          achievements: gameInfo.achievements ?? false,
          tradingCards: gameInfo.tradingCards ?? false,
          tags: gameInfo.tags || [],
          releaseDate: gameInfo.releaseDate
            ? new Date(gameInfo.releaseDate)
            : null,
          developers: gameInfo.developers || [],
          publishers: gameInfo.publishers || [],
          reviews: gameInfo.reviews || [],
          player: gameInfo.players
            ? {
                recent: gameInfo.players.recent,
                day: gameInfo.players.day,
                week: gameInfo.players.week,
                peak: gameInfo.players.peak,
              }
            : null,
        };

        const existingGame = await this.prisma.game.findUnique({
          where: { externalApiId: externalApiId },
        });

        if (existingGame) {
          await this.prisma.game.update({
            where: { externalApiId: externalApiId },
            data: gameData,
          });
        } else {
          await this.prisma.game.create({
            data: gameData,
          });
        }

        countSynced++;
      }

      return {
        message: 'Sincronização concluída com sucesso',
        syncedGames: countSynced,
      };
    } catch (error) {
      console.error('Erro na sincronização de jogos:', error);
      throw new InternalServerErrorException(
        'Ocorreu um erro ao popular o banco de dados',
      );
    }
  }

  async findAll(take: number, skip: number, user: User) {
    return await this.prisma.game.findMany({
      take: take,
      skip: skip,
      orderBy: {
        title: 'asc',
      },
    });
  }

  async findOne(id: string) {
    const gameFind = await this.prisma.game.findUnique({
      where: { id: id },
    });

    if (!gameFind) {
      throw new NotFoundException('Jogo não encontrado no banco local');
    }
    return gameFind;
  }

  async update(id: string, updateGameDto: UpdateGameDto, user: User) {
    const gameFind = await this.prisma.game.findUnique({
      where: { id },
    });

    if (!gameFind) {
      throw new NotFoundException('Game nao encontrado');
    }
    Util.verificaRoleAdmin(user);
    try {
      return await this.prisma.game.update({
        where: { id },
        data: {
          ...updateGameDto,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException('Ocorreu um erro inesperado');
    }
  }

  async remove(id: string, user: User) {
    const gameDelete = await this.prisma.game.findUnique({
      where: { id },
    });

    if (!gameDelete) {
      throw new NotFoundException('Game nao encontrado');
    }

    Util.verificaRoleAdmin(user);
    try {
      return this.prisma.game.delete({
        where: { id },
      });
    } catch (error) {
      throw new InternalServerErrorException('Ocorreu um erro inesperado');
    }
  }
}
