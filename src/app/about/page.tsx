import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About | Scholarixa by Global Research Publications",
  description: "Learn about Scholarixa, our founder Abrar Ahmad Zargar, and our mission to support researchers from idea to publication.",
  path: "/about",
});

const professionalValues = [
  "Commitment to academic integrity",
  "Focus on quality and precision",
  "Ethical research practices",
  "Student-centered mentorship",
  "Innovation-driven approach",
];

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

      {/* Founder Section */}
      <section className="mt-16">
        <AnimatedReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
            Meet the Founder
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold">Abrar Ahmad Zargar</h2>
          <p className="mt-1 text-sm font-semibold text-(--sg-accent)">
            Assistant Professor | Clinical Researcher | Academic Consultant
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={0.1} className="mt-6 flex flex-col items-start gap-8 rounded-3xl border border-(--sg-border) bg-(--sg-surface) p-6 md:flex-row md:p-8">
          <div className="shrink-0">
            <div className="relative h-44 w-44 overflow-hidden rounded-full border-4 border-(--sg-accent) shadow-xl ring-4 ring-(--sg-border)">
              <Image
                src="/images/author.jpg"
                alt="Abrar Ahmad Zargar — Founder of Scholarixa"
                fill
                className="object-cover object-top"
                sizes="176px"
                priority
              />
            </div>
          </div>
          <div className="space-y-4 text-(--sg-muted)">
            <p>
              Abrar Ahmad Zargar is a dedicated researcher in the field of Pharmacy Practice with a
              strong focus on clinical pharmacology, public health, and translational research. His
              work spans multiple interdisciplinary domains, including metabolic disorders,
              cardiovascular diseases, infectious diseases, oncology, and emerging therapeutic strategies.
            </p>
            <p>
              His research portfolio is characterized by a mechanistic and clinically oriented approach,
              integrating evidence-based medicine with real-world applicability. He has contributed
              extensively to the scientific literature through numerous publications in internationally
              recognized journals, addressing key areas such as diabetes management, cardiometabolic
              risk, pharmacotherapy innovations, microbiome research, and precision medicine.
            </p>
            <p>
              A significant aspect of his research involves systematic reviews and comprehensive
              analyses, focusing on drug mechanisms, therapeutic outcomes, and clinical implications.
              His work also explores emerging areas such as AI-driven therapeutics, multi-omics
              approaches, and personalized medicine.
            </p>
            <p>
              In addition to publications, he has actively contributed to innovation and intellectual
              property development, with multiple patents and design registrations in pharmaceutical
              technologies, drug delivery systems, and AI-assisted healthcare solutions. He is also
              actively engaged as a peer reviewer and editorial contributor for several reputed
              international journals.
            </p>
            <p>
              With a strong foundation in research design, statistical analysis, and scientific
              writing, Abrar Ahmad Zargar is committed to advancing research quality and supporting
              scholars in achieving impactful academic outcomes.
            </p>
          </div>
        </AnimatedReveal>
      </section>

      {/* Vision & Leadership */}
      <section className="mt-14 rounded-2xl border border-(--sg-border) bg-[linear-gradient(155deg,var(--sg-surface),color-mix(in_oklab,var(--sg-tint)_48%,var(--sg-surface)))] p-6 md:p-8">
        <AnimatedReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
            Vision &amp; Leadership
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold">Driven by a Vision to Empower Scholars</h2>
          <p className="mt-4 max-w-3xl text-(--sg-muted)">
            Driven by a vision to simplify research and empower scholars, Abrar Ahmad Zargar founded
            Scholarixa under Global Research Publications to provide structured, ethical, and
            high-quality academic support. His goal is to bridge the gap between research ideas and
            successful publication, innovation, and real-world application.
          </p>
        </AnimatedReveal>
      </section>

      {/* Professional Values */}
      <section className="mt-14">
        <AnimatedReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
            Professional Values
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold">What We Stand For</h2>
        </AnimatedReveal>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {professionalValues.map((value, index) => (
            <AnimatedReveal
              key={value}
              delay={index * 0.06}
              className="rounded-2xl border border-(--sg-border) bg-(--sg-surface) p-5 text-sm font-medium"
            >
              ✔ {value}
            </AnimatedReveal>
          ))}
        </div>
      </section>

      {/* Connect */}
      <section className="mt-14 rounded-2xl border border-(--sg-border) bg-(--sg-surface) p-6 md:p-8">
        <AnimatedReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
            Connect
          </p>
          <h2 className="mt-2 font-serif text-2xl font-bold">Get in Touch</h2>
          <ul className="mt-4 space-y-2 text-sm text-(--sg-muted)">
            <li>
              📧{" "}
              <a
                href="mailto:globalresearchpublications809@gmail.com"
                className="hover:text-(--sg-accent)"
              >
                globalresearchpublications809@gmail.com
              </a>
            </li>
            <li>
              📞{" "}
              <a href="tel:+917889461084" className="hover:text-(--sg-accent)">
                +91-7889461084
              </a>
            </li>
            <li>
              💬{" "}
              <a
                href="https://chat.whatsapp.com/IIrMuQvMHqF5DrQMK17qrM"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-(--sg-accent)"
              >
                Join Our WhatsApp Community
              </a>
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
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
        </AnimatedReveal>
      </section>
    </main>
  );
}
