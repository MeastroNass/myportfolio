"use client";

import { useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

export function useCountUp(target: number, duration = 1400) {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? target : 0);
  const started = useRef(false);

  const start = useCallback(() => {
    if (started.current) return;
    started.current = true;
    if (reduce) {
      setValue(target);
      return;
    }

    const startTime = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(target * eased));
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [duration, reduce, target]);

  useEffect(() => {
    if (reduce) setValue(target);
  }, [reduce, target]);

  return { value, start };
}
