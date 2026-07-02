"use client";

import { Phone, CheckCircle2, Clock, Shield, Star, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const heroTrustPoints = [
  "DBS Checked Locksmiths",
  "20–30 Min Response",
  "Transparent Fixed Pricing",
  "No Call-Out Fee",
];

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden gradient-hero text-white"
      aria-label="Hero — Emergency Locksmith Kennington"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />
      {/* Radial glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #3B82F6 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="container-main relative z-10 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Content */}
          <div>
            {/* Emergency badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-100 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-7 tracking-wide uppercase">
              <span className="w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse inline-block" aria-hidden="true" />
              24/7 Emergency Locksmith — SE11
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black leading-[1.08] tracking-[-0.02em] mb-6">
              Locked Out in{" "}
              <span className="text-blue-300">Kennington?</span>
              <br />
              We&apos;re{" "}
              <span className="text-red-400">20 Minutes</span>{" "}
              Away.
            </h1>

            <p className="text-base sm:text-lg text-blue-100/90 leading-relaxed mb-8 max-w-lg">
              Fast, reliable 24/7 emergency locksmith services across Kennington
              and SE11. DBS checked, fully insured, and genuinely local.
            </p>

            {/* Trust checklist */}
            <ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-y-2.5 gap-x-4 mb-9"
              aria-label="Key trust signals"
            >
              {heroTrustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2 text-sm font-medium text-blue-100">
                  <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center justify-center gap-2.5 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-6 py-3.5 rounded-xl font-black text-base shadow-cta hover:shadow-cta-lg transition-all duration-150 hover:-translate-y-px active:translate-y-0"
                aria-label={`Emergency call: ${BUSINESS.phone}`}
              >
                <Phone className="h-4.5 w-4.5" aria-hidden="true" />
                {BUSINESS.phone}
              </a>
              <a
                href="/services/emergency-locksmith"
                className="inline-flex items-center justify-center gap-2 border border-white/25 text-white/90 hover:bg-white/10 hover:border-white/40 hover:text-white px-6 py-3.5 rounded-xl font-semibold text-base transition-all duration-150"
              >
                Emergency Services
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-3 mt-8 pt-7 border-t border-white/10">
              <div className="flex items-center gap-0.5" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-blue-200">
                <span className="font-bold text-white">{BUSINESS.socialProof.rating}/5</span>
                {" from "}
                <span className="font-bold text-white">{BUSINESS.socialProof.reviewCount}+</span>
                {" Google Reviews"}
              </p>
            </div>
          </div>

          {/* Right: Info cards */}
          <div className="hidden lg:flex flex-col gap-3">
            {/* Stat cards row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "20–30", label: "Min response", color: "text-green-400" },
                { value: "24/7", label: "Always open", color: "text-blue-300" },
                { value: "£0", label: "Call-out fee", color: "text-amber-400" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/8 border border-white/12 rounded-xl p-4 text-center"
                >
                  <p className={`text-xl font-black ${stat.color}`}>{stat.value}</p>
                  <p className="text-xs text-blue-200 mt-0.5 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Info cards */}
            <div className="bg-white/8 border border-white/12 rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-11 h-11 bg-red-500/80 rounded-xl flex-shrink-0">
                  <Phone className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-white text-base">Free Quote — No Call-Out Charge</p>
                  <p className="text-blue-200/80 text-sm mt-1 leading-relaxed">
                    Fixed price quoted before any work begins. Available 24 hours a day.
                  </p>
                  <a
                    href={BUSINESS.phoneHref}
                    className="inline-flex items-center gap-1.5 mt-2.5 text-red-300 hover:text-red-200 font-bold text-sm transition-colors duration-150"
                  >
                    <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/8 border border-white/12 rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-11 h-11 bg-green-500/70 rounded-xl flex-shrink-0">
                  <Clock className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-white text-base">Genuinely Local — 20–30 Minutes</p>
                  <p className="text-blue-200/80 text-sm mt-1 leading-relaxed">
                    Based in Kennington SE11, not a call centre dispatching from miles away.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/8 border border-white/12 rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-11 h-11 bg-blue-500/70 rounded-xl flex-shrink-0">
                  <Shield className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-white text-base">DBS Checked &amp; Fully Insured</p>
                  <p className="text-blue-200/80 text-sm mt-1 leading-relaxed">
                    Every technician is police-vetted and trained to professional standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Review pull-quote */}
            <div className="bg-white rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  ))}
                </div>
                <span className="text-slate-900 font-black text-lg leading-none">
                  {BUSINESS.socialProof.rating}
                </span>
                <span className="text-slate-400 text-xs">/ 5.0</span>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                &ldquo;Arrived in 22 minutes at midnight. Brilliant service, fair price,
                very professional.&rdquo;
              </p>
              <p className="text-slate-400 text-xs mt-1.5">— James T., Kennington SE11</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
