import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Safe privacy policy in English and Ukrainian, including data collection, GDPR rights, storage, and account handling."
};

function Section({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      <div className="space-y-3 text-white/75">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-white">
      <Link href="/" className="text-sm text-mint transition hover:text-mintLight">
        Back to Safe
      </Link>

      <h1 className="mt-6 text-4xl font-display font-semibold">Privacy Policy</h1>
      <p className="mt-4 text-white/65">Last updated: 01.12.2025</p>

      <div className="mt-8 grid gap-12 lg:grid-cols-2">
        <article className="space-y-6">
          <div className="space-y-2 text-white/75">
            <p>Owner: Sole Proprietor Potorenetska Eva Irena</p>
            <p>
              Contact:{" "}
              <a className="text-mint transition hover:text-mintLight" href="mailto:ewa.potorecka@gmail.com">
                ewa.potorecka@gmail.com
              </a>
            </p>
          </div>

          <Section title="1. Introduction">
            <p>
              This Privacy Policy explains how Safe collects, uses, and protects your personal
              data.
            </p>
          </Section>

          <Section title="2. What Data We Collect">
            <div>
              <h3 className="font-medium text-white">2.1. Data you provide</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Email address</li>
                <li>Username</li>
                <li>Phone number (optional)</li>
                <li>Login data</li>
                <li>&quot;I&apos;m Safe&quot; statuses</li>
                <li>Time of last activity</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white">2.2. Data we do not collect</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Geolocation data</li>
                <li>Continuous tracking</li>
                <li>Device identifiers</li>
              </ul>
              <p className="mt-2">Technical data such as crash logs and analytics may be collected.</p>
            </div>
          </Section>

          <Section title="3. How We Use Data">
            <ul className="list-disc space-y-1 pl-5">
              <li>Create and maintain accounts</li>
              <li>Show statuses to friends</li>
              <li>Send push notifications</li>
              <li>Improve the service</li>
              <li>Maintain security</li>
            </ul>
            <p>We never sell personal data.</p>
          </Section>

          <Section title="4. Legal Basis (GDPR)">
            <ul className="list-disc space-y-1 pl-5">
              <li>Your consent</li>
              <li>Legitimate interest</li>
              <li>Necessity to provide service functionality</li>
            </ul>
          </Section>

          <Section title="5. Data Sharing">
            <p>Data may be shared with:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>AWS</li>
              <li>Email and SMS providers</li>
              <li>Public authorities upon lawful request</li>
            </ul>
            <p>Data is not shared with advertising companies.</p>
          </Section>

          <Section title="6. Data Retention">
            <p>Data is stored on AWS servers.</p>
            <p>After account deletion, data is destroyed within a reasonable period.</p>
          </Section>

          <Section title="7. Security">
            <p>Encryption and modern security methods are used to protect data.</p>
          </Section>

          <Section title="8. Your Rights (GDPR)">
            <p>You may:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Access your data</li>
              <li>Correct or delete your data</li>
              <li>Withdraw consent</li>
              <li>Receive a copy of your data</li>
              <li>File a complaint</li>
            </ul>
            <p>
              Contact:{" "}
              <a className="text-mint transition hover:text-mintLight" href="mailto:ewa.potorecka@gmail.com">
                ewa.potorecka@gmail.com
              </a>
            </p>
          </Section>

          <Section title="9. Children">
            <p>We do not collect data from children under 13.</p>
          </Section>

          <Section title="10. International Transfers">
            <p>Data may be processed abroad with an appropriate level of protection.</p>
          </Section>

          <Section title="11. Policy Changes">
            <p>We may update this Policy. Continued use means acceptance of the updated Policy.</p>
          </Section>

          <Section title="12. Contacts">
            <p>
              <a className="text-mint transition hover:text-mintLight" href="mailto:ewa.potorecka@gmail.com">
                ewa.potorecka@gmail.com
              </a>
            </p>
          </Section>
        </article>

        <article className="space-y-6">
          <div className="space-y-2 text-white/75">
            <p>Власник: ФОП Поторенцька Ева Ірена</p>
            <p>
              Контакт:{" "}
              <a className="text-mint transition hover:text-mintLight" href="mailto:ewa.potorecka@gmail.com">
                ewa.potorecka@gmail.com
              </a>
            </p>
          </div>

          <Section title="1. Вступ">
            <p>
              Ця Політика конфіденційності пояснює, як Safe збирає, використовує та захищає ваші
              персональні дані.
            </p>
          </Section>

          <Section title="2. Які Дані Ми Збираємо">
            <div>
              <h3 className="font-medium text-white">2.1. Дані, які ви надаєте</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Email</li>
                <li>Ім&apos;я користувача</li>
                <li>Номер телефону (опціонально)</li>
                <li>Дані входу</li>
                <li>Статуси «Я в безпеці»</li>
                <li>Час останньої активності</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white">2.2. Дані, які ми НЕ збираємо</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Геолокацію</li>
                <li>Постійне відстеження</li>
                <li>Ідентифікатори пристрою</li>
              </ul>
              <p className="mt-2">Можливий збір технічних даних, зокрема краш-логів та аналітики.</p>
            </div>
          </Section>

          <Section title="3. Як Ми Використовуємо Дані">
            <ul className="list-disc space-y-1 pl-5">
              <li>Створення та обслуговування акаунтів</li>
              <li>Показ статусів друзям</li>
              <li>Відправка push-сповіщень</li>
              <li>Покращення роботи</li>
              <li>Забезпечення безпеки</li>
            </ul>
            <p>Ми ніколи не продаємо персональні дані.</p>
          </Section>

          <Section title="4. Правова Підстава (GDPR)">
            <ul className="list-disc space-y-1 pl-5">
              <li>Ваша згода</li>
              <li>Законний інтерес</li>
              <li>Необхідність виконання сервісної функції</li>
            </ul>
          </Section>

          <Section title="5. Передача Даних">
            <p>Можлива передача до:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>AWS</li>
              <li>Провайдерів Email/SMS</li>
              <li>Державних органів за запитом</li>
            </ul>
            <p>Дані не передаються рекламним компаніям.</p>
          </Section>

          <Section title="6. Зберігання Даних">
            <p>Дані зберігаються на серверах AWS.</p>
            <p>Після видалення акаунту дані знищуються у розумний строк.</p>
          </Section>

          <Section title="7. Безпека">
            <p>Використовується шифрування та сучасні методи захисту.</p>
          </Section>

          <Section title="8. Ваші Права (GDPR)">
            <p>Ви можете:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Отримати доступ</li>
              <li>Виправити або видалити дані</li>
              <li>Відкликати згоду</li>
              <li>Отримати копію даних</li>
              <li>Подати скаргу</li>
            </ul>
            <p>
              Контакт:{" "}
              <a className="text-mint transition hover:text-mintLight" href="mailto:ewa.potorecka@gmail.com">
                ewa.potorecka@gmail.com
              </a>
            </p>
          </Section>

          <Section title="9. Діти">
            <p>Ми не збираємо дані дітей до 13 років.</p>
          </Section>

          <Section title="10. Міжнародна Передача">
            <p>Дані можуть оброблятися за кордоном із належним рівнем безпеки.</p>
          </Section>

          <Section title="11. Зміни Політики">
            <p>Ми можемо оновлювати Політику; використання означає згоду.</p>
          </Section>

          <Section title="12. Контакти">
            <p>
              <a className="text-mint transition hover:text-mintLight" href="mailto:ewa.potorecka@gmail.com">
                ewa.potorecka@gmail.com
              </a>
            </p>
          </Section>
        </article>
      </div>
    </main>
  );
}
