import Link from "next/link";
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
    "✔ Strong academic and research background",
    "✔ Personalized guidance for every client",
    "✔ Affordable and transparent pricing",
    "✔ Commitment to quality and timely delivery",
    "✔ A growing community of 1500+ researchers",
  ];

  const faqs = [
    {
      q: "What services does Scholarixa offer?",
      a: "We offer research writing, publication support, patent filing, SPSS data analysis, thesis support, and academic training.",
    },
    {
      q: "How do I submit my work?",
      a: "You can contact us through our Contact page or WhatsApp to discuss your requirements and submit your work.",
    },
    {
      q: "What types of publications do you support?",
      a: "We support journal articles, review papers, conference papers, theses, dissertations, and patents.",
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
            <Link
              href="/contact"
              className="rounded-full border border-(--sg-border) px-5 py-2.5 text-sm font-semibold transition hover:border-(--sg-accent)"
            >
              Contact Us Now
            </Link>
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
        <h2 className="mt-2 font-serif text-3xl font-bold">Precision, Ethics, and Clarity</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseUs.map((item, index) => (
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

      {/* Our Community */}
      <section className="mt-14 rounded-2xl border border-(--sg-border) bg-[linear-gradient(155deg,var(--sg-surface),color-mix(in_oklab,var(--sg-tint)_48%,var(--sg-surface)))] p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
          Our Community
        </p>
        <h2 className="mt-2 font-serif text-3xl font-bold">1500+ Researchers &amp; Growing</h2>
        <p className="mt-4 max-w-3xl text-(--sg-muted)">
          We are proud to have built a strong and active academic network through our WhatsApp community,
          connecting over 1500+ researchers, students, and professionals. This platform now extends that
          community into a structured and scalable digital ecosystem.
        </p>
      </section>

      {/* Quality & Ethics */}
      <section className="mt-14 rounded-2xl border border-(--sg-border) bg-(--sg-surface) p-6 md:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
          Commitment to Quality &amp; Ethics
        </p>
        <h2 className="mt-2 font-serif text-3xl font-bold">Academic Integrity First</h2>
        <p className="mt-4 max-w-3xl text-(--sg-muted)">
          At Scholarixa, we strictly adhere to academic integrity, ethical research practices, and
          originality standards. We aim to support—not replace—the researcher&apos;s work, ensuring that
          every project maintains authenticity and scientific credibility.
        </p>
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
          <Link
            href="/contact"
            className="rounded-full border border-(--sg-border) px-5 py-2.5 text-sm font-semibold transition hover:border-(--sg-accent)"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </main>
  );
}
