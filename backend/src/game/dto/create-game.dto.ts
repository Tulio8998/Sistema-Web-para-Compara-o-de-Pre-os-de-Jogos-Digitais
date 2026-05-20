import { IsString, IsNotEmpty, IsUrl, IsOptional } from "class-validator";

export class CreateGameDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  genre: string;

  @IsString()
  @IsNotEmpty()
  developer: string;

  @IsString()
  @IsNotEmpty()
  publisher: string;

  @IsUrl()
  @IsNotEmpty()
  coverImage: string;

  @IsOptional()
  @IsString()
  releaseDate?: string;
}