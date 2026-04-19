import type { Metadata } from "next";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Services | ScientistGraph",
  description:
    "Explore ScientistGraph services for research communication, publication strategy, and science outreach.",
  path: "/services",
});

const services = [
  {
    title: "Research Development & Publication Support",
    points: [
      "Manuscript refinement and formatting strategy",
      "Journal fit analysis and submission planning",
      "Reviewer-response drafting guidance",
    ],
  },
  {
    title: "Thesis & Dissertation Consultancy",
    points: [
      "Proposal architecture and chapter planning",
      "Data interpretation and methodological review",
      "Defense deck and viva preparation support",
    ],
  },
  {
    title: "Mentorship & Methodology Clinics",
    points: [
      "Topic framing and hypothesis strengthening",
      "Literature map and gap identification",
      "Research design and validation feedback",
    ],
  },
  {
    title: "IPR & Innovation Guidance",
    points: [
      "Novelty screening and patentability pre-check",
      "Claim framing and technical drafting support",
      "Documentation roadmap for filing readiness",
    ],
  },
  {
    title: "Workshops & Scholar Programs",
    points: [
      "Publication ethics and writing workshops",
      "Webinars on modern research communication",
      "Capacity building for early-career scholars",
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
          End-to-End Scientific Communication Support
        </h1>
        <p className="mt-4 max-w-3xl text-(--sg-muted)">
          ScientistGraph offers modular and full-lifecycle support for researchers,
          institutions, and science-first organizations that need clarity, quality, and impact.
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
