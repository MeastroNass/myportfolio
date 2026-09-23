import { processSteps } from "@/lib/content";
import { asset } from "@/lib/paths";

export function Process() {
  return (
    <section id="process" className="relative z-0 bg-bg py-16 md:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 md:grid-cols-2 md:items-start md:gap-12 md:px-8">
        <div>
          <p className="mb-4 font-display text-sm font-bold uppercase tracking-[0.2em] text-accent">Process</p>
          <div className="grid grid-cols-2 gap-3">
            {processSteps.map((step) => (
              <div key={step.title} className="overflow-hidden rounded-2xl bg-bg-elevated">
                <img
                  src={asset(step.image)}
                  alt={step.alt}
                  width={640}
                  height={480}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] h-full w-full object-cover md:aspect-[4/5]"
                />
              </div>
            ))}
          </div>
        </div>

        <ol className="space-y-8 md:space-y-10 md:pt-10">
          {processSteps.map((step, i) => (
            <li key={step.title}>
              <p className="text-xs uppercase tracking-[0.2em] text-accent">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="font-serif text-3xl md:text-4xl">{step.title}</h3>
              <p className="mt-2 max-w-md text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
