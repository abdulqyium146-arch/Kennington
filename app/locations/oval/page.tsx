import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import LocationPageLayout from "@/components/ui/LocationPageLayout";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateWebPageSchema,
  generateFAQSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Locksmith Oval SE11 | 24/7 Emergency Locksmith",
  description:
    "Locksmith in Oval SE11. Emergency lockouts, lock fitting & security upgrades near The Oval. Call 07984 547185. DBS checked, 20–30 min response, no call-out fee.",
  keywords: [
    "locksmith oval",
    "oval locksmith",
    "emergency locksmith oval",
    "locksmith se11 oval",
    "locksmith near oval cricket ground",
  ],
  alternates: {
    canonical: "/locations/oval",
    languages: {
      "en-GB": "https://lockstarlocksmithkennington.com/locations/oval",
      "en": "https://lockstarlocksmithkennington.com/locations/oval",
    },
  },
  openGraph: {
    title: "Locksmith Oval SE11 | 24/7 Emergency Locksmith",
    description:
      "Locksmith in Oval SE11. Emergency lockouts, lock fitting & security upgrades near The Oval. Call 07984 547185. DBS checked, 20–30 min response, no call-out fee.",
    url: "https://lockstarlocksmithkennington.com/locations/oval",
  },
};

export default function OvalPage() {
  const webPageSchema = generateWebPageSchema({
    title: "Locksmith Oval SE11 | 24/7 Emergency Locksmith",
    description:
      "Locksmith in Oval SE11. Emergency lockouts, lock fitting & security upgrades near The Oval. Call 07984 547185. DBS checked, 20–30 min response, no call-out fee.",
    url: "/locations/oval",
    datePublished: "2025-01-15",
    dateModified: "2025-06-01",
  });
  const businessSchema = generateLocalBusinessSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Locations", href: "/locations" },
    { name: "Oval SE11", href: "/locations/oval" },
  ]);
  const faqSchema = generateFAQSchema(
    [
      {
        question: "How quickly can a locksmith reach Oval SE11?",
        answer:
          "Lockstar Locksmith Kennington typically arrives within 20–30 minutes across the Oval area of SE11. The Oval is within our core service zone and one of our fastest-response areas.",
      },
      {
        question: "Is there a call-out fee for locksmith services in Oval?",
        answer:
          "No. Lockstar charges no call-out fee for any job in the Oval SE11 area. A fixed price is quoted before work begins.",
      },
      {
        question: "Can you open a UPVC door in Oval without damaging it?",
        answer:
          "Yes. We use non-destructive entry techniques for all UPVC multipoint locking systems and aim to open doors without any damage to the lock or frame.",
      },
      {
        question: "Do you change locks for landlords in the Oval area?",
        answer:
          "Yes. We provide fast landlord lock-change services between tenancies across the Oval SE11 area, typically same day or next day.",
      },
      {
        question: "What postcodes near Oval do you cover?",
        answer:
          "We cover all SE11 postcodes including the Oval area, as well as adjacent postcodes SE1, SE17, SW8, and SW9. Call us to confirm coverage for your specific postcode.",
      },
    ],
    "/locations/oval"
  );

  return (
    <>
      <SchemaMarkup schema={faqSchema} />
      <SchemaMarkup schema={webPageSchema} />
      <SchemaMarkup schema={businessSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <LocationPageLayout
        Icon={MapPin}
        location={{
          name: "Oval, London SE11",
          nameShort: "Oval",
          postcode: "SE11",
          description:
            "The Oval is a residential and commercial area in the London Borough of Lambeth, sharing the SE11 postcode with Kennington. It is home to the famous Kia Oval cricket ground and bordered by Kennington, Stockwell, and Vauxhall.",
          landmarks: [
            "Kia Oval Cricket Ground",
            "Oval Tube Station",
            "Kennington Park",
            "Stockwell Park",
            "South Bank (nearby)",
          ],
          roads: [
            "Harleyford Road",
            "Clapham Road",
            "Kennington Park Road",
            "South Lambeth Road",
            "Brixton Road",
          ],
          nearbyAreas: [
            "Kennington",
            "Stockwell",
            "Vauxhall",
            "Brixton",
            "Elephant & Castle",
          ],
        }}
        hero={{
          badge: "Locksmith — Oval SE11",
          title: "Locksmith in Oval SE11",
          description:
            "Fast, professional locksmith services across the Oval area of SE11. Whether you live near Kennington Park, the Oval cricket ground, or on one of the residential streets surrounding Harleyford Road — Lockstar Locksmith Kennington is minutes away, 24 hours a day.",
        }}
        mainContent={{
          heading: "Your Local Locksmith Serving Oval SE11",
          body: [
            "The Oval area of SE11 sits at the heart of our core service territory. Sharing the same postcode as Kennington, Oval is one of the areas where we respond fastest — our technicians are familiar with every street, every road layout, and every property type in the area, meaning no wasted time navigating.",
            "The residential streets around the Oval cricket ground are characterised by a mix of Victorian terraced houses, purpose-built flat developments, and period conversions — all with their own lock configurations. We work on the full range of lock types found in Oval SE11 properties: traditional Yale rim locks, BS3621 five-lever mortice deadlocks, modern UPVC multipoint mechanisms, and high-security cylinders from Mul-T-Lock, Banham, and ERA.",
            "Emergency lockouts account for the majority of our Oval call-outs. Residents locked out after a late night, tenants who have lost their only set of keys, and households where a key has snapped in the lock — we respond to all of these, typically arriving within 20–30 minutes. Non-destructive entry is always our first approach, meaning we open the vast majority of Oval lockouts without drilling or damaging the lock.",
            "We carry out a significant volume of planned locksmith work in the Oval area — including landlord lock changes between tenancies (common in Oval's large rental sector), security upgrades from standard cylinders to anti-snap and BS3621-rated locks, UPVC door repairs, and lock installations for newly refurbished properties. Oval's proximity to Kennington means our team is nearby whenever you need us.",
          ],
        }}
        services={[
          {
            title: "Emergency Locksmith Oval",
            href: "/services/emergency-locksmith",
            description: "24/7 lockout response across Oval SE11 — 20–30 min average",
          },
          {
            title: "Residential Locksmith Oval",
            href: "/services/residential-locksmith",
            description: "Home lock services for all Oval property types",
          },
          {
            title: "Lock Replacement Oval",
            href: "/services/lock-replacement",
            description: "BS3621 & anti-snap locks supplied and fitted same day",
          },
          {
            title: "UPVC Door Repairs Oval",
            href: "/services/upvc-door-repairs",
            description: "Multipoint mechanisms & cylinders replaced",
          },
          {
            title: "Landlord Lock Changes Oval",
            href: "/services/lock-replacement",
            description: "Same-day lock change between tenancies across Oval SE11",
          },
          {
            title: "Burglary Repairs Oval",
            href: "/services/burglary-repairs",
            description: "Emergency boarding up & security after break-in",
          },
          {
            title: "Security Upgrades Oval",
            href: "/services/security-upgrades",
            description: "Anti-snap cylinders & door frame reinforcement",
          },
          {
            title: "Commercial Locksmith Oval",
            href: "/services/commercial-locksmith",
            description: "Business security for Oval SE11 premises",
          },
        ]}
        breadcrumb={[
          { name: "Locations", href: "/locations" },
          { name: "Oval SE11", href: "/locations/oval" },
        ]}
      />
    </>
  );
}
