import type { Metadata } from "next";
import { documents, formatInternDate } from "@/lib/intern";

export const metadata: Metadata = {
  title: "Dateien",
  robots: { index: false, follow: false },
};

export default function InternDateienPage() {
  return (
    <>
      <header className="mb-6">
        <p className="text-[13px] font-semibold uppercase tracking-wide text-accent">Ablage</p>
        <h1 className="mt-1 text-[28px] font-semibold text-heading">Dateien</h1>
        <p className="mt-2 text-[15px] text-foreground/70">
          Dokumente für den internen Bereich.
        </p>
      </header>

      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-amber-300/60 bg-amber-50 p-4 text-[13px] leading-[20px] text-amber-900">
        <span>
          <strong>Vorschau-Modus:</strong> Das Hochladen neuer Dateien wird im nächsten Schritt
          angebunden.
        </span>
        <button
          type="button"
          disabled
          className="cursor-not-allowed rounded-full bg-navy/40 px-5 py-2 text-[13px] font-semibold text-white"
        >
          Datei hochladen
        </button>
      </div>

      <ul className="space-y-3">
        {documents.map((d) => (
          <li key={d.href}>
            <a
              href={d.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-black/10 bg-white p-4 transition-shadow hover:shadow-[0_10px_26px_rgba(30,38,92,0.08)]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-[11px] font-semibold text-navy">
                {d.kind}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[15px] font-medium text-heading group-hover:text-accent">{d.name}</span>
                <span className="block text-[13px] text-foreground/55">{d.description}</span>
                <span className="block text-[12px] text-foreground/40">Aktualisiert {formatInternDate(d.updated)}</span>
              </span>
              <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 4v12m0 0 4-4m-4 4-4-4M4 20h16" />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
