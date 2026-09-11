import { Marquee } from "@/components/motion/Marquee";
import { stackLogos } from "@/lib/content";

export function LogoMarquee() {
  return (
    <section aria-label="Tools" className="border-y border-line py-8">
      <div className="mx-auto mb-4 max-w-6xl px-5 text-[11px] uppercase tracking-[0.22em] text-muted md:px-8">
        Trusted on production stacks
      </div>
      <Marquee duration={30}>
        {stackLogos.map((logo) => (
          <span key={logo} className="font-serif text-2xl text-ink/80 md:text-3xl">
            {logo}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
