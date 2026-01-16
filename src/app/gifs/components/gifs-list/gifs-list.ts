import { Component, input } from '@angular/core';
import { GifsListItem } from '../gifs-list-item/gifs-list-item';
import { NgClass } from '../../../../../node_modules/@angular/common/types/_common_module-chunk';

@Component({
  selector: 'app-gifs-list',
  imports: [GifsListItem],
  templateUrl: './gifs-list.html',
  styleUrl: './gifs-list.css',
})
export class GifsList {
  gifs = input.required<string[]>();
}
