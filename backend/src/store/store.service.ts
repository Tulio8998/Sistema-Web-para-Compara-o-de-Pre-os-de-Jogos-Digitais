import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { Util } from 'src/Util/util';

@Injectable()
export class StoreService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateStoreDto) {
    const store = await this.prisma.store.findUnique({
      where: { storeID: data.storeID },
    });

    if (!store) {
      throw new BadRequestException('O store já existe no sistema');
    }

    try {
      return this.prisma.store.create({
        data: {
          ...data,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException('Ocorreu um erro inesperado');
    }
  }

  async findAll(user: User) {
    Util.verificaRoleAdmin(user);
    return await this.prisma.store.findMany();
  }

  async findOne(id: string, user: User) {
    const storeFind = await this.prisma.store.findUnique({
      where: { id },
    });

    if (!storeFind) {
      throw new NotFoundException('Store nao encontrado');
    }
    Util.verificaRoleAdmin(user);
    try {
      return storeFind;
    } catch (error) {
      throw new InternalServerErrorException('Ocorreu um erro inesperado');
    }
  }

  async update(id: string, updateStoreDto: UpdateStoreDto, user: User) {
    const storeFind = await this.prisma.store.findFirst({
      where: { id },
    });

    if (!storeFind) {
      throw new NotFoundException('Store nao encontrado');
    }
    Util.verificaRoleAdmin(user);
    try {
      return await this.prisma.store.update({
        where: { id },
        data: {
          ...updateStoreDto,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException('Ocorreu um erro inesperado');
    }
  }

  async remove(id: string, user: User) {
    const storeDelete = await this.prisma.store.findUnique({
      where: { id },
    });

    if (!storeDelete) {
      throw new NotFoundException('Store nao encontrado');
    }

    Util.verificaRoleAdmin(user);
    try {
      return this.prisma.store.delete({
        where: { id },
      });
    } catch (error) {
      throw new InternalServerErrorException('Ocorreu um erro inesperado');
    }
  }
}
