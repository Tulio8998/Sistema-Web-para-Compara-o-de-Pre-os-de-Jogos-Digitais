/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateWishListDto } from './dto/create-wish-list.dto';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateWishListDto } from './dto/update-wish-list.dto';
import { GameApiService } from 'src/game-api/game-api.service';

@Injectable()
export class WishListService {
  constructor(
    private prisma: PrismaService,
    private gameApiService: GameApiService,
  ) {}

  async create(data: CreateWishListDto, user: User) {
    let game = await this.prisma.game.findUnique({
      where: { externalApiId: data.gameId },
    });

    if (!game) {
      const gameInfo = await this.gameApiService.getGameInfo(data.gameId);
      if (!gameInfo) {
        throw new NotFoundException('Jogo não encontrado na API Externa.');
      }

      const pricesData = await this.gameApiService.getGamePrices([data.gameId]);

      let dealData: any = undefined;
      let gameUrl: string | null = null;

      if (pricesData && pricesData.length > 0) {
        const gamePrices = pricesData[0];
        if (gamePrices.deals && gamePrices.deals.length > 0) {
          const bestDeal = gamePrices.deals.sort(
            (a: any, b: any) => a.price.amount - b.price.amount,
          )[0];

          gameUrl = bestDeal.url || null;

          dealData = {
            shop: {
              id: bestDeal.shop?.id || null,
              name: bestDeal.shop?.name || null,
            },
            price: {
              amount: bestDeal.price?.amount || 0,
              currency: bestDeal.price?.currency || 'BRL',
            },
            regular: {
              amount: bestDeal.regular?.amount || 0,
              currency: bestDeal.regular?.currency || 'BRL',
            },
            cut: bestDeal.cut || null,
            voucher: bestDeal.voucher || null,
            storeLow: bestDeal.storeLow
              ? {
                  amount: bestDeal.storeLow.amount,
                  currency: bestDeal.storeLow.currency,
                }
              : null,
            historyLow: gamePrices.historyLow?.all
              ? {
                  amount: gamePrices.historyLow.all.amount,
                  currency: gamePrices.historyLow.all.currency,
                }
              : null,
            historyLow_1y: null,
            historyLow_3m: null,
          };
        }
      }

      const mappedDevelopers = Array.isArray(gameInfo.developers)
        ? gameInfo.developers.map((d: any) => ({
            id: d.id || null,
            name: d.name || null,
          }))
        : [];

      const mappedPublishers = Array.isArray(gameInfo.publishers)
        ? gameInfo.publishers.map((p: any) => ({
            id: p.id || null,
            name: p.name || null,
          }))
        : [];

      const mappedReviews = Array.isArray(gameInfo.reviews)
        ? gameInfo.reviews.map((r: any) => ({
            score: r.score || null,
            source: r.source || null,
            count: r.count || null,
            url: r.url || null,
          }))
        : [];

      const mappedPlayer = gameInfo.players
        ? {
            recent: gameInfo.players.recent || null,
            day: gameInfo.players.day || null,
            week: gameInfo.players.week || null,
            peak: gameInfo.players.peak || null,
          }
        : undefined;

      const mappedAssets = gameInfo.assets
        ? {
            boxart: gameInfo.assets.boxart || null,
            banner200: gameInfo.assets.banner200 || gameInfo.assets.banner145 || null,
            banner400: gameInfo.assets.banner400 || null,
            banner600: gameInfo.assets.banner600 || null,
          }
        : undefined;

      try {
        game = await this.prisma.game.create({
          data: {
            externalApiId: gameInfo.id,
            title: gameInfo.title,
            url: gameUrl,
            assets: mappedAssets,
            tags: Array.isArray(gameInfo.tags) ? gameInfo.tags : [],
            deal: dealData,
            earlyAccess: gameInfo.earlyAccess ?? false,
            achievements: gameInfo.achievements ?? false,
            tradingCards: gameInfo.tradingCards ?? false,
            releaseDate: gameInfo.releaseDate ? new Date(gameInfo.releaseDate) : null,
            developers: mappedDevelopers,
            publishers: mappedPublishers,
            reviews: mappedReviews,
            player: mappedPlayer,
          },
        });
      } catch (err) {
        console.error("Erro no Prisma ao criar o jogo:", err);
        throw new InternalServerErrorException("Erro de validação ao salvar os dados do jogo.");
      }
    }

    const wishListExists = await this.prisma.wishList.findFirst({
      where: {
        userId: user.id,
        gameId: game.id,
      },
    });

    if (wishListExists) {
      throw new BadRequestException('Este jogo já está na sua lista de desejos');
    }

    try {
      return await this.prisma.wishList.create({
        data: {
          favorite: data.favorite ?? true,
          gameId: game.id,
          userId: user.id,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException('Ocorreu um erro ao salvar na lista de desejos');
    }
  }

  async findAll(user: User) {
    return await this.prisma.wishList.findMany({
      where: { userId: user.id },
      include: { game: true },
    });
  }

  async findById(id: string, user: User) {
    const wish = await this.prisma.wishList.findFirst({
      where: { userId: user.id, id: id },
      include: { game: true },
    });
    if (!wish) {
      throw new NotFoundException('Jogo salvo não encontrado');
    }
    return wish;
  }

  async findByTitle(title: string, user: User) {
    const wish = await this.prisma.wishList.findMany({
      where: {
        userId: user.id,
        game: {
          title: { contains: title, mode: 'insensitive' },
        },
      },
      include: { game: true },
    });
    if (wish.length === 0) {
      throw new NotFoundException('Nenhum jogo encontrado com esse título na sua lista');
    }
    return wish;
  }

  update(id: string, updateWishListDto: UpdateWishListDto, user: User) {
    return `This action updates a #${id} wishList`;
  }

  async remove(id: string, user: User) {
    const wish = await this.prisma.wishList.findFirst({
      where: { id: id, userId: user.id },
    });

    if (!wish) {
      throw new NotFoundException('Favorito não encontrado');
    }

    try {
      return await this.prisma.wishList.delete({
        where: { id: id },
      });
    } catch (error) {
      throw new InternalServerErrorException('Ocorreu um erro ao remover dos favoritos');
    }
  }
}