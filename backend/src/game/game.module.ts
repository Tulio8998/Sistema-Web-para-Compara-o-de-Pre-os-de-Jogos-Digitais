import { Module } from '@nestjs/common';
import { GameService } from '../game/game.service';
import { GameController } from './game.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GameApiModule } from 'src/game-api/game-api.module';

@Module({
  imports: [PrismaModule, GameApiModule],
  controllers: [GameController],
  providers: [GameService],
})
export class GameModule {}
