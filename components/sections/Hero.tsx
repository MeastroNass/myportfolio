"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Marquee } from "@/components/motion/Marquee";
import { staggerContainer as container, staggerItem as item } from "@/components/motion/FadeIn";
import { useMounted } from "@/hooks/useMounted";
import { hero, site } from "@/lib/content";
import { asset } from "@/lib/paths";

export function Hero() {
  const reduce = useReducedMotion();
  const mounted = useMounted();
  const animate = mounted && !reduce;

  return (
    <section id="top" className="relative overflow-hidden pb-16 pt-24 md:pb-24 md:pt-28">
      <Marquee duration={22} className="border-y border-line py-2 text-[11px] uppercase tracking-[0.28em] text-accent">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="flex items-center gap-10">
            <span>{hero.ticker}</span>
            <span aria-hidden>•</span>
          </span>
        ))}
      </Marquee>

      <motion.div
        className="mx-auto mt-12 grid max-w-6xl gap-12 px-5 md:mt-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-8"
        variants={animate ? container : undefined}
        initial={animate ? "hidden" : undefined}
        animate={animate ? "show" : undefined}
      >
        <div>
          <motion.p
            variants={animate ? item : undefined}
            className="mb-5 text-xs uppercase tracking-[0.22em] text-accent"
          >
            {hero.ticker}
          </motion.p>
          <motion.h1
            variants={animate ? item : undefined}
            className="font-serif text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl"
          >
            {hero.headlineLead}
            <br />
            {hero.headlineRest}{" "}
            <em className="text-accent">{hero.headlineAccent}</em>
          </motion.h1>
          <motion.p
            variants={animate ? item : undefined}
            className="mt-6 max-w-md text-base leading-relaxed text-muted"
          >
            {hero.subhead}
          </motion.p>
          <motion.div variants={animate ? item : undefined} className="mt-8 flex flex-wrap gap-3">
            <a
              href={hero.primaryCta.href}
              className="rounded-full bg-ink px-5 py-3 text-sm text-bg"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ink/20 px-5 py-3 text-sm"
            >
              {hero.secondaryCta.label}
            </a>
          </motion.div>
        </div>

        <motion.div variants={animate ? item : undefined} className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-pill">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/nasiru.jpg")}
              alt="Nasiru Lawal Kwargana"
              className="h-full w-full object-cover object-[center_18%]"
            />
          </div>
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-line bg-bg-elevated/95 p-5 shadow-sm backdrop-blur-sm md:left-auto md:w-64">
            <p className="text-[11px] uppercase tracking-[0.2em] text-accent">Available</p>
            <p className="mt-2 font-serif text-xl">Open for new projects</p>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              <li>Working worldwide</li>
              <li>Based in Abuja</li>
              <li>
                <a href={site.whatsapp} target="_blank" rel="noreferrer" className="text-ink">
                  WhatsApp {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="text-ink">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
