import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import ServicePageLayout from "@/components/ui/ServicePageLayout";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Security Upgrades Kennington | Anti-Snap SE11",
  description:
    "Home & business security upgrades in Kennington SE11. Anti-snap cylinders, door reinforcement, free security survey. Call 07700 900000. Fully insured.",
  alternates: {
    canonical: "/services/security-upgrades",
    languages: {
      "en-GB": "https://lockstarlocksmithkennington.com/services/security-upgrades",
      "en": "https://lockstarlocksmithkennington.com/services/security-upgrades",
    },
  },
  openGraph: {
    title: "Security Upgrades Kennington | Anti-Snap SE11",
    description:
      "Home & business security upgrades in Kennington SE11. Anti-snap cylinders, door reinforcement, free security survey. Call 07700 900000. Fully insured.",
    url: "https://lockstarlocksmithkennington.com/services/security-upgrades",
  },
};

export default function SecurityUpgradesPage() {
  const webPageSchema = generateWebPageSchema({
    title: "Security Upgrades Kennington | Anti-Snap SE11",
    description:
      "Home & business security upgrades in Kennington SE11. Anti-snap cylinders, door reinforcement, free security survey. Call 07700 900000. Fully insured.",
    url: "/services/security-upgrades",
    datePublished: "2025-01-15",
    dateModified: "2025-06-01",
  });
  const serviceSchema = generateServiceSchema(
    "Security Upgrades Kennington",
    "Home and business security upgrades in Kennington SE11. High-security lock fitting, door reinforcement, and security surveys.",
    "security-upgrades"
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Services", href: "/services" },
    { name: "Security Upgrades", href: "/services/security-upgrades" },
  ]);

  return (
    <>
      <SchemaMarkup schema={webPageSchema} />
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <ServicePageLayout
        Icon={ShieldCheck}
        hero={{
          badge: "Security Upgrades — Kennington SE11",
          title: "Home & Business",
          titleHighlight: "Security Upgrades",
          description:
            "Is your Kennington property as secure as it could be? Our security survey and upgrade service identifies vulnerabilities and implements cost-effective improvements — from anti-snap lock upgrades to door frame reinforcement.",
          features: [
            "Free security survey available",
            "Anti-snap cylinder upgrades",
            "Door frame reinforcement",
            "Window security solutions",
            "High-security lock brands stocked",
            "Insurance-compliant upgrades",
          ],
        }}
        mainContent={{
          heading: "Expert Home & Business Security Upgrades in Kennington",
          body: [
            "Most burglaries in Kennington and SE11 are opportunistic — they target properties with visible security weaknesses. A relatively small investment in the right security upgrades can make your property a significantly harder target, deterring potential intruders before they even attempt entry.",
            "Lockstar Locksmith Kennington offers a comprehensive security survey and upgrade service for homes and businesses across SE11. Our experienced locksmiths assess your property's security from a burglar's perspective, identifying the most critical vulnerabilities and recommending cost-effective improvements.",
            "The most common and cost-effective security upgrade for London properties is replacing standard euro cylinders with anti-snap, anti-drill, anti-pick cylinders. Cylinder snapping — where a cheap euro cylinder is snapped off using a pair of pliers — is one of the most common burglary methods, and a high-quality anti-snap cylinder eliminates this vulnerability entirely.",
            "We also supply and fit door frame reinforcement hardware, hinge bolts, door chains and limiters, window locks, security lighting recommendations, and letter box restrictors. We always prioritise improvements that give you the best security return for your budget.",
          ],
        }}
        features={[
          {
            title: "Anti-Snap Cylinder Upgrade",
            description: "The single most effective security upgrade for UPVC and composite doors. Eliminates the cylinder-snapping burglary technique entirely.",
          },
          {
            title: "Door Frame Reinforcement",
            description: "Steel door frame reinforcement plates, hinge bolts, and security keeps — significantly increasing resistance to forced entry.",
          },
          {
            title: "High-Security Lock Fitting",
            description: "Mul-T-Lock, Banham, Abloy, and ERA Fortress high-security locks providing maximum protection against all attack methods.",
          },
          {
            title: "Window Security",
            description: "Window locks, window restrictors, and sash window stops to prevent ground-floor and accessible window entry.",
          },
          {
            title: "Security Survey",
            description: "Comprehensive free security assessment of your property — we identify and prioritise vulnerabilities with an honest, no-pressure report.",
          },
          {
            title: "Insurance Compliance",
            description: "All upgrades are selected to meet home and business insurance requirements — we advise specifically on what your insurer requires.",
          },
        ]}
        breadcrumb={[
          { name: "Services", href: "/services" },
          { name: "Security Upgrades", href: "/services/security-upgrades" },
        ]}
        relatedServices={[
          { label: "Lock Replacement", href: "/services/lock-replacement" },
          { label: "Lock Installation", href: "/services/lock-installation" },
          { label: "Smart Locks", href: "/services/smart-locks" },
          { label: "Burglary Repairs", href: "/services/burglary-repairs" },
          { label: "Commercial Locksmith", href: "/services/commercial-locksmith" },
        ]}
      />
    </>
  );
}
