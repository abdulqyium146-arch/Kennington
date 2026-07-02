"use client";

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function StickyCallButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 320);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check on mount in case page is already scrolled
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile: bottom-center pill */}
      <div
        className={cn(
          "fixed bottom-5 left-1/2 -translate-x-1/2 z-50 md:hidden",
          "transition-all duration-300",
          visible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
        aria-hidden={!visible}
      >
        <a
          href={BUSINESS.phoneHref}
          className={cn(
            "flex items-center gap-2.5 bg-red-600 text-white px-5 py-3.5 rounded-2xl",
            "font-bold text-sm shadow-cta hover:bg-red-700 active:bg-red-800",
            "transition-colors duration-150 pulse-ring whitespace-nowrap"
          )}
          aria-label={`Call us now: ${BUSINESS.phone}`}
          tabIndex={visible ? 0 : -1}
        >
          <Phone className="h-4.5 w-4.5" aria-hidden="true" />
          <span>Call Now — {BUSINESS.phone}</span>
        </a>
      </div>

      {/* Desktop: right-side card */}
      <div
        className={cn(
          "fixed right-5 bottom-6 z-50 hidden md:block",
          "transition-all duration-300",
          visible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
        aria-hidden={!visible}
      >
        <a
          href={BUSINESS.phoneHref}
          className={cn(
            "flex items-center gap-3 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white",
            "pl-3.5 pr-4 py-3 rounded-xl font-bold text-sm shadow-cta",
            "transition-colors duration-150 pulse-ring whitespace-nowrap",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-300 focus-visible:ring-offset-2"
          )}
          aria-label={`Call us: ${BUSINESS.phone}`}
          tabIndex={visible ? 0 : -1}
        >
          <div className="flex items-center justify-center w-7 h-7 bg-white/20 rounded-lg flex-shrink-0">
            <Phone className="h-4 w-4" aria-hidden="true" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[10px] text-red-200 font-normal">Emergency?</span>
            <span className="font-black text-sm">{BUSINESS.phone}</span>
          </div>
        </a>
      </div>
    </>
  );
}
