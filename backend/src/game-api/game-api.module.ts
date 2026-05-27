import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { GameApiController } from './game-api.controller';
import { GameApiService } from './game-api.service';

@Module({
  imports: [HttpModule],
  controllers: [GameApiController],
  providers: [GameApiService],
  exports: [GameApiService],
})
export class GameApiModule {}
