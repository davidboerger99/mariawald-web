import Link from "next/link";
import { serviceTimes } from "@/lib/content";

export default function ServiceTimesSection() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-[1200px] px-[35px] py-24 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent shadow-[0_10px_30px_rgba(47,107,82,0.4)]">
          <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" aria-hidden="true">
            <path d="M12 2a1.5 1.5 0 0 1 1.5 1.5v.6A6.5 6.5 0 0 1 18.5 10v4.6l1.7 2.6a1 1 0 0 1-.8 1.6H4.6a1 1 0 0 1-.8-1.6l1.7-2.6V10a6.5 6.5 0 0 1 5-6V3.5A1.5 1.5 0 0 1 12 2zm-2.4 18h4.8a2.4 2.4 0 0 1-4.8 0z" />
          </svg>
        </span>
        <span className="eyebrow mt-6">Gebet und Liturgie</span>
        <h1 className="section-title">Aktuelle Gottesdienstzeiten</h1>
        <p className="section-sub">
          Alle Gottesdienste in der Abteikirche sind öffentlich. Sie sind herzlich eingeladen.
        </p>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3">
          {serviceTimes.map((block) => (
            <div
              key={block.day}
              className="card-lift rounded-2xl border border-white/60 bg-white/70 p-6 text-left shadow-[0_6px_24px_rgba(30,38,92,0.06)] backdrop-blur-sm"
            >
              <h2 className="text-[17px] font-medium text-heading">{block.day}</h2>
              <ul className="mt-4 space-y-2.5">
                {block.times.map((t) => (
                  <li key={t.time + t.name} className="flex items-baseline gap-3 text-[14px]">
                    <span className="rounded-md bg-accent/10 px-2 py-0.5 font-semibold text-accent tabular-nums">
                      {t.time}
                    </span>
                    <span className="text-foreground/85">{t.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Link
          href="/gottesdienstzeiten"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-accent/40 px-6 py-2.5 text-[14px] font-medium text-accent transition-colors hover:bg-accent hover:text-white"
        >
          Alle Zeiten und Besonderheiten
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
