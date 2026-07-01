import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface PhoneButtonProps {
  variant?: "emergency" | "primary" | "outline";
  size?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
}

export default function PhoneButton({
  variant = "emergency",
  size = "md",
  label,
  className,
}: PhoneButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 font-bold rounded-xl transition-all duration-200 focus:outline-none focus:ring-4";

  const variants = {
    emergency:
      "bg-red-600 hover:bg-red-700 text-white shadow-cta hover:shadow-xl focus:ring-red-300",
    primary:
      "bg-blue-700 hover:bg-blue-800 text-white shadow-md hover:shadow-lg focus:ring-blue-300",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-slate-900 focus:ring-white/40",
  };

  const sizes = {
    sm: "px-4 py-2.5 text-sm",
    md: "px-6 py-3.5 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  return (
    <a
      href={BUSINESS.phoneHref}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      aria-label={`Call ${BUSINESS.name}: ${BUSINESS.phone}`}
    >
      <Phone className={cn(iconSizes[size], "flex-shrink-0")} />
      <span>{label ?? BUSINESS.phone}</span>
    </a>
  );
}
