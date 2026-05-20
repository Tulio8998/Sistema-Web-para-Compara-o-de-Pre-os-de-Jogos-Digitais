import { Controller, Get, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { GameService } from '../game/game.service';
import { UpdateGameDto } from '../game/dto/update-game.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from '@prisma/client';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('game')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  @Roles(Role.ADMIN, Role.CLIENT)
  findAll(@Req() req: any) {
    return this.gameService.findAll(req.user);
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.CLIENT)
  findOne(@Param('id') id: string, @Req() req: any) {
    return this.gameService.findOne(id, req.user);
  }

  @Patch(':id')
  @Roles(Role.ADMIN, Role.CLIENT)
  update(
    @Param('id') id: string,
    @Body() updateGameDto: UpdateGameDto,
    @Req() req: any,
  ) {
    return this.gameService.update(id, updateGameDto, req.user);
  }

  @Delete(':id')
  @Roles(Role.ADMIN, Role.CLIENT)
  remove(@Param('id') id: string, @Req() req: any) {
    return this.gameService.remove(id, req.user);
  }
}
