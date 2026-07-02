import { Phone, Clock, Shield, Banknote, ThumbsUp, MapPin, HeartHandshake } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const reasons = [
  {
    icon: Clock,
    title: "Genuinely Fast Response",
    description:
      "Based in Kennington — not dispatched from a distant depot. Average arrival: 20–30 minutes.",
  },
  {
    icon: Shield,
    title: "DBS Checked & Insured",
    description:
      "Every technician is police-vetted and carries full public liability insurance.",
  },
  {
    icon: Banknote,
    title: "No Hidden Charges",
    description:
      "Fixed price before work starts. No surprise charges, inflated night rates, or call-out fees.",
  },
  {
    icon: ThumbsUp,
    title: "Non-Destructive Entry",
    description:
      "Professional techniques to open locks without damaging your door or frame in most cases.",
  },
  {
    icon: MapPin,
    title: "Truly Local Locksmith",
    description:
      "A local Kennington business — not a national call centre. Speak directly with a locksmith.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted by the Community",
    description: `Over ${BUSINESS.socialProof.yearsTrading} years in SE11, ${BUSINESS.socialProof.reviewCount}+ five-star Google reviews, built on trust and honest pricing.`,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="section-padding bg-white"
      aria-label="Why choose Lockstar Locksmith Kennington"
    >
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left */}
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow mb-3">Why Choose Us</p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-5">
              Kennington&apos;s Most Trusted{" "}
              <span className="text-blue-700">Local Locksmith</span>
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Choosing a locksmith is about trust — you&apos;re inviting someone into your home
              in stressful circumstances. Lockstar has built its reputation on being the most
              reliable, honest, and professional locksmith in Kennington.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href={BUSINESS.phoneHref}
                className="btn-emergency"
                aria-label={`Call Lockstar: ${BUSINESS.phone}`}
              >
                <Phone className="h-4.5 w-4.5" aria-hidden="true" />
                Call {BUSINESS.phone}
              </a>
              <a href="/about" className="btn-primary">
                About Us
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 divide-x divide-slate-100 bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden">
              {[
                { value: `${BUSINESS.socialProof.reviewCount}+`, label: "5-Star Reviews" },
                { value: `${BUSINESS.socialProof.yearsTrading}+`, label: "Years in SE11" },
                { value: "24/7", label: "Emergency Cover" },
              ].map((stat) => (
                <div key={stat.label} className="text-center py-5 px-2">
                  <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-4.5 hover:border-blue-200 hover:bg-blue-50/60 transition-all duration-150 group"
                >
                  <div className="flex items-center justify-center w-9 h-9 bg-blue-100 rounded-lg mb-3 group-hover:bg-blue-200 transition-colors duration-150">
                    <Icon className="h-4.5 w-4.5 text-blue-700" aria-hidden="true" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1.5 text-sm">{reason.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
