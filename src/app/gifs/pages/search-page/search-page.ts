import { Component, inject, signal } from '@angular/core';
import { GifService } from '../../services/gifs.service';
import { GifsList } from '../../components/gifs-list/gifs-list';
import { Gif } from '../../models/gif.model';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [GifsList],
  templateUrl: './search-page.html',
})
export default class SearchPage {
  gifService = inject(GifService);

  onSearch(query: string) {
    this.gifService.searchGifs(query);
  }
}
