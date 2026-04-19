import Link from "next/link";
import type { Metadata } from "next";
import { ArticleCard } from "@/components/articles/article-card";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { getArticleCategories, getFeaturedArticles } from "@/lib/articles";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "ScientistGraph | Visualizing Science, Simplifying Knowledge",
  description:
    "A modern science publication platform featuring data-driven explainers, discoveries, and editorial analysis.",
  path: "/",
});

export default function HomePage() {
  const featuredArticles = getFeaturedArticles(3);
  const categories = getArticleCategories();

  const services = [
    {
      title: "Research Development & Publication Support",
      description:
        "Editorial and publication strategy support for scholars preparing journal-ready manuscripts.",
    },
    {
      title: "Thesis & Dissertation Consultancy",
      description:
        "Structured guidance for postgraduate and doctoral research projects from proposal to defense.",
    },
    {
      title: "Research Mentorship & Methodology",
      description:
        "Method design, literature architecture, and data interpretation support from domain mentors.",
    },
    {
      title: "IPR & Innovation Guidance",
      description:
        "Knowledge-led support for protecting novel work via patents, copyrights, and innovation documentation.",
    },
    {
      title: "Scholarly Training Programs",
      description:
        "Workshops, webinars, and practical sessions to strengthen research communication and ethics.",
    },
  ];

  const verticals = [
    "Science Explainers",
    "Research Spotlight",
    "Academic Publishing Insights",
    "Innovation & IPR Notes",
    "ScientistGraph E-Magazine",
  ];

  const valueProps = [
    "Evidence-first editorial standards",
    "Expert-guided scientific interpretation",
    "Transparent workflow from draft to publication",
    "Clear visual storytelling for complex topics",
    "Cross-disciplinary science coverage",
    "Timely delivery with quality reviews",
  ];

  const impact = [
    { metric: "220+", label: "Research stories published" },
    { metric: "95+", label: "Technical explainers produced" },
    { metric: "80+", label: "Contributors and reviewers" },
    { metric: "40+", label: "Global institutions represented" },
    { metric: "1.2M+", label: "Annual reader impressions" },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Scope",
      description:
        "We map audience intent, topic complexity, and editorial objectives before drafting.",
    },
    {
      step: "02",
      title: "Research Structuring",
      description:
        "Sources, narrative arc, and evidence framework are assembled into a publication-ready outline.",
    },
    {
      step: "03",
      title: "Expert Review & Refinement",
      description:
        "Content quality and scientific fidelity are strengthened through iterative specialist review.",
    },
    {
      step: "04",
      title: "Publish & Disseminate",
      description:
        "Final content is distributed with SEO optimization and structured metadata for discoverability.",
    },
  ];

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ScientistGraph",
    url: "https://scientistgraph.com",
    description: "Visualizing Science, Simplifying Knowledge",
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />

      <section className="relative overflow-hidden rounded-3xl border border-(--sg-border) bg-[linear-gradient(150deg,var(--sg-surface),color-mix(in_oklab,var(--sg-surface)_80%,var(--sg-tint)))] px-6 py-12 md:px-10 md:py-14">
        <AnimatedReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-(--sg-accent)">
            ScientistGraph
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl font-bold leading-tight md:text-6xl">
            Visualizing Science,
            <br />
            Simplifying Knowledge
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-(--sg-muted) md:text-lg">
            A modern editorial platform translating complex science into clear, visual,
            and research-grounded stories for the next generation of curious minds.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/articles"
              className="rounded-full bg-(--sg-accent) px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
            >
              Explore Articles
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-(--sg-border) px-5 py-2.5 text-sm font-semibold transition hover:border-(--sg-accent)"
            >
              Our Mission
            </Link>
          </div>
        </AnimatedReveal>
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-3">
        {[
          "Trusted by researchers, educators, and science communicators",
          "Original writing and visual-first scientific storytelling",
          "Built for clarity, rigor, and global scientific literacy",
        ].map((item, index) => (
          <AnimatedReveal
            key={item}
            delay={index * 0.06}
            className="rounded-2xl border border-(--sg-border) bg-(--sg-surface) px-5 py-4 text-sm text-(--sg-muted)"
          >
            {item}
          </AnimatedReveal>
        ))}
      </section>

      <section className="mt-14 grid gap-8 rounded-3xl border border-(--sg-border) bg-(--sg-surface) p-6 md:grid-cols-[1.2fr_1fr] md:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
            Who We Are
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold leading-tight">
            A modern platform for high-integrity scientific communication
          </h2>
          <p className="mt-4 text-(--sg-muted)">
            ScientistGraph bridges rigorous research and public understanding through
            editorially curated stories, publication guidance insights, and visual narratives
            designed for real-world impact.
          </p>
        </div>
        <div className="rounded-2xl border border-(--sg-border) bg-(--sg-bg) p-5 text-sm text-(--sg-muted)">
          <p>
            We focus on clear interpretation, methodological transparency, and responsible
            science reporting so readers can trust both the narrative and the evidence.
          </p>
        </div>
      </section>

      <section className="mt-14">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
          Our Services
        </p>
        <h2 className="mt-2 font-serif text-3xl font-bold">Research & Publication Support</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedReveal
              key={service.title}
              delay={index * 0.06}
              className="rounded-2xl border border-(--sg-border) bg-(--sg-surface) p-5"
            >
              <h3 className="font-serif text-xl font-bold leading-tight">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-(--sg-muted)">{service.description}</p>
            </AnimatedReveal>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-2xl border border-(--sg-border) bg-(--sg-surface) p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
          Key Verticals
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {verticals.map((vertical) => (
            <div
              key={vertical}
              className="rounded-xl border border-(--sg-border) bg-(--sg-bg) px-4 py-3 text-sm font-medium"
            >
              {vertical}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
          Why Choose Us
        </p>
        <h2 className="mt-2 font-serif text-3xl font-bold">Precision, Ethics, and Clarity</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {valueProps.map((item, index) => (
            <AnimatedReveal
              key={item}
              delay={index * 0.05}
              className="rounded-2xl border border-(--sg-border) bg-(--sg-surface) p-5 text-sm text-(--sg-muted)"
            >
              {item}
            </AnimatedReveal>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-2xl border border-(--sg-border) bg-[linear-gradient(155deg,var(--sg-surface),color-mix(in_oklab,var(--sg-tint)_48%,var(--sg-surface)))] p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
          Our Impact
        </p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {impact.map((item) => (
            <div key={item.label} className="rounded-xl border border-(--sg-border) bg-(--sg-surface) p-4">
              <p className="font-serif text-3xl font-bold">{item.metric}</p>
              <p className="mt-1 text-sm text-(--sg-muted)">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-2xl border border-(--sg-border) bg-(--sg-surface) p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
          Collaboration Network
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "University Labs",
            "Independent Research Groups",
            "Health & Life Sciences Teams",
            "Data Science Communities",
            "Innovation Cells",
            "Publication Partners",
          ].map((partner) => (
            <span
              key={partner}
              className="rounded-full border border-(--sg-border) bg-(--sg-bg) px-3 py-1.5 text-xs font-medium text-(--sg-muted)"
            >
              {partner}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
          Our Process
        </p>
        <h2 className="mt-2 font-serif text-3xl font-bold">
          A Structured Path from Concept to Publication
        </h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {process.map((item, index) => (
            <AnimatedReveal
              key={item.step}
              delay={index * 0.08}
              className="rounded-2xl border border-(--sg-border) bg-(--sg-surface) p-5"
            >
              <p className="text-xs font-semibold tracking-[0.14em] text-(--sg-accent)">
                {item.step}
              </p>
              <h3 className="mt-2 font-serif text-2xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-(--sg-muted)">{item.description}</p>
            </AnimatedReveal>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
              Featured
            </p>
            <h2 className="mt-2 font-serif text-3xl font-bold">
              This Week in Science
            </h2>
          </div>
          <Link href="/articles" className="text-sm font-medium text-(--sg-accent)">
            View all stories
          </Link>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredArticles.map((article, index) => (
            <AnimatedReveal key={article.slug} delay={index * 0.08}>
              <ArticleCard article={article} />
            </AnimatedReveal>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-2xl border border-(--sg-border) bg-(--sg-surface) p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
          Browse by category
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Link
              key={category}
              href="/articles"
              className="rounded-full border border-(--sg-border) px-3.5 py-1.5 text-sm transition hover:border-(--sg-accent) hover:text-(--sg-accent)"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-(--sg-border) bg-(--sg-surface) px-6 py-10 text-center md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
          Ready to Publish Better Science Stories?
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold md:text-4xl">
          Join ScientistGraph and elevate your research communication
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-(--sg-muted)">
          Build visibility, credibility, and impact with editorially strong and
          scientifically grounded content.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-(--sg-accent) px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
          >
            Book a Consultation
          </Link>
          <Link
            href="/articles"
            className="rounded-full border border-(--sg-border) px-5 py-2.5 text-sm font-semibold transition hover:border-(--sg-accent)"
          >
            Explore Resources
          </Link>
        </div>
      </section>
    </main>
  );
}
