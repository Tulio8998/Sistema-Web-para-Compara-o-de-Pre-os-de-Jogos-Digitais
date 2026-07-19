import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { WishListService } from './wish-list.service';
import { CreateWishListDto } from './dto/create-wish-list.dto';
import { UpdateWishListDto } from './dto/update-wish-list.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Role } from '@prisma/client';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('wish-list')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class WishListController {
  constructor(private readonly wishListService: WishListService) {}

  @Post()
  @Roles(Role.ADMIN, Role.CLIENT)
  create(@Body() createWishListDto: CreateWishListDto, @Req() req: any) {
    return this.wishListService.create(createWishListDto, req.user);
  }

  @Get()
  @Roles(Role.ADMIN, Role.CLIENT)
  findAll(@Req() req: any) {
    return this.wishListService.findAll(req.user);
  }

  @Get(':id')
  @Roles(Role.ADMIN, Role.CLIENT)
  findById(@Param('id') id: string, @Req() req: any) {
    return this.wishListService.findById(id, req.user);
  }

  @Get(':title')
  @Roles(Role.ADMIN, Role.CLIENT)
  findByTitle(@Param('title') title: string, @Req() req: any) {
    return this.wishListService.findByTitle(title, req.user);
  }

  @Patch(':id')
  @Roles(Role.ADMIN, Role.CLIENT)
  update(
    @Param('id') id: string,
    @Body() updateWishListDto: UpdateWishListDto,
    @Req() req: any,
  ) {
    return this.wishListService.update(id, updateWishListDto,req.user);
  }

  @Delete(':id')
  @Roles(Role.ADMIN, Role.CLIENT)
  remove(@Param('id') id: string, @Req() req: any) {
    return this.wishListService.remove(id, req.user);
  }
}
