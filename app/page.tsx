"use client";

import { useEffect, useState } from "react";
import { COPY } from "../src/copy";
import { LangKey } from "../src/types";
import { structuredData } from "../src/structured-data";
import { useReveal } from "../src/hooks/useReveal";
import { Header } from "./sections/Header";
import { HeroSection } from "./sections/HeroSection";
import { OverviewSection } from "./sections/OverviewSection";
import { FeaturesSection } from "./sections/FeaturesSection";
import { HowSection } from "./sections/HowSection";
import { UkraineSection } from "./sections/UkraineSection";
import { PrivacySection } from "./sections/PrivacySection";
import { InstallSection } from "./sections/InstallSection";
import { FaqSection } from "./sections/FaqSection";
import { FooterSection } from "./sections/FooterSection";

export default function Home() {
  const [lang, setLang] = useState<LangKey>("en");

  useReveal();

  useEffect(() => {
    const stored = window.localStorage.getItem("safe-lang") as LangKey | null;
    if (stored && (stored === "en" || stored === "ua")) {
      setLang(stored);
      return;
    }
    const browser = window.navigator.language.toLowerCase();
    setLang(browser.startsWith("uk") ? "ua" : "en");
  }, []);

  useEffect(() => {
    window.localStorage.setItem("safe-lang", lang);
    document.documentElement.lang = lang === "ua" ? "uk" : "en";
  }, [lang]);

  const t = COPY[lang];

  return (
    <main className="relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Header t={t} lang={lang} setLang={setLang} />
      <HeroSection t={t} />
      <OverviewSection t={t} />
      <FeaturesSection t={t} />
      <HowSection t={t} />
      <UkraineSection t={t} />
      <PrivacySection t={t} />
      <InstallSection t={t} />
      <FaqSection t={t} />
      <FooterSection t={t} />

    </main>
  );
}
