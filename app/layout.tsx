import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EmergencyBar from "@/components/layout/EmergencyBar";
import StickyCallButton from "@/components/ui/StickyCallButton";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import {
  generateLocalBusinessSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
} from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

const DOMAIN = "https://lockstarlocksmithkennington.com";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN),
  applicationName: BUSINESS.name,
  title: {
    default: "Lockstar Locksmith Kennington | 24/7 Emergency Locksmith SE11",
    template: "%s | Lockstar Locksmith Kennington",
  },
  description:
    "24/7 emergency locksmith in Kennington SE11. DBS checked, fully insured. 20–30 min response. No call-out fee. Call " +
    BUSINESS.phone,
  keywords: [
    "locksmith kennington",
    "kennington locksmith",
    "emergency locksmith kennington",
    "locksmith se11",
    "locksmith kennington road",
    "24 hour locksmith kennington",
    "locksmith near kennington",
    "locksmith in kennington",
    "lockstar locksmith kennington",
    "emergency locksmiths kennington",
  ],
  authors: [{ name: BUSINESS.name, url: DOMAIN }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  category: "Home Services",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: DOMAIN,
    siteName: BUSINESS.name,
    title: "Lockstar Locksmith Kennington | 24/7 Emergency Locksmith SE11",
    description:
      "24/7 emergency locksmith in Kennington SE11. DBS checked, fully insured. 20–30 min response. No call-out fee.",
    images: [
      {
        url: `${DOMAIN}/logo.webp`,
        secureUrl: `${DOMAIN}/logo.webp`,
        width: 512,
        height: 512,
        alt: "Lockstar Locksmith Kennington — 24/7 Emergency Locksmith SE11",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lockstarkennington",
    creator: "@lockstarkennington",
    title: "Lockstar Locksmith Kennington | 24/7 Emergency Locksmith",
    description:
      "24/7 emergency locksmith in Kennington SE11. 20–30 min response. DBS checked, fully insured.",
    images: [`${DOMAIN}/logo.webp`],
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-GB": DOMAIN,
      "en": DOMAIN,
    },
  },
  verification: {
    google: "IhiGB5ygP0iTvHzGzuw0hMUMhUQIcd7-rGY5I2voMTY",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "Kennington, London",
    "geo.position": `${BUSINESS.geo.lat};${BUSINESS.geo.lng}`,
    ICBM: `${BUSINESS.geo.lat}, ${BUSINESS.geo.lng}`,
    "DC.title": BUSINESS.name,
    "DC.description": BUSINESS.description,
    "DC.subject": "Locksmith Services Kennington London",
    "DC.language": "en-GB",
    "format-detection": "telephone=yes",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Lockstar Locksmith",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0F172A" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const localBusinessSchema = generateLocalBusinessSchema();
  const organizationSchema = generateOrganizationSchema();
  const webSiteSchema = generateWebSiteSchema();

  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        {/* DNS prefetch for third-party origins */}
        <link rel="dns-prefetch" href="//www.google.com" />
        <link rel="dns-prefetch" href="//maps.googleapis.com" />
        {/* Structured data — injected in <head> for crawler priority */}
        <SchemaMarkup schema={localBusinessSchema} />
        <SchemaMarkup schema={organizationSchema} />
        <SchemaMarkup schema={webSiteSchema} />
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
