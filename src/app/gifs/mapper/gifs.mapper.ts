import { Gif } from '../models/gif.model';
import { GiphyItem } from '../models/giphy-response.model';

export const mapGiphyItemToGif = (item: GiphyItem): Gif => ({
  id: item.id,
  title: item.title,
  url: item.images.fixed_width.url,
});
