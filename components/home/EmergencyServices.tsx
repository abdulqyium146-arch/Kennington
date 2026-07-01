import Link from "next/link";
import { Phone, AlertTriangle, Home, Car, Building2, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const emergencyServices = [
  {
    icon: AlertTriangle,
    title: "Locked Out of Your Home",
    description:
      "Lost your keys or locked out of your property? We arrive in 20–30 minutes and use non-destructive entry wherever possible.",
    href: "/services/lockout-services",
    urgent: true,
  },
  {
    icon: Building2,
    title: "Office or Business Lockout",
    description:
      "Can't access your commercial premises? We serve businesses across Kennington and SE11 with priority emergency response.",
    href: "/services/commercial-locksmith",
    urgent: true,
  },
  {
    icon: Car,
    title: "Locked Out of Your Car",
    description:
      "Auto locksmith specialists for all vehicle makes and models. Non-destructive vehicle entry across London.",
    href: "/services/auto-locksmith",
    urgent: false,
  },
  {
    icon: Home,
    title: "Burglary or Break-In",
    description:
      "Immediate emergency response for break-ins — boarding up, temporary security, and permanent lock replacement same day.",
    href: "/services/burglary-repairs",
    urgent: true,
  },
];

export default function EmergencyServices() {
  return (
    <section className="section-padding bg-slate-900 text-white" aria-label="Emergency locksmith services">
      <div className="container-main">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/30 text-red-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse inline-block" />
              Emergency Response — 24/7
            </div>
            <h2 className="text-3xl sm:text-4xl font-black leading-tight">
              Emergency Locksmith
              <br />
              <span className="text-blue-400">Kennington</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-xl">
              Whether you&apos;re locked out at 3am or need urgent lock repairs after
              a break-in, our Kennington team is available right now.
            </p>
          </div>
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-7 py-4 rounded-xl font-black text-lg shadow-cta hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 flex-shrink-0"
            aria-label={`Emergency call: ${BUSINESS.phone}`}
          >
            <Phone className="h-5 w-5" />
            Call {BUSINESS.phone}
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {emergencyServices.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-500 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1"
              >
                {service.urgent && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-bold px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse inline-block" />
                    URGENT
                  </div>
                )}
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-xl mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center gap-1.5 text-blue-400 text-sm font-semibold group-hover:gap-2.5 transition-all duration-200">
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 bg-red-600/10 border border-red-500/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-lg">Need emergency help right now?</p>
            <p className="text-slate-400 text-sm">
              Our Kennington team is ready. Average response time:{" "}
              <span className="text-white font-semibold">20–30 minutes.</span>
            </p>
          </div>
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3.5 rounded-xl font-bold transition-colors duration-150 flex-shrink-0"
            aria-label={`Emergency locksmith: ${BUSINESS.phone}`}
          >
            <Phone className="h-4 w-4" />
            {BUSINESS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
