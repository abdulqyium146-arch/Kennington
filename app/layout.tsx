import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EmergencyBar from "@/components/layout/EmergencyBar";
import StickyCallButton from "@/components/ui/StickyCallButton";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import { generateLocalBusinessSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.domain),
  title: {
    default: "Lockstar Locksmith Kennington | 24/7 Emergency Locksmith SE11",
    template: "%s | Lockstar Locksmith Kennington",
  },
  description:
    "24/7 emergency locksmith in Kennington SE11. DBS checked, fully insured. 20–30 min response. No call-out fee. Call " +
    BUSINESS.phone +
    " now.",
  keywords: [
    "locksmith kennington",
    "kennington locksmith",
    "emergency locksmith kennington",
    "locksmith se11",
    "locksmith kennington road",
    "24 hour locksmith kennington",
    "locksmith near me kennington",
    "locksmith in kennington",
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BUSINESS.domain,
    siteName: BUSINESS.name,
    title: "Lockstar Locksmith Kennington | 24/7 Emergency Locksmith SE11",
    description:
      "24/7 emergency locksmith in Kennington SE11. DBS checked, fully insured. 20–30 min response. No call-out fee.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lockstar Locksmith Kennington — 24/7 Emergency Locksmith SE11",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lockstar Locksmith Kennington | 24/7 Emergency Locksmith",
    description:
      "24/7 emergency locksmith in Kennington SE11. 20–30 min response. DBS checked, fully insured.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: BUSINESS.domain,
  },
  verification: {
    google: "IhiGB5ygP0iTvHzGzuw0hMUMhUQIcd7-rGY5I2voMTY",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const businessSchema = generateLocalBusinessSchema();

  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <SchemaMarkup schema={businessSchema} />
      </head>
      <body className="font-sans antialiased">
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <EmergencyBar />
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
