"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown, Shield } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100"
          : "bg-white border-b border-slate-200"
      )}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 flex-shrink-0"
            aria-label="Lockstar Locksmith Kennington — Home"
          >
            <div className="flex items-center justify-center w-9 h-9 bg-blue-700 rounded-lg">
              <Shield className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-black text-slate-900 text-sm sm:text-base tracking-tight">
                LOCKSTAR
              </span>
              <span className="text-blue-700 text-xs font-semibold tracking-wider uppercase -mt-0.5">
                Locksmith Kennington
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative group">
                {"children" in link ? (
                  <>
                    <button
                      className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-700 rounded-lg hover:bg-blue-50 transition-colors duration-150"
                      aria-expanded={openDropdown === link.label}
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.label ? null : link.label
                        )
                      }
                    >
                      {link.label}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-colors duration-150"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-blue-700 rounded-lg hover:bg-blue-50 transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={BUSINESS.phoneHref}
              className="hidden sm:flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2.5 rounded-lg font-bold text-sm transition-all duration-150 shadow-md hover:shadow-lg"
              aria-label={`Call us: ${BUSINESS.phone}`}
            >
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">{BUSINESS.phone}</span>
              <span className="md:hidden">Call Now</span>
            </a>
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors duration-150"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
          <div className="container-main py-6 space-y-1">
            {/* Mobile CTA */}
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center justify-center gap-2 bg-red-600 text-white px-4 py-4 rounded-xl font-bold text-lg mb-6 shadow-cta"
              onClick={() => setMobileOpen(false)}
            >
              <Phone className="h-5 w-5" />
              <span>{BUSINESS.phone}</span>
            </a>

            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                {"children" in link ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors duration-150"
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.label ? null : link.label
                        )
                      }
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          openDropdown === link.label && "rotate-180"
                        )}
                      />
                    </button>
                    {openDropdown === link.label && (
                      <div className="ml-4 mt-1 space-y-0.5 border-l-2 border-blue-100 pl-4">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-2.5 text-sm text-slate-600 hover:text-blue-700 transition-colors duration-150"
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-base font-semibold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors duration-150"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-6 border-t border-slate-100 mt-6">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Shield className="h-4 w-4 text-green-600" />
                <span>DBS Checked · Fully Insured · 24/7 Available</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
