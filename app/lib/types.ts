export interface ItemProperties {
  description: string;
  startDate: string;
  endDate: string;
  media: string;
  link: string;
  tags: string[];
}

export interface Project extends ItemProperties {
  name: string;
  company: string;
  teamSize: number;
  roles: string[];
}

export interface Experience extends ItemProperties {
  company: string;
  position: string;
}

export interface Certification extends ItemProperties {
  provider: string;
  title: string;
}
