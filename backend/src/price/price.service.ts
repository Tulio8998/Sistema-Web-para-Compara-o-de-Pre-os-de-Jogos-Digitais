import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePriceDto } from './dto/create-price.dto';
import { UpdatePriceDto } from './dto/update-price.dto';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { Util } from 'src/Util/util';

@Injectable()
export class PriceService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePriceDto) {
    try {
      return await this.prisma.price.create({
        data: {
          ...data,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException('Ocorreu um erro inesperado');
    }
  }

  async findAll(user: User) {
    return await this.prisma.price.findMany();
  }

  async findOne(id: string, user: User) {
    const priceFind = await this.prisma.price.findUnique({
      where: { id },
    });

    if (!priceFind) {
      throw new NotFoundException('Price nao encontrado');
    }
    try {
      return priceFind;
    } catch (error) {
      throw new InternalServerErrorException('Ocorreu um erro inesperado');
    }
  }

  async update(id: string, updatePriceDto: UpdatePriceDto, user: User) {
    const priceFind = await this.prisma.price.findFirst({
      where: { id },
    });

    if (!priceFind) {
      throw new NotFoundException('Price nao encontrado');
    }
    Util.verificaRoleAdmin(user);
    try {
      return await this.prisma.price.update({
        where: { id },
        data: {
          ...updatePriceDto,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException('Ocorreu um erro inesperado');
    }
  }

  async remove(id: string, user: User) {
    Util.verificaRoleAdmin(user);
    try {
      return this.prisma.price.delete({
        where: { id },
      });
    } catch (error) {
      throw new InternalServerErrorException('Ocorreu um erro inesperado');
    }
  }
}
