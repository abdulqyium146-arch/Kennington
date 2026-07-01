import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import SchemaMarkup from "@/components/ui/SchemaMarkup";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Locksmith Areas Covered | Kennington SE11 & London",
  description:
    "Lockstar Locksmith covers Kennington SE11, Kensington, Abingdon Oxfordshire and across London. Call " +
    BUSINESS.phone +
    " for your local locksmith.",
  alternates: { canonical: "/locations" },
};

const locations = [
  {
    name: "Kennington",
    postcode: "SE11",
    href: "/locations/kennington",
    description: "Our home base. Fastest response times. Serving all of SE11.",
    primary: true,
  },
  {
    name: "Kennington SE11",
    postcode: "SE11",
    href: "/locations/kennington-se11",
    description: "Full coverage across all SE11 postcodes and residential streets.",
    primary: true,
  },
  {
    name: "Kennington Road",
    postcode: "SE11",
    href: "/locations/kennington-road",
    description: "Dedicated page for Kennington Road properties and surroundings.",
    primary: false,
  },
  {
    name: "Kensington",
    postcode: "W8 / SW7",
    href: "/locations/kensington",
    description: "Premium residential locksmith for the Royal Borough of Kensington.",
    primary: false,
  },
  {
    name: "Abingdon, Oxfordshire",
    postcode: "OX14",
    href: "/locations/abingdon-oxfordshire",
    description: "Locksmith services in Abingdon and surrounding Oxfordshire villages.",
    primary: false,
  },
];

export default function LocationsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Locations", href: "/locations" },
  ]);

  return (
    <>
      <SchemaMarkup schema={breadcrumbSchema} />

      <section className="gradient-hero text-white py-16 md:py-20">
        <div className="container-main">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-5">
              Areas We Serve
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Based in Kennington SE11, we cover South and Central London plus Oxfordshire.
              Fast local response — 20–30 minutes to most areas.
            </p>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-7 py-4 rounded-xl font-black text-lg shadow-cta transition-all duration-200"
            >
              <Phone className="h-5 w-5" />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {locations.map((loc) => (
              <Link
                key={loc.href}
                href={loc.href}
                className={`group flex flex-col p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                  loc.primary
                    ? "bg-blue-700 border-blue-600 text-white hover:bg-blue-800"
                    : "bg-white border-slate-200 hover:border-blue-200 hover:bg-blue-50"
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${loc.primary ? "bg-white/20" : "bg-blue-50 group-hover:bg-blue-100"}`}>
                    <MapPin className={`h-5 w-5 ${loc.primary ? "text-white" : "text-blue-700"}`} />
                  </div>
                  <div>
                    <h2 className={`font-bold text-base ${loc.primary ? "text-white" : "text-slate-900"}`}>{loc.name}</h2>
                    <span className={`text-xs font-mono ${loc.primary ? "text-blue-200" : "text-slate-400"}`}>{loc.postcode}</span>
                  </div>
                </div>
                <p className={`text-sm leading-relaxed flex-1 ${loc.primary ? "text-blue-100" : "text-slate-600"}`}>
                  {loc.description}
                </p>
                <div className={`flex items-center gap-1.5 text-sm font-semibold mt-4 group-hover:gap-2.5 transition-all duration-200 ${loc.primary ? "text-blue-200" : "text-blue-700"}`}>
                  View area page <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h3 className="font-bold text-slate-900 mb-3">Also Covering Across London</h3>
            <div className="flex flex-wrap gap-2">
              {BUSINESS.serviceAreas.map((area) => (
                <span key={area} className="bg-white border border-slate-200 text-slate-700 text-sm px-3 py-1.5 rounded-full">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-slate-900 text-white text-center">
        <div className="container-main">
          <h2 className="text-2xl font-black mb-2">Not Sure if We Cover You?</h2>
          <p className="text-slate-400 mb-6">Call us — if we can reach you fast, we&apos;ll tell you honestly.</p>
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-black text-lg shadow-cta transition-all duration-200"
          >
            <Phone className="h-5 w-5" />
            Call {BUSINESS.phone}
          </a>
        </div>
      </section>
    </>
  );
}
