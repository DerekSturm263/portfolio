import { SvgIconComponent } from "@mui/icons-material";

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

export type Props = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
