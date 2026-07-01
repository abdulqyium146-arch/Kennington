import { Phone, MessageSquare, Truck, CheckCircle2 } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Call Us",
    description:
      "Call our local Kennington number — available 24 hours a day. We answer immediately, not via voicemail or an overseas call centre.",
    detail: "Available 24/7 — no answering machine",
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "Get a Fixed Quote",
    description:
      "We ask a few brief questions about your lock and situation, then provide a firm fixed price before dispatching. No hidden fees.",
    detail: "Fixed price — no surprises",
  },
  {
    icon: Truck,
    step: "03",
    title: "We Arrive Fast",
    description:
      "Your local Kennington locksmith is dispatched immediately. Average arrival time across SE11 is just 20–30 minutes.",
    detail: "20–30 min average in SE11",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Problem Solved",
    description:
      "Our locksmith arrives with the right tools and replacement locks to complete the job professionally, first time, on the same visit.",
    detail: "Same-visit completion",
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding gradient-section" aria-label="How it works">
      <div className="container-main">
        <div className="text-center mb-12">
          <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-3">
            Simple Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">
            Getting a locksmith to your Kennington property is simple. Here&apos;s
            what to expect when you call Lockstar.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-16 left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-px bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.step} className="relative flex flex-col items-center text-center">
                  {/* Step number + icon */}
                  <div className="relative mb-5">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-700 rounded-2xl shadow-lg z-10 relative">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 flex items-center justify-center w-6 h-6 bg-slate-900 text-white text-xs font-black rounded-full">
                      {step.step}
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 text-xl mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {step.detail}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={BUSINESS.phoneHref}
            className="btn-emergency text-lg px-8 py-4"
            aria-label={`Start the process — call ${BUSINESS.phone}`}
          >
            <Phone className="h-5 w-5" />
            Call {BUSINESS.phone} Now
          </a>
          <p className="text-slate-500 text-sm mt-3">
            Available right now — 24 hours a day, 7 days a week
          </p>
        </div>
      </div>
    </section>
  );
}
