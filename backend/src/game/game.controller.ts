import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Query,
} from '@nestjs/common';
import { GameService } from './game.service';
import { UpdateGameDto } from './dto/update-game.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from '@prisma/client';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Post('sync')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.ADMIN)
  create(@Query('limit') limit?: string, @Query('offset') offset?: string) {
    const limitNumber = limit ? parseInt(limit, 10) : 100;
    const offsetNumber = offset ? parseInt(offset, 10) : 0;

    return this.gameService.create(limitNumber, offsetNumber);
  }

  @Get()
  findAll(
    @Req() req: any,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
  ) {
    const take = limit ? parseInt(limit, 10) : 12;
    const skip = offset ? parseInt(offset, 10) : 0;

    return this.gameService.findAll(take, skip, req.user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gameService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.ADMIN, Role.CLIENT)
  update(
    @Param('id') id: string,
    @Body() updateGameDto: UpdateGameDto,
    @Req() req: any,
  ) {
    return this.gameService.update(id, updateGameDto, req.user);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles(Role.ADMIN, Role.CLIENT)
  remove(@Param('id') id: string, @Req() req: any) {
    return this.gameService.remove(id, req.user);
  }
}
