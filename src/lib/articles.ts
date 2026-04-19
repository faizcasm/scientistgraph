import rawArticles from "@/content/articles.json";
import type { Article } from "@/types/article";

const articles = rawArticles as Article[];

export function getAllArticles(): Article[] {
  return [...articles].sort(
    (a, b) =>
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
  );
}

export function getFeaturedArticles(limit = 3): Article[] {
  return getAllArticles()
    .filter((article) => article.featured)
    .slice(0, limit);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((article) => article.slug === slug);
}

export function getArticleCategories(): string[] {
  return [...new Set(getAllArticles().map((article) => article.category))];
}

export function getRelatedArticles(slug: string, category: string, limit = 3): Article[] {
  return getAllArticles()
    .filter((article) => article.slug !== slug && article.category === category)
    .slice(0, limit);
}
