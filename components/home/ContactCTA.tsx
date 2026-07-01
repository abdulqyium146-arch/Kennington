import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function ContactCTA() {
  return (
    <section className="section-padding gradient-hero text-white" aria-label="Contact CTA">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/30 text-red-300 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-red-400 rounded-full animate-pulse inline-block" />
              Available Right Now
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6">
              Need a Locksmith
              <br />
              in{" "}
              <span className="text-blue-300">Kennington</span>?
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Don&apos;t wait — call us now and our local team will be with you in
              20–30 minutes. We&apos;re available 24 hours a day, every day of the year.
              Fixed pricing, no hidden fees.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-11 h-11 bg-white/10 rounded-xl flex-shrink-0">
                  <Clock className="h-5 w-5 text-blue-300" />
                </div>
                <div>
                  <p className="font-bold">24/7 Emergency Response</p>
                  <p className="text-blue-200 text-sm">No extra charge for nights, weekends, or bank holidays</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-11 h-11 bg-white/10 rounded-xl flex-shrink-0">
                  <MapPin className="h-5 w-5 text-blue-300" />
                </div>
                <div>
                  <p className="font-bold">Kennington SE11 &amp; Greater London</p>
                  <p className="text-blue-200 text-sm">Based locally — not dispatched from miles away</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-11 h-11 bg-white/10 rounded-xl flex-shrink-0">
                  <Mail className="h-5 w-5 text-blue-300" />
                </div>
                <div>
                  <p className="font-bold">Email for Non-Urgent Enquiries</p>
                  <a
                    href={`mailto:${BUSINESS.email}`}
                    className="text-blue-300 hover:text-blue-200 text-sm transition-colors duration-150"
                  >
                    {BUSINESS.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: CTA card */}
          <div className="bg-white rounded-3xl p-8 text-slate-900">
            <p className="text-slate-500 text-sm font-medium mb-1">Fastest way to reach us</p>
            <h3 className="text-2xl font-black text-slate-900 mb-2">
              Call Us Now
            </h3>
            <p className="text-slate-600 text-sm mb-6">
              Available 24/7 — speak directly to a Kennington locksmith,
              not a call centre.
            </p>

            <a
              href={BUSINESS.phoneHref}
              className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white px-6 py-5 rounded-2xl font-black text-xl shadow-cta hover:shadow-xl transition-all duration-200 w-full mb-4"
              aria-label={`Emergency call: ${BUSINESS.phone}`}
            >
              <Phone className="h-6 w-6" />
              {BUSINESS.phone}
            </a>

            <div className="grid grid-cols-3 divide-x divide-slate-100 bg-slate-50 rounded-2xl p-4">
              <div className="text-center px-2">
                <p className="text-xl font-black text-slate-900">20–30</p>
                <p className="text-xs text-slate-500">Min Response</p>
              </div>
              <div className="text-center px-2">
                <p className="text-xl font-black text-slate-900">24/7</p>
                <p className="text-xs text-slate-500">Available</p>
              </div>
              <div className="text-center px-2">
                <p className="text-xl font-black text-slate-900">£0</p>
                <p className="text-xs text-slate-500">Call-Out Fee</p>
              </div>
            </div>

            <p className="text-slate-400 text-xs text-center mt-4">
              DBS Checked · Fully Insured · Transparent Pricing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
