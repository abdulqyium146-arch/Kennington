import type { Metadata } from "next";
import { RotateCcw } from "lucide-react";
import ServicePageLayout from "@/components/ui/ServicePageLayout";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema, generateWebPageSchema, generateFAQSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Lock Replacement Kennington | BS3621 Locks SE11",
  description:
    "Lock replacement in Kennington SE11. Yale, Mul-T-Lock, ERA, Banham supplied and fitted. Call 07984 547185. Same-day service, BS3621 approved, insured.",
  alternates: {
    canonical: "/services/lock-replacement",
    languages: {
      "en-GB": "https://lockstarlocksmithkennington.com/services/lock-replacement",
      "en": "https://lockstarlocksmithkennington.com/services/lock-replacement",
    },
  },
  openGraph: {
    title: "Lock Replacement Kennington | BS3621 Locks SE11",
    description:
      "Lock replacement in Kennington SE11. Yale, Mul-T-Lock, ERA, Banham supplied and fitted. Call 07984 547185. Same-day service, BS3621 approved, insured.",
    url: "https://lockstarlocksmithkennington.com/services/lock-replacement",
  },
};

export default function LockReplacementPage() {
  const webPageSchema = generateWebPageSchema({
    title: "Lock Replacement Kennington | BS3621 Locks SE11",
    description:
      "Lock replacement in Kennington SE11. Yale, Mul-T-Lock, ERA, Banham supplied and fitted. Call 07984 547185. Same-day service, BS3621 approved, insured.",
    url: "/services/lock-replacement",
    datePublished: "2025-01-15",
    dateModified: "2025-06-01",
  });
  const serviceSchema = generateServiceSchema(
    "Lock Replacement Kennington",
    "Lock replacement service in Kennington SE11. Quality British Standard BS3621 locks supplied and fitted same day.",
    "lock-replacement"
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Services", href: "/services" },
    { name: "Lock Replacement", href: "/services/lock-replacement" },
  ]);
  const faqSchema = generateFAQSchema([
    { question: "What British Standard locks do you supply and fit in Kennington?", answer: "We carry Yale, Chubb, ERA Fortress, Mul-T-Lock, Banham, and Abloy BS3621-approved deadlocks and cylinders." },
    { question: "What is a BS3621 lock?", answer: "BS3621 is the British Standard for thief-resistant lock assemblies. It requires a minimum 20mm bolt throw, anti-drill protection, anti-pick pins, and 1000 key differs. Required by most UK home insurers." },
    { question: "How do I know if my lock needs replacing?", answer: "Replace your lock if: it is difficult to operate, it is worn or corroded, after a lockout or burglary, after a tenancy change, or if it is more than 10 years old." },
    { question: "Should I change my locks when I move into a new property?", answer: "Yes. You cannot know how many key copies exist from previous occupants. A lock change is the single most important security action when moving in." },
    { question: "What is an anti-snap lock?", answer: "An anti-snap cylinder is engineered to shear at a designated point before the critical locking mechanism, preventing the cylinder-snapping burglary technique." },
    { question: "How long does a lock replacement take in SE11?", answer: "A standard front door lock replacement takes 30–45 minutes. UPVC cylinder swaps are typically completed in under 30 minutes." },
    { question: "Can you fit a new lock on any door type?", answer: "Yes. We work on all door types including timber, UPVC, composite, and fire doors." },
    { question: "Can I supply my own lock for you to fit?", answer: "Yes. We can fit a lock you have purchased, though we cannot provide a product warranty in this case and cannot guarantee it meets insurance requirements." },
    { question: "Do you fit smart lock cylinders?", answer: "Yes. We supply and fit Nuki, Ultion Smart, and Yale smart cylinder upgrades as well as traditional rim locks and mortice deadlocks." },
    { question: "How much does a lock replacement cost in Kennington?", answer: "From £89 including a quality British Standard replacement lock. Fixed price quoted before work begins — no hidden charges." },
  ], "/services/lock-replacement");

  return (
    <>
      <SchemaMarkup schema={faqSchema} />
      <SchemaMarkup schema={webPageSchema} />
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
