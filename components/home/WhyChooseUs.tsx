import { Phone, Clock, Shield, Banknote, ThumbsUp, MapPin, HeartHandshake } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const reasons = [
  {
    icon: Clock,
    title: "Genuinely Fast Response",
    description:
      "Our locksmiths are based in and around Kennington — not dispatched from a distant depot. When you call, help is truly nearby. Average arrival: 20–30 minutes.",
  },
  {
    icon: Shield,
    title: "DBS Checked & Insured",
    description:
      "Every Lockstar technician holds a DBS (Disclosure and Barring Service) certificate and carries full public liability insurance. Your home and family are protected.",
  },
  {
    icon: Banknote,
    title: "No Hidden Charges",
    description:
      "We quote a fixed price before any work begins. The price we quote is the price you pay — no surprise charges, no inflated night-time rates, no call-out fees.",
  },
  {
    icon: ThumbsUp,
    title: "Non-Destructive Entry",
    description:
      "Our trained technicians use professional non-destructive methods to open locks in the vast majority of cases — saving you the cost of a new door or frame.",
  },
  {
    icon: MapPin,
    title: "Truly Local Locksmith",
    description:
      "Lockstar is a local Kennington business — not a national call centre. When you call us, you speak directly with a locksmith who knows the local area.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted by the Community",
    description:
      "With over {years} years serving Kennington and SE11, and {reviews}+ five-star Google reviews, we have built a reputation on trust, reliability and honest pricing.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white" aria-label="Why choose Lockstar Locksmith Kennington">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <div>
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-5">
              Kennington&apos;s Most Trusted
              <br />
              <span className="text-blue-700">Local Locksmith</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              Choosing a locksmith is a matter of trust — you&apos;re inviting someone
              into your home or business in often stressful circumstances. At Lockstar,
              we have built our reputation on being the most reliable, honest, and
              professional locksmith in Kennington.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="btn-emergency"
                aria-label={`Call Lockstar: ${BUSINESS.phone}`}
              >
                <Phone className="h-5 w-5" />
                Call {BUSINESS.phone}
              </a>
              <a href="/about" className="btn-primary">
                About Us
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-slate-100">
              <div className="text-center">
                <p className="text-3xl font-black text-slate-900">
                  {BUSINESS.socialProof.reviewCount}+
                </p>
                <p className="text-sm text-slate-500 mt-1">5-Star Reviews</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-slate-900">
                  {BUSINESS.socialProof.yearsTrading}+
                </p>
                <p className="text-sm text-slate-500 mt-1">Years Serving SE11</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-black text-slate-900">24/7</p>
                <p className="text-sm text-slate-500 mt-1">Emergency Cover</p>
              </div>
            </div>
          </div>

          {/* Right: Reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              const description = reason.description
                .replace("{years}", BUSINESS.socialProof.yearsTrading.toString())
                .replace("{reviews}", BUSINESS.socialProof.reviewCount.toString());
              return (
                <div
                  key={reason.title}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-blue-200 hover:bg-blue-50 transition-colors duration-200"
                >
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-xl mb-3">
                    <Icon className="h-5 w-5 text-blue-700" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 text-sm">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">{description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
