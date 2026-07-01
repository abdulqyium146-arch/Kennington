import type { Metadata } from "next";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy | Lockstar Locksmith Kennington",
  description: "Privacy policy for Lockstar Locksmith Kennington.",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main max-w-3xl">
        <h1 className="text-3xl font-black text-slate-900 mb-6">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-4 text-slate-700 leading-relaxed">
          <p>
            <strong>Last updated:</strong> January 2025
          </p>
          <p>
            {BUSINESS.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is
            committed to protecting your personal information. This policy explains what
            data we collect, how we use it, and your rights.
          </p>
          <h2 className="text-xl font-bold text-slate-900 mt-8">Data We Collect</h2>
          <p>
            When you contact us by phone or email, we may collect your name, phone
            number, email address, and the address of the property requiring our services.
            We collect only the information necessary to provide our locksmith service to you.
          </p>
          <h2 className="text-xl font-bold text-slate-900 mt-8">How We Use Your Data</h2>
          <p>
            We use your data solely to provide our locksmith services — to respond to your
            enquiry, dispatch a technician, complete the work, and issue an invoice. We do
            not sell, rent, or share your personal data with third parties for marketing purposes.
          </p>
          <h2 className="text-xl font-bold text-slate-900 mt-8">Data Retention</h2>
          <p>
            We retain customer records for a period of 7 years in accordance with UK tax
            and accounting requirements. After this period, records are securely deleted.
          </p>
          <h2 className="text-xl font-bold text-slate-900 mt-8">Your Rights</h2>
          <p>
            Under the UK GDPR, you have the right to access, correct, or request deletion
            of your personal data. To exercise these rights, contact us at{" "}
            <a href={`mailto:${BUSINESS.email}`} className="text-blue-700 underline">
              {BUSINESS.email}
            </a>.
          </p>
          <h2 className="text-xl font-bold text-slate-900 mt-8">Contact</h2>
          <p>
            For any privacy-related questions, contact {BUSINESS.name} at{" "}
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
