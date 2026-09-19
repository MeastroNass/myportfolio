"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { FadeIn } from "@/components/motion/FadeIn";
import { useCountUp } from "@/hooks/useCountUp";
import { about, stats } from "@/lib/content";

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const { value: n, start } = useCountUp(value);

  useEffect(() => {
    if (inView) start();
  }, [inView, start]);

  return (
    <div ref={ref}>
      <p className="font-display text-5xl font-extrabold text-accent md:text-6xl">
        {n}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:items-start">
        <FadeIn>
          <p className="text-[11px] uppercase tracking-[0.22em] text-accent">{about.kicker}</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight md:text-5xl">{about.title}</h2>
          <p className="mt-6 max-w-xl leading-relaxed text-muted">{about.body}</p>
        </FadeIn>
        <FadeIn delay={0.12} className="grid grid-cols-3 gap-4 border-t border-line pt-8 md:border-t-0 md:pt-2">
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
