import { Component, inject, signal } from '@angular/core';
import { GifsList } from '../../components/gifs-list/gifs-list';
import { GifService } from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page',
  standalone: true,
  imports: [GifsList],
  templateUrl: './trending-page.html',
})
export default class TrendingPage {
  gifService = inject(GifService);

  constructor() {
    this.gifService.loadTrendingGifs();
  }
}
