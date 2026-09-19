"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { processSteps } from "@/lib/content";
import { asset } from "@/lib/paths";

export function Process() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section id="process" ref={ref} className="relative h-[280vh] md:h-[320vh]">
      <div className="sticky top-0 flex min-h-dvh items-center overflow-hidden pt-20 pb-8">
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

          <ol className="relative min-h-[11.5rem] md:min-h-0 md:space-y-10">
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
  const start = index / 4;
  const end = (index + 1) / 4;
  const opacity = useTransform(progress, [start, start + 0.08, end - 0.08, end], [
    index === 0 ? 1 : 0,
    1,
    1,
    index === 3 ? 1 : 0,
  ]);

  return (
    <motion.div className="absolute inset-0" style={{ opacity: reduce ? (index === 0 ? 1 : 0) : opacity }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="h-full w-full object-cover" />
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
  const start = index / 4;
  const end = (index + 1) / 4;
  const stacked = useTransform(progress, [start, start + 0.06, end - 0.06, end], [
    index === 0 ? 1 : 0,
    1,
    1,
    index === 3 ? 1 : 0,
  ]);
  const listed = useTransform(progress, [start, start + 0.1, end - 0.05, end], [0.28, 1, 1, 0.28]);

  return (
    <>
      <motion.li
        className="absolute inset-x-0 top-0 md:hidden"
        style={{ opacity: reduce ? (index === 0 ? 1 : 0) : stacked }}
        aria-hidden={false}
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
