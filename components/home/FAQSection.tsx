"use client";

import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { FAQS, BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        "border rounded-2xl overflow-hidden transition-all duration-200",
        isOpen
          ? "border-blue-200 bg-blue-50 shadow-md"
          : "border-slate-200 bg-white hover:border-blue-200"
      )}
      itemScope
      itemType="https://schema.org/Question"
    >
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span
          className={cn(
            "font-semibold text-base leading-snug",
            isOpen ? "text-blue-900" : "text-slate-900"
          )}
          itemProp="name"
        >
          {question}
        </span>
        <ChevronDown
          className={cn(
            "h-5 w-5 flex-shrink-0 transition-transform duration-300",
            isOpen ? "rotate-180 text-blue-700" : "text-slate-400"
          )}
          aria-hidden="true"
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96" : "max-h-0"
        )}
        itemScope
        itemType="https://schema.org/Answer"
        itemProp="acceptedAnswer"
      >
        <div className="px-6 pb-5">
          <p className="text-slate-700 leading-relaxed text-sm" itemProp="text">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="section-padding bg-white"
      aria-label="Frequently asked questions"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="container-main">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left: Header */}
          <div className="lg:col-span-2">
            <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-3">
              FAQs
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-5">
              Common Questions
              <br />
              <span className="text-blue-700">Answered</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              We get asked these questions every day. If your question isn&apos;t
              here, just call us — we&apos;re happy to help.
            </p>

            <a
              href={BUSINESS.phoneHref}
              className="btn-emergency"
              aria-label={`Call to ask a question: ${BUSINESS.phone}`}
            >
              <Phone className="h-5 w-5" />
              Call {BUSINESS.phone}
            </a>

            <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-5">
              <p className="text-blue-900 font-bold mb-1">Still have questions?</p>
              <p className="text-blue-700 text-sm">
                Our Kennington team is available right now to answer any questions
                about our services, pricing, or response times.
              </p>
            </div>
          </div>

          {/* Right: FAQ list */}
          <div className="lg:col-span-3 space-y-3">
            {FAQS.map((faq, index) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
