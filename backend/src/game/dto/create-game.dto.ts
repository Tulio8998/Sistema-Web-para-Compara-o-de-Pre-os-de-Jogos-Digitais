import {
  IsString,
  IsNotEmpty,
  IsUrl,
  IsOptional,
  IsBoolean,
  IsArray,
  IsObject,
  IsDateString,
} from 'class-validator';

export class CreateGameDto {
  @IsString()
  @IsOptional()
  externalApiId?: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  genre?: string;

  @IsObject()
  @IsOptional()
  assets?: any;

  @IsObject()
  @IsOptional()
  deal?: any;

  @IsString()
  @IsOptional()
  flag?: string;

  @IsArray()
  @IsOptional()
  drm?: any[];

  @IsDateString()
  @IsOptional()
  timestamp?: Date;

  @IsDateString()
  @IsOptional()
  expiry?: Date;

  @IsUrl()
  @IsOptional()
  url?: string;

  @IsBoolean()
  @IsOptional()
  earlyAccess?: boolean;

  @IsBoolean()
  @IsOptional()
  achievements?: boolean;

  @IsBoolean()
  @IsOptional()
  tradingCards?: boolean;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tags?: string[];

  @IsOptional()
  releaseDate?: Date;

  @IsArray()
  @IsOptional()
  developers?: any[];

  @IsArray()
  @IsOptional()
  publishers?: any[];

  @IsArray()
  @IsOptional()
  reviews?: any[];

  @IsObject()
  @IsOptional()
  player?: any;
}
