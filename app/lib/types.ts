export interface ItemProperties {
  title: string;
  subTitle: string;
  description: string;
  subDescription: string;
  mediaType: "img" | "video";
  media: string;
  link: string;
  tags: TagGroup[];
}

export interface TagGroup {
  name: string;
  tags: string[];
}

export type Params = { slug: string };
export type SearchParams = { [key: string]: string | string[] | undefined };
