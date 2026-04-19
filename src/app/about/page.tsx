import type { Metadata } from "next";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About | Scholarixa by Global Research Publications",
  description: "Learn about Scholarixa and our mission to support researchers from idea to publication.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-10 md:px-8">
      <AnimatedReveal>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
          About Scholarixa
        </p>
        <h1 className="mt-2 font-serif text-4xl font-bold leading-tight md:text-5xl">
          From Idea to Publication — We Handle Everything
        </h1>
      </AnimatedReveal>

      <AnimatedReveal delay={0.08} className="mt-6 space-y-4 text-(--sg-muted)">
        <p>
          Scholarixa by Global Research Publications is an academic platform providing services in
          research writing, publication support, patent filing, and data analysis.
        </p>
        <p>
          We are proud to have built a strong and active academic network through our WhatsApp community,
          connecting over 1500+ researchers, students, and professionals. This platform now extends that
          community into a structured and scalable digital ecosystem.
        </p>
        <p>
          At Scholarixa, we strictly adhere to academic integrity, ethical research practices, and
          originality standards. We aim to support—not replace—the researcher&apos;s work, ensuring that
          every project maintains authenticity and scientific credibility.
        </p>
      </AnimatedReveal>

      <section className="mt-10 grid gap-5 md:grid-cols-3">
        {["Strong academic background", "1500+ community researchers", "Ethical & original research support"].map(
          (item, index) => (
            <AnimatedReveal
              key={item}
              delay={0.12 + index * 0.07}
              className="rounded-2xl border border-(--sg-border) bg-(--sg-surface) p-5"
            >
              <h2 className="font-serif text-xl font-bold">{item}</h2>
            </AnimatedReveal>
          ),
        )}
      </section>
    </main>
  );
}
