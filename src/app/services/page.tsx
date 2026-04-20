import type { Metadata } from "next";
import Link from "next/link";
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

      {/* CTA */}
      <section className="mt-14 rounded-3xl border border-(--sg-border) bg-[linear-gradient(150deg,var(--sg-surface),color-mix(in_oklab,var(--sg-tint)_40%,var(--sg-surface)))] px-6 py-10 text-center md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
          Get Started
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold md:text-4xl">
          Ready to Get Started?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-(--sg-muted)">
          Turn your research idea into a successful publication or innovation. Our experts are ready to help.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
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
