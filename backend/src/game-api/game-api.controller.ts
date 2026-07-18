import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { GameApiService } from './game-api.service';

@Controller('game')
export class GameApiController {
  constructor(private readonly gameService: GameApiService) {}

  @Get('search/:title')
  searchGameByTitle(@Param('title') title: string) {
    return this.gameService.searchGameByTitle(title);
  }

  @Get('info/:id')
  getGameInfo(@Param('id') id: string) {
    return this.gameService.getGameInfo(id);
  }

  @Get('deals')
  getDeals(
    @Query('limit') limit?: number,
    @Query('offset') offset?: number,
    @Query('country') country?: string,
    @Query('shops') shops?: string,
    @Query('minPrice') minPrice?: number,
    @Query('maxPrice') maxPrice?: number,
  ) {
    return this.gameService.getDeals(
      limit,
      offset,
      country,
      shops,
      minPrice,
      maxPrice,
    );
  }

  @Post('prices')
  getGamePrices(@Body() gameIds: string[], @Query('country') country?: string) {
    return this.gameService.getGamePrices(gameIds, country);
  }

  @Post('history-low')
  getHistoryLow(@Body() gameIds: string[], @Query('country') country?: string) {
    return this.gameService.getHistoryLow(gameIds, country);
  }

  @Post('store-low')
  getStoreLow(
    @Body() gameIds: string[],
    @Query('country') country?: string,
    @Query('shops') shops?: string,
  ) {
    return this.gameService.getStoreLow(gameIds, country, shops);
  }

  @Get('history-log/:id')
  getHistoryLog(@Param('id') id: string, @Query('country') country?: string) {
    return this.gameService.getHistoryLog(id, country);
  }

  @Post('overview')
  getOverview(@Body() gameIds: string[], @Query('country') country?: string) {
    return this.gameService.getOverview(gameIds, country);
  }
}
