import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { ArticleCard } from "@/components/articles/article-card";
import { getArticleBySlug, getAllArticles, getRelatedArticles } from "@/lib/articles";
import { buildArticleJsonLd, buildMetadata } from "@/lib/seo";

export async function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return buildMetadata({
      title: "Article Not Found | ScientistGraph",
      description: "The requested article does not exist.",
      path: "/articles",
    });
  }

  return buildMetadata({
    title: `${article.title} | ScientistGraph`,
    description: article.excerpt,
    path: `/articles/${article.slug}`,
  });
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const related = getRelatedArticles(article.slug, article.category, 3);
  const jsonLd = buildArticleJsonLd({
    title: article.title,
    description: article.excerpt,
    image: article.featuredImage,
    datePublished: article.publishDate,
    author: article.author,
    path: `/articles/${article.slug}`,
  });

  const formattedDate = new Date(article.publishDate).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article className="mx-auto max-w-3xl">
        <Link href="/articles" className="text-sm font-medium text-(--sg-accent)">
          Back to all articles
        </Link>

        <h1 className="mt-4 font-serif text-4xl font-bold leading-tight md:text-5xl">
          {article.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-(--sg-muted)">
          <span>{article.author}</span>
          <span>•</span>
          <span>{formattedDate}</span>
          <span>•</span>
          <span>{article.readTime}</span>
          <span className="rounded-full bg-(--sg-tint) px-2.5 py-1 text-xs text-(--sg-accent)">
            {article.category}
          </span>
        </div>

        <div className="relative mt-7 aspect-video overflow-hidden rounded-2xl border border-(--sg-border)">
          <Image
            src={article.featuredImage}
            alt={article.featuredImageAlt}
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 960px, 100vw"
          />
        </div>

        <div className="prose prose-lg mt-8 max-w-none prose-headings:font-serif prose-headings:text-(--sg-fg) prose-p:text-(--sg-muted) prose-li:text-(--sg-muted) dark:prose-invert">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>
      </article>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-bold">Related Reads</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {related.map((item) => (
              <ArticleCard key={item.slug} article={item} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
