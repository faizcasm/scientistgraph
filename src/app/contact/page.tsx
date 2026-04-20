import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact | Scholarixa by Global Research Publications",
  description: "Submit your work or get in touch with Scholarixa for research writing, publication support, patent filing, and data analysis.",
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
          Submit Your Work or Get in Touch
        </h1>
        <p className="mt-4 text-(--sg-muted)">
          Share your research requirements, manuscript, or idea and our team will respond promptly with a clear plan.
        </p>

        <div className="mt-8 space-y-3 text-sm text-(--sg-muted)">
          <p>
            📧{" "}
            <a
              href="mailto:globalresearchpublications809@gmail.com"
              className="hover:text-(--sg-accent)"
            >
              globalresearchpublications809@gmail.com
            </a>
          </p>
          <p>
            📞{" "}
            <a href="tel:+917889461084" className="hover:text-(--sg-accent)">
              +91-7889461084
            </a>
          </p>
          <p>
            💬{" "}
            <a
              href="https://chat.whatsapp.com/IIrMuQvMHqF5DrQMK17qrM"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-(--sg-accent)"
            >
              Join Our WhatsApp Community
            </a>
          </p>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
