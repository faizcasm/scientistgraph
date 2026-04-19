import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-(--sg-border) bg-(--sg-surface)/70">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 md:grid-cols-4 md:px-8">
        <div>
          <h3 className="font-serif text-lg font-bold">
            Scholarixa
          </h3>
          <p className="mt-2 text-sm text-(--sg-muted)">
            Scholarixa by Global Research Publications is an academic platform providing services in research writing, publication support, patent filing, and data analysis.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-(--sg-muted)">
            Quick Links
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link href="/" className="hover:text-(--sg-accent)">Home</Link></li>
            <li><Link href="/about" className="hover:text-(--sg-accent)">About</Link></li>
            <li><Link href="/services" className="hover:text-(--sg-accent)">Services</Link></li>
            <li><Link href="/contact" className="hover:text-(--sg-accent)">Submit Work</Link></li>
            <li><Link href="/contact" className="hover:text-(--sg-accent)">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-(--sg-muted)">
            Services
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-(--sg-muted)">
            <li>Research &amp; Publication</li>
            <li>Patent &amp; IPR</li>
            <li>Data Analysis (SPSS)</li>
            <li>Webinars &amp; Training</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-(--sg-muted)">
            Contact
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-(--sg-muted)">
            <li>Email: your@email.com</li>
            <li>WhatsApp: +91XXXXXXXXXX</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-(--sg-border) px-5 py-4 text-center text-xs text-(--sg-muted)">
        © 2026 Scholarixa by Global Research Publications. All Rights Reserved.
      </div>
    </footer>
  );
}
