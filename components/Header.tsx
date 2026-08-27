"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M32 7 V50" strokeWidth="5" />
      <path d="M23.5 18 H40.5" strokeWidth="5" />
      <path d="M15 51 V27 L32 43 L49 27 V51" strokeWidth="6" />
    </svg>
  );
}

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-3.5 w-3.5 transition-transform duration-200 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = openMobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openMobile]);

  return (
    <>
      <div
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 shadow-[0_1px_20px_rgba(0,0,0,0.08)] backdrop-blur-xl"
            : "bg-gradient-to-b from-black/70 via-black/35 to-transparent pb-8"
        }`}
      >
        <div className="relative mx-auto flex max-w-[1200px] items-center justify-center px-5 py-2 lg:px-[35px]">
          <Link
            href="/"
            aria-label="Zur Startseite"
            className={`absolute left-5 flex items-center gap-2.5 lg:left-[35px] ${
              scrolled ? "text-heading" : "text-white"
            }`}
            style={scrolled ? undefined : { filter: "drop-shadow(0 1px 3px rgba(0,0,0,.5))" }}
          >
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                scrolled ? "bg-accent text-white" : "border border-white/60"
              }`}
            >
              <Mark className="h-6 w-6" />
            </span>
          </Link>

          <nav aria-label="Hauptnavigation" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) =>
                item.variant === "button" ? (
                  <li key={item.label} className="ml-1">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1.5 rounded-full px-5 py-2 text-[16px] font-semibold transition-colors ${
                        scrolled
                          ? "bg-accent text-white hover:bg-accent-dark"
                          : "border border-white/70 text-white hover:bg-white hover:text-heading"
                      }`}
                      style={scrolled ? undefined : { textShadow: "0 1px 2px rgba(0,0,0,.5)" }}
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3" />
                      </svg>
                      {item.label}
                    </Link>
                  </li>
                ) : (
                <li key={item.label} className="group relative">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1.5 rounded-full px-4 py-2.5 text-[16px] font-medium transition-colors ${
                      scrolled
                        ? "text-heading/80 hover:bg-black/5 hover:text-heading"
                        : "text-white hover:bg-white/15"
                    }`}
                    style={scrolled ? undefined : { textShadow: "0 1px 2px rgba(0,0,0,.6), 0 2px 8px rgba(0,0,0,.45)" }}
                  >
                    {item.label}
                    {item.children && <Chevron className="opacity-60 group-hover:rotate-180" />}
                  </Link>

                  {item.children && (
                    <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      <ul className="min-w-[230px] translate-y-1 rounded-2xl border border-black/5 bg-white/95 p-1.5 shadow-[0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-transform duration-200 group-hover:translate-y-0">
                        {item.children.map((child) => (
                          <li key={child.href + child.label}>
                            <Link
                              href={child.href}
                              className="block rounded-xl px-4 py-2.5 text-[15px] text-heading/80 transition-colors hover:bg-accent/10 hover:text-accent"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
                )
              )}
            </ul>
          </nav>

          <button
            type="button"
            className={`absolute right-5 flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden ${
              scrolled ? "text-heading hover:bg-black/5" : "text-white border border-white/50"
            }`}
            aria-expanded={openMobile}
            aria-label="Menü öffnen"
            onClick={() => setOpenMobile(true)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      {openMobile && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-navy/95 text-white backdrop-blur-xl lg:hidden">
          <div className="flex items-center justify-between px-5 py-3">
            <span className="text-[15px] font-semibold tracking-[0.14em] uppercase">Mariawald</span>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10"
              aria-label="Menü schließen"
              onClick={() => setOpenMobile(false)}
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
          <nav aria-label="Mobile Navigation" className="flex-1 overflow-y-auto px-6 pb-10">
            <ul className="mx-auto max-w-md space-y-1 pt-6">
              {nav.map((item) =>
                item.variant === "button" ? (
                  <li key={item.label} className="pt-4">
                    <Link
                      href={item.href}
                      className="flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-[18px] font-semibold text-white"
                      onClick={() => setOpenMobile(false)}
                    >
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3" />
                      </svg>
                      {item.label}
                    </Link>
                  </li>
                ) : (
                <li key={item.label}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="block py-2.5 text-[22px] font-light"
                      onClick={() => setOpenMobile(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        type="button"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10"
                        aria-label={`Unterpunkte zu ${item.label} anzeigen`}
                        onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
                      >
                        <Chevron className={openSub === item.label ? "rotate-180" : ""} />
                      </button>
                    )}
                  </div>
                  {item.children && openSub === item.label && (
                    <ul className="mb-2 space-y-0.5 border-l border-white/15 pl-4">
                      {item.children.map((child) => (
                        <li key={child.href + child.label}>
                          <Link
                            href={child.href}
                            className="block py-1.5 text-[15px] text-white/75"
                            onClick={() => setOpenMobile(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
                )
              )}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
