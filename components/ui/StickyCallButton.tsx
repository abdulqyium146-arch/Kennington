"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function StickyCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Mobile sticky button (bottom) */}
      <div
        className={cn(
          "fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden transition-all duration-500",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
        aria-hidden={!visible}
      >
        <a
          href={BUSINESS.phoneHref}
          className="flex items-center gap-3 bg-red-600 text-white px-6 py-4 rounded-2xl font-black text-base shadow-cta pulse-ring hover:bg-red-700 transition-colors duration-150"
          aria-label={`Call us now: ${BUSINESS.phone}`}
        >
          <Phone className="h-5 w-5" />
          <span>Call Now — {BUSINESS.phone}</span>
        </a>
      </div>

      {/* Desktop floating button (right side) */}
      <div
        className={cn(
          "fixed right-6 bottom-8 z-50 hidden md:flex flex-col items-center gap-2 transition-all duration-500",
          visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
        )}
        aria-hidden={!visible}
      >
        <a
          href={BUSINESS.phoneHref}
          className="flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-5 py-3.5 rounded-2xl font-bold text-sm shadow-cta pulse-ring transition-colors duration-150 whitespace-nowrap"
          aria-label={`Call us: ${BUSINESS.phone}`}
        >
          <div className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-lg flex-shrink-0">
            <Phone className="h-4 w-4" />
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-red-100 font-normal leading-none">Emergency?</span>
            <span className="font-black leading-tight">{BUSINESS.phone}</span>
          </div>
        </a>
        <span className="text-xs text-slate-500 bg-white/90 px-3 py-1 rounded-full shadow-sm">
          24/7 Available
        </span>
      </div>
    </>
  );
}
