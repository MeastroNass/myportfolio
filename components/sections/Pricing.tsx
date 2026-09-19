import { FadeIn } from "@/components/motion/FadeIn";
import { briefMail, pricing, site } from "@/lib/content";

export function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
      <FadeIn>
        <h2 className="font-display text-4xl font-extrabold uppercase tracking-tight md:text-5xl">Flexible plans</h2>
        <p className="mt-3 max-w-xl text-muted">End-to-end engineering, from architecture to shipped product.</p>
      </FadeIn>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {pricing.map((plan, i) => {
          const emailBrief = plan.cta === "Email a brief";
          const featured = "featured" in plan && plan.featured;
          return (
            <FadeIn key={plan.name} delay={i * 0.08}>
              <article
                className={`flex h-full flex-col rounded-3xl p-8 ${
                  featured ? "bg-accent text-void" : "border border-line bg-bg-elevated"
                }`}
              >
                <p className={`text-sm ${featured ? "opacity-70" : "text-muted"}`}>{plan.period}</p>
                <h3 className="mt-2 text-2xl font-semibold">{plan.name}</h3>
                <p className="mt-1 font-display text-4xl font-extrabold">{plan.price}</p>
                <p className={`mt-3 ${featured ? "opacity-80" : "text-muted"}`}>{plan.description}</p>
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
                    featured ? "bg-void text-ink" : "bg-accent text-void"
                  }`}
                >
                  Get started
                </a>
              </article>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
