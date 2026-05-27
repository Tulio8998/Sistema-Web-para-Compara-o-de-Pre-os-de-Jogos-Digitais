/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

@Injectable()
export class GameApiService {
  private readonly baseUrl = 'https://api.isthereanydeal.com';
  private readonly apiKey = process.env.ITAD_API_KEY;

  async searchGameByTitle(title: string) {
    try {
      const response = await fetch(
        `${this.baseUrl}/games/search/v1?key=${this.apiKey}&title=${encodeURIComponent(title)}`,
      );
      if (!response.ok) throw new Error('Falha ao buscar jogo');

      const data = await response.json();
      return data;
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro ao conectar com a API externa',
      );
    }
  }

  async getGameInfo(gameId: string) {
    try {
      const response = await fetch(
        `${this.baseUrl}/games/info/v2?key=${this.apiKey}&id=${gameId}`,
      );
      if (response.status === 404) return null;
      if (!response.ok) throw new Error('Falha ao buscar info');

      const data = await response.json();
      return data;
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro ao conectar com a API externa',
      );
    }
  }

  async getGamePrices(gameIds: string[], country = 'BR') {
    try {
      const response = await fetch(
        `${this.baseUrl}/games/prices/v3?key=${this.apiKey}&country=${country}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(gameIds),
        },
      );
      if (!response.ok) throw new Error('Falha ao buscar precos');

      const data = await response.json();
      return data;
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro ao conectar com a API externa',
      );
    }
  }

  async getDeals(
    limit: number = 20,
    offset: number = 0,
    country: string = 'BR',
    shops?: string,
  ) {
    try {
      let url = `${this.baseUrl}/deals/v2?key=${this.apiKey}&limit=${limit}&offset=${offset}&country=${country}`;
      if (shops) url += `&shops=${shops}`;

      const response = await fetch(url);
      if (!response.ok) throw new Error('Falha ao buscar promocoes');

      const data = await response.json();
      return data.list;
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro ao conectar com a API externa',
      );
    }
  }

  async getHistoryLow(gameIds: string[], country: string = 'BR') {
    try {
      const response = await fetch(
        `${this.baseUrl}/games/historylow/v1?key=${this.apiKey}&country=${country}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(gameIds),
        },
      );
      if (!response.ok)
        throw new Error('Falha ao buscar menor preço histórico');
      return await response.json();
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro ao conectar com a API externa',
      );
    }
  }

  async getStoreLow(gameIds: string[], country: string = 'BR', shops?: string) {
    try {
      let url = `${this.baseUrl}/games/storelow/v2?key=${this.apiKey}&country=${country}`;
      if (shops) url += `&shops=${shops}`;

      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(gameIds),
      });
      if (!response.ok) throw new Error('Falha ao buscar menor preço por loja');
      return await response.json();
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro ao conectar com a API externa',
      );
    }
  }

  async getHistoryLog(gameId: string, country: string = 'BR') {
    try {
      const response = await fetch(
        `${this.baseUrl}/games/history/v2?key=${this.apiKey}&id=${gameId}&country=${country}`,
      );
      if (!response.ok)
        throw new Error('Falha ao buscar log de histórico de preço');
      return await response.json();
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro ao conectar com a API externa',
      );
    }
  }

  async getOverview(gameIds: string[], country: string = 'BR') {
    try {
      const response = await fetch(
        `${this.baseUrl}/games/overview/v2?key=${this.apiKey}&country=${country}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(gameIds),
        },
      );
      if (!response.ok) throw new Error('Falha ao buscar overview geral');
      return await response.json();
    } catch (error) {
      throw new InternalServerErrorException(
        'Erro ao conectar com a API externa',
      );
    }
  }
}
