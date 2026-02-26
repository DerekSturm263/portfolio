export interface CardItem {
  type: string;
  title: string;
  subTitle: string;
  description: string;
  subDescription: string;
  startDate: string;
  endDate: string;
  mediaType: "img" | "video";
  media: string;
  link: string;
  tags: TagGroup[];
}

export interface TagGroup {
  name: string;
  tags: string[];
}

export enum SortDirection {
  Ascending = 1,
  Descending = -1
}

export type Slug = Promise<{ slug: string }>;
export type URLParams = Promise<{ [key: string]: string | string[] | undefined }>;
export type Properties = { slug: Slug, urlParams: URLParams }
