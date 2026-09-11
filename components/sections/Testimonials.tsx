"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, [reduce, paused]);

  const current = testimonials[index];

  return (
    <section className="border-y border-line bg-bg-elevated/50">
      <div className="mx-auto max-w-3xl px-5 py-20 text-center md:px-8 md:py-28">
        <FadeIn>
          <p className="text-[11px] uppercase tracking-[0.22em] text-accent">Kind words</p>
        </FadeIn>
        <div
          className="mt-8 min-h-[220px]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current.name + current.role}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="font-serif text-2xl leading-snug md:text-4xl"
            >
              “{current.quote}”
              <footer className="mt-6 font-sans text-sm text-muted">
                {current.name} — {current.role}
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full ${i === index ? "bg-ink" : "bg-line"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
