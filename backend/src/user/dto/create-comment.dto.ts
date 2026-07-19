import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateCommentsDto {
  @IsNumber()
  @IsOptional()
  avaliation?: number;

  @IsArray()
  @IsOptional()
  comment: string[];

  @IsArray()
  @IsOptional()
  response: string[];
}
