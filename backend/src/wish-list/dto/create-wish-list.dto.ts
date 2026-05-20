import { IsNotEmpty, IsString } from "class-validator";

export class CreateWishListDto {
    @IsString()
    @IsNotEmpty()
    favorite: boolean;

    @IsString()
    @IsNotEmpty()
    gameId: string;

    @IsString()
    @IsNotEmpty()
    userId: string;
}
