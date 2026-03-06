import { HomeCopy } from "./types";

type OverviewSectionProps = {
  t: HomeCopy;
};

export function OverviewSection({ t }: OverviewSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16" aria-labelledby="overview-title">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="glass rounded-3xl p-6 md:p-8" data-reveal>
          <h2 id="overview-title" className="text-2xl font-display font-semibold md:text-3xl">
            {t.overview.primaryTitle}
          </h2>
          <p className="mt-4 text-white/70">{t.overview.primaryText}</p>
        </article>
        <article className="glass rounded-3xl p-6 md:p-8" data-reveal>
          <h2 className="text-2xl font-display font-semibold md:text-3xl">{t.overview.secondaryTitle}</h2>
          <p className="mt-4 text-white/70">{t.overview.secondaryText}</p>
        </article>
      </div>
    </section>
  );
}
