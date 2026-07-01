import Link from "next/link";
import { Phone, Mail, MapPin, Shield, Clock, Star } from "lucide-react";
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
  { label: "Locksmith Kennington", href: "/locations/kennington" },
  { label: "Locksmith Kennington SE11", href: "/locations/kennington-se11" },
  { label: "Locksmith Kennington Road", href: "/locations/kennington-road" },
  { label: "Locksmith Kensington", href: "/locations/kensington" },
  { label: "Locksmith Abingdon", href: "/locations/abingdon-oxfordshire" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300" aria-label="Site footer">
      {/* Emergency CTA Banner */}
      <div className="bg-red-600 py-6">
        <div className="container-main flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-lg">
              Locked Out? We&apos;re Available Right Now.
            </p>
            <p className="text-red-100 text-sm">
              24/7 emergency locksmith — Kennington &amp; Greater London
            </p>
          </div>
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-2 bg-white text-red-600 px-6 py-3 rounded-xl font-black text-lg hover:bg-red-50 transition-colors duration-150 shadow-lg flex-shrink-0"
            aria-label={`Emergency call: ${BUSINESS.phone}`}
          >
            <Phone className="h-5 w-5" />
            {BUSINESS.phone}
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-main py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex items-center justify-center w-9 h-9 bg-blue-600 rounded-lg flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-black text-white text-base tracking-tight">LOCKSTAR</span>
                <span className="text-blue-400 text-xs font-semibold tracking-wider uppercase -mt-0.5">
                  Locksmith Kennington
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Your trusted local locksmith serving Kennington, SE11 and Greater London.
              DBS checked, fully insured, and available 24 hours a day.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5 text-sm">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <span>Kennington Road, London SE11</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <a
                  href={BUSINESS.phoneHref}
                  className="hover:text-white transition-colors duration-150 font-semibold"
                >
                  {BUSINESS.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="hover:text-white transition-colors duration-150"
                >
                  {BUSINESS.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5 text-sm">
                <Clock className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-green-400 font-semibold">Open 24/7 — 365 days</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Service Areas
            </h3>
            <ul className="space-y-2.5 mb-6">
              {areaLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <h4 className="text-white font-semibold text-sm mb-2">Also Covering:</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                Vauxhall, Oval, Stockwell, Elephant &amp; Castle, Waterloo,
                Westminster, Lambeth, Brixton, Camberwell, Borough, Bermondsey,
                Peckham, Battersea, Clapham &amp; surrounding areas.
              </p>
            </div>
          </div>

          {/* Trust & Reviews */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              Why Choose Us
            </h3>
            <div className="space-y-3 mb-6">
              {BUSINESS.trustSignals.map((signal) => (
                <div key={signal} className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
            <div className="bg-slate-800 rounded-xl p-4">
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-white font-bold text-lg">
                {BUSINESS.socialProof.rating}/5
              </p>
              <p className="text-slate-400 text-sm">
                Based on {BUSINESS.socialProof.reviewCount} Google Reviews
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800 py-6">
        <div className="container-main flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} {BUSINESS.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors duration-150">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors duration-150">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-slate-300 transition-colors duration-150">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
