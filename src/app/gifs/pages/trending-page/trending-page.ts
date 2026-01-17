import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsList } from '../../components/gifs-list/gifs-list';
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page',
  standalone: true,
  imports: [CommonModule, GifsList],
  template: `
    <h1>Trending</h1>
    <app-gifs-list [gifs]="gifService.trendingGifs()" />
  `,
})
export class TrendingPageComponent {
  constructor(public gifService: GifService) {
    this.gifService.loadTrendingGifs();
  }
}
