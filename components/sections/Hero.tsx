"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer as container, staggerItem as item } from "@/components/motion/FadeIn";
import { BinaryField } from "@/components/motion/BinaryField";
import { useEffect, useState } from "react";
import { useMounted } from "@/hooks/useMounted";
import { hero, site } from "@/lib/content";
import { asset } from "@/lib/paths";

function TypedName({ text }: { text: string }) {
  const reduce = useReducedMotion();
  const mounted = useMounted();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!mounted) return;
    if (reduce) {
      setCount(text.length);
      return;
    }
    setCount(0);
    const id = window.setInterval(() => {
      setCount((n) => {
        if (n >= text.length) {
          window.clearInterval(id);
          return n;
        }
        return n + 1;
      });
    }, 85);
    return () => window.clearInterval(id);
  }, [mounted, reduce, text]);

  const shown = text.slice(0, count);
  const space = shown.indexOf(" ");
  const first = space === -1 ? shown : shown.slice(0, space);
  const last = space === -1 ? "" : shown.slice(space + 1);

  return (
    <p className="min-h-[1.15em] text-2xl font-semibold tracking-tight text-white sm:text-4xl">
      <span>{first}</span>
      {space !== -1 ? " " : null}
      {last ? <span className="text-accent">{last}</span> : null}
      <span className="ml-0.5 inline-block animate-caret text-accent" aria-hidden>
        |
      </span>
    </p>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const mounted = useMounted();
  const animate = mounted && !reduce;
  const [roleLead, roleRest] = hero.displayRole.split(" ");

  return (
    <section id="top" className="relative min-h-svh overflow-x-clip px-4 pb-16 pt-24 sm:px-5 md:px-8 md:pb-24 md:pt-36">
      <BinaryField />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_rgba(200,242,74,0.05),_transparent_55%)]" />

      <motion.div
        className="relative z-10 mx-auto min-w-0 max-w-6xl"
        variants={animate ? container : undefined}
        initial={animate ? "hidden" : undefined}
        animate={animate ? "show" : undefined}
      >
        <motion.h1
          variants={animate ? item : undefined}
          className="w-full text-center font-display text-[clamp(2rem,11vw,6.5rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.06em]"
        >
          <span className="block">{roleLead}</span>
          <span className="block">{roleRest}</span>
        </motion.h1>

        <div className="mt-8 grid min-w-0 gap-6 sm:mt-12 lg:mt-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.15fr)_minmax(0,0.9fr)] lg:grid-rows-[auto_auto] lg:gap-x-6 lg:gap-y-0">
          <motion.div
            variants={animate ? item : undefined}
            className="order-2 flex max-w-sm flex-col justify-center lg:order-none lg:col-start-1 lg:row-span-2 lg:self-center"
          >
            <p className="text-base leading-relaxed text-muted md:text-xl">{hero.subhead}</p>
            <a
              href={hero.primaryCta.href}
              className="mt-8 inline-flex w-fit rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-void"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="mt-4 text-sm text-muted hover:text-ink"
            >
              {hero.secondaryCta.label}
            </a>
          </motion.div>

          <motion.div
            variants={animate ? item : undefined}
            className="order-1 mx-auto w-full max-w-sm lg:order-none lg:col-start-2 lg:row-start-1 lg:max-w-none"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={asset("/nasiru.jpg")}
                alt={site.displayName}
                width={576}
                height={1024}
                fetchPriority="high"
                decoding="async"
                className="aspect-[5/6] max-h-[min(52vh,420px)] w-full object-cover object-[center_8%] lg:max-h-none"
              />
            </div>
          </motion.div>

          <motion.ul
            variants={animate ? item : undefined}
            className="order-3 flex flex-col gap-3 lg:order-none lg:col-start-3 lg:row-start-1 lg:h-full"
          >
            {hero.skills.map((skill) => (
              <li
                key={skill}
                className="flex flex-1 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-center text-sm text-ink/90 backdrop-blur-sm sm:py-6"
              >
                {skill}
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={animate ? item : undefined}
            className="order-4 mx-auto w-[92%] max-w-sm lg:order-none lg:col-start-2 lg:row-start-2 lg:w-[92%] lg:max-w-none"
          >
            <div className="relative z-10 -mt-5 border border-white/20 bg-black px-5 py-5 text-center sm:-mt-7 sm:px-8 sm:py-6">
              <TypedName text={site.displayName} />
              <p className="mt-2 text-sm text-white/55 sm:text-base">{hero.roleLine}</p>
            </div>
          </motion.div>
        </div>

        <motion.p
          variants={animate ? item : undefined}
          className="mt-12 max-w-4xl font-serif text-xl italic leading-snug text-ink/90 md:mt-24 md:text-4xl"
        >
          {hero.manifesto}
        </motion.p>
        <p className="mt-4 text-sm text-muted">{site.location}</p>
      </motion.div>
    </section>
  );
}
