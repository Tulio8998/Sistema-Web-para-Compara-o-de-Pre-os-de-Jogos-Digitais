import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { Util } from 'src/Util/util';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const exitingUser = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });

    if (exitingUser) {
      throw new BadRequestException('Usuario já existente no sistema');
    }
    try {
      const hashedPassword = await bcrypt.hash(data.password, 10);

      return this.prisma.user.create({
        data: {
          ...data,
          password: hashedPassword,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException('Ocorreu um erro inesperado');
    }
  }

  findAll(user: User) {
    Util.verificaRoleAdmin(user);
    return this.prisma.user.findMany();
  }

  async findOne(id: string, user: User) {
    const userFind = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!userFind) {
      throw new NotFoundException('Usuario nao encontrado');
    }
    Util.verificaRoleAdmin(user);
    try {
      return userFind;
    } catch (error) {
      throw new InternalServerErrorException('Ocorreu um erro inesperado');
    }
  }

  async findUserByEmail(email: string, user: User) {
    const userFind = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!userFind) {
      throw new NotFoundException('Usuario nao encontrado');
    }
    Util.verificaRoleAdmin(user);
    try {
      return userFind;
    } catch (error) {
      throw new InternalServerErrorException('Ocorreu um erro inesperado');
    }
  }

  async findByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where: { email },
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto, user: User) {
    const userFind = await this.prisma.user.findFirst({
      where: { id },
    });

    if (!userFind) {
      throw new NotFoundException('Usuario nao encontrado');
    }
    Util.verificaRoleAdmin(user);
    try {
      return await this.prisma.user.update({
        where: { id },
        data: {
          ...updateUserDto,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException('Ocorreu um erro inesperado');
    }
  }

  async remove(id: string, user: User) {
    const userDelete = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!userDelete) {
      throw new NotFoundException('Usuario nao encontrado');
    }

    if (id === user.id) {
      throw new ForbiddenException('Usuario nao pode deletar a si mesmo');
    }
    Util.verificaRoleAdmin(user);
    try {
      return this.prisma.user.delete({
        where: { id },
      });
    } catch (error) {
      throw new InternalServerErrorException('Ocorreu um erro inesperado');
    }
  }
}
