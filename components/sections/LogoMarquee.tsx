import { FadeIn } from "@/components/motion/FadeIn";
import { stackLogos } from "@/lib/content";
import { asset } from "@/lib/paths";

export function LogoMarquee() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
      <FadeIn className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight md:text-5xl">
          Tech stack
        </h2>
        <p className="max-w-xs text-muted md:text-right">
          Tools and technologies I use to design, build, and ship reliable software.
        </p>
      </FadeIn>
      <div className="mt-10 grid grid-cols-2 items-center gap-x-4 gap-y-8 sm:mt-16 sm:grid-cols-3 sm:gap-x-10 sm:gap-y-14">
        {stackLogos.map((logo) => (
          <div key={logo.name} className="flex min-w-0 items-center justify-center gap-2 sm:gap-3">
            <img
              src={asset(logo.src)}
              alt=""
              width={40}
              height={40}
              loading="lazy"
              decoding="async"
              className="h-7 w-7 shrink-0 object-contain brightness-0 invert sm:h-10 sm:w-10"
            />
            <span className="truncate text-sm font-medium tracking-tight sm:text-2xl">{logo.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
