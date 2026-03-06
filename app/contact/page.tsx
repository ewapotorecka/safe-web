import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Find how to contact the Safe team for product, support, and partnership questions."
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-white">
      <Link href="/" className="text-sm text-mint transition hover:text-mintLight">
        Back to Safe
      </Link>
      <h1 className="mt-6 text-4xl font-display font-semibold">Contact</h1>
      <div className="mt-8 space-y-6 text-white/75">
        <p>
          For product questions, support requests, or partnership discussions, contact Safe through
          the official distribution channel or support method connected to the live app listing.
        </p>
        
      </div>
    </main>
  );
}
