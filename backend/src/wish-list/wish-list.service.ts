/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
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

@Injectable()
export class WishListService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateWishListDto, user: User) {
    const game = await this.prisma.game.findUnique({
      where: { externalApiId: data.gameId },
    });

    if (!game) {
      throw new NotFoundException(
        'Jogo não encontrado no sistema. Por favor, aguarde a sincronização do catálogo.',
      );
    }

    const wishListExists = await this.prisma.wishList.findFirst({
      where: {
        userId: user.id,
        gameId: game.id,
      },
    });

    if (wishListExists) {
      throw new BadRequestException(
        'Este jogo já está na sua lista de desejos',
      );
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
      throw new InternalServerErrorException(
        'Ocorreu um erro ao salvar na lista de desejos',
      );
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
          title: {
            contains: title,
            mode: 'insensitive',
          },
        },
      },
      include: { game: true },
    });

    if (wish.length === 0) {
      throw new NotFoundException(
        'Nenhum jogo encontrado com esse título na sua lista',
      );
    }

    return wish;
  }

  update(id: string, updateWishListDto: UpdateWishListDto, user: User) {
    return `This action updates a #${id} wishList`;
  }

  remove(id: string, user: User) {
    return `This action removes a #${id} wishList`;
  }
}
