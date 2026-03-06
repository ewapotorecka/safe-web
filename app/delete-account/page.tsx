import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Account",
  description:
    "Safe account deletion instructions in English and Ukrainian, including in-app deletion and email-based deletion requests."
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

export default function DeleteAccountPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 text-white">
      <Link href="/" className="text-sm text-mint transition hover:text-mintLight">
        Back to Safe
      </Link>

      <h1 className="mt-6 text-4xl font-display font-semibold">Delete Account Information</h1>
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

          <Section title="Deleting your Safe account">
            <p>
              This page explains how users can delete their account in the Safe mobile app and what
              information will be deleted or retained after a deletion request.
            </p>
          </Section>

          <Section title="How to delete your account">
            <p>Safe provides two ways to delete your account:</p>
            <div>
              <h3 className="font-medium text-white">1. Self-service deletion in the app (recommended)</h3>
              <ol className="mt-2 list-decimal space-y-1 pl-5">
                <li>Open the Safe app on your device.</li>
                <li>Go to Profile → Settings → Delete Account.</li>
                <li>Confirm deletion.</li>
              </ol>
              <p className="mt-2">
                Your account and related data will be permanently and irreversibly deleted
                (hard deletion), and you will be automatically signed out.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-white">2. Email deletion request</h3>
              <p>
                If you cannot access the app or your device, send a request to{" "}
                <a className="text-mint transition hover:text-mintLight" href="mailto:ewa.potorecka@gmail.com">
                  ewa.potorecka@gmail.com
                </a>
                .
              </p>
              <p>Include:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Subject: &quot;Delete my Safe account&quot;</li>
                <li>The email address used for registration</li>
                <li>Any other information that helps identify your account</li>
              </ul>
              <p>Your request will be processed within 30 days.</p>
            </div>
          </Section>

          <Section title="What data is deleted?">
            <p>After account deletion, the following is permanently removed:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Profile personal data, including name, email, and phone number if provided</li>
              <li>Authentication data, including Apple, Google, and email-based sign-in records</li>
            </ul>
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

          <Section title="Видалення вашого облікового запису в застосунку Safe">
            <p>
              Ця сторінка пояснює, як користувачі можуть видалити свій обліковий запис у
              мобільному застосунку Safe, а також яку інформацію буде видалено чи збережено після
              запиту на видалення.
            </p>
          </Section>

          <Section title="Як видалити обліковий запис">
            <p>У застосунку Safe передбачено два способи видалення облікового запису:</p>
            <div>
              <h3 className="font-medium text-white">1. Самостійне видалення у застосунку (рекомендовано)</h3>
              <ol className="mt-2 list-decimal space-y-1 pl-5">
                <li>Відкрийте застосунок Safe на своєму пристрої.</li>
                <li>Перейдіть до Профіль → Налаштування → Видалити обліковий запис.</li>
                <li>Підтвердьте видалення.</li>
              </ol>
              <p className="mt-2">
                Ваш обліковий запис та пов&apos;язані дані буде остаточно та безповоротно видалено
                (жорстке видалення). Після цього ви будете автоматично виведені з системи.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-white">2. Запит на видалення електронною поштою</h3>
              <p>
                Якщо ви не можете увійти в застосунок або не маєте доступу до свого пристрою, ви
                можете надіслати запит електронною поштою на{" "}
                <a className="text-mint transition hover:text-mintLight" href="mailto:ewa.potorecka@gmail.com">
                  ewa.potorecka@gmail.com
                </a>
                .
              </p>
              <p>У листі вкажіть:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Тему: «Видалити мій обліковий запис Safe»</li>
                <li>Адресу електронної пошти, яку ви використовували для реєстрації</li>
                <li>Будь-яку іншу інформацію, що допоможе ідентифікувати ваш обліковий запис</li>
              </ul>
              <p>Ваш запит буде оброблено протягом 30 днів.</p>
            </div>
          </Section>

          <Section title="Які дані видаляються?">
            <p>Після видалення облікового запису видаляються назавжди:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>
                Особисті дані вашого профілю, зокрема ім&apos;я, email і номер телефону, якщо був
                вказаний
              </li>
              <li>Дані авторизації, зокрема Apple, Google та Email</li>
            </ul>
          </Section>
        </article>
      </div>
    </main>
  );
}
