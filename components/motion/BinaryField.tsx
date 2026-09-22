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
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let cols = 0;
    let rows = 0;
    let size = 16;
    let cells: string[] = [];
    let lastW = 0;
    let lastH = 0;
    let visible = true;
    let interval = 0;

    const glyph = () => GLYPHS[(Math.random() * GLYPHS.length) | 0];

    const layout = () => {
      const width = parent.clientWidth;
      const height = parent.clientHeight;
      if (width < 8 || height < 8) return;
      if (Math.abs(width - lastW) < 2 && Math.abs(height - lastH) < 2) return;
      lastW = width;
      lastH = height;
      const dpr = width < 700 ? 1 : Math.min(window.devicePixelRatio || 1, 1.25);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      size = width < 700 ? 20 : 18;
      cols = Math.min(72, Math.ceil(width / size));
      rows = Math.min(48, Math.ceil(height / size));
      cells = Array.from({ length: cols * rows }, glyph);
      paint(ctx, width, height, cells, cols, rows, size);
    };

    const flicker = () => {
      if (!visible || document.hidden || reduce || cells.length === 0) return;
      const mutations = Math.max(8, Math.floor(cells.length * 0.008));
      for (let i = 0; i < mutations; i++) {
        cells[(Math.random() * cells.length) | 0] = glyph();
      }
      paint(ctx, lastW, lastH, cells, cols, rows, size);
    };

    layout();
    const ro = new ResizeObserver(layout);
    ro.observe(parent);

    const io = new IntersectionObserver(([entry]) => {
      visible = !!entry?.isIntersecting;
    });
    io.observe(canvas);

    if (!reduce) interval = window.setInterval(flicker, 180);

    const onVis = () => {
      if (document.hidden) {
        window.clearInterval(interval);
        interval = 0;
      } else if (!reduce && !interval) {
        interval = window.setInterval(flicker, 180);
      }
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      window.clearInterval(interval);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [reduce]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-35 sm:opacity-70"
    />
  );
}
