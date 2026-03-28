import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Safe privacy policy in English and Ukrainian, including contacts access, location data, GDPR rights, storage, and account handling."
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
      <p className="mt-4 text-white/65">Last updated: 28.03.2026</p>

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
              <h3 className="font-medium text-white">2.1. Data you provide directly</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Email address</li>
                <li>Username</li>
                <li>Phone number (optional)</li>
                <li>Login and authentication data</li>
                <li>&quot;I&apos;m Safe&quot; statuses and related safety updates</li>
                <li>Manual location information you choose to enter</li>
                <li>Trusted contact details you choose to add or invite</li>
                <li>Time of last activity</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white">2.2. Data we collect from your device or permissions</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  Location data, including approximate or precise location, if you grant location
                  permission and use location-enabled features
                </li>
                <li>
                  Contact data from your address book, such as names, phone numbers, and email
                  addresses, if you grant contacts permission
                </li>
                <li>Push notification token and notification preferences</li>
                <li>Technical data such as crash logs, diagnostics, app version, and device model</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white">2.3. Data practices we do not engage in</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>We do not collect your contacts or location without your permission</li>
                <li>We do not sell personal data</li>
                <li>We do not use contacts or location data for advertising</li>
                <li>Safe is designed for status-based sharing, not continuous background tracking</li>
              </ul>
            </div>
          </Section>

          <Section title="3. How We Use Data">
            <ul className="list-disc space-y-1 pl-5">
              <li>Create and maintain accounts</li>
              <li>Authenticate sign-in and keep your account secure</li>
              <li>Show statuses and shared location to the trusted contacts you choose</li>
              <li>Help you find, invite, and manage trusted contacts</li>
              <li>Send push notifications and service-related messages</li>
              <li>Improve the service, troubleshoot issues, and prevent abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>We never sell personal data.</p>
          </Section>

          <Section title="4. Permissions and Your Choices">
            <ul className="list-disc space-y-1 pl-5">
              <li>Contacts access is optional and is used to help you select or invite trusted contacts</li>
              <li>
                Location access is optional and is used only when you choose to use
                location-enabled features
              </li>
              <li>
                You can deny or revoke permissions at any time in your device settings, but related
                features may be limited or unavailable
              </li>
              <li>
                When you share a status or location, it is shown only within the service as directed
                by your settings and connections
              </li>
            </ul>
          </Section>

          <Section title="5. Legal Basis (GDPR)">
            <ul className="list-disc space-y-1 pl-5">
              <li>Your consent, including for contacts, location, and notifications where required</li>
              <li>Necessity to provide the Safe service you request</li>
              <li>Legitimate interest in operating, securing, and improving the service</li>
            </ul>
          </Section>

          <Section title="6. Data Sharing">
            <p>Data may be shared with:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Cloud hosting and infrastructure providers such as AWS</li>
              <li>Authentication, email, SMS, and push notification providers</li>
              <li>Analytics and crash-reporting providers that help us operate the service</li>
              <li>Other Safe users or trusted contacts, but only when you choose to connect or share</li>
              <li>Public authorities upon lawful request</li>
            </ul>
            <p>Data is not shared with advertising companies.</p>
          </Section>

          <Section title="7. Data Retention">
            <p>Data is stored on secure servers, including AWS infrastructure.</p>
            <p>
              We keep account data for as long as your account remains active and as needed to
              provide the service.
            </p>
            <p>
              Contact, invitation, and location-related data is retained only as long as needed for
              the relevant feature, your connections, legal obligations, or dispute resolution.
            </p>
            <p>After account deletion, data is deleted within a reasonable period unless retention is required by law.</p>
          </Section>

          <Section title="8. Security">
            <p>Encryption and modern security methods are used to protect data.</p>
          </Section>

          <Section title="9. Your Rights (GDPR)">
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

          <Section title="10. Children">
            <p>We do not collect data from children under 13.</p>
          </Section>

          <Section title="11. International Transfers">
            <p>Data may be processed abroad with an appropriate level of protection.</p>
          </Section>

          <Section title="12. Policy Changes">
            <p>We may update this Policy. Continued use means acceptance of the updated Policy.</p>
          </Section>

          <Section title="13. Contacts">
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
              <h3 className="font-medium text-white">2.1. Дані, які ви надаєте напряму</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Email</li>
                <li>Ім&apos;я користувача</li>
                <li>Номер телефону (опціонально)</li>
                <li>Дані входу та автентифікації</li>
                <li>Статуси «Я в безпеці» та пов&apos;язані оновлення безпеки</li>
                <li>Локацію, яку ви вводите вручну</li>
                <li>Дані довірених контактів, яких ви додаєте або запрошуєте</li>
                <li>Час останньої активності</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white">2.2. Дані, які ми отримуємо з пристрою або дозволів</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>
                  Дані про місцезнаходження, включно з приблизною або точною геолокацією, якщо ви
                  надаєте дозвіл на геолокацію та використовуєте функції, пов&apos;язані з локацією
                </li>
                <li>
                  Дані контактів з адресної книги, зокрема імена, номери телефонів та email, якщо
                  ви надаєте дозвіл на доступ до контактів
                </li>
                <li>Push-токен і налаштування сповіщень</li>
                <li>Технічні дані, зокрема краш-логи, діагностика, версія застосунку та модель пристрою</li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-white">2.3. Практики, яких ми не застосовуємо</h3>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Ми не збираємо контакти або локацію без вашого дозволу</li>
                <li>Ми не продаємо персональні дані</li>
                <li>Ми не використовуємо контакти або геолокацію для реклами</li>
                <li>Safe створений для точкових оновлень статусу, а не для постійного фонового відстеження</li>
              </ul>
            </div>
          </Section>

          <Section title="3. Як Ми Використовуємо Дані">
            <ul className="list-disc space-y-1 pl-5">
              <li>Створення та обслуговування акаунтів</li>
              <li>Автентифікація входу та захист вашого акаунту</li>
              <li>Показ статусів і локації довіреним контактам, яких ви самі обрали</li>
              <li>Допомога у пошуку, запрошенні та керуванні довіреними контактами</li>
              <li>Надсилання push-сповіщень та сервісних повідомлень</li>
              <li>Покращення роботи сервісу, усунення проблем і запобігання зловживанням</li>
              <li>Виконання вимог законодавства</li>
            </ul>
            <p>Ми ніколи не продаємо персональні дані.</p>
          </Section>

          <Section title="4. Дозволи та Ваш Контроль">
            <ul className="list-disc space-y-1 pl-5">
              <li>Доступ до контактів є опціональним і використовується для вибору або запрошення довірених контактів</li>
              <li>
                Доступ до геолокації є опціональним і використовується лише тоді, коли ви самі
                вмикаєте функції, пов&apos;язані з локацією
              </li>
              <li>
                Ви можете відхилити або відкликати дозволи у налаштуваннях пристрою, але пов&apos;язані
                функції можуть працювати обмежено або бути недоступними
              </li>
              <li>
                Коли ви ділитеся статусом або локацією, ця інформація показується в межах сервісу
                відповідно до ваших налаштувань і зв&apos;язків
              </li>
            </ul>
          </Section>

          <Section title="5. Правова Підстава (GDPR)">
            <ul className="list-disc space-y-1 pl-5">
              <li>Ваша згода, зокрема для контактів, геолокації та сповіщень, якщо це потрібно</li>
              <li>Необхідність надання сервісу Safe, який ви запитуєте</li>
              <li>Законний інтерес в роботі, захисті та покращенні сервісу</li>
            </ul>
          </Section>

          <Section title="6. Передача Даних">
            <p>Можлива передача до:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Провайдерів хостингу та інфраструктури, зокрема AWS</li>
              <li>Провайдерів автентифікації, Email, SMS і push-сповіщень</li>
              <li>Провайдерів аналітики та crash-reporting для підтримки роботи сервісу</li>
              <li>Інших користувачів Safe або довірених контактів, але лише коли ви самі обираєте зв&apos;язок або поширення</li>
              <li>Державних органів за запитом</li>
            </ul>
            <p>Дані не передаються рекламним компаніям.</p>
          </Section>

          <Section title="7. Зберігання Даних">
            <p>Дані зберігаються на захищених серверах, включно з інфраструктурою AWS.</p>
            <p>
              Ми зберігаємо дані акаунту, поки ваш обліковий запис активний, і настільки довго,
              наскільки це потрібно для надання сервісу.
            </p>
            <p>
              Дані контактів, запрошень і локації зберігаються лише настільки довго, наскільки це
              потрібно для відповідної функції, ваших зв&apos;язків, виконання закону або вирішення
              спорів.
            </p>
            <p>Після видалення акаунту дані видаляються у розумний строк, якщо закон не вимагає довшого зберігання.</p>
          </Section>

          <Section title="8. Безпека">
            <p>Використовується шифрування та сучасні методи захисту.</p>
          </Section>

          <Section title="9. Ваші Права (GDPR)">
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

          <Section title="10. Діти">
            <p>Ми не збираємо дані дітей до 13 років.</p>
          </Section>

          <Section title="11. Міжнародна Передача">
            <p>Дані можуть оброблятися за кордоном із належним рівнем безпеки.</p>
          </Section>

          <Section title="12. Зміни Політики">
            <p>Ми можемо оновлювати Політику; використання означає згоду.</p>
          </Section>

          <Section title="13. Контакти">
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
