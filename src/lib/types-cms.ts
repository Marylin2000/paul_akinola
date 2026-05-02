export interface HeroData {
  titlePrefix: string;
  titleItalic: string;
  titleSuffix: string;
  description: string;
  quote: string;
  eyebrow?: string;
  credentialAnchor?: string;
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

export interface BuildItem {
  title: string;
  description: string;
  icon: string;
  size: "large" | "medium" | "small";
  gradient: string;
  color?: string;
}

export interface BuildStat {
  value: string;
  suffix?: string;
  label: string;
  description?: string;
  icon: string;
  gradient: string;
}

export interface BuildIndustry {
  name: string;
  company: string;
  color: string;
  icon: string;
}

export interface BuildStoryMetric {
  value: string;
}

export interface BuildStory {
  title: string;
  pain: string;
  change: string;
  metrics: BuildStoryMetric[];
  icon: string;
  gradient: string;
  accentColor: string;
}

export interface BuildTool {
  name: string;
  category: string;
  description: string;
  icon?: string;
  tags?: Array<string | { value: string }>;
  gradient?: string;
}

export interface BuildData {
  heroBadge: string;
  heroTitle1: string;
  heroTitle2: string;
  heroP1: string;
  heroP2: string;
  whatIBuildTitle: string;
  buildItems: BuildItem[];
  proofTitle: string;
  statsList: BuildStat[];
  industriesList: BuildIndustry[];
  storiesTitle: string;
  storiesList: BuildStory[];
  toolsTitle: string;
  toolsList: BuildTool[];
  ctaTitle: string;
  ctaBtn: string;
  footerLine?: string;
}
