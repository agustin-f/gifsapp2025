import { GiphyItem } from '../interfaces/giphy.interfaces';
import { Gif } from '../models/gif.model';

export const mapGiphyItemToGif = (item: GiphyItem): Gif => {
  return {
    id: item.id,
    title: item.title,
    url: item.images.original.url,
  };
};
