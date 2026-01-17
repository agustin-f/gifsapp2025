import { Component, input } from '@angular/core';
import { GifsListItem } from '../gifs-list-item/gifs-list-item';
import { Gif } from '../../models/gif.model';

@Component({
  selector: 'app-gifs-list',
  standalone: true,
  imports: [
    GifsListItem, // 👈 solo esto
  ],
  templateUrl: './gifs-list.html',
})
export class GifsList {
  gifs = input.required<Gif[]>();
}
