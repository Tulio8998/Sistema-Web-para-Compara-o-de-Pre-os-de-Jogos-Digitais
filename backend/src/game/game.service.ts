import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class GameService {
  constructor(private readonly httpService: HttpService) {}

  async findAllDeals(query: any) {
    const params = new URLSearchParams(query).toString();
    const url = `https://www.cheapshark.com/api/1.0/deals?${params}`;
    const response: any = await firstValueFrom(this.httpService.get(url));

    return response.data;
  }

  async findGameByTitle(title: string, query: any) {
    const params = new URLSearchParams(query).toString();
    const url = `https://www.cheapshark.com/api/1.0/games?title=${title}&${params}`;
    const response: any = await firstValueFrom(this.httpService.get(url));

    return response.data;
  }

  async findGameById(id: string, query: any) {
    const params = new URLSearchParams(query).toString();
    const url = `https://www.cheapshark.com/api/1.0/games?id=${id}&${params}`;
    const response: any = await firstValueFrom(this.httpService.get(url));

    return response.data;
  }

  async findByStore(store: string, query: any) {
    const params = new URLSearchParams(query).toString();
    const url = `https://www.cheapshark.com/api/1.0/stores?${params}`;
    const response: any = await firstValueFrom(this.httpService.get(url));

    return response.data.filter((item: any) =>
      item.storeName.toLowerCase().includes(store.toLowerCase()),
    );
  }

  async findStoreById(id: string, query: any) {
    const params = new URLSearchParams(query).toString();
    const url = `https://www.cheapshark.com/api/1.0/stores?${params}`;
    const response: any = await firstValueFrom(this.httpService.get(url));

    return response.data.find((item: any) => item.storeID === id);
  }

  async findAllStore(query: any) {
    const params = new URLSearchParams(query).toString();
    const url = `https://www.cheapshark.com/api/1.0/stores?${params}`;
    const response: any = await firstValueFrom(this.httpService.get(url));

    return response.data;
  }
}
