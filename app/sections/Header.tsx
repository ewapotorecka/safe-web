import LogoIcon from "../../public/icons/logo.svg";
import { Dispatch, SetStateAction } from "react";
import { LangKey } from "../../src/types";
import { HomeCopy } from "./types";

type HeaderProps = {
  t: HomeCopy;
  lang: LangKey;
  setLang: Dispatch<SetStateAction<LangKey>>;
};

export function Header({ t, lang, setLang }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <LogoIcon />
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a href="#features" className="transition hover:text-white">
            {t.nav.features}
          </a>
          <a href="#how" className="transition hover:text-white">
            {t.nav.how}
          </a>
          <a href="#install" className="transition hover:text-white">
            {t.nav.install}
          </a>
          <a href="#privacy" className="transition hover:text-white">
            {t.nav.privacy}
          </a>
          <a href="#faq" className="transition hover:text-white">
            {t.nav.faq}
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <button
            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
              lang === "en"
                ? "bg-white/10 text-white"
                : "text-white/60 hover:text-white"
            }`}
            onClick={() => setLang("en")}
          >
            EN
          </button>
          <button
            className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
              lang === "ua"
                ? "bg-white/10 text-white"
                : "text-white/60 hover:text-white"
            }`}
            onClick={() => setLang("ua")}
          >
            UA
          </button>
        </div>
      </div>
    </header>
  );
}
