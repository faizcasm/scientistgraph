import type { Metadata } from "next";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About | ScientistGraph",
  description: "Learn about ScientistGraph and our mission to make science clear and visual.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 py-10 md:px-8">
      <AnimatedReveal>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
          About ScientistGraph
        </p>
        <h1 className="mt-2 font-serif text-4xl font-bold leading-tight md:text-5xl">
          Visualizing Science, Simplifying Knowledge
        </h1>
      </AnimatedReveal>

      <AnimatedReveal delay={0.08} className="mt-6 space-y-4 text-(--sg-muted)">
        <p>
          ScientistGraph is a modern editorial platform focused on translating scientific
          discoveries into clear, high-signal stories. We combine research context,
          narrative structure, and visual thinking to make technical ideas easier to
          understand.
        </p>
        <p>
          Our mission is to help readers build scientific literacy without oversimplifying
          complexity. We cover cross-disciplinary topics from climate and biology to
          AI-driven discovery and space exploration.
        </p>
      </AnimatedReveal>

      <section className="mt-10 grid gap-5 md:grid-cols-3">
        {["Evidence-first reporting", "Visual editorial design", "Cross-disciplinary perspective"].map(
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
