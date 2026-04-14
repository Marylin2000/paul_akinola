export interface HeroData {
  titlePrefix: string;
  titleItalic: string;
  titleSuffix: string;
  description: string;
  quote: string;
  image: {
    url: string;
    alt: string;
  };
}

export interface DetailBlock {
  headline: string;
  body: string;
}

export interface Offering {
  title: string;
  lede: string;
  details: DetailBlock[];
  image: {
    url: string;
    alt: string;
  };
}

export interface Thought {
  slug: string;
  title: string;
  tag: "Work" | "Life" | "Core";
  excerpt: string;
  date?: string;
  content: string;
  question?: string;
  image?: {
    url: string;
    alt: string;
  };
}
export interface RecognitionData {
  titlePrefix: string;
  titleSuffix: string;
  lines: { text: string }[];
  footerTitle: string;
  footerBody: string;
}

export interface PersonalAnchorData {
  headline: string;
  body: string;
  image?: {
    url: string;
    alt: string;
  };
}
