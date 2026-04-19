"use client";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const activeTheme = resolvedTheme ?? "light";
  const nextTheme = activeTheme === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(nextTheme ?? "light")}
      aria-label="Toggle theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-(--sg-border) bg-(--sg-surface) text-sm font-semibold transition hover:border-(--sg-accent)"
    >
      {activeTheme === "dark" ? "L" : "D"}
    </button>
  );
}
