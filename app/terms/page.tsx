import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Safe terms and conditions in English and Ukrainian, covering eligibility, account rules, contacts and location permissions, notifications, data storage, and liability limits."
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

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-white">
      <Link href="/" className="text-sm text-mint transition hover:text-mintLight">
        Back to Safe
      </Link>

      <h1 className="mt-6 text-4xl font-display font-semibold">Terms and Conditions</h1>
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

          <Section title="1. Acceptance of Terms">
            <p>
              By downloading or using the Safe app (the &quot;App&quot;), you agree to these Terms
              and Conditions. If you do not agree, do not use the App.
            </p>
          </Section>

          <Section title="2. About Safe">
            <p>Safe allows users to:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Send an &quot;I&apos;m Safe&quot; status</li>
              <li>Add trusted contacts and view their status</li>
              <li>Share device-based or manual location with trusted contacts</li>
              <li>Use contact-based invitations or invitation links</li>
              <li>Receive push notifications</li>
            </ul>
            <p>Some features depend on device permissions and user settings.</p>
            <p>Safe is not an emergency assistance service.</p>
          </Section>

          <Section title="3. Age Restriction">
            <p>The App is intended for users aged 13 and older.</p>
          </Section>

          <Section title="4. Account">
            <p>Accounts may be created using:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Email and password</li>
              <li>Apple Sign-In</li>
              <li>Google Sign-In</li>
              <li>Phone number</li>
            </ul>
            <p>You are responsible for keeping your credentials confidential.</p>
          </Section>

          <Section title="5. User Conduct">
            <p>The following is prohibited:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Abusing, harassing, or threatening others</li>
              <li>Sharing unlawful or harmful content</li>
              <li>Impersonation</li>
              <li>Interfering with the App&apos;s security or operation</li>
            </ul>
            <p>Violations may lead to account suspension or removal.</p>
          </Section>

          <Section title="6. Trusted Contacts and Invitations">
            <p>The App allows users to:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Send and accept invitations</li>
              <li>Select or sync contact details from the device address book, if permission is granted</li>
              <li>View the &quot;I&apos;m Safe&quot; status and any location you choose to share</li>
            </ul>
            <p>
              You acknowledge that adding trusted contacts is voluntary and that you are responsible
              for the accuracy of your statuses and shared location.
            </p>
            <p>
              You are responsible for making sure you have the right to share another person&apos;s
              contact details with the App for invitation or connection purposes.
            </p>
          </Section>

          <Section title="7. Notifications">
            <p>Push notifications may be sent regarding:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Safety checks</li>
              <li>Friend activity</li>
              <li>System updates</li>
            </ul>
            <p>Notification settings can be changed on your device.</p>
          </Section>

          <Section title="8. Permissions">
            <p>The App may request access to certain device features, including:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Contacts, to help you select, invite, or connect with trusted contacts</li>
              <li>Location, to let you share your location with trusted contacts when you choose</li>
              <li>Notifications, to alert you about safety updates, friend activity, or service messages</li>
            </ul>
            <p>
              Granting these permissions is optional, but some features may not work properly
              without them.
            </p>
            <p>You can revoke permissions at any time through your device settings.</p>
          </Section>

          <Section title="9. Data Storage">
            <p>Safe stores:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Email</li>
              <li>Username</li>
              <li>Phone number (optional)</li>
              <li>&quot;I&apos;m Safe&quot; statuses and related safety updates</li>
              <li>Time of last activity</li>
              <li>Trusted contact and invitation data</li>
              <li>Location data when you choose to share it or use a location-enabled feature</li>
              <li>Technical service data such as push token, diagnostics, and crash logs</li>
            </ul>
            <p>Safe does not sell personal data or use contacts or location data for advertising.</p>
            <p>Data is stored on secure AWS servers.</p>
          </Section>

          <Section title="10. Not a Rescue Service">
            <p>Safe does not replace emergency services such as 112 or 911.</p>
          </Section>

          <Section title="11. Availability">
            <p>The App may be temporarily unavailable due to:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Maintenance</li>
              <li>Updates</li>
              <li>Technical failures</li>
            </ul>
          </Section>

          <Section title="12. Limitation of Liability">
            <p>To the extent permitted by law:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>We are not liable for real-world consequences of status usage</li>
              <li>We are not liable for inaccuracies in user-provided or device-provided contact or location data</li>
              <li>We do not guarantee error-free operation</li>
              <li>You use the App at your own risk</li>
            </ul>
          </Section>

          <Section title="13. Termination">
            <p>You may delete your account at any time.</p>
            <p>We may suspend or remove accounts that violate these Terms.</p>
          </Section>

          <Section title="14. Governing Law">
            <p>These Terms apply worldwide.</p>
            <p>The law of the user&apos;s country of residence applies.</p>
          </Section>

          <Section title="15. Changes to the Terms">
            <p>We may update these Terms. Continued use means acceptance of the updated Terms.</p>
          </Section>

          <Section title="16. Contacts">
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

          <Section title="ПРАВИЛА ТА УМОВИ">
            <p>для мобільного застосунку «Safe»</p>
          </Section>

          <Section title="1. Прийняття Умов">
            <p>
              Завантажуючи або використовуючи застосунок Safe (&quot;Застосунок&quot;), ви
              погоджуєтесь із цими Правилами та Умовами. Якщо ви не погоджуєтесь, не
              використовуйте Застосунок.
            </p>
          </Section>

          <Section title="2. Про Safe">
            <p>Safe дозволяє:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Надсилати статус «Я в безпеці»</li>
              <li>Додавати довірені контакти й переглядати їхній статус</li>
              <li>Ділитися локацією з пристрою або вручну з довіреними контактами</li>
              <li>Використовувати запрошення через контакти або через посилання</li>
              <li>Отримувати push-сповіщення</li>
            </ul>
            <p>Деякі функції залежать від дозволів на пристрої та ваших налаштувань.</p>
            <p>Safe не є службою екстреної допомоги.</p>
          </Section>

          <Section title="3. Вікове Обмеження">
            <p>Застосунок призначений для осіб від 13 років.</p>
          </Section>

          <Section title="4. Обліковий Запис">
            <p>Створення акаунту можливе через:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Email + пароль</li>
              <li>Apple Sign-In</li>
              <li>Google Sign-In</li>
              <li>Номер телефону</li>
            </ul>
            <p>Ви відповідаєте за конфіденційність облікових даних.</p>
          </Section>

          <Section title="5. Поведінка Користувача">
            <p>Заборонено:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Ображати, переслідувати або погрожувати</li>
              <li>Поширювати незаконний чи шкідливий контент</li>
              <li>Самовидаватися</li>
              <li>Порушувати безпеку чи роботу Застосунку</li>
            </ul>
            <p>Порушення може призвести до блокування облікового запису.</p>
          </Section>

          <Section title="6. Довірені Контакти та Запрошення">
            <p>Застосунок дозволяє:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Надсилати й приймати запрошення</li>
              <li>Обирати або синхронізувати контакти з адресної книги пристрою, якщо надано дозвіл</li>
              <li>Переглядати статус «Я в безпеці» та локацію, якою ви вирішили поділитися</li>
            </ul>
            <p>
              Ви визнаєте, що додавання довірених контактів є добровільним, а ви відповідаєте за
              достовірність своїх статусів і поширеної локації.
            </p>
            <p>
              Ви відповідаєте за те, щоб мати право передавати контактні дані іншої особи до
              Застосунку для запрошення або встановлення зв&apos;язку.
            </p>
          </Section>

          <Section title="7. Сповіщення">
            <p>Можливі push-сповіщення щодо:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Перевірки безпеки</li>
              <li>Активності друзів</li>
              <li>Системних оновлень</li>
            </ul>
            <p>Налаштування сповіщень можна змінити на пристрої.</p>
          </Section>

          <Section title="8. Дозволи">
            <p>Застосунок може запитувати доступ до певних функцій пристрою, зокрема:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Контактів, щоб допомогти вам обирати, запрошувати або додавати довірені контакти</li>
              <li>Геолокації, щоб ви могли ділитися своєю локацією з довіреними контактами, коли самі цього хочете</li>
              <li>Сповіщень, щоб інформувати вас про оновлення безпеки, активність друзів або сервісні повідомлення</li>
            </ul>
            <p>
              Надання цих дозволів є добровільним, але без них окремі функції можуть працювати
              некоректно або бути недоступними.
            </p>
            <p>Ви можете відкликати дозволи будь-коли в налаштуваннях свого пристрою.</p>
          </Section>

          <Section title="9. Зберігання Даних">
            <p>Safe зберігає:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Email</li>
              <li>Ім&apos;я користувача</li>
              <li>Номер телефону (опціонально)</li>
              <li>Статуси «Я в безпеці» та пов&apos;язані оновлення безпеки</li>
              <li>Час останньої активності</li>
              <li>Дані довірених контактів і запрошень</li>
              <li>Дані про місцезнаходження, коли ви самі ділитеся ними або використовуєте функцію з геолокацією</li>
              <li>Технічні сервісні дані, зокрема push-токен, діагностику та crash-логи</li>
            </ul>
            <p>Safe не продає персональні дані та не використовує контакти або геолокацію для реклами.</p>
            <p>Дані зберігаються на безпечних серверах AWS.</p>
          </Section>

          <Section title="10. Не Є Службою Порятунку">
            <p>Safe не замінює служби екстреної допомоги (112/911).</p>
          </Section>

          <Section title="11. Доступність">
            <p>Застосунок може бути тимчасово недоступний через:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Технічні роботи</li>
              <li>Оновлення</li>
              <li>Технічні збої</li>
            </ul>
          </Section>

          <Section title="12. Обмеження Відповідальності">
            <p>У межах, дозволених законом:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Ми не відповідаємо за реальні наслідки використання статусів</li>
              <li>Ми не відповідаємо за неточності в контактних даних або геолокації, наданих користувачем чи пристроєм</li>
              <li>Ми не гарантуємо безпомилкову роботу</li>
              <li>Ви використовуєте Застосунок на власний ризик</li>
            </ul>
          </Section>

          <Section title="13. Припинення Використання">
            <p>Ви можете видалити свій акаунт будь-коли.</p>
            <p>Ми можемо призупинити або видалити акаунти, що порушують Умови.</p>
          </Section>

          <Section title="14. Законодавство">
            <p>Умови застосовуються по всьому світу.</p>
            <p>Застосовується законодавство країни проживання користувача.</p>
          </Section>

          <Section title="15. Зміни Умов">
            <p>Ми можемо оновлювати Умови. Продовження використання означає згоду.</p>
          </Section>

          <Section title="16. Контакти">
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
