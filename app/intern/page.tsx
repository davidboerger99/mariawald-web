import type { Metadata } from "next";
import Link from "next/link";
import { events, news } from "@/lib/content";

export const metadata: Metadata = {
  title: "Interner Bereich",
  robots: { index: false, follow: false },
};

const stats = [
  {
    label: "Veranstaltungen",
    value: events.length,
    href: "/intern/veranstaltungen",
    hint: "Sondertermine verwalten",
  },
  {
    label: "Nachrichten",
    value: news.length,
    href: "/intern/nachrichten",
    hint: "Meldungen bearbeiten",
  },
];

export default function InternDashboard() {
  return (
    <>
      <header className="mb-8">
        <p className="text-[13px] font-semibold uppercase tracking-wide text-accent">Dashboard</p>
        <h1 className="mt-1 text-[28px] font-semibold text-heading">Willkommen im internen Bereich</h1>
        <p className="mt-2 text-[15px] text-foreground/70">
          Hier verwalten Sie die Inhalte der Website der Abtei Mariawald.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {stats.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            className="group rounded-2xl border border-black/10 bg-white p-6 shadow-[0_6px_24px_rgba(30,38,92,0.05)] transition-shadow hover:shadow-[0_12px_30px_rgba(30,38,92,0.1)]"
          >
            <div className="flex items-baseline justify-between">
              <span className="text-[15px] font-medium text-heading">{s.label}</span>
              <span className="text-[32px] font-semibold tabular-nums text-navy">{s.value}</span>
            </div>
            <p className="mt-1 text-[13px] text-foreground/60">{s.hint}</p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-accent group-hover:gap-2.5">
              Öffnen
              <svg viewBox="0 0 24 24" className="h-4 w-4 transition-all" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </span>
          </Link>
        ))}
      </div>

      <section className="mt-8 rounded-2xl border border-black/10 bg-white p-6">
        <h2 className="text-[18px] font-semibold text-heading">Schnellzugriff</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/intern/veranstaltungen"
            className="rounded-full bg-navy px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-navy-dark"
          >
            Veranstaltung hinzufügen
          </Link>
          <Link
            href="/intern/nachrichten"
            className="rounded-full border border-black/15 px-5 py-2.5 text-[14px] font-semibold text-heading transition-colors hover:border-heading"
          >
            Nachricht hinzufügen
          </Link>
          <Link
            href="/"
            className="rounded-full border border-black/15 px-5 py-2.5 text-[14px] font-semibold text-heading transition-colors hover:border-heading"
          >
            Website ansehen
          </Link>
        </div>
      </section>
    </>
  );
}
