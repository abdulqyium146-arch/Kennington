import Link from "next/link";
import { Phone, Mail, MapPin, Shield, Clock, Star, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const serviceLinks = [
  { label: "Emergency Locksmith", href: "/services/emergency-locksmith" },
  { label: "Residential Locksmith", href: "/services/residential-locksmith" },
  { label: "Commercial Locksmith", href: "/services/commercial-locksmith" },
  { label: "Auto Locksmith", href: "/services/auto-locksmith" },
  { label: "Lock Replacement", href: "/services/lock-replacement" },
  { label: "Lock Repair", href: "/services/lock-repair" },
  { label: "UPVC Door Repairs", href: "/services/upvc-door-repairs" },
  { label: "Burglary Repairs", href: "/services/burglary-repairs" },
  { label: "Smart Locks", href: "/services/smart-locks" },
  { label: "Security Upgrades", href: "/services/security-upgrades" },
];

const areaLinks = [
  { label: "Kennington SE11", href: "/locations/kennington" },
  { label: "Kennington Road", href: "/locations/kennington-road" },
  { label: "Oval SE11", href: "/locations/oval" },
  { label: "Vauxhall SE11/SW8", href: "/locations/vauxhall" },
  { label: "Elephant & Castle", href: "/locations/elephant-and-castle" },
  { label: "Waterloo SE1", href: "/locations/waterloo" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400" aria-label="Site footer">

      {/* Emergency CTA banner */}
      <div className="bg-red-600 py-5">
        <div className="container-main flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-base">
              Locked Out? We&apos;re Available Right Now.
            </p>
            <p className="text-red-100/80 text-sm mt-0.5">
              24/7 emergency locksmith — Kennington &amp; Greater London
            </p>
          </div>
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-2 bg-white text-red-600 px-5 py-2.5 rounded-lg font-black text-base hover:bg-red-50 transition-colors duration-150 shadow-md flex-shrink-0"
            aria-label={`Emergency call: ${BUSINESS.phone}`}
          >
            <Phone className="h-4.5 w-4.5" aria-hidden="true" />
            {BUSINESS.phone}
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          {/* Brand column */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-lg flex-shrink-0">
                <Shield className="h-4.5 w-4.5 text-white" aria-hidden="true" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-black text-white text-sm tracking-tight">LOCKSTAR</span>
                <span className="text-blue-400 text-[10px] font-semibold tracking-widest uppercase mt-0.5">
                  Locksmith Kennington
                </span>
              </div>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Your trusted local locksmith — Kennington, SE11 and Greater London.
              DBS checked, fully insured, available 24/7.
            </p>

            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5 text-sm">
                <MapPin className="h-4 w-4 text-slate-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-slate-500">Kennington Road, London SE11</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <Phone className="h-4 w-4 text-slate-600 flex-shrink-0" aria-hidden="true" />
                <a
                  href={BUSINESS.phoneHref}
                  className="text-white hover:text-blue-400 transition-colors duration-150 font-semibold"
                >
                  {BUSINESS.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <Mail className="h-4 w-4 text-slate-600 flex-shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="text-slate-500 hover:text-slate-300 transition-colors duration-150 text-xs"
                >
                  {BUSINESS.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <Clock className="h-4 w-4 text-green-500 flex-shrink-0" aria-hidden="true" />
                <span className="text-green-500 font-semibold text-xs">Open 24/7 — 365 days</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-500 hover:text-white text-sm transition-colors duration-150 flex items-center gap-1 group"
                  >
                    <ArrowRight
                      className="h-3 w-3 text-slate-700 group-hover:text-blue-500 transition-colors duration-150 flex-shrink-0"
                      aria-hidden="true"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2 mb-5">
              {areaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-500 hover:text-white text-sm transition-colors duration-150 flex items-center gap-1 group"
                  >
                    <ArrowRight
                      className="h-3 w-3 text-slate-700 group-hover:text-blue-500 transition-colors duration-150 flex-shrink-0"
                      aria-hidden="true"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-slate-600 text-xs leading-relaxed">
              Also covering: Stockwell, Lambeth, Westminster, Kensington, Brixton,
              Camberwell, Borough, Bermondsey, Battersea, Clapham &amp; surrounding areas.
            </p>
          </div>

          {/* Trust & Reviews */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4">
              Why Choose Us
            </h3>
            <ul className="space-y-2 mb-5">
              {BUSINESS.trustSignals.map((signal) => (
                <li key={signal} className="flex items-center gap-2 text-sm text-slate-500">
                  <span className="w-1 h-1 rounded-full bg-green-500 flex-shrink-0" aria-hidden="true" />
                  {signal}
                </li>
              ))}
            </ul>

            {/* Rating card */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
              <div className="flex items-center gap-1 mb-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-white font-black text-xl leading-none">
                {BUSINESS.socialProof.rating}
                <span className="text-slate-500 font-normal text-sm ml-1">/5</span>
              </p>
              <p className="text-slate-500 text-xs mt-1">
                {BUSINESS.socialProof.reviewCount} verified Google Reviews
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-900 py-5">
        <div className="container-main flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <p>
            &copy; {currentYear}{" "}
            <span className="text-slate-500">{BUSINESS.name}.</span> All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-slate-400 transition-colors duration-150"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-slate-400 transition-colors duration-150"
            >
              Terms
            </Link>
            <Link
              href="/sitemap.xml"
              className="hover:text-slate-400 transition-colors duration-150"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
