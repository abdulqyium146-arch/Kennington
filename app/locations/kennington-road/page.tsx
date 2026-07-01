import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import LocationPageLayout from "@/components/ui/LocationPageLayout";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import { generateLocalBusinessSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Locksmith Kennington Road | 24/7 Locksmith Service SE11",
  description:
    "Locksmith on Kennington Road, SE11. Emergency lockouts, lock fitting & repair. Call " +
    BUSINESS.phone +
    ". DBS checked, 20 min response, no call-out fee. Serving Kennington Road and surrounding streets.",
  alternates: { canonical: "/locations/kennington-road" },
};

export default function KenningtonRoadPage() {
  const businessSchema = generateLocalBusinessSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Locations", href: "/locations" },
    { name: "Kennington Road", href: "/locations/kennington-road" },
  ]);

  return (
    <>
      <SchemaMarkup schema={businessSchema} />
      <SchemaMarkup schema={breadcrumbSchema} />
      <LocationPageLayout
        Icon={MapPin}
        location={{
          name: "Kennington Road, London SE11",
          nameShort: "Kennington Road",
          postcode: "SE11",
          description:
            "Kennington Road is one of South London's most prominent arterial roads, running from Lambeth North through Kennington to the Oval. The road is lined with Georgian and Victorian townhouses, period conversions, and commercial premises.",
          landmarks: [
            "Imperial War Museum",
            "Kennington Tube Station",
            "Archbishop's Park",
            "The Oval Cricket Ground",
            "Lambeth North Station",
          ],
          roads: [
            "Kennington Road (A3)",
            "Kennington Lane",
            "Brook Drive",
            "Renfrew Road",
            "Cleaver Square",
          ],
          nearbyAreas: ["Lambeth North", "Oval", "Elephant & Castle", "Borough", "Waterloo"],
        }}
        hero={{
          badge: "Locksmith — Kennington Road SE11",
          title: "Locksmith on Kennington Road",
          description:
            "Serving all properties on and around Kennington Road, SE11. Whether you live in one of the road's elegant Georgian townhouses, a period conversion, or a modern flat, Lockstar Locksmith is minutes away — 24 hours a day.",
        }}
        mainContent={{
          heading: "Local Locksmith Serving Kennington Road",
          body: [
            "Kennington Road (the A3) is one of South London's most recognisable streets — a historic arterial route lined with impressive Georgian and Victorian architecture running from Lambeth North through to the Oval. The road and its surrounding streets contain some of Kennington's finest period properties, as well as a significant number of converted flats, mansion blocks, and commercial premises.",
            "Lockstar Locksmith Kennington provides a dedicated locksmith service to all properties on and around Kennington Road. We're familiar with the specific lock types common to Kennington Road's Victorian and Georgian properties — including original period mortice locks, sash window fittings, and the mix of front door configurations found in terraced and semi-detached properties throughout the street.",
            "The majority of our Kennington Road call-outs are emergency lockouts — often occurring when residents leave for work and discover a locked door, or return late in the evening. We are typically on Kennington Road within 20–25 minutes of your call, and our local familiarity means we navigate the area without delays.",
            "Beyond emergency lockouts, we also carry out a significant volume of planned work on Kennington Road — landlord lock changes between tenancies, security upgrades from standard locks to BS3621 deadlocks, UPVC door repairs for the many converted flats in the area, and post-burglary repairs following the occasional break-in.",
          ],
        }}
        services={[
          { title: "Emergency Lockout — Kennington Road", href: "/services/emergency-locksmith", description: "20–25 min response to Kennington Road properties" },
          { title: "Period Property Lock Services", href: "/services/residential-locksmith", description: "Specialists in Victorian & Georgian property locks" },
          { title: "Lock Replacement", href: "/services/lock-replacement", description: "BS3621 mortice deadlocks for period properties" },
          { title: "UPVC Door Repairs", href: "/services/upvc-door-repairs", description: "Multipoint locks for converted flat front doors" },
          { title: "Landlord Lock Changes", href: "/services/lock-replacement", description: "Fast lock change between tenancies on Kennington Road" },
          { title: "Burglary Repairs", href: "/services/burglary-repairs", description: "Emergency boarding up & lock replacement" },
          { title: "Security Upgrades", href: "/services/security-upgrades", description: "Anti-snap cylinders & door reinforcement" },
          { title: "Commercial Locks", href: "/services/commercial-locksmith", description: "Business security for Kennington Road premises" },
        ]}
        breadcrumb={[
          { name: "Locations", href: "/locations" },
          { name: "Kennington Road", href: "/locations/kennington-road" },
        ]}
      />
    </>
  );
}
