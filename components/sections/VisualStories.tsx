import { FadeIn } from "@/components/motion/FadeIn";
import { stories } from "@/lib/content";
import { asset } from "@/lib/paths";

export function VisualStories() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <p className="text-[11px] uppercase tracking-[0.22em] text-accent">Visual stories</p>
          <h2 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight md:text-5xl">
            Scenes from the work.
          </h2>
        </FadeIn>
      </div>

      <div className="mt-10 overflow-x-auto">
        <ul className="flex w-max gap-4 px-5 md:gap-6 md:px-8">
          {stories.map((story) => (
            <li key={story.alt} className="w-[72vw] shrink-0 sm:w-[420px]">
              <div className="overflow-hidden rounded-[1.25rem] bg-pill">
                <img
                  src={asset(story.image)}
                  alt={story.alt}
                  width={840}
                  height={1050}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
