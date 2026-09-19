"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { navLinks, site } from "@/lib/content";
import { asset } from "@/lib/paths";

function GridIcon() {
  return (
    <span className="grid grid-cols-2 gap-[3px]" aria-hidden>
      <span className="h-1.5 w-1.5 rounded-[1px] bg-ink" />
      <span className="h-1.5 w-1.5 rounded-[1px] bg-ink" />
      <span className="h-1.5 w-1.5 rounded-[1px] bg-ink" />
      <span className="h-1.5 w-1.5 rounded-[1px] bg-ink" />
    </span>
  );
}

function AbujaClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "Africa/Lagos",
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        }).format(new Date()),
      );
    };
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="mx-auto mt-8 flex max-w-[200px] items-center gap-3 rounded-xl bg-black/50 px-3 py-2 text-left">
      <img
        src={asset("/nasiru.jpg")}
        alt=""
        className="h-10 w-10 rounded-lg object-cover object-[center_15%]"
      />
      <div className="min-w-0">
        <p className="truncate text-xs text-muted">Based in Abuja</p>
        <p className="text-sm tabular-nums">{time || "—"}</p>
      </div>
    </div>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointer = (event: PointerEvent) => {
      if (!panelRef.current?.contains(event.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <div
        ref={panelRef}
        className="pointer-events-auto w-full max-w-[220px] overflow-hidden rounded-2xl bg-[#111318] shadow-lg shadow-black/50"
      >
        <div className="flex items-center justify-between px-4 py-3">
          <a href="#top" className="text-sm font-medium" onClick={() => setOpen(false)}>
            Nasiru
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-8 w-8 place-items-center rounded-md"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <GridIcon />
          </button>
        </div>

        <AnimatePresence initial={false}>
          {open ? (
            <motion.nav
              id="site-menu"
              initial={reduce ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduce ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="overflow-hidden px-5 pb-6 text-center"
              aria-label="Primary"
            >
              <ul className="space-y-4 pt-2 text-sm font-semibold uppercase tracking-[0.22em]">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} onClick={() => setOpen(false)}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="mt-6 inline-flex rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-void"
              >
                Let’s Talk
              </a>
              <AbujaClock />
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}
