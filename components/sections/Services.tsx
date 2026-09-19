"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";
import { services } from "@/lib/content";

export function Services() {
  const reduce = useReducedMotion();

  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <FadeIn>
        <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight md:text-5xl">What I do</h2>
        <p className="mt-3 max-w-xl text-muted">End-to-end engineering, from architecture to shipped product.</p>
      </FadeIn>

      <ul className="mt-12 divide-y divide-line">
        {services.map((service, i) => (
          <motion.li
            key={service.index}
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: reduce ? 0 : i * 0.06 }}
            className="grid gap-4 py-8 md:grid-cols-[5rem_1fr_1.1fr] md:items-start"
          >
            <span className="font-display text-2xl font-bold text-accent">{service.index}</span>
            <h3 className="text-2xl font-semibold md:text-3xl">{service.title}</h3>
            <div>
              <p className="text-muted">{service.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-pill px-3 py-1 text-xs text-accent">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
