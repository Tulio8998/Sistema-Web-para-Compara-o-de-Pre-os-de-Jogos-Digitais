import { IsNumber, IsString, IsNotEmpty, IsOptional } from "class-validator";

export class CreatePriceDto {
  @IsNumber()
  value: number;

  @IsNumber()
  discount: number;

  @IsString()
  @IsNotEmpty()
  currency: string;

  @IsString()
  @IsNotEmpty()
  gameId: string;

  @IsString()
  @IsNotEmpty()
  storeId: string;

  @IsOptional()
  @IsString()
  promotionTitle?: string;
}