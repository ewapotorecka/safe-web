import { LangKey } from "../../src/types";

type OverviewSectionProps = {
  lang: LangKey;
};

export function OverviewSection({ lang }: OverviewSectionProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16" aria-labelledby="overview-title">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="glass rounded-3xl p-6 md:p-8" data-reveal>
          <h2 id="overview-title" className="text-2xl font-display font-semibold md:text-3xl">
            {lang === "en"
              ? "A safety check-in app built for real-life urgency"
              : "Додаток для перевірки безпеки, створений для реальної терміновості"}
          </h2>
          <p className="mt-4 text-white/70">
            {lang === "en"
              ? "Safe is designed for people in Ukraine who need a fast, private way to update trusted contacts. Instead of long messages, one tap can tell the people who matter most whether you are safe, in shelter, behind two walls, or in danger."
              : "Safe створений для людей в Україні, яким потрібен швидкий і приватний спосіб оновити статус для близьких. Замість довгих повідомлень один дотик дає зрозуміти, чи ви в безпеці, в укритті, за двома стінами або в небезпеці."}
          </p>
        </article>
        <article className="glass rounded-3xl p-6 md:p-8" data-reveal>
          <h2 className="text-2xl font-display font-semibold md:text-3xl">
            {lang === "en"
              ? "Clear enough for family, careful enough for privacy"
              : "Достатньо зрозумілий для родини, достатньо обережний для приватності"}
          </h2>
          <p className="mt-4 text-white/70">
            {lang === "en"
              ? "Location support is explicit, with auto location from the device and manual override when you want more control. Safe focuses on trusted contacts, notifications, and calm communication instead of noise."
              : "Підтримка локації тут прозора: автоматично з пристрою або вручну, коли потрібен більший контроль. Safe зосереджений на близьких контактах, сповіщеннях і спокійній комунікації без зайвого шуму."}
          </p>
        </article>
      </div>
    </section>
  );
}
