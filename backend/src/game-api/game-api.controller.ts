import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { GameApiService } from './game-api.service';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { Role } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/guards/roles.guard';

@Controller('game')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class GameApiController {
  constructor(private readonly gameService: GameApiService) {}

  @Get('deal')
  @Roles(Role.ADMIN)
  findAllDeals(@Query() query: any) {
    return this.gameService.findAllDeals(query);
  }

  @Get('title/:title')
  @Roles(Role.ADMIN)
  findGameByTitle(@Param('title') title: string, @Query() query: any) {
    return this.gameService.findGameByTitle(title, query);
  }

  @Get('id/:id')
  @Roles(Role.ADMIN)
  findGameById(@Param('id') id: string, @Query() query: any) {
    return this.gameService.findGameById(id, query);
  }

  @Get('store/:store')
  @Roles(Role.ADMIN)
  findByStore(@Param('store') store: string, @Query() query: any) {
    return this.gameService.findByStore(store, query);
  }

  @Get('store/id/:id')
  @Roles(Role.ADMIN)
  findStoreById(@Param('id') id: string, @Query() query: any) {
    return this.gameService.findStoreById(id, query);
  }

  @Get('store')
  @Roles(Role.ADMIN)
  findAllStore(@Query() query: any) {
    return this.gameService.findAllStore(query);
  }
}
