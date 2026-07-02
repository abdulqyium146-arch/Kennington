import { Phone, MessageSquare, Truck, CheckCircle2 } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const steps = [
  {
    icon: Phone,
    step: "01",
    title: "Call Us",
    description:
      "Call our Kennington number — available 24/7. We answer immediately, not via voicemail or an overseas call centre.",
    detail: "Available 24/7",
  },
  {
    icon: MessageSquare,
    step: "02",
    title: "Get a Fixed Quote",
    description:
      "We ask a few brief questions, then provide a firm fixed price before dispatching. No hidden fees, ever.",
    detail: "No surprises",
  },
  {
    icon: Truck,
    step: "03",
    title: "We Arrive Fast",
    description:
      "Your local Kennington locksmith is dispatched immediately. Average arrival across SE11 is 20–30 minutes.",
    detail: "20–30 min avg",
  },
  {
    icon: CheckCircle2,
    step: "04",
    title: "Problem Solved",
    description:
      "We arrive with the right tools and parts to complete the job professionally, first time, on the same visit.",
    detail: "Same-visit completion",
  },
];

export default function ProcessSection() {
  return (
    <section className="section-padding gradient-section" aria-label="How it works">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">Simple Process</p>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">
            How It Works
          </h2>
          <p className="text-slate-500 max-w-md mx-auto text-sm leading-relaxed">
            Getting a Kennington locksmith to your door is straightforward.
            Here&apos;s what happens when you call.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="relative">
                {/* Connector (desktop) */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] right-[-50%] h-px bg-gradient-to-r from-blue-200 to-blue-100"
                    aria-hidden="true"
                  />
                )}

                <div className="flex flex-col items-center text-center">
                  {/* Icon + number */}
                  <div className="relative mb-5">
                    <div className="flex items-center justify-center w-14 h-14 bg-white border-2 border-blue-100 rounded-2xl shadow-sm">
                      <Icon className="h-6 w-6 text-blue-700" aria-hidden="true" />
                    </div>
                    <div className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-blue-700 text-white text-[10px] font-black rounded-full">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-3 max-w-[200px] mx-auto">
                    {step.description}
                  </p>
                  <div className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 text-[11px] font-semibold px-2.5 py-1 rounded-full">
                    <CheckCircle2 className="h-3 w-3" aria-hidden="true" />
                    {step.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href={BUSINESS.phoneHref}
            className="btn-emergency text-base px-7 py-3.5"
            aria-label={`Call us now: ${BUSINESS.phone}`}
          >
            <Phone className="h-4.5 w-4.5" aria-hidden="true" />
            Call {BUSINESS.phone} Now
          </a>
          <p className="text-slate-400 text-xs mt-3">
            Available right now — 24 hours a day, 7 days a week
          </p>
        </div>
      </div>
    </section>
  );
}
