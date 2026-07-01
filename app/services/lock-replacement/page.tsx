import type { Metadata } from "next";
import { RotateCcw } from "lucide-react";
import ServicePageLayout from "@/components/ui/ServicePageLayout";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Lock Replacement Kennington | New Locks Fitted SE11",
  description:
    "Lock replacement in Kennington SE11. Yale, Mul-T-Lock, ERA, Banham locks supplied and fitted. Call " +
    BUSINESS.phone +
    ". Same-day service, BS3621 approved.",
  alternates: { canonical: "/services/lock-replacement" },
};

export default function LockReplacementPage() {
  const serviceSchema = generateServiceSchema(
    "Lock Replacement Kennington",
    "Lock replacement service in Kennington SE11. Quality British Standard BS3621 locks supplied and fitted same day.",
    "lock-replacement"
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Services", href: "/services" },
    { name: "Lock Replacement", href: "/services/lock-replacement" },
  ]);

  return (
    <>
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <ServicePageLayout
        Icon={RotateCcw}
        hero={{
          badge: "Lock Replacement — Kennington SE11",
          title: "Lock Replacement",
          titleHighlight: "Kennington",
          description:
            "Quality British Standard lock replacement for homes and businesses across Kennington. We supply and fit BS3621 approved, insurance-compliant locks from leading brands — same day service available.",
          features: [
            "BS3621 British Standard locks supplied",
            "Yale, Mul-T-Lock, ERA, Banham stocked",
            "Same-day fitting available",
            "Insurance-approved replacements",
            "All door types and lock styles covered",
            "Free advice on best lock for your needs",
          ],
        }}
        mainContent={{
          heading: "Professional Lock Replacement in Kennington",
          body: [
            "Whether your lock is worn out, damaged, or simply outdated, Lockstar Locksmith Kennington provides a fast, professional lock replacement service across SE11. We stock a comprehensive range of quality replacement locks and can advise you on the best option for your door, budget, and insurance requirements.",
            "Many home and business insurance policies require BS3621-rated locks to be fitted — the British Standard for high-security door locks. All locks we recommend and supply meet or exceed this standard, ensuring your property is protected and your insurance remains valid.",
            "We work with locks from the industry's leading brands — Yale, Mul-T-Lock, Banham, ERA, Union, Chubb, and Abloy. Whether you need a simple cylinder replacement, a new mortice deadlock, or a high-security anti-snap lock to replace a vulnerable euro cylinder, we have it in stock.",
            "Lock replacement is also recommended after moving into a new property (you can never be certain who holds keys to the old locks), after losing a set of keys, or following a burglary or attempted break-in. Our locksmiths can advise on the right security level for your specific situation.",
          ],
        }}
        features={[
          {
            title: "Cylinder Replacement",
            description: "Fast euro cylinder replacement — the most common lock type on UPVC and composite doors. Anti-snap cylinders strongly recommended for high-security applications.",
          },
          {
            title: "Mortice Deadlock Replacement",
            description: "BS3621 5-lever mortice deadlock replacement for traditional timber doors — the gold standard for home and insurance security.",
          },
          {
            title: "Yale Rim Lock Replacement",
            description: "Yale and rim night latch replacement for front doors — standard and high-security options available.",
          },
          {
            title: "Anti-Snap Lock Upgrades",
            description: "Upgrade from a standard euro cylinder to an anti-snap, anti-drill, anti-pick cylinder — recommended for all UPVC and composite doors.",
          },
          {
            title: "High-Security Lock Brands",
            description: "We stock and fit Mul-T-Lock, Banham, Abloy, and ERA Fortress high-security locks — the highest levels of protection available.",
          },
          {
            title: "New Property Lock Change",
            description: "Just moved in? Lock change service for new homeowners — replace all existing locks the same day so you have complete key control.",
          },
        ]}
        breadcrumb={[
          { name: "Services", href: "/services" },
          { name: "Lock Replacement", href: "/services/lock-replacement" },
        ]}
        relatedServices={[
          { label: "Lock Repair", href: "/services/lock-repair" },
          { label: "Lock Installation", href: "/services/lock-installation" },
          { label: "Emergency Locksmith", href: "/services/emergency-locksmith" },
          { label: "Security Upgrades", href: "/services/security-upgrades" },
          { label: "Burglary Repairs", href: "/services/burglary-repairs" },
        ]}
      />
    </>
  );
}
