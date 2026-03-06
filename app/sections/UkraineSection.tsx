import { HomeCopy } from "./types";
import { LangKey } from "../../src/types";

type UkraineSectionProps = {
  t: HomeCopy;
  lang: LangKey;
};

export function UkraineSection({ t, lang }: UkraineSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24" aria-labelledby="ukraine-title">
      <div className="glass rounded-3xl p-8 md:p-10" data-reveal>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 id="ukraine-title" className="text-3xl font-display font-semibold md:text-4xl">
              {t.ukraine.title}
            </h2>
            <p className="mt-4 max-w-2xl text-white/70">{t.ukraine.text}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-white/70">{lang === "en" ? "Language" : "Мова"}</p>
            <div className="mt-2 flex items-center gap-3 text-lg font-semibold">
              <span className="text-mint">UA</span>
              <span className="text-white/40">/</span>
              <span>EN</span>
            </div>
            <p className="mt-4 text-sm text-white/60">
              {lang === "en"
                ? "Air-raid alerts by region (soon)"
                : "Повітряні тривоги за регіонами (soon)"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
