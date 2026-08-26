import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { documents, formatInternDate, meetings, notices } from "@/lib/intern";

export const metadata: Metadata = {
  title: "Interner Bereich",
  robots: { index: false, follow: false },
};

const categoryStyles: Record<string, string> = {
  Bau: "bg-accent/10 text-accent",
  Konvent: "bg-navy/10 text-navy",
  Allgemein: "bg-black/5 text-heading/70",
  Termin: "bg-accent/10 text-accent",
};

export default function InternPage() {
  return (
    <>
      <PageHeader
        title="Interner Bereich"
        intro="Mitteilungen, Besprechungen und Dateiablage für die Mitarbeitenden der Abtei Mariawald."
      />

      <div className="mx-auto max-w-[1200px] px-[35px] py-16">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          {/* Mitteilungen */}
          <section>
            <div className="flex items-center justify-between">
              <h2 className="text-[24px] font-light text-heading">Interne Mitteilungen</h2>
            </div>
            <div className="mt-6 space-y-4">
              {notices.map((n) => (
                <article
                  key={n.id}
                  className="rounded-2xl border border-black/5 bg-white p-6 shadow-[0_6px_24px_rgba(30,38,92,0.06)]"
                >
                  <div className="flex flex-wrap items-center gap-2 text-[12px]">
                    <span className={`rounded-full px-3 py-1 font-semibold ${categoryStyles[n.category] ?? categoryStyles.Allgemein}`}>
                      {n.category}
                    </span>
                    <span className="text-[#999]">{formatInternDate(n.date)}</span>
                  </div>
                  <h3 className="mt-3 text-[19px] font-medium text-heading">{n.title}</h3>
                  <p className="mt-2 text-[14px] leading-[24px] text-foreground/80">{n.body}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Seitenspalte */}
          <div className="space-y-10">
            {/* Nächste Besprechungen */}
            <section>
              <h2 className="text-[24px] font-light text-heading">Nächste Besprechungen</h2>
              <ul className="mt-6 space-y-3">
                {meetings.map((m) => {
                  const [, month, day] = m.date.split("-");
                  const months = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];
                  return (
                    <li
                      key={m.title + m.date}
                      className="flex items-start gap-4 rounded-2xl border border-black/5 bg-white p-4 shadow-[0_6px_24px_rgba(30,38,92,0.06)]"
                    >
                      <div className="flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-xl bg-accent/10 text-accent">
                        <span className="text-[22px] font-semibold leading-none tabular-nums">{Number(day)}</span>
                        <span className="text-[11px] font-medium uppercase">{months[Number(month) - 1]}</span>
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-[15px] font-medium text-heading">{m.title}</h3>
                        <p className="mt-0.5 text-[13px] text-[#777]">
                          {m.time} · {m.location}
                        </p>
                        {m.note && <p className="mt-0.5 text-[13px] text-[#999]">{m.note}</p>}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>

            {/* Dateiablage */}
            <section>
              <h2 className="text-[24px] font-light text-heading">Dateiablage</h2>
              <ul className="mt-6 space-y-3">
                {documents.map((d) => (
                  <li key={d.href}>
                    <a
                      href={d.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-4 shadow-[0_6px_24px_rgba(30,38,92,0.06)] transition-shadow hover:shadow-[0_12px_30px_rgba(30,38,92,0.1)]"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-[11px] font-semibold text-navy">
                        {d.kind}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[15px] font-medium text-heading group-hover:text-accent">
                          {d.name}
                        </span>
                        <span className="block text-[13px] text-[#999]">{d.description}</span>
                        <span className="block text-[12px] text-[#bbb]">
                          Aktualisiert {formatInternDate(d.updated)}
                        </span>
                      </span>
                      <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M12 4v12m0 0 4-4m-4 4-4-4M4 20h16" />
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[13px] leading-[20px] text-[#999]">
                Neue Dokumente werden von der Verwaltung eingepflegt.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
