import { IsString, IsNotEmpty, IsUrl, IsOptional } from "class-validator";

export class CreateGameDto {
  @IsString()
  @IsNotEmpty()
  gameID: string;
  
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
  @IsOptional()
  coverImage: string;

  @IsOptional()
  @IsString()
  releaseDate?: Date;
}