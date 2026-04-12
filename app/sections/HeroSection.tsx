import Image from "next/image";
import { Shield } from "feather-icons-react";
import { HomeCopy } from "./types";

type HeroSectionProps = {
  t: HomeCopy;
};

export function HeroSection({ t }: HeroSectionProps) {
  return (
    <section
      className="mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-24"
      aria-labelledby="hero-title"
    >
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        <div className="space-y-6" data-reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/70">
            {t.hero.badge}
          </span>
          <h1
            id="hero-title"
            className="text-4xl font-display font-semibold leading-tight text-white md:text-5xl"
          >
            {t.hero.title}
          </h1>
          <p className="text-lg text-white/70 md:text-xl">{t.hero.subtitle}</p>
          <p className="text-md text-mint/80">{t.hero.origin}</p>
          <div className="flex flex-wrap gap-4">
            <a href="#install" className="button-primary">
              {t.hero.ctaPrimary}
            </a>
            <a href="#features" className="button-secondary">
              {t.hero.ctaSecondary}
            </a>
          </div>
          <div className="flex items-center gap-3 text-white/70">
            <div className="h-10 w-10 rounded-full bg-mint/20 text-mint flex items-center justify-center">
              <Shield />
            </div>
            <p className="text-sm">{t.hero.highlight}</p>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-white/55">{t.hero.description}</p>
        </div>
        <div className="relative flex h-full animate-float-delayed" data-reveal>
          <Image
            src="/screenshot.png"
            alt="App screenshot"
            width={900}
            height={1800}
            className="h-full w-full rounded-[36px] object-contain lg:scale-[0.8] lg:origin-center"
            priority
          />
        </div>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3" data-reveal>
        <div className="glass rounded-3xl p-6">
          <h3 className="text-lg font-semibold">{t.trust.title}</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/70">
            {t.trust.items.map(item => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-mint" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="glass rounded-3xl p-6 md:col-span-2">
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
            {t.hero.pills.map(pill => (
              <div key={pill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                {pill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
