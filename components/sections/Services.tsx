"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";
import { services } from "@/lib/content";

export function Services() {
  const reduce = useReducedMotion();

  return (
    <section id="services" className="border-y border-line bg-bg-elevated/40">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <FadeIn>
          <p className="text-[11px] uppercase tracking-[0.22em] text-accent">Services</p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl">How I can help.</h2>
        </FadeIn>

        <ul className="mt-10 divide-y divide-line">
          {services.map((service, i) => (
            <motion.li
              key={service.index}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: reduce ? 0 : i * 0.06 }}
              className="grid gap-4 py-8 md:grid-cols-[auto_1fr_1fr] md:items-start md:gap-10"
            >
              <span className="font-serif text-accent">{service.index}</span>
              <h3 className="font-serif text-2xl md:text-3xl">{service.title}</h3>
              <div>
                <p className="text-muted">{service.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-pill px-3 py-1 text-xs tracking-wide text-ink"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
