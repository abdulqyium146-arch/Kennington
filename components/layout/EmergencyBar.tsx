"use client";

import { Phone, Clock, AlertCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function EmergencyBar() {
  return (
    <div className="bg-red-600 text-white py-2.5 px-4">
      <div className="container-main flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm font-semibold">
        <div className="flex items-center gap-2">
          <AlertCircle className="h-4 w-4 flex-shrink-0 animate-pulse" />
          <span>24/7 Emergency Locksmith — Kennington &amp; SE11</span>
        </div>
        <div className="hidden sm:block w-px h-4 bg-red-400" />
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 flex-shrink-0" />
          <span>20–30 Min Response</span>
        </div>
        <div className="hidden sm:block w-px h-4 bg-red-400" />
        <a
          href={BUSINESS.phoneHref}
          className="flex items-center gap-2 bg-white text-red-600 px-4 py-1 rounded-full hover:bg-red-50 transition-colors duration-150 font-bold"
          aria-label={`Call Lockstar Locksmith now: ${BUSINESS.phone}`}
        >
          <Phone className="h-3.5 w-3.5" />
          <span>{BUSINESS.phone}</span>
        </a>
      </div>
    </div>
  );
}
