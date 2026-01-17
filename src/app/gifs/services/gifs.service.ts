import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { Gif } from '../models/gif.model';
import { mapGiphyItemToGif } from '../mapper/gifs.mapper';

@Injectable({ providedIn: 'root' })
export class GifService {
  private readonly _trendingGifs = signal<Gif[]>([]);
  public readonly trendingGifs = this._trendingGifs.asReadonly();

  constructor(private http: HttpClient) {}

  loadTrendingGifs() {
    console.log('LOAD TRENDING GIFS');

    this.http
      .get<any>('https://api.giphy.com/v1/gifs/trending', {
        params: {
          api_key: 'QjQeFT1Vd7OYH7wvbZzOQbcvFRHEPBQF',
          limit: 20,
        },
      })
      .subscribe((res) => {
        console.log('API RESPONSE', res.data);
        this._trendingGifs.set(res.data.map(mapGiphyItemToGif));
      });
  }
}
