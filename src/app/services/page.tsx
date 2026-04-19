import type { Metadata } from "next";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services | Scholarixa by Global Research Publications",
  description:
    "Explore Scholarixa services: research writing, publication support, patent filing, SPSS data analysis, thesis support, and academic training.",
  path: "/services",
});

const services = [
  {
    title: "Research & Publication Support",
    points: [
      "Research and review paper writing",
      "Manuscript refinement and journal submission",
      "Publication strategy and reviewer-response guidance",
    ],
  },
  {
    title: "Thesis & Dissertation Support",
    points: [
      "Proposal architecture and chapter planning",
      "Data interpretation and methodological review",
      "Defense preparation and viva support",
    ],
  },
  {
    title: "Patent & IPR Filing",
    points: [
      "National and international patent filing support",
      "Novelty screening and patentability pre-check",
      "Claim framing and technical documentation",
    ],
  },
  {
    title: "Data Analysis (SPSS)",
    points: [
      "Professional SPSS data analysis",
      "Statistical interpretation and reporting",
      "Research data visualisation",
    ],
  },
  {
    title: "Training & Academic Development",
    points: [
      "Webinars and workshops",
      "Research methodology training",
      "SPSS and data analysis courses",
      "Publication guidance sessions",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8">
      <section>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
          Services
        </p>
        <h1 className="mt-2 font-serif text-4xl font-bold leading-tight md:text-5xl">
          End-to-End Research &amp; Academic Support
        </h1>
        <p className="mt-4 max-w-3xl text-(--sg-muted)">
          Scholarixa offers comprehensive support for researchers, students, and professionals —
          from filing to patent publication, SPSS analysis, and academic training, all in one place.
        </p>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <AnimatedReveal
            key={service.title}
            delay={index * 0.05}
            className="rounded-2xl border border-(--sg-border) bg-(--sg-surface) p-5"
          >
            <h2 className="font-serif text-xl font-bold leading-tight">{service.title}</h2>
            <ul className="mt-4 space-y-2 text-sm text-(--sg-muted)">
              {service.points.map((point) => (
                <li key={point}>- {point}</li>
              ))}
            </ul>
          </AnimatedReveal>
        ))}
      </section>
    </main>
  );
}
