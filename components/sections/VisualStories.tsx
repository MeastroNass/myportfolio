"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";
import { useMounted } from "@/hooks/useMounted";
import { stories } from "@/lib/content";
import { asset } from "@/lib/paths";

export function VisualStories() {
  const reduce = useReducedMotion();
  const mounted = useMounted();
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const [drag, setDrag] = useState({ left: 0, right: 0 });

  useEffect(() => {
    const measure = () => {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!viewport || !track) return;
      const overflow = Math.max(0, track.scrollWidth - viewport.clientWidth);
      setDrag({ left: -overflow, right: 0 });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const canDrag = mounted && !reduce;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <p className="text-[11px] uppercase tracking-[0.22em] text-accent">Visual stories</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight md:text-5xl">Scenes from the work.</h2>
        </FadeIn>
      </div>

      <div ref={viewportRef} className="mt-10 overflow-hidden">
        <motion.ul
          ref={trackRef}
          drag={canDrag ? "x" : false}
          dragConstraints={drag}
          dragElastic={0.08}
          className="flex w-max cursor-grab gap-4 px-5 active:cursor-grabbing md:gap-6 md:px-8"
        >
          {stories.map((story) => (
            <li key={story.alt} className="w-[72vw] shrink-0 sm:w-[420px]">
              <div className="overflow-hidden rounded-[1.25rem] bg-pill">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(story.image)} alt={story.alt} className="aspect-[4/5] w-full object-cover" />
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
