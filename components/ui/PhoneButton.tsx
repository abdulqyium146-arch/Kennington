import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface PhoneButtonProps {
  variant?: "emergency" | "primary" | "outline";
  size?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
}

const variants = {
  emergency:
    "bg-red-600 hover:bg-red-700 active:bg-red-800 text-white shadow-cta hover:shadow-cta-lg hover:-translate-y-px active:translate-y-0 focus-visible:ring-red-400",
  primary:
    "bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white shadow-md hover:shadow-lg hover:-translate-y-px active:translate-y-0 focus-visible:ring-blue-400",
  outline:
    "border border-white/40 text-white hover:bg-white/10 hover:border-white/60 active:bg-white/20 focus-visible:ring-white/50",
};

const sizes = {
  sm:  "px-4 py-2 text-sm gap-1.5",
  md:  "px-5 py-3 text-base gap-2",
  lg:  "px-7 py-3.5 text-base gap-2.5",
};

const iconSizes = {
  sm:  "h-3.5 w-3.5",
  md:  "h-4.5 w-4.5",
  lg:  "h-5 w-5",
};

export default function PhoneButton({
  variant = "emergency",
  size = "md",
  label,
  className,
}: PhoneButtonProps) {
  return (
    <a
      href={BUSINESS.phoneHref}
      className={cn(
        "inline-flex items-center font-bold rounded-xl transition-all duration-150",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        variants[variant],
        sizes[size],
        className
      )}
      aria-label={`Call ${BUSINESS.name}: ${BUSINESS.phone}`}
    >
      <Phone className={cn(iconSizes[size], "flex-shrink-0")} aria-hidden="true" />
      <span>{label ?? BUSINESS.phone}</span>
    </a>
  );
}
