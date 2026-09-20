"use client";

import { motion, useReducedMotion } from "framer-motion";
import { staggerContainer as container, staggerItem as item } from "@/components/motion/FadeIn";
import { BinaryField } from "@/components/motion/BinaryField";
import { useMounted } from "@/hooks/useMounted";
import { hero, site } from "@/lib/content";
import { asset } from "@/lib/paths";

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

        <div className="mt-8 grid min-w-0 items-stretch gap-6 sm:mt-12 lg:mt-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.15fr)_minmax(0,0.9fr)] lg:gap-6">
          <motion.div
            variants={animate ? item : undefined}
            className="order-2 flex max-w-sm flex-col justify-center lg:order-1"
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

          <motion.div variants={animate ? item : undefined} className="order-1 lg:order-2">
            <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl lg:max-w-none">
              <img
                src={asset("/nasiru.jpg")}
                alt="Nasiru Lawal Kwargana"
                width={576}
                height={1024}
                fetchPriority="high"
                decoding="async"
                className="aspect-[5/6] max-h-[min(52vh,420px)] w-full object-cover object-[center_8%] lg:max-h-none"
              />
            </div>
          </motion.div>

          <motion.ul variants={animate ? item : undefined} className="order-3 flex h-full flex-col gap-3">
            {hero.skills.map((skill) => (
              <li
                key={skill}
                className="flex flex-1 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-center text-sm text-ink/90 backdrop-blur-sm sm:py-6"
              >
                {skill}
              </li>
            ))}
          </motion.ul>
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
