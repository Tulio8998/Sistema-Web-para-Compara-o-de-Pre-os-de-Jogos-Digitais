import { Module } from '@nestjs/common';
import { WishListService } from './wish-list.service';
import { WishListController } from './wish-list.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [WishListController],
  providers: [WishListService],
})
export class WishListModule {}
