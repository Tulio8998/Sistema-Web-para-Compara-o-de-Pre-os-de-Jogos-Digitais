import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { Util } from 'src/Util/util';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateGameDto) {
    const game = await this.prisma.game.findUnique({
      where: { gameID: data.gameID },
    });

    if (game) {
      throw new BadRequestException('O game já existe no sistema');
    }

    try {
      return this.prisma.game.create({
        data: {
          ...data,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException('Ocorreu um erro inesperado');
    }
  }

  async findAll(user: User) {
    return await this.prisma.game.findMany();
  }

  async findOne(gameID: string) {
    const gameFind = await this.prisma.game.findUnique({
      where: { gameID: gameID },
    });

    if (!gameFind) {
      throw new NotFoundException('Jogo não encontrado no banco local');
    }
    return gameFind;
  }

  async update(id: string, updateGameDto: UpdateGameDto, user: User) {
    const gameFind = await this.prisma.game.findFirst({
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
