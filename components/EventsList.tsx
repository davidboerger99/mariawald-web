"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { eventCategories, eventCategoryColor, events, type EventItem } from "@/lib/content";

const monthNames = [
  "Januar", "Februar", "März", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Dezember",
];

function parts(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return { y, m, d };
}

function dayDot(iso: string) {
  const { d, m, y } = parts(iso);
  return `${String(d).padStart(2, "0")}.${String(m).padStart(2, "0")}.${y}`;
}

function dayShort(iso: string) {
  const { d, m, y } = parts(iso);
  return `${String(d).padStart(2, "0")}.${String(m).padStart(2, "0")}.${String(y).slice(2)}`;
}

function dateLabel(ev: EventItem) {
  return ev.endDate ? `${dayShort(ev.date)} – ${dayShort(ev.endDate)}` : dayDot(ev.date);
}

type Props = {
  limit?: number;
  showFilters?: boolean;
  category?: string; // nur diese Kategorie anzeigen (z. B. "Führung")
  upcomingOnly?: boolean; // nur anstehende Termine (ab heute)
  sundayTours?: boolean; // wiederkehrende Sonntagsführungen (12:30 & 14:00 Uhr) einblenden
};

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

export default function EventsList({ limit, showFilters = true, category, upcomingOnly = false, sundayTours = false }: Props) {
  const [active, setActive] = useState<string | null>(null);
  // "heute" erst nach dem Mounten setzen, um Hydration-Unterschiede zu vermeiden
  const [today, setToday] = useState<string | null>(null);
  useEffect(() => {
    setToday(new Date().toISOString().slice(0, 10));
  }, []);

  // wiederkehrende Sonntagsführungen als Termine erzeugen
  const sundayEvents = useMemo(() => {
    if (!sundayTours || !today) return [] as EventItem[];
    const out: EventItem[] = [];
    for (const dISO of upcomingSundays(today, 6)) {
      for (const time of ["12:30 Uhr", "14:00 Uhr"]) {
        out.push({
          slug: `sonntagsfuehrung-${dISO}-${time.slice(0, 5).replace(":", "")}`,
          title: "Klosterführung",
          date: dISO,
          time,
          location: "Treffpunkt Klosterpforte",
          category: "Führung",
          href: "/klosterfuehrungen",
          teaser:
            "Rundgang durch den ehemaligen Klausurbereich, ca. 60 Minuten. Kostenbeitrag: 8 € Erwachsene, 4 € Jugendliche.",
        });
      }
    }
    return out;
  }, [sundayTours, today]);

  const shown = useMemo(() => {
    let list = [...events, ...sundayEvents].sort(
      (a, b) => a.date.localeCompare(b.date) || (a.time ?? "").localeCompare(b.time ?? ""),
    );
    if (category) list = list.filter((e) => e.category === category);
    if (upcomingOnly && today) list = list.filter((e) => (e.endDate ?? e.date) >= today);
    if (active) list = list.filter((e) => e.category === active);
    if (limit) list = list.slice(0, limit);
    return list;
  }, [active, limit, category, upcomingOnly, today, sundayEvents]);

  // nach Monat/Jahr gruppieren
  const groups = useMemo(() => {
    const map = new Map<string, EventItem[]>();
    for (const ev of shown) {
      const { y, m } = parts(ev.date);
      const key = `${y}-${String(m).padStart(2, "0")}`;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(ev);
    }
    return Array.from(map.entries()).map(([key, items]) => {
      const [y, m] = key.split("-").map(Number);
      return { label: `${monthNames[m - 1]} ${y}`, items };
    });
  }, [shown]);

  return (
    <div>
      {showFilters && (
        <div className="flex flex-wrap gap-2 border-b border-black/10 pb-6">
          <button
            type="button"
            onClick={() => setActive(null)}
            className={`rounded-full border px-4 py-1.5 text-[13px] font-medium transition-colors ${
              active === null
                ? "border-heading bg-heading text-white"
                : "border-black/15 text-heading/70 hover:border-heading/50"
            }`}
          >
            Alle
          </button>
          {eventCategories.map((c) => (
            <button
              key={c.label}
              type="button"
              onClick={() => setActive(active === c.label ? null : c.label)}
              className={`flex items-center gap-2 rounded-full border px-4 py-1.5 text-[13px] font-medium transition-colors ${
                active === c.label ? "border-heading text-heading" : "border-black/15 text-heading/70 hover:border-heading/50"
              }`}
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: c.color }} />
              {c.label}
            </button>
          ))}
        </div>
      )}

      {groups.length === 0 && (
        <p className="py-10 text-center text-foreground/60">Keine Veranstaltungen in dieser Kategorie.</p>
      )}

      {groups.map((group) => (
        <section key={group.label} className="pt-10">
          <h2 className="text-[22px] font-semibold text-heading">{group.label}</h2>
          <ul className="mt-4">
            {group.items.map((ev) => (
              <li key={ev.slug} className="border-t border-black/10">
                <Link
                  href={ev.href ?? `/veranstaltungen/${ev.slug}`}
                  className="group grid grid-cols-1 gap-1 py-6 sm:grid-cols-[190px_1fr] sm:gap-6"
                >
                  <div className="pt-1 text-[15px] tabular-nums text-foreground/70">
                    {dateLabel(ev)}
                  </div>
                  <div>
                    <h3 className="flex items-start gap-3 text-[24px] font-semibold leading-tight text-heading transition-colors group-hover:text-logo-red">
                      <span
                        className="mt-2.5 h-3 w-3 shrink-0 rounded-full"
                        style={{ backgroundColor: eventCategoryColor(ev.category) }}
                        aria-hidden="true"
                      />
                      {ev.title}
                    </h3>
                    <p className="mt-1 pl-6 text-[14px] text-foreground/60">
                      {ev.category}
                      {ev.time ? ` | ${ev.time}` : ""} · {ev.location}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
