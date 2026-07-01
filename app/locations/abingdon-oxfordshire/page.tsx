import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import LocationPageLayout from "@/components/ui/LocationPageLayout";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Locksmith Abingdon Oxfordshire | 24/7 Locksmith Service",
  description:
    "Locksmith in Abingdon, Oxfordshire. Emergency lockouts, lock fitting & repair. Call " +
    BUSINESS.phone +
    ". DBS checked, fast response, no call-out fee. Serving Abingdon and surrounding Oxfordshire villages.",
  keywords: [
    "locksmith abingdon",
    "locksmith abingdon oxfordshire",
    "abingdon locksmith",
    "emergency locksmith abingdon",
    "locksmith oxfordshire",
  ],
  alternates: { canonical: "/locations/abingdon-oxfordshire" },
};

export default function AbingdonOxfordshirePage() {
  const businessSchema = generateLocalBusinessSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Locations", href: "/locations" },
    { name: "Abingdon, Oxfordshire", href: "/locations/abingdon-oxfordshire" },
  ]);

  return (
    <>
      <SchemaMarkup schema={businessSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <LocationPageLayout
        Icon={MapPin}
        location={{
          name: "Abingdon, Oxfordshire",
          nameShort: "Abingdon",
          postcode: "OX14",
          description:
            "Abingdon-on-Thames is a historic market town in Oxfordshire, situated on the River Thames approximately 6 miles south of Oxford. It is one of England's oldest continuously inhabited towns.",
          landmarks: [
            "Abingdon Market Place",
            "Abingdon Bridge",
            "St Helen's Church",
            "River Thames",
            "Abingdon County Hall Museum",
          ],
          roads: [
            "Abingdon Road (A4183)",
            "Oxford Road",
            "Drayton Road",
            "Wootton Road",
            "Bath Street",
          ],
          nearbyAreas: [
            "Oxford",
            "Didcot",
            "Wantage",
            "Culham",
            "Sutton Courtenay",
          ],
        }}
        hero={{
          badge: "Locksmith — Abingdon, Oxfordshire",
          title: "Locksmith in Abingdon, Oxfordshire",
          description:
            "Professional locksmith services in Abingdon and across Oxfordshire. Emergency lockouts, lock fitting, and security upgrades for homes and businesses in Abingdon, Oxford, and surrounding villages.",
        }}
        mainContent={{
          heading: "Locksmith Services in Abingdon, Oxfordshire",
          body: [
            "Abingdon-on-Thames is one of Oxfordshire's most charming market towns — a mix of historic period properties, modern residential developments, and a thriving commercial centre. Lockstar provides professional locksmith services across Abingdon and the surrounding Oxfordshire villages, with the same standards of quality, transparency, and professionalism as our London service.",
            "Abingdon's housing stock ranges from 17th and 18th century period properties in the town centre to large post-war estates and modern executive developments on the town's fringes. We work on all property types and all lock configurations common to the area — from traditional 5-lever mortice locks and Yale rim locks to modern UPVC multipoint systems on newer properties.",
            "Emergency lockouts are one of our most common Abingdon call-outs — residents locked out of their homes, businesses unable to access their premises, or individuals who have lost their only set of keys. We respond promptly and always aim to gain entry using non-destructive techniques.",
            "We also carry out a significant volume of planned work in Abingdon — including lock changes for landlords and letting agents, security upgrades for homeowners looking to improve their protection, UPVC door repairs, and lock installations on newly built properties.",
          ],
        }}
        services={[
          { title: "Emergency Locksmith Abingdon", href: "/services/emergency-locksmith", description: "24/7 emergency lockout response across Abingdon OX14" },
          { title: "Residential Locksmith Abingdon", href: "/services/residential-locksmith", description: "Home lock services for all Abingdon property types" },
          { title: "Lock Replacement Abingdon", href: "/services/lock-replacement", description: "BS3621 locks for homes & businesses in Abingdon" },
          { title: "UPVC Door Repairs Abingdon", href: "/services/upvc-door-repairs", description: "Multipoint mechanisms repaired & replaced" },
          { title: "Commercial Locksmith Abingdon", href: "/services/commercial-locksmith", description: "Business security solutions for Abingdon premises" },
          { title: "Burglary Repairs Abingdon", href: "/services/burglary-repairs", description: "Emergency boarding up after break-in" },
          { title: "Security Upgrades Abingdon", href: "/services/security-upgrades", description: "Anti-snap locks & property security surveys" },
          { title: "Auto Locksmith Abingdon", href: "/services/auto-locksmith", description: "Car lockouts & key cutting in Abingdon" },
        ]}
        breadcrumb={[
          { name: "Locations", href: "/locations" },
          { name: "Abingdon, Oxfordshire", href: "/locations/abingdon-oxfordshire" },
        ]}
      />
    </>
  );
}
