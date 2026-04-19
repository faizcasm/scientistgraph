import type { Metadata } from "next";
import { ArticlesClient } from "@/components/articles/articles-client";
import { getAllArticles, getArticleCategories } from "@/lib/articles";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Articles | ScientistGraph",
  description: "Explore science reporting across astronomy, climate, biology, AI, and more.",
  path: "/articles",
});

export default function ArticlesPage() {
  const articles = getAllArticles();
  const categories = getArticleCategories();

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8">
      <section className="mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
          ScientistGraph Library
        </p>
        <h1 className="mt-2 font-serif text-4xl font-bold leading-tight md:text-5xl">
          Science Stories, Explained Clearly
        </h1>
        <p className="mt-4 max-w-2xl text-(--sg-muted)">
          Browse original articles designed for curious readers, students, and professionals.
          Filter by category or search by topic.
        </p>
      </section>

      <ArticlesClient articles={articles} categories={categories} />
    </main>
  );
}
