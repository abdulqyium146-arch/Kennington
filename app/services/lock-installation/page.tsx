import type { Metadata } from "next";
import { Plus } from "lucide-react";
import ServicePageLayout from "@/components/ui/ServicePageLayout";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Lock Installation Kennington | New Locks Fitted SE11",
  description:
    "Lock installation in Kennington SE11. New locks fitted for doors and windows. Call " +
    BUSINESS.phone +
    ". BS3621 locks, same-day fitting, all door types.",
  alternates: { canonical: "/services/lock-installation" },
};

export default function LockInstallationPage() {
  const serviceSchema = generateServiceSchema(
    "Lock Installation Kennington",
    "Professional lock installation service in Kennington SE11. New locks fitted for all door and window types.",
    "lock-installation"
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Services", href: "/services" },
    { name: "Lock Installation", href: "/services/lock-installation" },
  ]);

  return (
    <>
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <ServicePageLayout
        Icon={Plus}
        hero={{
          badge: "Lock Installation — Kennington SE11",
          title: "Lock Installation",
          titleHighlight: "Kennington",
          description:
            "New lock installation for homes and businesses across Kennington and SE11. We supply and fit quality British Standard locks for all door and window types — with expert advice on the best security solution for your property.",
          features: [
            "All door types covered",
            "BS3621 and high-security options",
            "Window lock installation",
            "Additional security fitting",
            "Same-day installation available",
            "Expert security advice",
          ],
        }}
        mainContent={{
          heading: "Expert Lock Installation in Kennington",
          body: [
            "Whether you're improving the security of an existing door, fitting a new lock after a property purchase, or adding supplementary security to windows and gates, Lockstar Locksmith Kennington provides professional lock installation across SE11.",
            "Correct lock installation is critical to security. A high-quality lock fitted incorrectly — with a misaligned keep, insufficient fixing depth, or incorrect backset — provides far less protection than its specification suggests. Our experienced locksmiths ensure every lock is fitted precisely and correctly, first time.",
            "We install all types of door locks including Yale rim locks, 5-lever mortice deadlocks, euro cylinders, UPVC multipoint systems, and high-security locks from Mul-T-Lock, Banham, ERA, and Abloy. We also fit window locks, patio door locks, garage locks, and gate locks.",
            "Before recommending a lock, we always assess your door type, frame condition, and security requirements. The best lock for a solid timber Victorian door is different to the best solution for a modern UPVC door or a composite door — we make sure you get the right product for your specific situation.",
          ],
        }}
        features={[
          {
            title: "Front Door Lock Fitting",
            description: "New lock installation on front doors — mortice deadlocks, cylinder locks, and multipoint systems for all door materials.",
          },
          {
            title: "Back Door Security",
            description: "Additional lock fitting for back and side doors, often the most vulnerable entry points. BS3621 deadlock fitting recommended.",
          },
          {
            title: "Window Lock Fitting",
            description: "Sash window stops, UPVC window locks, and casement locks fitted to improve security on ground floor and accessible windows.",
          },
          {
            title: "Patio & French Door Locks",
            description: "Patio door security bolts, multipoint lock upgrades, and additional locking points for sliding and French doors.",
          },
          {
            title: "Garage & Gate Locks",
            description: "Heavy-duty padlocks, garage door locks, and gate bolt locks fitted to protect outbuildings and perimeter access points.",
          },
          {
            title: "Insurance-Approved Fitting",
            description: "All installations comply with home insurance requirements — we can advise specifically on what your insurer requires.",
          },
        ]}
        breadcrumb={[
          { name: "Services", href: "/services" },
          { name: "Lock Installation", href: "/services/lock-installation" },
        ]}
        relatedServices={[
          { label: "Lock Replacement", href: "/services/lock-replacement" },
          { label: "Lock Repair", href: "/services/lock-repair" },
          { label: "Security Upgrades", href: "/services/security-upgrades" },
          { label: "Residential Locksmith", href: "/services/residential-locksmith" },
        ]}
      />
    </>
  );
}
