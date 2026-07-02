import Link from "next/link";
import { Phone, Home, ArrowLeft } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function NotFound() {
  return (
    <section
      className="min-h-[70vh] flex items-center justify-center gradient-hero text-white"
      aria-labelledby="not-found-heading"
    >
      <div className="container-main py-20 text-center">
        <p className="text-5xl font-black text-white/20 mb-2 tabular-nums" aria-hidden="true">
          404
        </p>
        <h1
          id="not-found-heading"
          className="text-3xl sm:text-4xl font-black text-white mb-4 tracking-tight"
        >
          Page Not Found
        </h1>
        <p className="text-blue-100/80 text-base mb-10 max-w-sm mx-auto leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist. If you need a locksmith
          in Kennington, we&apos;re available right now.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={BUSINESS.phoneHref}
            className="btn-emergency text-base px-6 py-3.5"
            aria-label={`Call us: ${BUSINESS.phone}`}
          >
            <Phone className="h-4.5 w-4.5" aria-hidden="true" />
            Call {BUSINESS.phone}
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border border-white/25 text-white/90 hover:bg-white/10 hover:border-white/40 px-6 py-3.5 rounded-xl font-semibold text-base transition-all duration-150"
          >
            <Home className="h-4.5 w-4.5" aria-hidden="true" />
            Back to Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center gap-2 border border-white/25 text-white/90 hover:bg-white/10 hover:border-white/40 px-6 py-3.5 rounded-xl font-semibold text-base transition-all duration-150"
          >
            <ArrowLeft className="h-4.5 w-4.5" aria-hidden="true" />
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}
