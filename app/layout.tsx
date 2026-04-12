import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const metadataBase = siteUrl ? new URL(siteUrl) : undefined;

export const metadata: Metadata = {
  metadataBase,
  applicationName: "Safe",
  title: {
    default: "Safe | Safety Check-In App for Trusted Contacts",
    template: "%s | Safe"
  },
  description:
    "Safe is a free app for people in Ukraine. Share your status with family in one tap — safe, in shelter, or in danger. Available on iOS and Android.",
  keywords: [
    "Safe app",
    "safety check-in app",
    "family safety app",
    "trusted contacts app",
    "Ukraine safety app",
    "check-in app",
    "location sharing with privacy",
    "ping a friend",
    "status updates for loved ones"
  ],
  category: "technology",
  alternates: {
    canonical: "/",
    languages: {
      "x-default": "/",
      en: "/",
      uk: "/"
    }
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    siteName: "Safe",
    title: "Safe — one tap tells your family you're safe",
    description:
      "When an air alarm sounds, your family shouldn't be left wondering. One tap tells them you're safe. Free app for Ukraine, iOS & Android.",
    url: siteUrl ?? "/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Safe app — one-tap safety check-ins for families in Ukraine"
      }
    ],
    locale: "en_US",
    alternateLocale: ["uk_UA"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Safe — one tap tells your family you're safe",
    description:
      "When an air alarm sounds, your family shouldn't be left wondering. One tap tells them you're safe. Free for Ukraine, iOS & Android.",
    images: ["/og-image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
