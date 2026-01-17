import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Gif } from '../models/gif.model';
import { mapGiphyItemToGif } from '../mapper/gifs.mapper';
import { GiphyResponse } from '../models/giphy-response.model';
import { environment } from 'src/environments/environment';

const GIPHY_BASE_URL = 'https://api.giphy.com/v1/gifs';

@Injectable({ providedIn: 'root' })
export class GifService {
  private readonly _trendingGifs = signal<Gif[]>([]);
  readonly trendingGifs = this._trendingGifs.asReadonly();

  readonly searchResults = signal<Gif[]>([]);

  constructor(private http: HttpClient) {}

  loadTrendingGifs(): void {
    this.http
      .get<GiphyResponse>(`${GIPHY_BASE_URL}/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
        },
      })
      .subscribe((resp) => {
        this._trendingGifs.set(resp.data.map(mapGiphyItemToGif));
      });
  }

  searchGifs(query: string): void {
    if (!query.trim()) {
      this.searchResults.set([]);
      return;
    }

    this.http
      .get<GiphyResponse>(`${GIPHY_BASE_URL}/search`, {
        params: {
          api_key: environment.giphyApiKey,
          q: query,
          limit: 20,
        },
      })
      .subscribe((resp) => {
        this.searchResults.set(resp.data.map(mapGiphyItemToGif));
      });
  }
}
