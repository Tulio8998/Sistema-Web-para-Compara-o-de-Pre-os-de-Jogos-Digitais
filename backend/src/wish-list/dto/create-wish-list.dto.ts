import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateWishListDto {
  @IsBoolean()
  @IsNotEmpty()
  favorite: boolean;

  @IsString()
  @IsNotEmpty()
  gameId: string;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
