export interface GiphyResponse {
  data: GiphyItem[];
  meta: Meta;
  pagination: Pagination;
}

export interface GiphyItem {
  id: string;
  type: string;
  slug: string;
  bitly_url: string;
  bitly_gif_url: string;
  title: string;
  images: {
    original: {
      url: string;
    };
  };
}

export interface Analytics {
  onload: Onclick;
  onclick: Onclick;
  onsent: Onclick;
}

export interface Onclick {
  url: string;
}

export interface Images {
  original: FixedHeight;
  fixed_height: FixedHeight;
  fixed_height_downsampled: FixedHeight;
  fixed_height_small: FixedHeight;
  fixed_width: FixedHeight;
  fixed_width_downsampled: FixedHeight;
  fixed_width_small: FixedHeight;
}

export interface FixedHeight {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size?: string;
  mp4?: string;
  webp_size: string;
  webp: string;
  frames?: string;
  hash?: string;
}

export enum Rating {
  G = 'g',
}

export enum TrendingDatetimeEnum {
  The00000000000000 = '0000-00-00 00:00:00',
}

export enum Type {
  GIF = 'gif',
}

export interface User {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  instagram_url: string;
  website_url: string;
  is_verified: boolean;
}

export interface Meta {
  status: number;
  msg: string;
  response_id: string;
}

export interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}
