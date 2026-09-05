"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

const navItems = [
  {
    href: "/intern",
    label: "Übersicht",
    icon: "M3 12l9-9 9 9M5 10v10a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V10",
  },
  {
    href: "/intern/veranstaltungen",
    label: "Veranstaltungen",
    icon: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
  },
  {
    href: "/intern/nachrichten",
    label: "Nachrichten",
    icon: "M4 4h16v12H5.2L4 17.2V4z",
  },
  {
    href: "/intern/dateien",
    label: "Dateien",
    icon: "M4 4h6l2 2h8v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z",
  },
];

function Icon({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

export default function InternLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/intern" ? pathname === "/intern" : pathname.startsWith(href);

  return (
    <div className="min-h-screen bg-[#f6f7fb] lg:flex">
      {/* Sidebar */}
      <aside className="border-b border-black/10 bg-white lg:min-h-screen lg:w-64 lg:shrink-0 lg:border-b-0 lg:border-r">
        <div className="flex items-center gap-3 px-6 py-5">
          <Image
            src="/images/logo-kloster-mariawald.png"
            alt="Kloster Mariawald"
            width={261}
            height={180}
            className="h-10 w-auto"
          />
          <div className="leading-tight">
            <div className="text-[14px] font-semibold text-heading">Interner Bereich</div>
            <div className="text-[12px] text-foreground/50">Abtei Mariawald</div>
          </div>
        </div>

        <nav className="flex gap-1 overflow-x-auto px-3 pb-3 lg:flex-col lg:overflow-visible lg:px-4 lg:pb-0">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 whitespace-nowrap rounded-xl px-4 py-2.5 text-[14px] font-medium transition-colors ${
                isActive(item.href)
                  ? "bg-navy text-white"
                  : "text-heading/75 hover:bg-black/5 hover:text-heading"
              }`}
            >
              <Icon path={item.icon} />
              {item.label}
            </Link>
          ))}
          <a
            href="/api/logout"
            className="flex items-center gap-3 whitespace-nowrap rounded-xl px-4 py-2.5 text-[14px] font-medium text-heading/75 transition-colors hover:bg-black/5 hover:text-logo-red lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M16 17l5-5-5-5M21 12H9M13 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
            </svg>
            Abmelden
          </a>
        </nav>

        <div className="hidden px-4 pt-4 lg:block">
          <a
            href="/api/logout"
            className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-[14px] font-medium text-heading/75 transition-colors hover:bg-black/5 hover:text-logo-red"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M16 17l5-5-5-5M21 12H9M13 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
            </svg>
            Abmelden
          </a>
        </div>
      </aside>

      {/* Inhalt */}
      <main className="flex-1 px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="mx-auto max-w-[960px]">{children}</div>
      </main>
    </div>
  );
}
