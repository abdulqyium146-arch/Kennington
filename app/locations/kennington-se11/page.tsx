import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import LocationPageLayout from "@/components/ui/LocationPageLayout";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import { generateLocalBusinessSchema, generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Locksmith Kennington SE11 | 24/7 Local Locksmith",
  description:
    "Locksmith covering all SE11 postcodes. Emergency lockouts, lock fitting & repairs. Call 07700 900000. DBS checked, 20–30 min response, no call-out fee.",
  alternates: {
    canonical: "/locations/kennington-se11",
    languages: {
      "en-GB": "https://lockstarlocksmithkennington.com/locations/kennington-se11",
      "en": "https://lockstarlocksmithkennington.com/locations/kennington-se11",
    },
  },
  openGraph: {
    title: "Locksmith Kennington SE11 | 24/7 Local Locksmith",
    description:
      "Locksmith covering all SE11 postcodes. Emergency lockouts, lock fitting & repairs. Call 07700 900000. DBS checked, 20–30 min response, no call-out fee.",
    url: "https://lockstarlocksmithkennington.com/locations/kennington-se11",
  },
};

export default function KenningtionSE11Page() {
  const webPageSchema = generateWebPageSchema({
    title: "Locksmith Kennington SE11 | 24/7 Local Locksmith",
    description:
      "Locksmith covering all SE11 postcodes. Emergency lockouts, lock fitting & repairs. Call 07700 900000. DBS checked, 20–30 min response, no call-out fee.",
    url: "/locations/kennington-se11",
    datePublished: "2025-01-15",
    dateModified: "2025-06-01",
  });
  const businessSchema = generateLocalBusinessSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Locations", href: "/locations" },
    { name: "Kennington SE11", href: "/locations/kennington-se11" },
  ]);

  return (
    <>
      <SchemaMarkup schema={webPageSchema} />
      <SchemaMarkup schema={businessSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <LocationPageLayout
        Icon={MapPin}
        location={{
          name: "Kennington SE11, London",
          nameShort: "SE11",
          postcode: "SE11",
          description:
            "The SE11 postcode district covers Kennington and parts of Vauxhall and Lambeth in South London. It is one of the most centrally located South London postcodes, with excellent transport links via Kennington and Vauxhall tube stations.",
          landmarks: [
            "Kennington Park",
            "Oval Cricket Ground",
            "Imperial War Museum",
            "St Thomas' Hospital (nearby)",
            "Vauxhall City Farm",
          ],
          roads: [
            "Kennington Road",
            "Kennington Lane",
            "Clapham Road",
            "Harleyford Road",
            "Albert Embankment",
          ],
          nearbyAreas: ["SE1 Borough", "SE17 Walworth", "SW8 Battersea", "SE5 Camberwell"],
        }}
        hero={{
          badge: "Locksmith SE11 — Kennington",
          title: "Locksmith in SE11 — Fast, Local, Trusted",
          description:
            "Looking for a locksmith in SE11? Lockstar Locksmith Kennington covers the entire SE11 postcode with 24/7 emergency locksmith services, planned lock work, and security upgrades. Genuinely local — 20–30 minutes away.",
        }}
        mainContent={{
          heading: "SE11 Locksmith — Covering the Entire Postcode",
          body: [
            "The SE11 postcode district is one of London's most centrally located South London areas, encompassing Kennington, parts of Vauxhall, and the Lambeth waterfront. It combines historic Victorian and Edwardian housing stock with a growing number of modern apartment developments — all of which require professional locksmith services at some point.",
            "Lockstar Locksmith Kennington provides comprehensive locksmith coverage across all of SE11. Whether your property is on the Kennington Road, near the Oval, in the streets around Kennington Park, or on one of the many residential roads throughout SE11, our technicians can reach you in approximately 20–30 minutes.",
            "The mix of property types in SE11 means our locksmiths work on a very wide range of lock types every day — from Victorian sash window catches and period mortice locks to modern UPVC multipoint systems and high-tech smart locks. This breadth of experience means we can handle whatever lock challenge you face.",
            "SE11 residents often find us through emergency lockouts — this accounts for a significant proportion of our SE11 call-outs. However, we also carry out a large volume of planned work for landlords, letting agents, property managers, and homeowners across the postcode who trust Lockstar for quality and reliability.",
          ],
        }}
        services={[
          { title: "Emergency Locksmith SE11", href: "/services/emergency-locksmith", description: "24/7 lockout response across all SE11 — 20–30 min average" },
          { title: "Residential Locksmith SE11", href: "/services/residential-locksmith", description: "Home lock services for all SE11 property types" },
          { title: "Lock Replacement SE11", href: "/services/lock-replacement", description: "BS3621 replacement locks supplied and fitted" },
          { title: "UPVC Door Repairs SE11", href: "/services/upvc-door-repairs", description: "Multipoint mechanisms & handles repaired same day" },
          { title: "Commercial Locksmith SE11", href: "/services/commercial-locksmith", description: "Business security for SE11 offices and premises" },
          { title: "Burglary Repairs SE11", href: "/services/burglary-repairs", description: "Emergency response after break-in — all of SE11" },
          { title: "Auto Locksmith SE11", href: "/services/auto-locksmith", description: "Car lockouts & key programming across SE11" },
          { title: "Security Upgrades SE11", href: "/services/security-upgrades", description: "Anti-snap cylinders & home security surveys" },
        ]}
        breadcrumb={[
          { name: "Locations", href: "/locations" },
          { name: "Kennington SE11", href: "/locations/kennington-se11" },
        ]}
      />
    </>
  );
}
