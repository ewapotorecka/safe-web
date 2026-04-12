import { COPY } from "./copy";
import { APP_STORE_URL, GOOGLE_PLAY_URL } from "./consts";

export const structuredData = (lang: string) => {
    const t = COPY[lang as keyof typeof COPY];

 return ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MobileApplication",
      name: "Safe",
      applicationCategory: "UtilitiesApplication",
      applicationSubCategory: "LifestyleApplication",
      operatingSystem: "iOS, Android",
      inLanguage: ["en", "uk"],
      availableLanguage: ["English", "Ukrainian"],
      description:
        lang === "en"
          ? "Safe is a safety check-in app for trusted contacts with one-tap statuses, privacy-first location sharing, notifications, and friend pinging."
          : "Safe — це додаток для перевірки безпеки для близьких контактів з оновленням статусу в один дотик, приватним поширенням локації, сповіщеннями та функцією Ping a friend.",
      downloadUrl: [APP_STORE_URL, GOOGLE_PLAY_URL],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD"
      },
      areaServed: {
        "@type": "Country",
        name: "Ukraine"
      }
    },
    {
      "@type": "FAQPage",
      mainEntity: t.faq.items.map(item => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a
        }
      }))
    }
  ]
})}