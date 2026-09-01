"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-3.5 w-3.5 transition-transform duration-200 ${className}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
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

  const items = nav.filter((i) => i.variant !== "button");
  const login = nav.find((i) => i.variant === "button");

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white transition-shadow ${
        scrolled ? "border-black/5 shadow-[0_2px_16px_rgba(0,0,0,0.06)]" : "border-black/5"
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center px-5 py-2 lg:px-9">
        {/* Logo Kloster Mariawald (führt zur Startseite) */}
        <Link href="/" aria-label="Zur Startseite" className="flex items-center">
          <Image
            src="/images/logo-kloster-mariawald.png"
            alt="Kloster Mariawald"
            width={261}
            height={180}
            priority
            className="h-[68px] w-auto"
          />
        </Link>

        {/* Menüpunkte mittig */}
        <nav aria-label="Hauptnavigation" className="mx-auto hidden items-center gap-7 lg:flex">
          {items.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className={`flex items-center gap-1 py-2 text-[15px] font-medium transition-colors ${
                  isActive(item.href) ? "text-accent" : "text-heading/80 hover:text-heading"
                }`}
              >
                {item.label}
                {item.children && <Chevron className="opacity-50 group-hover:rotate-180" />}
              </Link>
              {item.children && (
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <ul className="min-w-[230px] translate-y-1 rounded-2xl border border-black/5 bg-white p-1.5 shadow-[0_18px_50px_rgba(0,0,0,0.16)] transition-transform duration-200 group-hover:translate-y-0">
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
            </div>
          ))}
        </nav>

        {/* Login als dunkler Pill-Button mit rundem Pfeil-Badge */}
        {login && (
          <Link
            href={login.href}
            className="ml-auto hidden items-center gap-3 rounded-full bg-logo-red py-1.5 pl-5 pr-1.5 text-[15px] font-semibold text-white transition-colors hover:bg-logo-red-dark lg:flex"
          >
            {login.label}
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-logo-gold text-logo-red">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        )}

        {/* Mobile: Menü-Button */}
        <button
          type="button"
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-full text-heading hover:bg-black/5 lg:hidden"
          aria-expanded={openMobile}
          aria-label="Menü öffnen"
          onClick={() => setOpenMobile(true)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {/* Mobile-Overlay */}
      {openMobile && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-white lg:hidden">
          <div className="flex items-center justify-between border-b border-black/5 px-5 py-3">
            <Image
              src="/images/logo-kloster-mariawald.png"
              alt="Kloster Mariawald"
              width={261}
              height={180}
              className="h-11 w-auto"
            />
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-black/5"
              aria-label="Menü schließen"
              onClick={() => setOpenMobile(false)}
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
          <nav aria-label="Mobile Navigation" className="flex-1 overflow-y-auto px-6 pb-10">
            <ul className="mx-auto max-w-md divide-y divide-black/5 pt-2">
              {items.map((item) => (
                <li key={item.label}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="block py-3.5 text-[20px] font-medium text-heading"
                      onClick={() => setOpenMobile(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        type="button"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-heading"
                        aria-label={`Unterpunkte zu ${item.label} anzeigen`}
                        onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
                      >
                        <Chevron className={openSub === item.label ? "rotate-180" : ""} />
                      </button>
                    )}
                  </div>
                  {item.children && openSub === item.label && (
                    <ul className="mb-2 space-y-0.5 border-l border-black/10 pl-4">
                      {item.children.map((child) => (
                        <li key={child.href + child.label}>
                          <Link
                            href={child.href}
                            className="block py-1.5 text-[15px] text-heading/70"
                            onClick={() => setOpenMobile(false)}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            {login && (
              <Link
                href={login.href}
                className="mt-6 flex items-center justify-center gap-3 rounded-full bg-logo-red py-3.5 text-[18px] font-semibold text-white"
                onClick={() => setOpenMobile(false)}
              >
                {login.label}
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-logo-gold text-logo-red">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
