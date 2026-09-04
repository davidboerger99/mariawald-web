"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { events, type EventItem } from "@/lib/content";

// die nächsten `count` Sonntage ab `fromISO` (inkl. heute, falls Sonntag)
function upcomingSundays(fromISO: string, count: number): string[] {
  const [y, m, d] = fromISO.split("-").map(Number);
  let dt = new Date(Date.UTC(y, m - 1, d));
  dt = new Date(dt.getTime() + ((7 - dt.getUTCDay()) % 7) * 86400000);
  const out: string[] = [];
  for (let i = 0; i < count; i++) {
    out.push(dt.toISOString().slice(0, 10));
    dt = new Date(dt.getTime() + 7 * 86400000);
  }
  return out;
}

const monthNames = [
  "Januar", "Februar", "März", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Dezember",
];

// Fallback-Bilder, wenn bei einer Veranstaltung kein eigenes Bild gesetzt ist
const fallbackImages = [
  "/images/abteikirche.jpg",
  "/images/pforte-herbst.jpg",
  "/images/panorama.jpg",
  "/images/herbst.jpg",
  "/images/luftbild.jpg",
];

function formatDate(iso: string, endIso?: string) {
  const [y, m, d] = iso.split("-").map(Number);
  if (endIso) {
    const [ey, em, ed] = endIso.split("-").map(Number);
    if (m === em && y === ey) {
      return `${String(d).padStart(2, "0")}.–${String(ed).padStart(2, "0")}. ${monthNames[m - 1]} ${y}`;
    }
    return `${String(d).padStart(2, "0")}. ${monthNames[m - 1]} – ${String(ed).padStart(2, "0")}. ${monthNames[em - 1]} ${ey}`;
  }
  return `${String(d).padStart(2, "0")}. ${monthNames[m - 1]} ${y}`;
}

export default function EventsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [today, setToday] = useState<string | null>(null);
  useEffect(() => {
    setToday(new Date().toISOString().slice(0, 10));
  }, []);

  // Sondertermine plus die wiederkehrenden Sonntagstermine, chronologisch
  const sorted = useMemo(() => {
    const generated: EventItem[] = [];
    if (today) {
      for (const dISO of upcomingSundays(today, 8)) {
        generated.push({
          slug: `sonntagsmesse-${dISO}`,
          title: "Heilige Messe",
          date: dISO,
          time: "10:00 Uhr",
          location: "Abteikirche",
          category: "Gottesdienst",
          href: "/gottesdienstzeiten",
          teaser: "",
        });
        for (const time of ["12:30 Uhr", "14:00 Uhr"]) {
          generated.push({
            slug: `sonntagsfuehrung-${dISO}-${time.slice(0, 5).replace(":", "")}`,
            title: "Klosterführung",
            date: dISO,
            time,
            location: "Treffpunkt Klosterpforte",
            category: "Führung",
            href: "/klosterfuehrungen",
            teaser: "",
          });
        }
      }
    }
    let list = [...events, ...generated];
    if (today) list = list.filter((e) => (e.endDate ?? e.date) >= today);
    list.sort((a, b) => a.date.localeCompare(b.date) || (a.time ?? "").localeCompare(b.time ?? ""));
    return list.slice(0, 12);
  }, [today]);

  function onScroll() {
    const el = trackRef.current;
    if (!el) return;
    const cards = Array.from(el.children) as HTMLElement[];
    const base = cards[0]?.offsetLeft ?? 0;
    let idx = 0;
    let best = Infinity;
    cards.forEach((c, i) => {
      const dist = Math.abs(c.offsetLeft - base - el.scrollLeft);
      if (dist < best) {
        best = dist;
        idx = i;
      }
    });
    setActive(idx);
  }

  function scrollToCard(i: number) {
    const el = trackRef.current;
    if (!el) return;
    const first = el.children[0] as HTMLElement | undefined;
    const card = el.children[i] as HTMLElement | undefined;
    if (card && first) el.scrollTo({ left: card.offsetLeft - first.offsetLeft, behavior: "smooth" });
  }

  return (
    <section id="veranstaltungen" className="scroll-mt-24 overflow-hidden bg-white py-20">
      {/* Kopfbereich in der zentrierten Spalte */}
      <div className="mx-auto max-w-[1240px] px-5 lg:px-9">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <h2 className="text-[32px] font-bold leading-[1.15] text-heading sm:text-[40px]">
              Die Veranstaltungen
              <br />
              in unserem Kloster
            </h2>
            <div className="mt-6 flex gap-2.5">
              {sorted.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToCard(i)}
                  aria-label={`Zu Veranstaltung ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    i === active ? "bg-logo-red" : "bg-black/20 hover:bg-black/40"
                  }`}
                />
              ))}
            </div>
          </div>

          <Link
            href="/veranstaltungen"
            className="inline-flex items-center gap-3 rounded-full border border-heading/30 px-6 py-2.5 text-[15px] font-medium text-heading transition-colors hover:border-heading"
          >
            Alle anzeigen
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Karten-Track: links am Inhaltsrand ausgerichtet, rechts über die volle Breite */}
      <div
        ref={trackRef}
        onScroll={onScroll}
        style={{
          paddingLeft: "max(1.25rem, calc((100vw - 1240px) / 2 + 2.25rem))",
          paddingRight: "1.5rem",
        }}
        className="mt-10 flex gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {sorted.map((ev, i) => (
          <Link
            key={ev.slug}
            href={ev.href ?? `/veranstaltungen/${ev.slug}`}
            className="group w-[290px] shrink-0 sm:w-[340px]"
          >
            <div className="relative aspect-square w-full overflow-hidden">
              <Image
                src={ev.image ?? fallbackImages[i % fallbackImages.length]}
                alt={ev.title}
                fill
                sizes="340px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="mt-4 text-[14px] text-foreground/70">
              {formatDate(ev.date, ev.endDate)}
              {ev.category ? ` | ${ev.category}` : ""}
            </p>
            <h3 className="mt-1 text-[20px] font-bold leading-snug text-heading group-hover:underline">
              {ev.title}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}
