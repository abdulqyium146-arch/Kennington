"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown, Shield } from "lucide-react";
import { BUSINESS, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close dropdown on click outside
  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
      setOpenDropdown(null);
    }
  }, []);

  useEffect(() => {
    if (openDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown, handleClickOutside]);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-200",
        isScrolled
          ? "bg-white/96 backdrop-blur-md shadow-sm border-b border-slate-200/80"
          : "bg-white border-b border-slate-200"
      )}
    >
      <div className="container-main">
        <div className="flex items-center justify-between h-16 md:h-18">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 flex-shrink-0 group"
            aria-label="Lockstar Locksmith Kennington — Home"
            onClick={closeMobile}
          >
            <div className="flex items-center justify-center w-9 h-9 bg-blue-700 rounded-lg group-hover:bg-blue-800 transition-colors duration-150">
              <Shield className="h-5 w-5 text-white" aria-hidden="true" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-slate-900 text-sm sm:text-base tracking-tight">
                LOCKSTAR
              </span>
              <span className="text-blue-700 text-[10px] font-semibold tracking-widest uppercase mt-0.5">
                Locksmith Kennington
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative">
                {"children" in link ? (
                  <>
                    <button
                      className={cn(
                        "flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-150",
                        openDropdown === link.label
                          ? "text-blue-700 bg-blue-50"
                          : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                      )}
                      aria-expanded={openDropdown === link.label}
                      aria-haspopup="menu"
                      onClick={() => toggleDropdown(link.label)}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-200 text-slate-400",
                          openDropdown === link.label && "rotate-180 text-blue-600"
                        )}
                        aria-hidden="true"
                      />
                    </button>

                    {/* Dropdown */}
                    {openDropdown === link.label && (
                      <div
                        className="absolute top-full left-0 mt-1.5 w-56 bg-white rounded-xl shadow-popover border border-slate-200/80 py-1.5 z-50 animate-slide-down"
                        role="menu"
                        aria-label={`${link.label} submenu`}
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center px-3.5 py-2.5 text-sm text-slate-700 hover:text-blue-700 hover:bg-blue-50 transition-colors duration-100 mx-1 rounded-lg"
                            role="menuitem"
                            onClick={() => setOpenDropdown(null)}
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
                    className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-all duration-150"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <a
              href={BUSINESS.phoneHref}
              className={cn(
                "hidden sm:flex items-center gap-2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white rounded-lg font-bold text-sm transition-all duration-150",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2",
                "px-3.5 py-2.5 shadow-sm hover:shadow-md"
              )}
              aria-label={`Call us: ${BUSINESS.phone}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span className="hidden md:inline">{BUSINESS.phone}</span>
              <span className="md:hidden font-semibold">Call Now</span>
            </a>

            <button
              className={cn(
                "lg:hidden flex items-center justify-center w-9 h-9 rounded-lg transition-colors duration-150",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
                mobileOpen
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              )}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen
                ? <X className="h-5 w-5" aria-hidden="true" />
                : <Menu className="h-5 w-5" aria-hidden="true" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu — animated slide */}
      <div
        id="mobile-nav"
        className={cn(
          "lg:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto transition-all duration-200",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        aria-hidden={!mobileOpen}
      >
        <div
          className={cn(
            "container-main py-5 transition-transform duration-200",
            mobileOpen ? "translate-y-0" : "-translate-y-2"
          )}
        >
          {/* Mobile CTA */}
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center justify-center gap-2.5 bg-red-600 text-white px-4 py-3.5 rounded-xl font-black text-base mb-5 shadow-cta active:bg-red-800 transition-colors duration-150"
            onClick={closeMobile}
            aria-label={`Call us now: ${BUSINESS.phone}`}
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            <span>{BUSINESS.phone}</span>
          </a>

          <nav aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                {"children" in link ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors duration-100"
                      onClick={() => toggleDropdown(link.label)}
                      aria-expanded={openDropdown === link.label}
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-slate-400 transition-transform duration-200",
                          openDropdown === link.label && "rotate-180 text-blue-600"
                        )}
                        aria-hidden="true"
                      />
                    </button>
                    {openDropdown === link.label && (
                      <div className="ml-3 mb-1 border-l-2 border-blue-100 pl-3 space-y-0.5 animate-slide-down">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-2 px-2 text-sm text-slate-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors duration-100"
                            onClick={closeMobile}
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
                    className="block px-3 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-xl transition-colors duration-100"
                    onClick={closeMobile}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-5 pt-5 border-t border-slate-100">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Shield className="h-3.5 w-3.5 text-green-600" aria-hidden="true" />
              <span>DBS Checked · Fully Insured · 24/7 Available</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
