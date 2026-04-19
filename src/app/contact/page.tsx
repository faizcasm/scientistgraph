import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact | ScientistGraph",
  description: "Reach the ScientistGraph editorial team.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="mx-auto grid w-full max-w-5xl gap-8 px-5 py-10 md:grid-cols-[1fr_1.1fr] md:px-8">
      <section>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
          Contact
        </p>
        <h1 className="mt-2 font-serif text-4xl font-bold leading-tight">
          Let&apos;s talk science communication
        </h1>
        <p className="mt-4 text-(--sg-muted)">
          Have a story idea, collaboration request, or editorial feedback? Send us a
          message and our team will reply shortly.
        </p>
      </section>

      <ContactForm />
    </main>
  );
}
