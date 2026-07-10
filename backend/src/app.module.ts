import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { GameApiModule } from './game-api/game-api.module';
import { WishListModule } from './wish-list/wish-list.module';
import { GameService } from './game/game.service';
import { GameModule } from './game/game.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    AuthModule,
    GameApiModule,
    WishListModule,
    GameModule,
  ],
  providers: [GameService],
})
export class AppModule {}
