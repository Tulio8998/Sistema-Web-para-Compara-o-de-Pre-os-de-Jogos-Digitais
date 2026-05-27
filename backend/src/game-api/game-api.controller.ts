import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Query,
  UseGuards,
} from '@nestjs/common';
import { GameApiService } from './game-api.service';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('game')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class GameApiController {
  constructor(private readonly gameService: GameApiService) {}

  @Get('search/:title')
  @Roles(Role.ADMIN, Role.CLIENT)
  searchGameByTitle(@Param('title') title: string) {
    return this.gameService.searchGameByTitle(title);
  }

  @Get('info/:id')
  @Roles(Role.ADMIN, Role.CLIENT)
  getGameInfo(@Param('id') id: string) {
    return this.gameService.getGameInfo(id);
  }

  @Get('deals')
  @Roles(Role.ADMIN, Role.CLIENT)
  getDeals(
    @Query('limit') limit?: number,
    @Query('offset') offset?: number,
    @Query('country') country?: string,
    @Query('shops') shops?: string,
  ) {
    return this.gameService.getDeals(limit, offset, country, shops);
  }

  @Post('prices')
  @Roles(Role.ADMIN, Role.CLIENT)
  getGamePrices(@Body() gameIds: string[], @Query('country') country?: string) {
    return this.gameService.getGamePrices(gameIds, country);
  }

  @Post('history-low')
  @Roles(Role.ADMIN, Role.CLIENT)
  getHistoryLow(@Body() gameIds: string[], @Query('country') country?: string) {
    return this.gameService.getHistoryLow(gameIds, country);
  }

  @Post('store-low')
  @Roles(Role.ADMIN, Role.CLIENT)
  getStoreLow(
    @Body() gameIds: string[],
    @Query('country') country?: string,
    @Query('shops') shops?: string,
  ) {
    return this.gameService.getStoreLow(gameIds, country, shops);
  }

  @Get('history-log/:id')
  @Roles(Role.ADMIN, Role.CLIENT)
  getHistoryLog(@Param('id') id: string, @Query('country') country?: string) {
    return this.gameService.getHistoryLog(id, country);
  }

  @Post('overview')
  @Roles(Role.ADMIN, Role.CLIENT)
  getOverview(@Body() gameIds: string[], @Query('country') country?: string) {
    return this.gameService.getOverview(gameIds, country);
  }
}
