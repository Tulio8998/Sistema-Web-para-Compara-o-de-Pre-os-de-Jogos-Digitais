import { Module } from '@nestjs/common';
import { GameService } from '../services/game/game.service';
import { GameController } from './game.controller';

@Module({
  controllers: [GameController],
  providers: [GameService],
})
export class GameModule {}
