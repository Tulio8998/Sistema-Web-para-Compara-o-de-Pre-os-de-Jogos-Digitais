import { ForbiddenException } from '@nestjs/common';
import { Role, User } from '@prisma/client';

export class Util {
  static verificaRoleAdmin(data: User) {
    if (data.role !== Role.ADMIN) {
      throw new ForbiddenException(
        'Usuario não é administrador para usar a requisicao',
      );
    }
  }
}
