import { HomeCopy } from "./types";

type FaqSectionProps = {
  t: HomeCopy;
};

export function FaqSection({ t }: FaqSectionProps) {
  return (
    <section id="faq" className="mx-auto max-w-6xl px-6 pb-24" aria-labelledby="faq-title">
      <div data-reveal>
        <h2 id="faq-title" className="text-3xl font-display font-semibold md:text-4xl">
          {t.faq.title}
        </h2>
      </div>
      <div className="mt-8 grid gap-4">
        {t.faq.items.map((item, index) => (
          <details
            key={item.q}
            className="glass card-lift rounded-3xl p-6"
            data-reveal
            style={{ transitionDelay: `${index * 60}ms` }}
          >
            <summary className="cursor-pointer list-none text-lg font-semibold">
              {item.q}
            </summary>
            <p className="mt-3 text-sm text-white/70">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
