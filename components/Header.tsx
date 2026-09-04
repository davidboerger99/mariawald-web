"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`h-3.5 w-3.5 transition-transform duration-200 ${className}`} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
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

  const items = nav.filter((i) => !i.variant);
  const cta = nav.find((i) => i.variant === "login");

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href + "/"));

  return (
    <header
      className={`sticky top-0 z-50 border-b border-black/5 bg-white transition-shadow ${
        scrolled ? "shadow-[0_2px_16px_rgba(30,38,92,0.08)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center px-5 py-2 lg:px-9">
        {/* Logo */}
        <Link href="/" aria-label="Zur Startseite" className="flex items-center">
          <Image
            src="/images/logo-kloster-mariawald-transparent.png"
            alt="Kloster Mariawald"
            width={261}
            height={180}
            priority
            className="h-16 w-auto"
          />
        </Link>

        {/* Menü in Großbuchstaben */}
        <nav aria-label="Hauptnavigation" className="ml-auto hidden items-center gap-7 lg:flex">
          {items.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className={`flex items-center gap-1.5 py-2 text-[15px] font-bold tracking-wide uppercase transition-colors ${
                  isActive(item.href)
                    ? "text-logo-red underline decoration-2 underline-offset-8"
                    : "text-navy hover:text-logo-red"
                }`}
              >
                {item.label}
                {item.children && <Chevron className="opacity-70 group-hover:rotate-180" />}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <ul className="min-w-[240px] bg-cream p-2 shadow-[0_18px_50px_rgba(30,38,92,0.18)]">
                    {item.children.map((child) => (
                      <li key={child.href + child.label}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2.5 text-[13px] font-bold tracking-wide text-navy uppercase transition-colors hover:text-logo-red"
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

        {/* Login-Pill */}
        {cta && (
          <Link
            href={cta.href}
            prefetch={false}
            className="ml-7 hidden rounded-full bg-logo-gold px-6 text-[14px] font-bold uppercase leading-[40px] tracking-wide text-[#353535] transition-colors hover:bg-logo-gold-dark lg:inline-block"
          >
            {cta.label}
          </Link>
        )}

        {/* Mobile Menü-Button */}
        <button
          type="button"
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-full text-navy hover:bg-navy/5 lg:hidden"
          aria-expanded={openMobile}
          aria-label="Menü öffnen"
          onClick={() => setOpenMobile(true)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {/* Mobile-Overlay */}
      {openMobile && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-white lg:hidden">
          <div className="flex items-center justify-between px-5 py-3">
            <Image
              src="/images/logo-kloster-mariawald-transparent.png"
              alt="Kloster Mariawald"
              width={261}
              height={180}
              className="h-12 w-auto"
            />
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full text-navy hover:bg-navy/5"
              aria-label="Menü schließen"
              onClick={() => setOpenMobile(false)}
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
          <nav aria-label="Mobile Navigation" className="flex-1 overflow-y-auto px-6 pb-10">
            <ul className="mx-auto max-w-md pt-4">
              {items.map((item) => (
                <li key={item.label} className="border-b border-navy/10">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className="block py-4 text-[18px] font-bold tracking-wide text-navy uppercase"
                      onClick={() => setOpenMobile(false)}
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <button
                        type="button"
                        className="flex h-9 w-9 items-center justify-center rounded-full text-navy"
                        aria-label={`Unterpunkte zu ${item.label} anzeigen`}
                        onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
                      >
                        <Chevron className={openSub === item.label ? "rotate-180" : ""} />
                      </button>
                    )}
                  </div>
                  {item.children && openSub === item.label && (
                    <ul className="pb-3 pl-4">
                      {item.children.map((child) => (
                        <li key={child.href + child.label}>
                          <Link
                            href={child.href}
                            className="block py-2 text-[14px] font-bold tracking-wide text-navy/70 uppercase"
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
            {cta && (
              <Link
                href={cta.href}
                prefetch={false}
                className="mt-6 flex items-center justify-center rounded-full bg-logo-gold py-3.5 text-[16px] font-bold uppercase tracking-wide text-[#353535]"
                onClick={() => setOpenMobile(false)}
              >
                {cta.label}
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
