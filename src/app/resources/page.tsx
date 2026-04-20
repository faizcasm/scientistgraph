import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Free Resources | Scholarixa by Global Research Publications",
  description:
    "Download free guides for researchers — including how to publish in Scopus-indexed journals, manuscript preparation tips, and more.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-10 md:px-8">
      <AnimatedReveal>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
          Free Resources
        </p>
        <h1 className="mt-2 font-serif text-4xl font-bold leading-tight md:text-5xl">
          Free Guides for Researchers
        </h1>
        <p className="mt-4 max-w-2xl text-(--sg-muted)">
          Access free academic resources created by our expert team to help you navigate
          the research and publication journey.
        </p>
      </AnimatedReveal>

      {/* Featured Guide */}
      <section className="mt-10">
        <AnimatedReveal
          delay={0.08}
          className="rounded-3xl border border-(--sg-border) bg-[linear-gradient(150deg,var(--sg-surface),color-mix(in_oklab,var(--sg-tint)_48%,var(--sg-surface)))] p-6 md:p-10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
            Featured Guide
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold leading-tight md:text-4xl">
            How to Publish Your Research in Scopus-Indexed Journals
          </h2>
          <p className="mt-4 max-w-2xl text-(--sg-muted)">
            Our free comprehensive guide walks you through every step of the publication process —
            from choosing the right journal to preparing a submission-ready manuscript.
          </p>
          <div className="mt-6">
            <p className="text-sm font-semibold text-(--sg-accent)">What you will learn:</p>
            <ul className="mt-3 space-y-2 text-sm text-(--sg-muted)">
              <li>— Journal selection strategies based on your research area</li>
              <li>— Manuscript preparation tips to meet international standards</li>
              <li>— Common mistakes to avoid during the submission process</li>
              <li>— How to respond to reviewer comments effectively</li>
              <li>— Understanding the peer-review and editorial workflow</li>
            </ul>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://chat.whatsapp.com/IIrMuQvMHqF5DrQMK17qrM"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-(--sg-accent) px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
            >
              Download Now
            </a>
            <a
              href="https://chat.whatsapp.com/IIrMuQvMHqF5DrQMK17qrM"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-(--sg-border) px-5 py-2.5 text-sm font-semibold transition hover:border-(--sg-accent)"
            >
              Chat with Us on WhatsApp
            </a>
          </div>
        </AnimatedReveal>
      </section>

      {/* Resource Grid */}
      <section className="mt-12">
        <h2 className="font-serif text-2xl font-bold">More Resources Coming Soon</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {[
            {
              title: "SPSS Data Analysis Guide",
              desc: "Step-by-step guide for statistical analysis and interpretation using SPSS.",
            },
            {
              title: "Patent Filing Checklist",
              desc: "A complete checklist to help you prepare your patent application documents.",
            },
            {
              title: "Research Proposal Template",
              desc: "A structured template to help you draft a compelling research proposal.",
            },
          ].map((resource, index) => (
            <AnimatedReveal
              key={resource.title}
              delay={index * 0.06}
              className="rounded-2xl border border-(--sg-border) bg-(--sg-surface) p-5"
            >
              <h3 className="font-serif text-lg font-bold leading-tight">{resource.title}</h3>
              <p className="mt-2 text-sm text-(--sg-muted)">{resource.desc}</p>
              <p className="mt-4 text-xs font-semibold text-(--sg-accent)">Coming Soon</p>
            </AnimatedReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-14 rounded-3xl border border-(--sg-border) bg-(--sg-surface) px-6 py-10 text-center md:px-10">
        <h2 className="font-serif text-2xl font-bold">Need Personalised Research Support?</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-(--sg-muted)">
          Our experts are ready to guide you through every stage of your research journey.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-(--sg-accent) px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
          >
            Submit Your Work Now
          </Link>
          <a
            href="https://chat.whatsapp.com/IIrMuQvMHqF5DrQMK17qrM"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-(--sg-border) px-5 py-2.5 text-sm font-semibold transition hover:border-(--sg-accent)"
          >
            Chat with Us on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
