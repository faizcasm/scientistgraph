import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-(--sg-border) bg-(--sg-surface)/70">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 md:grid-cols-3 md:px-8">
        <div>
          <h3 className="font-serif text-lg font-bold">
            ScientistGraph
          </h3>
          <p className="mt-2 text-sm text-(--sg-muted)">
            Visualizing Science, Simplifying Knowledge.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-(--sg-muted)">
            Navigate
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/services" className="hover:text-(--sg-accent)">
                Services
              </Link>
            </li>
            <li>
              <Link href="/articles" className="hover:text-(--sg-accent)">
                Latest Articles
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-(--sg-accent)">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-(--sg-accent)">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-(--sg-muted)">
            Editorial Note
          </h4>
          <p className="mt-3 text-sm text-(--sg-muted)">
            ScientistGraph publishes original science explainers, research context,
            and data-backed perspectives for curious readers.
          </p>
        </div>
      </div>
    </footer>
  );
}
