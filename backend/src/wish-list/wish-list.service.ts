import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateWishListDto } from './dto/create-wish-list.dto';
import { UpdateWishListDto } from './dto/update-wish-list.dto';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WishListService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateWishListDto) {
    const wishList = await this.prisma.wishList.findFirst({
      where: {
        favorite: data.favorite,
        gameId: data.gameId,
      },
      include: {
        game: true,
        user: true,
      },
    });

    if (wishList) {
      throw new BadRequestException('Já existe na lista de desejos');
    }
    try {
      return await this.prisma.wishList.create({
        data: {
          ...data,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException('Ocorreu um erro');
    }
  }

  findAll(user: User) {
    return `This action returns all wishList`;
  }

  findOne(id: string, user: User) {
    return `This action returns a #${id} wishList`;
  }

  update(id: string, updateWishListDto: UpdateWishListDto, user: User) {
    return `This action updates a #${id} wishList`;
  }

  remove(id: string, user: User) {
    return `This action removes a #${id} wishList`;
  }
}
