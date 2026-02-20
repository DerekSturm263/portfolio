export interface ItemProperties {
  title: string;
  subTitle: string;
  description: string;
  subDescription: string;
  mediaType: "img" | "video";
  media: string;
  tags: TagGroup[];
  link: string;
}

export interface TagGroup {
  name: string;
  tags: string[];
}
