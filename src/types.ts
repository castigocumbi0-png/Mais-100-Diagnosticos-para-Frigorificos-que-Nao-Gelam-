export interface DiagnosisSheet {
  id: string;
  title: string;
  code: string;
  system: string;
  category: string;
  image: string;
}

export interface HeroData {
  badge: string;
  headline: string;
  subheadline: string;
  mockupImage: string;
  storyP1: string;
  storyP2: string;
  storyP3: string;
  checklist: string[];
  ctaText: string;
}

export interface InsideMaterialItem {
  title: string;
  description: string;
}

export interface BenefitItem {
  id: number;
  title: string;
  description: string;
}

export interface DeliverableItem {
  text: string;
  highlight?: boolean;
}

export interface BonusItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface PlanItem {
  id: string;
  name: string;
  badge?: string;
  isFeatured: boolean;
  image: string;
  subtitle: string;
  features: string[];
  originalPrice?: string;
  price: string;
  priceNote?: string;
  checkoutUrl: string;
  ctaText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
