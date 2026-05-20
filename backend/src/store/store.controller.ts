import {
  Controller,
  Get,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { StoreService } from '../store/store.service';
import { UpdateStoreDto } from '../store/dto/update-store.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from '@prisma/client';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('store')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get()
  @Roles(Role.ADMIN, Role.CLIENT)
  findAll(@Req() req: any) {
    return this.storeService.findAll(req.user);
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.CLIENT)
  findOne(@Param('id') id: string, @Req() req: any) {
    return this.storeService.findOne(id, req.user);
  }

  @Patch(':id')
  @Roles(Role.ADMIN, Role.CLIENT)
  update(
    @Param('id') id: string,
    @Body() updateStoreDto: UpdateStoreDto,
    @Req() req: any,
  ) {
    return this.storeService.update(id, updateStoreDto, req.user);
  }

  @Delete(':id')
  @Roles(Role.ADMIN, Role.CLIENT)
  remove(@Param('id') id: string, @Req() req: any) {
    return this.storeService.remove(id, req.user);
  }
}
