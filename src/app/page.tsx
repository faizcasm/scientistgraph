import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Scholarixa by Global Research Publications | From Idea to Publication",
  description:
    "Scholarixa provides research writing, publication support, patent filing, SPSS data analysis, and academic training — all in one place.",
  path: "/",
});

export default function HomePage() {
  const services = [
    {
      title: "Research & Publication Support",
      description:
        "End-to-end support for writing and publishing research or review papers in reputed journals.",
    },
    {
      title: "Thesis & Dissertation Support",
      description:
        "Structured guidance for postgraduate and doctoral research projects from proposal to final submission.",
    },
    {
      title: "Patent & IPR Filing",
      description:
        "Support for national and international patent filing, novelty screening, and innovation documentation.",
    },
    {
      title: "Data Analysis (SPSS)",
      description:
        "Professional SPSS data analysis, statistical interpretation, and research data visualisation.",
    },
    {
      title: "Training & Academic Development",
      description:
        "Webinars, workshops, research methodology training, SPSS and data analysis courses, and publication guidance sessions.",
    },
  ];

  const whyChooseUs = [
    {
      title: "Expert Academic Guidance",
      desc: "Strong research background across pharmacy, clinical sciences, and interdisciplinary domains.",
    },
    {
      title: "Trusted by 1500+ Researchers",
      desc: "A growing academic community built on trust, results, and long-term relationships.",
    },
    {
      title: "End-to-End Support",
      desc: "From idea to publication — we handle writing, analysis, formatting, submission, and patent filing.",
    },
    {
      title: "Affordable & Transparent Pricing",
      desc: "Student-friendly pricing with no hidden charges. Clear timelines and deliverables upfront.",
    },
    {
      title: "Timely Delivery",
      desc: "Dedicated support ensuring your work is completed and delivered on schedule, every time.",
    },
    {
      title: "Personalized Assistance",
      desc: "Every project receives individual attention tailored to your field, goals, and requirements.",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Submit Your Requirement",
      desc: "Share your manuscript, data, or idea through our submission form or WhatsApp.",
    },
    {
      step: "02",
      title: "Expert Consultation",
      desc: "Our team reviews your requirement and provides a clear, personalised plan.",
    },
    {
      step: "03",
      title: "Work Execution",
      desc: "We begin writing, analysis, formatting, or patent drafting based on your needs.",
    },
    {
      step: "04",
      title: "Review & Revisions",
      desc: "You receive updates and can request modifications until fully satisfied.",
    },
    {
      step: "05",
      title: "Final Delivery / Submission",
      desc: "Completed work is delivered or submitted directly for publication or patent filing.",
    },
  ];

  const faqs = [
    {
      q: "Do you guarantee publication?",
      a: "We provide complete support for writing, formatting, and submission. Final acceptance depends on the journal review process.",
    },
    {
      q: "What is the typical timeline for services?",
      a: "Timelines vary depending on the service, generally ranging from 1 to 4 weeks.",
    },
    {
      q: "Do you provide SPSS analysis with interpretation?",
      a: "Yes, we provide complete statistical analysis along with detailed interpretation.",
    },
    {
      q: "Is my data kept confidential?",
      a: "Yes, we strictly maintain confidentiality and data privacy.",
    },
    {
      q: "Do you assist with patents internationally?",
      a: "Yes, we provide support for both national and international patent filing.",
    },
  ];

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Scholarixa",
    url: "https://scholarixa.com",
    description: "From idea to publication, we handle everything.",
  };

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />

      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl border border-(--sg-border) bg-[linear-gradient(150deg,var(--sg-surface),color-mix(in_oklab,var(--sg-surface)_80%,var(--sg-tint)))] px-6 py-12 md:px-10 md:py-14">
        <AnimatedReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-(--sg-accent)">
            Scholarixa by Global Research Publications
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl font-bold leading-tight md:text-6xl">
            Scholarixa by Global Research Publications
          </h1>
          <p className="mt-3 text-base font-medium text-(--sg-accent) md:text-lg">
            Research or review paper writing and publication support.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-(--sg-muted) md:text-lg">
            Filing to patent publication, SPSS analysis, and academic training all in one place.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-(--sg-accent) px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
            >
              Submit Your Work
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

      {/* Trust Badges */}
      <section className="mt-10 grid gap-5 md:grid-cols-3">
        {[
          "Trusted by 1500+ researchers, students, and professionals",
          "From idea to publication — we handle everything",
          "Affordable, transparent, and academically ethical",
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

      {/* Who We Are */}
      <section className="mt-14 grid gap-8 rounded-3xl border border-(--sg-border) bg-(--sg-surface) p-6 md:grid-cols-[1.2fr_1fr] md:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
            Who We Are
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold leading-tight">
            Academic excellence, made accessible
          </h2>
          <p className="mt-4 text-(--sg-muted)">
            Scholarixa by Global Research Publications is an academic platform providing services in research writing,
            publication support, patent filing, and data analysis. We support every stage of a researcher&apos;s journey.
          </p>
        </div>
        <div className="rounded-2xl border border-(--sg-border) bg-(--sg-bg) p-5 text-sm text-(--sg-muted)">
          <p>
            From idea to publications we handle everything — our tagline reflects our commitment to guiding
            researchers from their very first idea through to successful publication, patent, or academic achievement.
          </p>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="mt-14">
        <AnimatedReveal>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
            Meet the Founder
          </p>
          <h2 className="mt-2 font-serif text-3xl font-bold">The Mind Behind Scholarixa</h2>
        </AnimatedReveal>
        <AnimatedReveal delay={0.1} className="mt-6 flex flex-col items-center gap-8 rounded-3xl border border-(--sg-border) bg-(--sg-surface) p-6 md:flex-row md:p-8">
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
          <div>
            <h3 className="font-serif text-2xl font-bold leading-tight">Abrar Ahmad Zargar</h3>
            <p className="mt-1 text-sm font-semibold text-(--sg-accent)">
              Assistant Professor | Clinical Researcher | Academic Consultant
            </p>
            <p className="mt-1 text-xs text-(--sg-muted)">Scholarixa by Global Research Publications</p>
            <p className="mt-4 leading-7 text-(--sg-muted)">
              Abrar Ahmad Zargar is a dedicated researcher in the field of Pharmacy Practice with a
              strong focus on clinical pharmacology, public health, and translational research. Driven
              by a vision to simplify research and empower scholars, he founded Scholarixa to provide
              structured, ethical, and high-quality academic support — bridging the gap between
              research ideas and successful publication, innovation, and real-world application.
            </p>
          </div>
        </AnimatedReveal>
      </section>

      {/* Services Section */}
      <section className="mt-14">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
          Our Services
        </p>
        <h2 className="mt-2 font-serif text-3xl font-bold">Research &amp; Publication Support</h2>
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

      {/* Why Choose Us */}
      <section className="mt-14">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
          Why Choose Us
        </p>
        <h2 className="mt-2 font-serif text-3xl font-bold">Why Choose Scholarixa</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseUs.map((item, index) => (
            <AnimatedReveal
              key={item.title}
              delay={index * 0.05}
              className="rounded-2xl border border-(--sg-border) bg-(--sg-surface) p-5"
            >
              <h3 className="font-serif text-lg font-bold leading-tight">✔ {item.title}</h3>
              <p className="mt-2 text-sm text-(--sg-muted)">{item.desc}</p>
            </AnimatedReveal>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="mt-14">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
          How It Works
        </p>
        <h2 className="mt-2 font-serif text-3xl font-bold">From Idea to Publication in 5 Steps</h2>
        <div className="mt-6 flex flex-col gap-0">
          {howItWorks.map((step, index) => (
            <AnimatedReveal
              key={step.step}
              delay={index * 0.06}
              className="relative flex gap-5 pb-8 last:pb-0"
            >
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-(--sg-accent) text-sm font-bold text-white">
                  {step.step}
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="mt-1 w-px flex-1 bg-(--sg-border)" />
                )}
              </div>
              <div className="pb-4">
                <h3 className="font-serif text-xl font-bold leading-tight">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-(--sg-muted)">{step.desc}</p>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </section>

      {/* CTA Mid-page */}
      <section className="mt-14 rounded-3xl border border-(--sg-border) bg-[linear-gradient(150deg,var(--sg-surface),color-mix(in_oklab,var(--sg-tint)_40%,var(--sg-surface)))] px-6 py-10 text-center md:px-10">
        <h2 className="font-serif text-3xl font-bold md:text-4xl">Ready to Get Started?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-(--sg-muted)">
          Turn your research idea into a successful publication or innovation.
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

      {/* Free Resources */}
      <section className="mt-14 rounded-3xl border border-(--sg-border) bg-(--sg-surface) p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
          Free Resource
        </p>
        <h2 className="mt-2 font-serif text-3xl font-bold">Free Guide for Researchers</h2>
        <p className="mt-2 text-base font-medium text-(--sg-accent)">
          How to Publish Your Research in Scopus-Indexed Journals
        </p>
        <p className="mt-4 max-w-2xl text-(--sg-muted)">
          Download our free guide and learn:
        </p>
        <ul className="mt-3 space-y-1 text-sm text-(--sg-muted)">
          <li>— Journal selection strategies</li>
          <li>— Manuscript preparation tips</li>
          <li>— Common mistakes to avoid</li>
        </ul>
        <div className="mt-6">
          <a
            href="https://chat.whatsapp.com/IIrMuQvMHqF5DrQMK17qrM"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-(--sg-accent) px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
          >
            Download Now
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="mt-14">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
          FAQs
        </p>
        <h2 className="mt-2 font-serif text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <AnimatedReveal
              key={faq.q}
              delay={index * 0.06}
              className="rounded-2xl border border-(--sg-border) bg-(--sg-surface) p-5"
            >
              <h3 className="font-serif text-lg font-bold leading-tight">{faq.q}</h3>
              <p className="mt-3 text-sm leading-6 text-(--sg-muted)">{faq.a}</p>
            </AnimatedReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-14 rounded-3xl border border-(--sg-border) bg-(--sg-surface) px-6 py-10 text-center md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
          Get Started Today
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold md:text-4xl">
          Start Your Research Journey Today
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-(--sg-muted)">
          Get expert support for your research, publication, patents, and data analysis.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-(--sg-accent) px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
          >
            Submit Your Work
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
