import { Module } from '@nestjs/common';
import { WishListService } from './wish-list.service';
import { WishListController } from './wish-list.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GameApiModule } from 'src/game-api/game-api.module';

@Module({
  imports: [PrismaModule, GameApiModule],
  controllers: [WishListController],
  providers: [WishListService],
})
export class WishListModule {}
