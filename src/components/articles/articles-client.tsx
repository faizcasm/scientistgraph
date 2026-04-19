"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArticleCard } from "@/components/articles/article-card";
import type { Article } from "@/types/article";

const PAGE_SIZE = 6;

export function ArticlesClient({
  articles,
  categories,
}: {
  articles: Article[];
  categories: string[];
}) {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return articles.filter((article) => {
      const matchesCategory =
        selectedCategory === "All" || article.category === selectedCategory;
      const needle = query.toLowerCase().trim();
      const matchesQuery =
        needle.length === 0 ||
        article.title.toLowerCase().includes(needle) ||
        article.excerpt.toLowerCase().includes(needle) ||
        article.author.toLowerCase().includes(needle);

      return matchesCategory && matchesQuery;
    });
  }, [articles, query, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paged = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  function onFilterChange(category: string) {
    setSelectedCategory(category);
    setPage(1);
  }

  function onSearchChange(value: string) {
    setQuery(value);
    setPage(1);
  }

  return (
    <div className="space-y-8">
      <div className="space-y-4 rounded-2xl border border-(--sg-border) bg-(--sg-surface) p-5 md:p-6">
        <label className="block text-sm font-semibold" htmlFor="search">
          Search Articles
        </label>
        <input
          id="search"
          value={query}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search by title, author, or topic"
          className="w-full rounded-xl border border-(--sg-border) bg-background px-4 py-2.5 text-sm outline-none ring-(--sg-accent) transition focus:ring-2"
        />

        <div className="flex flex-wrap gap-2">
          {["All", ...categories].map((category) => {
            const active = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => onFilterChange(category)}
                className={`rounded-full border px-3 py-1.5 text-sm transition ${
                  active
                    ? "border-(--sg-accent) bg-(--sg-tint) text-(--sg-accent)"
                    : "border-(--sg-border) hover:border-(--sg-accent)"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {paged.length > 0 ? (
        <motion.div
          key={`${selectedCategory}-${query}-${currentPage}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {paged.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </motion.div>
      ) : (
        <div className="rounded-2xl border border-dashed border-(--sg-border) p-10 text-center text-(--sg-muted)">
          No articles matched your search.
        </div>
      )}

      <div className="flex items-center justify-between pt-2">
        <p className="text-sm text-(--sg-muted)">
          Page {currentPage} of {totalPages}
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="rounded-lg border border-(--sg-border) px-3 py-1.5 text-sm disabled:cursor-not-allowed disabled:opacity-45"
          >
            Previous
          </button>
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="rounded-lg border border-(--sg-border) px-3 py-1.5 text-sm disabled:cursor-not-allowed disabled:opacity-45"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
