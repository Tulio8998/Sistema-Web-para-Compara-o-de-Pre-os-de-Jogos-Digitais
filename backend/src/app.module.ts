import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { GameApiModule } from './game-api/game-api.module';
import { WishListModule } from './wish-list/wish-list.module';
import { GameService } from './game/game.service';
import { StoreService } from './store/store.service';
import { PriceService } from './price/price.service';
import { PriceModule } from './price/price.module';
import { StoreModule } from './store/store.module';
import { GameModule } from './game/game.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    AuthModule,
    GameApiModule,
    WishListModule,
    GameModule,
    PriceModule,
    StoreModule,
  ],
  providers: [GameService, StoreService, PriceService],
})
export class AppModule {}