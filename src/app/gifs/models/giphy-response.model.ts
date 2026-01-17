export interface GiphyResponse {
  data: GiphyItem[];
  pagination: {
    total_count: number;
    count: number;
    offset: number;
  };
  meta: {
    status: number;
    msg: string;
    response_id: string;
  };
}

export interface GiphyItem {
  id: string;
  title: string;
  images: {
    fixed_width: {
      url: string;
    };
  };
}
