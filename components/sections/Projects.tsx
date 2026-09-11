"use client";

import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/motion/FadeIn";
import { mailTo, projects, site } from "@/lib/content";
import { asset } from "@/lib/paths";

type Project = (typeof projects)[number];

function tailorMail(project: Project) {
  return mailTo(
    `Brief inspired by ${project.title}`,
    [
      `Hi Nasiru,`,
      ``,
      `I’d like a build in the same vein as ${project.title}.`,
      ``,
      `What we need:`,
      `Who it’s for:`,
      `Timeline:`,
      `Budget range:`,
      ``,
      `Thanks,`,
    ].join("\n"),
  );
}

export function Projects() {
  const reduce = useReducedMotion();
  const [openId, setOpenId] = useState<string | null>(null);
  const open = projects.find((p) => p.id === openId) ?? null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenId(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <FadeIn>
        <p className="text-[11px] uppercase tracking-[0.22em] text-accent">Selected work</p>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl">Projects that shipped.</h2>
        <p className="mt-3 max-w-xl text-muted">Click a card to read what shipped — then send a brief tailored to that kind of work.</p>
      </FadeIn>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: reduce ? 0 : i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group"
          >
            <button
              type="button"
              className="w-full text-left"
              onClick={() => setOpenId(project.id)}
              aria-expanded={openId === project.id}
            >
              <div className="overflow-hidden rounded-[1.25rem] bg-pill">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(project.image)}
                  alt={project.alt}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl">{project.title}</h3>
                  <p className="mt-1 text-sm text-muted">{project.category}</p>
                </div>
                <span className="mt-1 text-sm text-ink/70">View details</span>
              </div>
            </button>
          </motion.article>
        ))}
      </div>

      <ProjectDialog project={open} onClose={() => setOpenId(null)} />
    </section>
  );
}

function ProjectDialog({ project, onClose }: { project: Project | null; onClose: () => void }) {
  const reduce = useReducedMotion();
  const titleId = useId();

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
            aria-label="Close project details"
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: 16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-[1.5rem] bg-bg p-6 shadow-xl sm:rounded-[1.5rem] sm:p-8"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset(project.image)}
              alt={project.alt}
              className="aspect-[16/9] w-full rounded-2xl object-cover"
            />
            <p className="mt-5 text-[11px] uppercase tracking-[0.22em] text-accent">{project.category}</p>
            <h3 id={titleId} className="mt-2 font-serif text-3xl md:text-4xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-muted">{project.role}</p>
            <p className="mt-4 leading-relaxed text-muted">{project.summary}</p>
            <ul className="mt-5 space-y-2 text-sm">
              {project.highlights.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tag) => (
                <span key={tag} className="rounded-full bg-pill px-3 py-1 text-xs">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-ink/20 px-5 py-3 text-sm"
                >
                  Open live site
                </a>
              ) : null}
              <a href={tailorMail(project)} className="rounded-full bg-ink px-5 py-3 text-sm text-bg">
                Tailor a brief like this
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-ink/20 px-5 py-3 text-sm"
              >
                WhatsApp
              </a>
              <button type="button" onClick={onClose} className="px-3 py-3 text-sm text-muted">
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
