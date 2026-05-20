import { IsString, IsNotEmpty, IsUrl, IsOptional } from "class-validator";

export class CreateStoreDto {
  @IsString()
  @IsNotEmpty()
  storeID: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsUrl()
  @IsNotEmpty()
  logo: string;

  @IsOptional()
  @IsString()
  description?: string;
}