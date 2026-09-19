"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const GLYPHS = ["0", "1", "0", "1", "0", "1", "X", "+", "=", "~"];

function paint(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  cells: string[],
  cols: number,
  rows: number,
  size: number,
) {
  ctx.clearRect(0, 0, width, height);
  ctx.font = `500 ${Math.floor(size * 0.72)}px ui-monospace, SFMono-Regular, Menlo, monospace`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const pulse = 0.22 + ((col * 13 + row * 29) % 9) * 0.04;
      ctx.fillStyle = `rgba(186, 202, 220, ${pulse})`;
      ctx.fillText(cells[row * cols + col], (col + 0.5) * size, (row + 0.5) * size);
    }
  }
}

export function BinaryField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let cols = 0;
    let rows = 0;
    let size = 16;
    let cells: string[] = [];
    let raf = 0;
    let frame = 0;
    let running = true;

    const glyph = () => GLYPHS[(Math.random() * GLYPHS.length) | 0];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      const dpr = width < 700 ? 1 : Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      size = width < 700 ? 18 : 16;
      cols = Math.ceil(width / size);
      rows = Math.ceil(height / size);
      cells = Array.from({ length: cols * rows }, glyph);
      paint(ctx, width, height, cells, cols, rows, size);
    };

    let visible = true;

    const tick = () => {
      if (!running) return;
      if (visible && !document.hidden) {
        frame += 1;
        if (frame % 8 === 0) {
          const mutations = Math.max(16, Math.floor(cells.length * 0.01));
          for (let i = 0; i < mutations; i++) {
            cells[(Math.random() * cells.length) | 0] = glyph();
          }
          const parent = canvas.parentElement;
          if (parent) {
            paint(ctx, parent.clientWidth, parent.clientHeight, cells, cols, rows, size);
          }
        }
      }
      raf = window.requestAnimationFrame(tick);
    };

    resize();
    const observer = new ResizeObserver(resize);
    if (canvas.parentElement) observer.observe(canvas.parentElement);

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = !!entry?.isIntersecting;
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    const onVis = () => {
      running = document.visibilityState === "visible";
      if (running && !reduce) raf = window.requestAnimationFrame(tick);
      else window.cancelAnimationFrame(raf);
    };
    document.addEventListener("visibilitychange", onVis);

    if (!reduce) raf = window.requestAnimationFrame(tick);

    return () => {
      running = false;
      window.cancelAnimationFrame(raf);
      observer.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [reduce]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
    />
  );
}
