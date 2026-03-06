import { HomeCopy } from "./types";

type PrivacySectionProps = {
  t: HomeCopy;
};

export function PrivacySection({ t }: PrivacySectionProps) {
  return (
    <section id="privacy" className="mx-auto max-w-6xl px-6 pb-24" aria-labelledby="privacy-title">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4" data-reveal>
          <h2 id="privacy-title" className="text-3xl font-display font-semibold md:text-4xl">
            {t.privacy.title}
          </h2>
          <p className="text-white/70">{t.privacy.subtitle}</p>
        </div>
        <div className="space-y-4">
          {t.privacy.items.map((item, index) => (
            <div
              key={item.title}
              className="glass card-lift rounded-3xl p-6"
              data-reveal
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
