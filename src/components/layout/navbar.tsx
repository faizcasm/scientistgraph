"use client";

import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Submit Work" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-(--sg-border) bg-(--sg-bg)/95 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setIsMenuOpen(false)}>
          <span className="inline-block h-8 w-8 rounded-full bg-[linear-gradient(130deg,var(--sg-accent),#37c4a3)]" />
          <span className="font-serif text-xl font-bold tracking-tight">
            Scholarixa
          </span>
        </Link>

        <div className="flex items-center gap-4 md:gap-7">
          <ul className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-(--sg-muted) transition hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-(--sg-border) text-(--sg-muted) md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? "X" : "="}
          </button>

          <ThemeToggle />
        </div>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-(--sg-border) bg-(--sg-surface) px-5 py-4 md:hidden">
          <ul className="space-y-3 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-2 py-1.5 text-(--sg-muted) transition hover:bg-(--sg-tint) hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
