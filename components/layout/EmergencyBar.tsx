import { Phone, Clock, Zap } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function EmergencyBar() {
  return (
    <div className="bg-slate-900 text-white py-2 px-4 border-b border-slate-800">
      <div className="container-main flex items-center justify-center gap-2 sm:gap-6 text-xs font-medium">
        <div className="flex items-center gap-1.5 text-slate-300">
          <Zap className="h-3.5 w-3.5 text-amber-400 flex-shrink-0" aria-hidden="true" />
          <span className="hidden sm:inline">24/7 Emergency Locksmith</span>
          <span className="sm:hidden">24/7 Locksmith</span>
          <span className="text-slate-500">·</span>
          <span className="text-slate-300">Kennington SE11</span>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-slate-400">
          <Clock className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
          <span>20–30 min response</span>
        </div>

        <a
          href={BUSINESS.phoneHref}
          className="flex items-center gap-1.5 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md font-semibold text-xs transition-colors duration-150 ml-1"
          aria-label={`Call Lockstar Locksmith now: ${BUSINESS.phone}`}
        >
          <Phone className="h-3 w-3" aria-hidden="true" />
          <span>{BUSINESS.phone}</span>
        </a>
      </div>
    </div>
  );
}
