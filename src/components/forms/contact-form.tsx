"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-(--sg-border) bg-(--sg-surface) p-6 md:p-7">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className="w-full rounded-xl border border-(--sg-border) bg-(--sg-bg) px-3 py-2.5 text-sm outline-none ring-(--sg-accent) focus:ring-2"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-(--sg-border) bg-(--sg-bg) px-3 py-2.5 text-sm outline-none ring-(--sg-accent) focus:ring-2"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-(--sg-border) bg-(--sg-bg) px-3 py-2.5 text-sm outline-none ring-(--sg-accent) focus:ring-2"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-xl bg-(--sg-accent) px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-95 disabled:opacity-60"
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </button>

      {status === "success" && (
        <p className="text-sm text-emerald-600">Thanks, we received your message.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-rose-600">Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
