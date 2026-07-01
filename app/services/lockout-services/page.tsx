import type { Metadata } from "next";
import { KeyRound } from "lucide-react";
import ServicePageLayout from "@/components/ui/ServicePageLayout";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Lockout Services Kennington | 24/7 SE11 Help",
  description:
    "Locked out in Kennington SE11? Call 07700 900000. Non-destructive entry, 20–30 min response, no call-out fee. Home, office & car lockouts covered 24/7.",
  alternates: {
    canonical: "/services/lockout-services",
    languages: {
      "en-GB": "https://lockstarlocksmithkennington.com/services/lockout-services",
      "en": "https://lockstarlocksmithkennington.com/services/lockout-services",
    },
  },
  openGraph: {
    title: "Lockout Services Kennington | 24/7 SE11 Help",
    description:
      "Locked out in Kennington SE11? Call 07700 900000. Non-destructive entry, 20–30 min response, no call-out fee. Home, office & car lockouts covered 24/7.",
    url: "https://lockstarlocksmithkennington.com/services/lockout-services",
  },
};

export default function LockoutServicesPage() {
  const webPageSchema = generateWebPageSchema({
    title: "Lockout Services Kennington | 24/7 SE11 Help",
    description:
      "Locked out in Kennington SE11? Call 07700 900000. Non-destructive entry, 20–30 min response, no call-out fee. Home, office & car lockouts covered 24/7.",
    url: "/services/lockout-services",
    datePublished: "2025-01-15",
    dateModified: "2025-06-01",
  });
  const serviceSchema = generateServiceSchema(
    "Lockout Services Kennington",
    "Professional lockout service in Kennington SE11. Non-destructive entry, 20–30 minute response, 24/7 availability.",
    "lockout-services"
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Services", href: "/services" },
    { name: "Lockout Services", href: "/services/lockout-services" },
  ]);

  return (
    <>
      <SchemaMarkup schema={webPageSchema} />
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <ServicePageLayout
        Icon={KeyRound}
        hero={{
          badge: "Lockout Services — Kennington 24/7",
          title: "Locked Out?",
          titleHighlight: "We're on Our Way.",
          description:
            "Locked out of your home, flat, or office in Kennington? Call Lockstar now. Our local locksmiths arrive in 20–30 minutes and use non-destructive entry techniques to get you back inside — without damaging your door or lock.",
          features: [
            "20–30 minute response across SE11",
            "Non-destructive entry prioritised",
            "All lock types opened",
            "Available 24 hours, 7 days",
            "No call-out fee",
            "Fixed price before we arrive",
          ],
        }}
        mainContent={{
          heading: "Professional Lockout Service in Kennington",
          body: [
            "Being locked out is stressful, but it doesn't have to be complicated. Lockstar Locksmith Kennington provides a fast, professional lockout service across SE11 and Greater London. When you call us, we dispatch immediately and aim to arrive within 20–30 minutes — often much faster in central Kennington.",
            "Our first priority is always non-destructive entry — gaining access to your property without drilling, breaking, or damaging the lock. In the vast majority of lockouts, our skilled locksmiths can pick, decode, or manipulate the lock open without any damage whatsoever. This saves you the cost of replacing the lock and avoids any damage to your door.",
            "If non-destructive entry isn't possible — for example with a high-security lock or a severely damaged cylinder — we will always explain the situation and get your agreement before proceeding with any destructive method. We then replace the lock immediately on the same visit.",
            "Common lockout situations we handle include: lost or forgotten keys, keys left inside the property, broken keys, keys that won't turn in the lock, and keys that have been taken by a former partner or flatmate (in which case we strongly recommend a lock change).",
          ],
        }}
        features={[
          {
            title: "Home & Flat Lockouts",
            description: "Locked out of your house or flat in Kennington? We're there in 20–30 minutes. Non-destructive entry prioritised for all residential lockouts.",
          },
          {
            title: "Office & Business Lockouts",
            description: "Can't access your workplace? Priority response for commercial lockouts — we understand that business downtime is costly.",
          },
          {
            title: "Lost Key Lockouts",
            description: "Lost your only set of keys? We open the door and replace the lock in the same visit, giving you full key control of your property again.",
          },
          {
            title: "Keys Locked Inside",
            description: "Keys visible inside but can't reach them? Our non-destructive techniques get you back in without breaking a window or damaging the door.",
          },
          {
            title: "Broken Key in Lock",
            description: "Key snapped in the lock? We extract broken keys and replace the cylinder if necessary — often without drilling.",
          },
          {
            title: "Lock Change After Lockout",
            description: "If your security has been compromised, we recommend a lock change after a lockout — done immediately on the same visit.",
          },
        ]}
        breadcrumb={[
          { name: "Services", href: "/services" },
          { name: "Lockout Services", href: "/services/lockout-services" },
        ]}
        relatedServices={[
          { label: "Emergency Locksmith", href: "/services/emergency-locksmith" },
          { label: "Lock Replacement", href: "/services/lock-replacement" },
          { label: "Auto Locksmith", href: "/services/auto-locksmith" },
          { label: "Burglary Repairs", href: "/services/burglary-repairs" },
        ]}
      />
    </>
  );
}
