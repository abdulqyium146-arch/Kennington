import type { Metadata } from "next";
import { Plus } from "lucide-react";
import ServicePageLayout from "@/components/ui/ServicePageLayout";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema, generateWebPageSchema, generateFAQSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Lock Installation Kennington | New Locks SE11",
  description:
    "Lock installation in Kennington SE11. New locks fitted for all door types — BS3621 & high-security. Call 07700 900000. Same-day fitting, fully insured.",
  alternates: {
    canonical: "/services/lock-installation",
    languages: {
      "en-GB": "https://lockstarlocksmithkennington.com/services/lock-installation",
      "en": "https://lockstarlocksmithkennington.com/services/lock-installation",
    },
  },
  openGraph: {
    title: "Lock Installation Kennington | New Locks SE11",
    description:
      "Lock installation in Kennington SE11. New locks fitted for all door types — BS3621 & high-security. Call 07700 900000. Same-day fitting, fully insured.",
    url: "https://lockstarlocksmithkennington.com/services/lock-installation",
  },
};

export default function LockInstallationPage() {
  const webPageSchema = generateWebPageSchema({
    title: "Lock Installation Kennington | New Locks SE11",
    description:
      "Lock installation in Kennington SE11. New locks fitted for all door types — BS3621 & high-security. Call 07700 900000. Same-day fitting, fully insured.",
    url: "/services/lock-installation",
    datePublished: "2025-01-15",
    dateModified: "2025-06-01",
  });
  const serviceSchema = generateServiceSchema(
    "Lock Installation Kennington",
    "Professional lock installation service in Kennington SE11. New locks fitted for all door and window types.",
    "lock-installation"
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Services", href: "/services" },
    { name: "Lock Installation", href: "/services/lock-installation" },
  ]);
  const faqSchema = generateFAQSchema([
    { question: "What types of locks do you install in Kennington?", answer: "We install Yale rim locks, BS3621 mortice deadlocks, UPVC cylinders, high-security cylinders, window locks, garage locks, and smart locks." },
    { question: "How do I know which lock is right for my door?", answer: "We assess your door, frame construction, and insurance requirements before recommending the correct lock type and security grade." },
    { question: "Do the locks you install meet home insurance requirements?", answer: "Yes. All locks we recommend and supply meet BS3621 and standard UK home insurance requirements. We advise specifically on your policy if required." },
    { question: "Can you install a lock on a new door?", answer: "Yes. New door lock installation including mortice pocket cutting is within our capability for all standard timber and composite doors." },
    { question: "What is the difference between a rim lock and a mortice lock?", answer: "A rim lock mounts on the door surface — the Yale nightlatch is a common example. A mortice lock sits inside the door body and provides significantly higher security." },
    { question: "Can you install a lock on a fire door?", answer: "Yes. We install appropriate fire door hardware including BS EN 12209-compliant mortice locks suitable for fire-rated doors." },
    { question: "How long does lock installation take?", answer: "A standard deadlock installation takes 45–90 minutes. Cylinder-only installations are typically completed in under 30 minutes." },
    { question: "Do you install high-security locks such as Mul-T-Lock and Banham?", answer: "Yes. We are experienced with Mul-T-Lock, Banham, Abloy, and ASSA ABLOY high-security lock installation across SE11." },
    { question: "Can you install a lock on a garage door?", answer: "Yes. We install padlocks, hasp and staple sets, and dedicated garage door locking systems." },
    { question: "How much does lock installation cost in SE11?", answer: "From £89 for a standard mortice or rim lock installation. Fixed price quoted before work begins — no call-out fee." },
  ], "/services/lock-installation");

  return (
    <>
      <SchemaMarkup schema={faqSchema} />
      <SchemaMarkup schema={webPageSchema} />
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
