"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/resources", label: "Resources" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-(--sg-border) bg-(--sg-bg)/95 backdrop-blur supports-[backdrop-filter]:bg-(--sg-bg)/80">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-85"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="Scholarixa logo"
            width={36}
            height={36}
            sizes="36px"
            className="rounded-full object-contain"
            priority
          />
          <span className="font-serif text-xl font-bold tracking-tight">
            Scholarixa
          </span>
        </Link>

        <div className="flex items-center gap-3 md:gap-6">
          <ul className="hidden items-center gap-1 text-sm font-medium md:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-1.5 text-(--sg-muted) transition-colors hover:bg-(--sg-tint) hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-(--sg-border) text-(--sg-muted) transition-colors hover:border-(--sg-accent) hover:text-foreground md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          <ThemeToggle />
        </div>
      </nav>

      <div
        className={`overflow-hidden border-t border-(--sg-border) bg-(--sg-surface) transition-all duration-200 ease-in-out md:hidden ${
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="space-y-1 px-5 py-3 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex rounded-lg px-3 py-2 text-(--sg-muted) transition-colors hover:bg-(--sg-tint) hover:text-foreground"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}