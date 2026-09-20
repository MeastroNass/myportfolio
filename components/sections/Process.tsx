"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { processSteps } from "@/lib/content";
import { asset } from "@/lib/paths";

const STEPS = processSteps.length;
const FADE = 0.07;

function useImageOpacity(progress: MotionValue<number>, index: number) {
  const start = index / STEPS;
  const end = (index + 1) / STEPS;
  if (index === 0) {
    return useTransform(progress, [0, end - FADE, end + FADE], [1, 1, 0]);
  }
  if (index === STEPS - 1) {
    return useTransform(progress, [start - FADE, start + FADE, 1], [0, 1, 1]);
  }
  return useTransform(progress, [start - FADE, start + FADE, end - FADE, end + FADE], [0, 1, 1, 0]);
}

export function Process() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section id="process" ref={ref} className="relative z-0 h-[240vh] bg-bg md:h-[280vh]">
      <div className="sticky top-0 flex min-h-dvh items-center overflow-hidden bg-bg pt-20 pb-8">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 md:grid-cols-2 md:items-center md:gap-10 md:px-8">
          <div>
            <p className="mb-4 font-display text-sm font-bold uppercase tracking-[0.2em] text-accent">Process</p>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-bg-elevated md:aspect-[4/5]">
              {processSteps.map((step, i) => (
                <ProcessImage
                  key={step.title}
                  src={asset(step.image)}
                  alt={step.alt}
                  index={i}
                  progress={scrollYProgress}
                  reduce={!!reduce}
                />
              ))}
            </div>
          </div>

          <ol className="relative min-h-[12rem] md:min-h-0 md:space-y-10">
            {processSteps.map((step, i) => (
              <ProcessCopy
                key={step.title}
                index={i}
                title={step.title}
                body={step.body}
                progress={scrollYProgress}
                reduce={!!reduce}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ProcessImage({
  src,
  alt,
  index,
  progress,
  reduce,
}: {
  src: string;
  alt: string;
  index: number;
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  const opacity = useImageOpacity(progress, index);

  return (
    <motion.div
      className="absolute inset-0"
      style={{
        opacity: reduce ? (index === 0 ? 1 : 0) : opacity,
        zIndex: index + 1,
      }}
    >
      <img
        src={src}
        alt={alt}
        width={1200}
        height={900}
        loading={index === 0 ? "eager" : "lazy"}
        decoding="async"
        className="pointer-events-none h-full w-full object-cover"
      />
    </motion.div>
  );
}

function ProcessCopy({
  index,
  title,
  body,
  progress,
  reduce,
}: {
  index: number;
  title: string;
  body: string;
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  const start = index / STEPS;
  const end = (index + 1) / STEPS;
  const stacked = useTransform(progress, [start - FADE, start + FADE, end - FADE, end + FADE], [
    index === 0 ? 1 : 0,
    1,
    1,
    index === STEPS - 1 ? 1 : 0,
  ]);
  const listed = useTransform(progress, [start, start + 0.08, end - 0.04, end], [0.28, 1, 1, 0.28]);

  return (
    <>
      <motion.li
        className="absolute inset-x-0 top-0 md:hidden"
        style={{ opacity: reduce ? (index === 0 ? 1 : 0) : stacked }}
      >
        <p className="text-xs uppercase tracking-[0.2em] text-accent">{String(index + 1).padStart(2, "0")}</p>
        <h3 className="font-serif text-3xl">{title}</h3>
        <p className="mt-2 text-muted">{body}</p>
      </motion.li>
      <motion.li className="hidden md:block" style={{ opacity: reduce ? 1 : listed }}>
        <p className="text-xs uppercase tracking-[0.2em] text-accent">{String(index + 1).padStart(2, "0")}</p>
        <h3 className="font-serif text-3xl md:text-4xl">{title}</h3>
        <p className="mt-2 max-w-md text-muted">{body}</p>
      </motion.li>
    </>
  );
}
