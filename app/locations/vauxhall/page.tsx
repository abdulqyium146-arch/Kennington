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
  title: "Locksmith Vauxhall SE11 SW8 | 24/7 Emergency",
  description:
    "Locksmith in Vauxhall SE11 & SW8. Emergency lockouts, lock fitting & UPVC repairs. Call 07700 900000. DBS checked, fast response, no call-out fee.",
  keywords: [
    "locksmith vauxhall",
    "vauxhall locksmith",
    "emergency locksmith vauxhall",
    "locksmith se11 vauxhall",
    "locksmith sw8",
    "locksmith vauxhall london",
  ],
  alternates: {
    canonical: "/locations/vauxhall",
    languages: {
      "en-GB": "https://lockstarlocksmithkennington.com/locations/vauxhall",
      "en": "https://lockstarlocksmithkennington.com/locations/vauxhall",
    },
  },
  openGraph: {
    title: "Locksmith Vauxhall SE11 SW8 | 24/7 Emergency",
    description:
      "Locksmith in Vauxhall SE11 & SW8. Emergency lockouts, lock fitting & UPVC repairs. Call 07700 900000. DBS checked, fast response, no call-out fee.",
    url: "https://lockstarlocksmithkennington.com/locations/vauxhall",
  },
};

export default function VauxhallPage() {
  const webPageSchema = generateWebPageSchema({
    title: "Locksmith Vauxhall SE11 SW8 | 24/7 Emergency",
    description:
      "Locksmith in Vauxhall SE11 & SW8. Emergency lockouts, lock fitting & UPVC repairs. Call 07700 900000. DBS checked, fast response, no call-out fee.",
    url: "/locations/vauxhall",
    datePublished: "2025-01-15",
    dateModified: "2025-06-01",
  });
  const businessSchema = generateLocalBusinessSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Locations", href: "/locations" },
    { name: "Vauxhall", href: "/locations/vauxhall" },
  ]);
  const faqSchema = generateFAQSchema(
    [
      {
        question: "How quickly can a locksmith reach Vauxhall?",
        answer:
          "Lockstar Locksmith Kennington typically arrives within 20–30 minutes across Vauxhall SE11 and SW8. Vauxhall is within our core service zone.",
      },
      {
        question: "Do you cover both SE11 and SW8 postcodes in Vauxhall?",
        answer:
          "Yes. Vauxhall spans the SE11 and SW8 postcode boundary and we cover the full area including Albert Embankment, South Lambeth Road, and surrounding streets.",
      },
      {
        question: "Can you open a UPVC door in Vauxhall without damage?",
        answer:
          "Yes. We use non-destructive entry techniques for all UPVC and composite door types and prioritise opening without damage to the lock or frame.",
      },
      {
        question: "Do you fit high-security locks in Vauxhall for new builds?",
        answer:
          "Yes. Vauxhall has a significant number of modern apartment developments. We install high-security cylinders including Mul-T-Lock, ERA Fortress, and anti-snap cylinders for all new-build property types.",
      },
      {
        question: "Is there a call-out fee for locksmith services in Vauxhall?",
        answer:
          "No. Lockstar charges no call-out fee across Vauxhall SE11 and SW8. A fixed price is always quoted before work begins.",
      },
    ],
    "/locations/vauxhall"
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
          name: "Vauxhall, London SE11 & SW8",
          nameShort: "Vauxhall",
          postcode: "SE11 / SW8",
          description:
            "Vauxhall is a vibrant mixed-use area straddling the SE11 and SW8 postcode boundary in the London Borough of Lambeth. It combines major transport infrastructure — Vauxhall Station on the Victoria line — with a mix of period terraces, modern high-rise residential developments, and a busy commercial quarter.",
          landmarks: [
            "Vauxhall Station (Victoria & National Rail)",
            "St George Wharf & Vauxhall Tower",
            "Vauxhall City Farm",
            "Albert Embankment",
            "MI6 Building (SIS)",
          ],
          roads: [
            "Vauxhall Bridge Road",
            "South Lambeth Road",
            "Albert Embankment",
            "Bondway",
            "Harleyford Road",
          ],
          nearbyAreas: [
            "Kennington",
            "Oval",
            "Stockwell",
            "Pimlico",
            "Nine Elms",
          ],
        }}
        hero={{
          badge: "Locksmith — Vauxhall SE11 & SW8",
          title: "Locksmith in Vauxhall",
          description:
            "Professional locksmith services across Vauxhall SE11 and SW8. From the Victorian terraces of South Lambeth Road to the modern high-rises of St George Wharf — Lockstar Locksmith Kennington serves all Vauxhall property types, 24 hours a day.",
        }}
        mainContent={{
          heading: "Trusted Locksmith Serving Vauxhall SE11 & SW8",
          body: [
            "Vauxhall is one of South London's most rapidly changing neighbourhoods — a major transport hub served by Vauxhall Underground and National Rail stations, surrounded by a diverse mix of Victorian residential streets, modern apartment towers, and a growing commercial district. As a locksmith based in neighbouring Kennington, Lockstar is genuinely local to Vauxhall and typically arrives within 20–30 minutes of your call.",
            "The variety of property types in Vauxhall means we work across a very wide range of lock configurations. Residents in the Victorian terraces and mansion blocks along South Lambeth Road and Harleyford Road often have traditional BS3621 mortice deadlocks and Yale rim locks, while the modern apartment developments at St George Wharf and One Nine Elms typically feature euro cylinder multipoint systems and high-security access control. We carry parts and locks suitable for all of these on every van.",
            "Emergency lockouts are our most common Vauxhall call-out. Vauxhall's position as a transport interchange means a significant number of residents commute long distances — and being locked out at the end of a working day, or early in the morning before a departure, is a genuinely urgent situation. We understand the pressure and respond fast.",
            "We also serve Vauxhall's substantial commercial sector, including businesses along Vauxhall Bridge Road and the growing Nine Elms commercial quarter. Our commercial locksmith services include master key systems, access control installation, commercial lock changes, and priority emergency response for business premises. For landlords and letting agents operating in Vauxhall's active rental market, we provide fast lock changes between tenancies across the full SE11 and SW8 coverage area.",
          ],
        }}
        services={[
          {
            title: "Emergency Locksmith Vauxhall",
            href: "/services/emergency-locksmith",
            description: "24/7 lockout response across Vauxhall SE11 & SW8",
          },
          {
            title: "Residential Locksmith Vauxhall",
            href: "/services/residential-locksmith",
            description: "Home lock services for all Vauxhall property types",
          },
          {
            title: "Lock Replacement Vauxhall",
            href: "/services/lock-replacement",
            description: "BS3621 & anti-snap locks supplied and fitted same day",
          },
          {
            title: "UPVC Door Repairs Vauxhall",
            href: "/services/upvc-door-repairs",
            description: "Multipoint mechanisms & cylinders for all door types",
          },
          {
            title: "Commercial Locksmith Vauxhall",
            href: "/services/commercial-locksmith",
            description: "Business security for Vauxhall & Nine Elms premises",
          },
          {
            title: "Security Upgrades Vauxhall",
            href: "/services/security-upgrades",
            description: "Anti-snap cylinders & door reinforcement",
          },
          {
            title: "Burglary Repairs Vauxhall",
            href: "/services/burglary-repairs",
            description: "Emergency boarding up & lock replacement after break-in",
          },
          {
            title: "Smart Locks Vauxhall",
            href: "/services/smart-locks",
            description: "Smart lock installation for Vauxhall apartments & houses",
          },
        ]}
        breadcrumb={[
          { name: "Locations", href: "/locations" },
          { name: "Vauxhall", href: "/locations/vauxhall" },
        ]}
      />
    </>
  );
}
