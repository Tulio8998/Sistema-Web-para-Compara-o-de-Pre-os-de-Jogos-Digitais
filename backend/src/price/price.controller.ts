import { Controller, Get, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { PriceService } from '../price/price.service';
import { UpdatePriceDto } from '../price/dto/update-price.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from '@prisma/client';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('price')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class PriceController {
  constructor(private readonly priceService: PriceService) {}

  @Get()
  @Roles(Role.ADMIN, Role.CLIENT)
  findAll(@Req() req: any) {
    return this.priceService.findAll(req.user);
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.CLIENT)
  findOne(@Param('id') id: string, @Req() req: any) {
    return this.priceService.findOne(id, req.user);
  }

  @Patch(':id')
  @Roles(Role.ADMIN, Role.CLIENT)
  update(
    @Param('id') id: string,
    @Body() updatePriceDto: UpdatePriceDto,
    @Req() req: any,
  ) {
    return this.priceService.update(id, updatePriceDto, req.user);
  }

  @Delete(':id')
  @Roles(Role.ADMIN, Role.CLIENT)
  remove(@Param('id') id: string, @Req() req: any) {
    return this.priceService.remove(id, req.user);
  }
}
