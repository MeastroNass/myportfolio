"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";
import { faqs } from "@/lib/content";

export function Faq() {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
      <FadeIn>
        <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight">FAQ</h2>
        <p className="mt-3 text-muted">Clear answers before we start a build.</p>
      </FadeIn>

      <ul className="mt-10 divide-y divide-line border-y border-line">
        {faqs.map((item, i) => {
          const isOpen = open === i;
          return (
            <li key={item.q}>
              <button
                type="button"
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className="font-display text-lg font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <span className="flex-1 text-lg md:text-xl">{item.q}</span>
                <span aria-hidden className="text-muted">
                  {isOpen ? "–" : "+"}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={reduce ? false : { opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={reduce ? undefined : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.28 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-muted">{item.a}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
