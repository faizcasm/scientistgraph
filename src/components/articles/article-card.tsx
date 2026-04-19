import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/types/article";

export function ArticleCard({ article }: { article: Article }) {
  const formattedDate = new Date(article.publishDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="group overflow-hidden rounded-2xl border border-(--sg-border) bg-(--sg-surface) shadow-[0_6px_20px_rgba(13,30,46,0.05)] transition hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(13,30,46,0.10)]">
      <Link href={`/articles/${article.slug}`}>
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={article.featuredImage}
            alt={article.featuredImageAlt}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
        </div>
      </Link>

      <div className="space-y-3 p-5">
        <div className="flex items-center gap-3 text-xs font-medium text-(--sg-muted)">
          <span className="rounded-full bg-(--sg-tint) px-2.5 py-1 text-(--sg-accent)">
            {article.category}
          </span>
          <span>{article.readTime}</span>
        </div>

        <h3 className="font-serif text-xl font-bold leading-tight">
          <Link href={`/articles/${article.slug}`} className="hover:text-(--sg-accent)">
            {article.title}
          </Link>
        </h3>

        <p className="text-sm leading-6 text-(--sg-muted)">{article.excerpt}</p>

        <div className="pt-1 text-xs text-(--sg-muted)">
          By {article.author} | {formattedDate}
        </div>
      </div>
    </article>
  );
}
