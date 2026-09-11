"use client";

import { useReducedMotion } from "framer-motion";

type MarqueeProps = {
  children: React.ReactNode;
  duration?: number;
  className?: string;
};

export function Marquee({ children, duration = 28, className = "" }: MarqueeProps) {
  const reduce = useReducedMotion();

  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`flex w-max gap-10 ${reduce ? "" : "animate-marquee"}`}
        style={reduce ? undefined : { animationDuration: `${duration}s` }}
      >
        <div className="flex shrink-0 items-center gap-10">{children}</div>
        <div className="flex shrink-0 items-center gap-10" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
