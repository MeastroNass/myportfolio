import { FadeIn } from "@/components/motion/FadeIn";
import { briefMail, pricing, site } from "@/lib/content";

export function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <FadeIn>
        <p className="text-[11px] uppercase tracking-[0.22em] text-accent">Engagements</p>
        <h2 className="mt-3 font-serif text-4xl md:text-5xl">Two ways to work together.</h2>
      </FadeIn>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {pricing.map((plan, i) => {
          const emailBrief = plan.cta === "Email a brief";
          return (
            <FadeIn key={plan.name} delay={i * 0.08}>
              <article
                className={`flex h-full flex-col rounded-[1.5rem] border p-8 ${
                  "featured" in plan && plan.featured
                    ? "border-ink bg-ink text-bg"
                    : "border-line bg-bg-elevated"
                }`}
              >
                <p className={`text-sm ${"featured" in plan && plan.featured ? "text-bg/70" : "text-muted"}`}>
                  {plan.period}
                </p>
                <h3 className="mt-2 font-serif text-3xl">{plan.name}</h3>
                <p className="mt-1 font-serif text-2xl text-accent">{plan.price}</p>
                <p className={`mt-3 ${"featured" in plan && plan.featured ? "text-bg/80" : "text-muted"}`}>
                  {plan.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3 text-sm">
                  {plan.features.map((feature) => (
                    <li key={feature}>— {feature}</li>
                  ))}
                </ul>
                <a
                  href={emailBrief ? briefMail : site.whatsapp}
                  target={emailBrief ? undefined : "_blank"}
                  rel={emailBrief ? undefined : "noreferrer"}
                  className={`mt-8 inline-flex justify-center rounded-full px-5 py-3 text-sm ${
                    "featured" in plan && plan.featured ? "bg-bg text-ink" : "bg-ink text-bg"
                  }`}
                >
                  {plan.cta}
                </a>
              </article>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
