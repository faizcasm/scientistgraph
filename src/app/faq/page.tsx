import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedReveal } from "@/components/ui/animated-reveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "FAQ | Scholarixa by Global Research Publications",
  description:
    "Frequently asked questions about Scholarixa services — publication support, SPSS analysis, patent filing, timelines, and confidentiality.",
  path: "/faq",
});

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

export default function FAQPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-10 md:px-8">
      <AnimatedReveal>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
          FAQ
        </p>
        <h1 className="mt-2 font-serif text-4xl font-bold leading-tight md:text-5xl">
          Frequently Asked Questions
        </h1>
        <p className="mt-4 max-w-2xl text-(--sg-muted)">
          Find answers to the most common questions about our services, timelines, and process.
        </p>
      </AnimatedReveal>

      <section className="mt-10 space-y-4">
        {faqs.map((faq, index) => (
          <AnimatedReveal
            key={faq.q}
            delay={index * 0.07}
            className="rounded-2xl border border-(--sg-border) bg-(--sg-surface) p-5 md:p-6"
          >
            <h2 className="font-serif text-xl font-bold leading-tight">{faq.q}</h2>
            <p className="mt-3 text-sm leading-7 text-(--sg-muted)">{faq.a}</p>
          </AnimatedReveal>
        ))}
      </section>

      {/* CTA */}
      <section className="mt-14 rounded-3xl border border-(--sg-border) bg-[linear-gradient(150deg,var(--sg-surface),color-mix(in_oklab,var(--sg-tint)_40%,var(--sg-surface)))] px-6 py-10 text-center md:px-10">
        <h2 className="font-serif text-2xl font-bold">Still Have Questions?</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-(--sg-muted)">
          Reach out to us directly — we&apos;re happy to help with your specific requirements.
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
