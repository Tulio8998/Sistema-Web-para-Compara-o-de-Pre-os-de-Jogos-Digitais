import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { GameApiService } from 'src/game-api/game-api.service';

@Module({
  imports: [PrismaModule],
  controllers: [UserController],
  providers: [UserService, GameApiService],
  exports: [UserService],
})
export class UserModule {}
