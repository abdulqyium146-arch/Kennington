import Link from "next/link";
import { Phone, Home, Search } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center gradient-hero text-white">
      <div className="container-main py-20 text-center">
        <p className="text-blue-300 font-bold text-6xl mb-4">404</p>
        <h1 className="text-3xl sm:text-4xl font-black mb-4">
          Page Not Found
        </h1>
        <p className="text-blue-100 text-lg mb-10 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist. If you need a locksmith
          in Kennington, we&apos;re available right now.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3.5 rounded-xl font-bold transition-all duration-200"
          >
            <Phone className="h-5 w-5" />
            Call {BUSINESS.phone}
          </a>
          <Link
            href="/"
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 px-6 py-3.5 rounded-xl font-semibold transition-all duration-200"
          >
            <Home className="h-5 w-5" />
            Back to Home
          </Link>
          <Link
            href="/services/emergency-locksmith"
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white hover:bg-white/10 px-6 py-3.5 rounded-xl font-semibold transition-all duration-200"
          >
            <Search className="h-5 w-5" />
            Emergency Locksmith
          </Link>
        </div>
      </div>
    </section>
  );
}
