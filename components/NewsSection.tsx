import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import { formatDate, news } from "@/lib/content";

export default function NewsSection() {
  return (
    <section id="aktuelles" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-[1200px] px-[35px] py-24">
        <span className="eyebrow">Aus der Abtei</span>
        <h1 className="section-title">Aktuelles</h1>
        <p className="section-sub">
          Neuigkeiten, Pressemitteilungen und Veranstaltungstipps aus der Abtei Mariawald
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {news.slice(0, 3).map((n) => (
            <article
              key={n.slug}
              className="card-lift group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_6px_24px_rgba(30,38,92,0.06)]"
            >
              <Link href={`/nachrichten/${n.slug}`} className="flex h-full flex-col">
                <div className="overflow-hidden">
                  <Placeholder
                    label=""
                    className="h-48 w-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-[12px]">
                    <span className="rounded-full bg-accent/10 px-3 py-1 font-semibold text-accent">
                      {n.category === "Kloster" ? "Aus Kloster & Konvent" : n.category}
                    </span>
                    {n.date && <span className="text-[#999]">{formatDate(n.date)}</span>}
                  </div>
                  <h2 className="mt-4 text-[19px] font-medium leading-snug text-heading transition-colors group-hover:text-accent">
                    {n.title}
                  </h2>
                  <p className="mt-2 flex-1 text-[14px] leading-[24px] text-foreground/80">
                    {n.teaser}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-medium text-accent">
                    Mehr erfahren
                    <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <path d="M5 12h14m-6-6 6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Link
            href="/nachrichten"
            className="rounded-full bg-accent px-6 py-2.5 text-[14px] font-medium text-white shadow-[0_8px_20px_rgba(47,107,82,0.35)] transition-all hover:-translate-y-0.5 hover:bg-accent-dark"
          >
            Weitere Meldungen
          </Link>
          <Link
            href="/veranstaltungen"
            className="rounded-full border border-black/10 px-6 py-2.5 text-[14px] font-medium text-heading transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            Veranstaltungen
          </Link>
          <Link
            href="/newsletter"
            className="rounded-full border border-black/10 px-6 py-2.5 text-[14px] font-medium text-heading transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            Newsletter
          </Link>
        </div>
      </div>
    </section>
  );
}
