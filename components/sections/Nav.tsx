"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useScrolled } from "@/hooks/useScrolled";
import { navLinks, site } from "@/lib/content";

export function Nav() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-300 ${
        scrolled || open
          ? "border-b border-line/80 bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-2 text-sm tracking-wide">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-ink text-[11px]">
            ✳
          </span>
          <span className="font-medium">{site.shortName}</span>
        </a>

        <nav className="hidden items-center gap-8 text-sm text-muted md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-opacity hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={site.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-ink px-4 py-2 text-sm text-bg md:inline-flex"
        >
          Let’s talk
        </a>

        <button
          type="button"
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex h-5 w-6 flex-col justify-between">
            <span className="block h-px bg-ink" />
            <span className="block h-px bg-ink" />
            <span className="block h-px bg-ink" />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            className="border-t border-line bg-bg px-5 py-4 md:hidden"
            aria-label="Mobile"
          >
            <ul className="flex flex-col gap-3 text-base">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setOpen(false)}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={site.whatsapp} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
                  Let’s talk
                </a>
              </li>
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
