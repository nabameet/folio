interface Slide {
  type: string;
  title?: string;
  paragraph?: string;
  imageSrc?: string;
  imageAlt?: string;
  text?: string;
}

export interface Project {
  name: string;
  url: string;
  description: string;
  titleImageSrc: string;
  slides: Slide[];
}