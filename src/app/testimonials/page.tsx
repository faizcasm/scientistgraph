"use client";

import { useState, useEffect } from "react";
import { AnimatedReveal } from "@/components/ui/animated-reveal";

interface Testimonial {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
}

const STORAGE_KEY = "sg_testimonials";

const initialTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Dr. Priya Sharma",
    email: "p.sharma@example.com",
    message:
      "Scholarixa helped me publish my first research paper in a Scopus-indexed journal. The guidance on manuscript preparation was invaluable. Highly recommend to any researcher looking for structured support!",
    date: "2025-12-10",
  },
  {
    id: "2",
    name: "Mohammed Al-Rashid",
    email: "m.rashid@example.com",
    message:
      "The patent filing support I received from Scholarixa was exceptional. They walked me through every step of the IPR process and ensured my innovation was protected. Outstanding service!",
    date: "2026-01-18",
  },
  {
    id: "3",
    name: "Anjali Verma",
    email: "anjali.v@example.com",
    message:
      "I was struggling with SPSS data analysis for my dissertation. The Scholarixa team made it simple and easy to understand. I completed my analysis on time and received top marks. Thank you!",
    date: "2026-02-05",
  },
];

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setTestimonials(JSON.parse(stored) as Testimonial[]);
      } else {
        setTestimonials(initialTestimonials);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(initialTestimonials));
      }
    } catch {
      setTestimonials(initialTestimonials);
    }
  }, []);

  function validate() {
    const newErrors: typeof errors = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) {
      newErrors.message = "Feedback message is required.";
    } else if (form.message.trim().length < 20) {
      newErrors.message = "Message must be at least 20 characters.";
    }
    return newErrors;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newTestimonial: Testimonial = {
      id: Date.now().toString(),
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
      date: new Date().toISOString().split("T")[0],
    };

    const updated = [newTestimonial, ...testimonials];
    setTestimonials(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // localStorage unavailable — state-only fallback
    }
    setForm({ name: "", email: "", message: "" });
    setErrors({});
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  function getInitials(name: string) {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  }

  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-12 md:px-8">
      {/* Header */}
      <AnimatedReveal>
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--sg-accent)">
          Testimonials
        </p>
        <h1 className="mt-2 font-serif text-4xl font-bold leading-tight md:text-5xl">
          What Our Researchers Say
        </h1>
        <p className="mt-4 max-w-2xl text-(--sg-muted)">
          Hear from researchers and scholars who have experienced the Scholarixa difference.
          Share your own feedback to help others in their academic journey.
        </p>
      </AnimatedReveal>

      {/* Feedback Form */}
      <section className="mt-12 rounded-3xl border border-(--sg-border) bg-(--sg-surface) p-6 md:p-8">
        <AnimatedReveal>
          <h2 className="font-serif text-2xl font-bold">Share Your Feedback</h2>
          <p className="mt-1 text-sm text-(--sg-muted)">
            We&apos;d love to hear about your experience with Scholarixa.
          </p>
        </AnimatedReveal>

        {submitted && (
          <AnimatedReveal>
            <div className="mt-5 rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-medium text-green-800 dark:border-green-800 dark:bg-green-950 dark:text-green-300">
              ✓ Thank you for your feedback! Your testimonial has been added.
            </div>
          </AnimatedReveal>
        )}

        <form onSubmit={handleSubmit} noValidate className="mt-6 grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Full Name <span className="text-(--sg-accent)">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              className={`mt-1.5 w-full rounded-xl border px-4 py-2.5 text-sm bg-(--sg-bg) outline-none transition focus:ring-2 focus:ring-(--sg-accent) ${
                errors.name ? "border-red-400" : "border-(--sg-border)"
              }`}
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address <span className="text-(--sg-accent)">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={`mt-1.5 w-full rounded-xl border px-4 py-2.5 text-sm bg-(--sg-bg) outline-none transition focus:ring-2 focus:ring-(--sg-accent) ${
                errors.email ? "border-red-400" : "border-(--sg-border)"
              }`}
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>

          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium">
              Your Feedback <span className="text-(--sg-accent)">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Share your experience with Scholarixa (min. 20 characters)..."
              className={`mt-1.5 w-full resize-none rounded-xl border px-4 py-2.5 text-sm bg-(--sg-bg) outline-none transition focus:ring-2 focus:ring-(--sg-accent) ${
                errors.message ? "border-red-400" : "border-(--sg-border)"
              }`}
            />
            {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
          </div>

          <div className="md:col-span-2">
            <button
              type="submit"
              className="rounded-full bg-(--sg-accent) px-6 py-2.5 text-sm font-semibold text-white transition hover:brightness-95"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </section>

      {/* Testimonials Grid */}
      <section className="mt-12">
        <AnimatedReveal>
          <h2 className="font-serif text-2xl font-bold">
            {testimonials.length > 0
              ? `${testimonials.length} Testimonial${testimonials.length !== 1 ? "s" : ""}`
              : "No testimonials yet"}
          </h2>
        </AnimatedReveal>

        {testimonials.length === 0 && (
          <AnimatedReveal delay={0.1}>
            <p className="mt-4 text-(--sg-muted)">
              Be the first to share your feedback with our community!
            </p>
          </AnimatedReveal>
        )}

        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((t, index) => (
            <AnimatedReveal
              key={t.id}
              delay={0.05 + index * 0.05}
              className="flex flex-col justify-between rounded-3xl border border-(--sg-border) bg-(--sg-surface) p-6"
            >
              <div>
                <div className="flex text-(--sg-accent)">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon key={star} />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-(--sg-muted)">&ldquo;{t.message}&rdquo;</p>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-(--sg-accent) text-xs font-bold text-white">
                  {getInitials(t.name)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-(--sg-muted)">{formatDate(t.date)}</p>
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </section>
    </main>
  );
}
