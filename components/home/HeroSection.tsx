"use client";

import { Phone, CheckCircle2, Clock, Shield, Star } from "lucide-react";
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
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 50%, white 1px, transparent 1px), radial-gradient(circle at 75% 50%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      <div className="container-main relative z-10 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Content */}
          <div>
            {/* Emergency badge */}
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/40 text-red-200 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse inline-block" />
              24/7 Emergency Locksmith — Kennington SE11
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6">
              Locked Out in{" "}
              <span className="text-blue-300">Kennington?</span>
              <br />
              We&apos;re{" "}
              <span className="text-red-400">20 Minutes</span>
              <br />
              Away.
            </h1>

            <p className="text-lg text-blue-100 leading-relaxed mb-8 max-w-xl">
              Lockstar Locksmith Kennington provides fast, reliable 24/7 emergency
              locksmith services across SE11 and Greater London. DBS checked, fully
              insured, and always nearby.
            </p>

            {/* Trust points */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-10" aria-label="Key trust signals">
              {heroTrustPoints.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm font-medium text-blue-100">
                  <CheckCircle2 className="h-4.5 w-4.5 text-green-400 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-7 py-4 rounded-xl font-black text-lg shadow-cta hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                aria-label={`Emergency call: ${BUSINESS.phone}`}
              >
                <Phone className="h-5 w-5" />
                {BUSINESS.phone}
              </a>
              <a
                href="/services/emergency-locksmith"
                className="flex items-center justify-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 px-7 py-4 rounded-xl font-semibold text-lg transition-all duration-200"
              >
                Emergency Services
              </a>
            </div>

            {/* Social proof micro */}
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/10">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-blue-200">
                <span className="font-bold text-white">{BUSINESS.socialProof.rating}/5</span> from{" "}
                <span className="font-bold text-white">{BUSINESS.socialProof.reviewCount}+</span> Google Reviews
              </p>
            </div>
          </div>

          {/* Right: Info cards */}
          <div className="hidden lg:flex flex-col gap-4">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-red-500 rounded-xl flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Call Now — Free Quote</p>
                  <p className="text-blue-200 text-sm mt-1">
                    No call-out charge. Fixed price quoted before any work begins.
                    Available 24 hours a day, 7 days a week.
                  </p>
                  <a
                    href={BUSINESS.phoneHref}
                    className="inline-flex items-center gap-1.5 mt-3 text-red-300 hover:text-red-200 font-bold text-sm transition-colors duration-150"
                  >
                    <Phone className="h-3.5 w-3.5" />
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-xl flex-shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">Average: 20–30 Minutes</p>
                  <p className="text-blue-200 text-sm mt-1">
                    Our technicians are based locally in Kennington — not a call centre
                    dispatching from miles away. Fast, genuinely local response.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-xl flex-shrink-0">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-bold text-white text-lg">DBS Checked &amp; Insured</p>
                  <p className="text-blue-200 text-sm mt-1">
                    Every Lockstar technician is DBS checked, fully insured, and trained
                    to professional locksmith standards. Your home is in safe hands.
                  </p>
                </div>
              </div>
            </div>

            {/* Reviews teaser */}
            <div className="bg-white rounded-2xl p-5">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-slate-900 font-black text-xl">{BUSINESS.socialProof.rating}</span>
              </div>
              <p className="text-slate-700 text-sm mt-2 font-medium">
                &ldquo;Arrived in 22 minutes at midnight. Brilliant service, fair
                price, very professional.&rdquo;
              </p>
              <p className="text-slate-400 text-xs mt-1">— James T., Kennington SE11</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
