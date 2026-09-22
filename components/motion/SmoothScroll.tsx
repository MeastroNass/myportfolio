"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import "lenis/dist/lenis.css";

export function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    try {
      const lenis = new Lenis({
        autoRaf: true,
        lerp: 0.075,
        smoothWheel: true,
        anchors: true,
      });

      document.documentElement.style.scrollBehavior = "auto";

      return () => {
        lenis.destroy();
        document.documentElement.style.scrollBehavior = "";
      };
    } catch {
      return undefined;
    }
  }, []);

  return null;
}
