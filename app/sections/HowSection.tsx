import { HomeCopy } from "./types";

type HowSectionProps = {
  t: HomeCopy;
};

export function HowSection({ t }: HowSectionProps) {
  return (
    <section id="how" className="mx-auto max-w-6xl px-6 pb-24" aria-labelledby="how-title">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div data-reveal>
          <h2 id="how-title" className="text-3xl font-display font-semibold md:text-4xl">
            {t.how.title}
          </h2>
          <p className="mt-4 text-white/70">{t.how.subtitle}</p>
        </div>
        <div className="space-y-4">
          {t.how.steps.map((step, index) => (
            <div
              key={step.title}
              className="glass card-lift rounded-3xl p-5"
              data-reveal
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mint/20 text-sm font-semibold text-mint">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{step.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
