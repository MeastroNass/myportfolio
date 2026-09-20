"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  const reduce = useReducedMotion();

  return (
    <section className="relative z-10 bg-bg mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <FadeIn>
        <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight md:text-5xl">What people say</h2>
        <p className="mt-3 max-w-xl text-muted">He doesn’t just write code — he ships systems people actually use.</p>
      </FadeIn>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.article
            key={t.name}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-3xl bg-accent p-6 text-void"
          >
            <p className="font-semibold">{t.name}</p>
            <p className="text-xs opacity-70">{t.role}</p>
            <p className="mt-5 text-lg leading-snug">“{t.quote}”</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
