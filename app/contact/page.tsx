import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Lockstar Locksmith Kennington | 24/7 Emergency",
  description:
    "Contact Lockstar Locksmith Kennington. Call " +
    BUSINESS.phone +
    " for 24/7 emergency locksmith services in SE11. No call-out fee. Fast response. DBS checked.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero text-white py-16 md:py-24">
        <div className="container-main">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-black leading-tight mb-6">
              Contact{" "}
              <span className="text-blue-300">Lockstar Locksmith</span>
              <br />
              Kennington
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              For emergencies, call us directly — we answer 24 hours a day. For
              non-urgent enquiries, you can also email us and we&apos;ll respond promptly.
            </p>
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-7 py-4 rounded-xl font-black text-xl shadow-cta transition-all duration-200"
              aria-label={`Call ${BUSINESS.phone}`}
            >
              <Phone className="h-6 w-6" />
              {BUSINESS.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Contact details */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact cards */}
            <div className="space-y-5">
              <h2 className="text-2xl font-black text-slate-900 mb-6">
                Get in Touch
              </h2>

              <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-xl flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">Emergency Phone</p>
                    <p className="text-slate-600 text-sm mb-2">
                      For all emergencies and urgent jobs — available 24/7
                    </p>
                    <a
                      href={BUSINESS.phoneHref}
                      className="text-red-600 font-black text-xl hover:text-red-700 transition-colors duration-150"
                    >
                      {BUSINESS.phone}
                    </a>
                    <p className="text-slate-500 text-xs mt-1">
                      No call-out fee · Fixed price quoted before work
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-700 rounded-xl flex-shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">Email</p>
                    <p className="text-slate-600 text-sm mb-2">
                      For non-urgent enquiries, quotes, and booking
                    </p>
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="text-blue-700 font-semibold hover:text-blue-800 transition-colors duration-150"
                    >
                      {BUSINESS.email}
                    </a>
                    <p className="text-slate-500 text-xs mt-1">
                      We aim to respond within 2 hours during business hours
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-slate-700 rounded-xl flex-shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">Location</p>
                    <p className="text-slate-700 mt-1">Kennington Road</p>
                    <p className="text-slate-700">London SE11</p>
                    <p className="text-slate-500 text-xs mt-2">
                      Serving Kennington, SE11 &amp; Greater London
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-xl flex-shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-lg">Hours</p>
                    <p className="text-green-700 font-bold text-lg">Open 24/7</p>
                    <p className="text-slate-600 text-sm">
                      365 days a year — including bank holidays and Christmas Day.
                      No extra charge for night or weekend callouts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* What to expect */}
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-6">
                What Happens When You Call
              </h2>
              <div className="space-y-5">
                {[
                  {
                    step: "1",
                    title: "We Answer Immediately",
                    description:
                      "Your call is answered directly by a locksmith — not an answering machine, not an overseas call centre. We ask a few brief questions about your situation.",
                  },
                  {
                    step: "2",
                    title: "You Get a Fixed Quote",
                    description:
                      "We give you a clear, fixed price before dispatching. The price we quote is the price you pay — no hidden charges, no inflated invoices.",
                  },
                  {
                    step: "3",
                    title: "We Arrive Fast",
                    description:
                      "Your local Kennington locksmith is dispatched immediately. Average arrival time across SE11 is just 20–30 minutes.",
                  },
                  {
                    step: "4",
                    title: "Job Done — First Time",
                    description:
                      "We arrive with the right tools and parts to complete the job on the first visit. We won't leave until the work is done correctly and you're satisfied.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex items-center justify-center w-9 h-9 bg-blue-700 text-white rounded-xl text-sm font-black flex-shrink-0 mt-0.5">
                      {item.step}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 mb-1">{item.title}</p>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl p-5">
                <p className="font-bold text-slate-900 mb-3">Our Guarantees</p>
                <ul className="space-y-2">
                  {BUSINESS.trustSignals.map((signal) => (
                    <li key={signal} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                      {signal}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
