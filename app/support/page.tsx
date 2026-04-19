import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description: "Find Safe support contact details and the official support email."
};

export default function SupportPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-white">
      <Link href="/" className="text-sm text-mint transition hover:text-mintLight">
        Back to Safe
      </Link>
      <h1 className="mt-6 text-4xl font-display font-semibold">Support</h1>
      <div className="mt-8 space-y-6 text-white/75">
        <p>
          If you need help with the Safe app, contact the support team by email and include any
          relevant details about your issue so they can respond faster.
        </p>
        <p>
          Support email:{" "}
          <a
            href="mailto:info@meetsafe.org"
            className="text-mint transition hover:text-mintLight"
          >
            info@meetsafe.org
          </a>
        </p>
        <p>
          You can also reach out on Telegram:{" "}
          <a
            href="https://t.me/+W19RQhnW6blmYzk8"
            className="text-mint transition hover:text-mintLight"
          >
            https://t.me/+W19RQhnW6blmYzk8
          </a>
        </p>
      </div>
    </main>
  );
}
