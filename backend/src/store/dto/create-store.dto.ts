import { IsString, IsNotEmpty, IsUrl, IsOptional } from "class-validator";

export class CreateStoreDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsUrl()
  @IsNotEmpty()
  logo: string;

  @IsUrl()
  @IsNotEmpty()
  website: string;

  @IsOptional()
  @IsString()
  description?: string;
}