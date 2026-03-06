import { APP_STORE_URL, GOOGLE_PLAY_URL } from "../../src/consts";
import { HomeCopy } from "./types";
import { LangKey } from "../../src/types";

type InstallSectionProps = {
  t: HomeCopy;
  lang: LangKey;
};

export function InstallSection({ t, lang }: InstallSectionProps) {
  return (
    <section id="install" className="mx-auto max-w-6xl px-6 pb-24" aria-labelledby="install-title">
      <div className="glass rounded-3xl p-8 md:p-10" data-reveal>
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <h2 id="install-title" className="text-3xl font-display font-semibold md:text-4xl">
              {t.install.title}
            </h2>
            <p className="mt-4 text-white/70">{t.install.text}</p>
            <p className="mt-3 text-sm text-white/60">{t.install.note}</p>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/55">
              {lang === "en"
                ? "Install the safety app for iPhone or Android to start sending fast status updates, invite trusted contacts, and receive notifications when someone checks in."
                : "Встановіть додаток безпеки на iPhone або Android, щоб надсилати швидкі оновлення статусу, запрошувати близькі контакти та отримувати сповіщення, коли хтось відмічається."}
            </p>
          </div>
          <div className="grid gap-4">
            <a
              href={APP_STORE_URL}
              className="gradient-border card-lift rounded-full px-1 py-1"
              aria-label={t.install.appStore}
            >
              <div className="button-secondary w-full text-center font-semibold">{t.install.appStore}</div>
            </a>
            <a
              href={GOOGLE_PLAY_URL}
              className="gradient-border card-lift rounded-full px-1 py-1"
              aria-label={t.install.googlePlay}
            >
              <div className="button-primary w-full text-center font-semibold">{t.install.googlePlay}</div>
            </a>
            <p className="text-xs text-white/50">
              {lang === "en" ? "Available now on iOS and Android." : "Доступно вже зараз на iOS та Android."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
