import { Price } from "@prisma/client";

export class Game {
  id: string;
  gameID: string;
  title: string;
  description: string;
  genre: string;
  developer: string;
  publisher: string;
  coverImage: string;
  releaseDate: string;
  prices: Price[];
  createdAt: Date;
  updatedAt: Date;
}