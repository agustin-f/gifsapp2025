import { Component, input } from '@angular/core';

@Component({
  selector: 'app-gifs-list-item',
  standalone: true,
  template: ` <img [src]="imageUrl()" class="w-full h-auto" /> `,
})
export class GifsListItem {
  imageUrl = input.required<string>();
}
