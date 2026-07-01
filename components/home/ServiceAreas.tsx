import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const primaryAreas = [
  {
    name: "Kennington",
    postcode: "SE11",
    href: "/locations/kennington",
    featured: true,
    description: "Our home base. Fastest response times across all of SE11.",
  },
  {
    name: "Kennington Road",
    postcode: "SE11",
    href: "/locations/kennington-road",
    featured: true,
    description: "Covering all properties along Kennington Road and side streets.",
  },
  {
    name: "Vauxhall",
    postcode: "SE11 / SW8",
    href: "/locations/kennington",
    featured: false,
    description: "Quick access from Vauxhall Bridge Road to Kennington Lane.",
  },
  {
    name: "Oval",
    postcode: "SE11",
    href: "/locations/kennington-se11",
    featured: false,
    description: "Serving Oval and surroundings from Harleyford Road to Clapham Road.",
  },
  {
    name: "Stockwell",
    postcode: "SW9",
    href: "/locations/kennington",
    featured: false,
    description: "Regular coverage across Stockwell Road and Clapham Road.",
  },
  {
    name: "Elephant & Castle",
    postcode: "SE1 / SE17",
    href: "/locations/kennington",
    featured: false,
    description: "Fast response to the regeneration area and New Kent Road.",
  },
  {
    name: "Waterloo",
    postcode: "SE1",
    href: "/locations/kennington",
    featured: false,
    description: "Covering Waterloo, South Bank, and Lower Marsh.",
  },
  {
    name: "Lambeth",
    postcode: "SE1 / SE11",
    href: "/locations/kennington",
    featured: false,
    description: "Full Lambeth borough coverage including Albert Embankment.",
  },
  {
    name: "Kensington",
    postcode: "W8 / SW7",
    href: "/locations/kensington",
    featured: true,
    description: "Premium residential locksmith service across Royal Borough.",
  },
];

export default function ServiceAreas() {
  return (
    <section className="section-padding bg-slate-900 text-white" aria-label="Service areas">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-wider mb-3">
            Coverage Area
          </p>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Areas We Cover
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Based in Kennington SE11, we provide fast locksmith response across South
            and Central London. Serving {BUSINESS.serviceAreas.length}+ areas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {primaryAreas.map((area) => (
            <Link
              key={area.name}
              href={area.href}
              className={`group flex items-start gap-4 p-5 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 ${
                area.featured
                  ? "bg-blue-800/50 border-blue-600 hover:bg-blue-800"
                  : "bg-slate-800 border-slate-700 hover:border-slate-500 hover:bg-slate-700"
              }`}
            >
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0 ${
                  area.featured ? "bg-blue-500" : "bg-slate-700"
                }`}
              >
                <MapPin className="h-5 w-5 text-white" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-white">{area.name}</h3>
                  <span className="text-xs text-slate-400 font-mono">{area.postcode}</span>
                </div>
                <p className="text-slate-400 text-sm leading-snug">{area.description}</p>
                <div className="flex items-center gap-1.5 text-blue-400 text-xs font-semibold mt-2 group-hover:gap-2.5 transition-all duration-200">
                  View page <ArrowRight className="h-3 w-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* All areas tags */}
        <div className="border-t border-slate-800 pt-8">
          <p className="text-slate-400 text-sm mb-4 text-center">
            We also cover these areas across South &amp; Central London:
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {BUSINESS.serviceAreas
              .filter(
                (area) =>
                  !primaryAreas.some((primary) => primary.name === area)
              )
              .map((area) => (
                <span
                  key={area}
                  className="bg-slate-800 border border-slate-700 text-slate-300 text-sm px-3 py-1.5 rounded-full"
                >
                  {area}
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
