export type ArticleCategory =
  | "Astronomy"
  | "Biology"
  | "Climate"
  | "AI & Data"
  | "Physics"
  | "Neuroscience";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  publishDate: string;
  category: ArticleCategory;
  readTime: string;
  featuredImage: string;
  featuredImageAlt: string;
  featured: boolean;
  content: string;
}
