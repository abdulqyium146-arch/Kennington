import type { Metadata } from "next";
import { Home } from "lucide-react";
import ServicePageLayout from "@/components/ui/ServicePageLayout";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import { generateServiceSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Residential Locksmith Kennington | Home Lock Services SE11",
  description:
    "Residential locksmith in Kennington SE11. Lock fitting, replacement & repair for homes and flats. Call " +
    BUSINESS.phone +
    ". DBS checked, insured, 24/7.",
  alternates: { canonical: "/services/residential-locksmith" },
};

export default function ResidentialLocksmithPage() {
  const serviceSchema = generateServiceSchema(
    "Residential Locksmith Kennington",
    "Residential locksmith services in Kennington SE11. Home lockouts, lock fitting, replacement and security upgrades.",
    "residential-locksmith"
  );
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Services", href: "/services" },
    { name: "Residential Locksmith", href: "/services/residential-locksmith" },
  ]);

  return (
    <>
      <SchemaMarkup schema={serviceSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <ServicePageLayout
        Icon={Home}
        hero={{
          badge: "Residential Services — Kennington SE11",
          title: "Residential Locksmith",
          titleHighlight: "Kennington",
          description:
            "Expert locksmith services for homes and flats across Kennington and SE11. From emergency lockouts to full home security upgrades — all work carried out by DBS checked, fully insured local locksmiths.",
          features: [
            "All residential lock types covered",
            "BS3621 British Standard locks supplied",
            "Non-destructive entry techniques",
            "Same-visit lock replacement",
            "Home security surveys available",
            "24/7 emergency response",
          ],
        }}
        mainContent={{
          heading: "Trusted Residential Locksmith Services in Kennington",
          body: [
            "Lockstar Locksmith Kennington provides a comprehensive residential locksmith service for homeowners and tenants across SE11. Whether you need emergency access after a lockout, a new lock fitted on a recently purchased property, or a full home security review, our local team has the skills and equipment to help.",
            "We work on all types of residential properties across Kennington — Victorian terraces, purpose-built flats, new-builds, and converted properties. Our locksmiths are experienced with every lock type found in London homes, including Yale rim locks, BS3621 mortice deadlocks, UPVC multipoint locking systems, and high-security cylinders from brands such as Mul-T-Lock, Banham, ERA, and Abloy.",
            "All our residential work uses quality British Standard locks that meet or exceed insurance requirements. We can advise you on the right level of security for your property and budget, and always aim to complete the work on the same visit.",
            "Our DBS-checked locksmiths treat your home with respect. We work cleanly, cause minimal disruption, and always explain what we are doing and why. After every job, we make sure you are completely satisfied before we leave.",
          ],
        }}
        features={[
          {
            title: "Home Lockouts",
            description: "Locked out of your house or flat? We provide fast non-destructive entry for all residential property types across Kennington.",
          },
          {
            title: "Lock Fitting & Replacement",
            description: "New lock installation using quality British Standard BS3621 deadlocks and high-security cylinders that meet home insurance requirements.",
          },
          {
            title: "Key Cutting & Duplication",
            description: "Key cutting services for standard and high-security keys. We can cut new keys for most residential lock types.",
          },
          {
            title: "Window Lock Installation",
            description: "Additional security for ground-floor and accessible windows — sash window locks, UPVC window locks, and handle locks.",
          },
          {
            title: "Landlord Lock Changes",
            description: "Prompt lock change service for landlords between tenancies — ensuring new tenants have full key control of the property.",
          },
          {
            title: "Home Security Surveys",
            description: "Free security assessment of your Kennington property — we identify vulnerabilities and recommend cost-effective improvements.",
          },
        ]}
        breadcrumb={[
          { name: "Services", href: "/services" },
          { name: "Residential Locksmith", href: "/services/residential-locksmith" },
        ]}
        relatedServices={[
          { label: "Emergency Locksmith", href: "/services/emergency-locksmith" },
          { label: "Lock Replacement", href: "/services/lock-replacement" },
          { label: "UPVC Door Repairs", href: "/services/upvc-door-repairs" },
          { label: "Security Upgrades", href: "/services/security-upgrades" },
          { label: "Burglary Repairs", href: "/services/burglary-repairs" },
        ]}
      />
    </>
  );
}
