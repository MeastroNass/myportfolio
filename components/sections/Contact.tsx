"use client";

import { FormEvent, useState } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { site } from "@/lib/content";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = String(data.get("subject") || "Project enquiry");
    const body = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      "",
      String(data.get("message") || ""),
    ].join("\n");
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <FadeIn>
        <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight md:text-5xl">Contact</h2>
        <p className="mt-3 max-w-xl text-muted">
          Have a project in mind or need a technical partner? Send a message — I usually reply within a day.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-6">
          <a href={site.whatsapp} target="_blank" rel="noreferrer" className="block">
            <p className="text-sm text-muted">WhatsApp</p>
            <p className="text-lg">{site.phone}</p>
          </a>
          <a href={`mailto:${site.email}`} className="block">
            <p className="text-sm text-muted">Email</p>
            <p className="text-lg">{site.email}</p>
          </a>
          <div>
            <p className="text-sm text-muted">Location</p>
            <p className="text-lg">{site.location}</p>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <label className="block text-sm">
            Full Name
            <input
              name="name"
              required
              placeholder="Your full name..."
              className="mt-2 w-full rounded-xl border border-line bg-bg-elevated px-4 py-3 outline-none focus:border-accent"
            />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              Email Address
              <input
                name="email"
                type="email"
                required
                placeholder="Your email address..."
                className="mt-2 w-full rounded-xl border border-line bg-bg-elevated px-4 py-3 outline-none focus:border-accent"
              />
            </label>
            <label className="block text-sm">
              Phone Number
              <input
                name="phone"
                placeholder="Your phone number..."
                className="mt-2 w-full rounded-xl border border-line bg-bg-elevated px-4 py-3 outline-none focus:border-accent"
              />
            </label>
          </div>
          <label className="block text-sm">
            Subject
            <input
              name="subject"
              required
              placeholder="Your subject..."
              className="mt-2 w-full rounded-xl border border-line bg-bg-elevated px-4 py-3 outline-none focus:border-accent"
            />
          </label>
          <label className="block text-sm">
            Message
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Write your message"
              className="mt-2 w-full rounded-xl border border-line bg-bg-elevated px-4 py-3 outline-none focus:border-accent"
            />
          </label>
          <button type="submit" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-void">
            {sent ? "Opening email…" : "Submit now"}
          </button>
        </form>
      </div>
    </section>
  );
}
