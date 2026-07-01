import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service | Lockstar Locksmith Kennington",
  description: "Terms of service for Lockstar Locksmith Kennington.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main max-w-3xl">
        <h1 className="text-3xl font-black text-slate-900 mb-6">Terms of Service</h1>
        <div className="space-y-6 text-slate-700 leading-relaxed">
          <p>
            <strong>Last updated:</strong> January 2025
          </p>
          <p>
            These terms govern your use of services provided by {BUSINESS.name}
            (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). By engaging our
            locksmith services, you agree to these terms.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8">1. Services</h2>
          <p>
            We provide professional locksmith services including emergency lockouts, lock
            fitting, lock replacement, UPVC door repairs, and associated security services.
            All work is carried out by trained, DBS-checked technicians.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8">2. Pricing & Payment</h2>
          <p>
            A fixed price will be quoted before any work commences. This price is the full
            price — there are no hidden call-out fees or surcharges. Payment is due upon
            completion of the work. We accept cash, credit card, and debit card.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8">3. Cancellation</h2>
          <p>
            If you need to cancel a callout after a technician has been dispatched, a
            reasonable call-out charge may apply to cover the technician&apos;s travel costs.
            We will advise you of any applicable charge when you cancel.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8">4. Liability</h2>
          <p>
            We carry full public liability insurance. In the unlikely event that damage
            occurs during our work, please contact us immediately. We will not be liable
            for damage caused by pre-existing faults in doors, frames, or lock hardware.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8">5. Proof of Ownership</h2>
          <p>
            We reserve the right to request proof that you have authorisation to access a
            property before carrying out any locksmith work. This is for the protection of
            all parties and to comply with our legal obligations.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8">6. Contact</h2>
          <p>
            For questions about these terms, contact us at{" "}
            <a href={`mailto:${BUSINESS.email}`} className="text-blue-700 underline">
              {BUSINESS.email}
            </a>{" "}
            or call{" "}
            <a href={BUSINESS.phoneHref} className="text-blue-700 underline">
              {BUSINESS.phone}
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
