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

const PAGE_SIZE = 8;

export default function VeranstaltungenList() {
  // "heute" erst nach dem Mounten setzen, um Hydration-Unterschiede zu vermeiden
  const [today, setToday] = useState<string | null>(null);
  useEffect(() => {
    setToday(new Date().toISOString().slice(0, 10));
  }, []);

  const [category, setCategory] = useState<string | null>(null);
  const [month, setMonth] = useState<string | null>(null); // "YYYY-MM"
  const [visible, setVisible] = useState(PAGE_SIZE);

  // wiederkehrende Sonntagstermine (Heilige Messe + Klosterführungen) erzeugen
  const recurring = useMemo(() => {
    if (!today) return [] as EventItem[];
    const out: EventItem[] = [];
    for (const dISO of upcomingSundays(today, 16)) {
      out.push({
        slug: `sonntagsmesse-${dISO}`,
        title: "Heilige Messe",
        date: dISO,
        time: "10:00 Uhr",
        location: "Abteikirche",
        category: "Gottesdienst",
        href: "/gottesdienstzeiten",
        teaser:
          "Alle Freunde und Besucher der Abtei sind herzlich zur Mitfeier eingeladen.",
      });
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
            "Rundgang durch den ehemaligen Klausurbereich, ca. 60 Minuten.",
        });
      }
    }
    return out;
  }, [today]);

  // alle anstehenden Termine, sortiert
  const all = useMemo(() => {
    const list = [...events, ...recurring].sort(
      (a, b) => a.date.localeCompare(b.date) || (a.time ?? "").localeCompare(b.time ?? ""),
    );
    if (!today) return list;
    return list.filter((e) => (e.endDate ?? e.date) >= today);
  }, [recurring, today]);

  // Monatsoptionen für das Dropdown aus den vorhandenen Terminen ableiten
  const monthOptions = useMemo(() => {
    const set = new Map<string, string>();
    for (const ev of all) {
      const { y, m } = parts(ev.date);
      const key = `${y}-${String(m).padStart(2, "0")}`;
      set.set(key, `${monthNames[m - 1]} ${y}`);
    }
    return Array.from(set.entries());
  }, [all]);

  // gefilterte Liste
  const filtered = useMemo(() => {
    let list = all;
    if (category) list = list.filter((e) => e.category === category);
    if (month) list = list.filter((e) => `${parts(e.date).y}-${String(parts(e.date).m).padStart(2, "0")}` === month);
    return list;
  }, [all, category, month]);

  // beim Filterwechsel wieder von vorne anzeigen
  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [category, month]);

  const pageItems = filtered.slice(0, visible);
  const hasMore = filtered.length > visible;

  // sichtbare Termine nach Monat gruppieren
  const groups = useMemo(() => {
    const map = new Map<string, EventItem[]>();
    for (const ev of pageItems) {
      const { y, m } = parts(ev.date);
      const key = `${y}-${String(m).padStart(2, "0")}`;
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(ev);
    }
    return Array.from(map.entries()).map(([key, items]) => {
      const [y, m] = key.split("-").map(Number);
      return { label: monthNames[m - 1], year: y, items };
    });
  }, [pageItems]);

  // ICS-Kalenderdatei der sichtbaren Termine erzeugen und herunterladen
  function download() {
    const pad = (n: number) => String(n).padStart(2, "0");
    const lines = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Abtei Mariawald//Veranstaltungen//DE",
      "CALSCALE:GREGORIAN",
    ];
    for (const ev of filtered) {
      const s = parts(ev.date);
      const e = parts(ev.endDate ?? ev.date);
      const start = `${s.y}${pad(s.m)}${pad(s.d)}`;
      // DTEND ist bei VALUE=DATE exklusiv -> einen Tag nach dem Endtag
      const endDt = new Date(Date.UTC(e.y, e.m - 1, e.d + 1));
      const end = `${endDt.getUTCFullYear()}${pad(endDt.getUTCMonth() + 1)}${pad(endDt.getUTCDate())}`;
      lines.push(
        "BEGIN:VEVENT",
        `UID:${ev.slug}@kloster-mariawald.de`,
        `DTSTAMP:${start}T000000Z`,
        `DTSTART;VALUE=DATE:${start}`,
        `DTEND;VALUE=DATE:${end}`,
        `SUMMARY:${ev.title}${ev.time ? ` (${ev.time})` : ""}`,
        `LOCATION:${ev.location}`,
        "END:VEVENT",
      );
    }
    lines.push("END:VCALENDAR");
    const blob = new Blob([lines.join("\r\n")], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "veranstaltungen-mariawald.ics";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      {/* Filterleiste: Kategorie-Pills links, Dropdowns rechts */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCategory(null)}
            className={`rounded-full border px-4 py-2 text-[14px] font-medium transition-colors ${
              category === null
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
              onClick={() => setCategory(category === c.label ? null : c.label)}
              className={`flex items-center gap-2 rounded-full border px-4 py-2 text-[14px] font-medium transition-colors ${
                category === c.label
                  ? "border-heading text-heading"
                  : "border-black/15 text-heading/70 hover:border-heading/50"
              }`}
            >
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: c.color }} />
              {c.label}
            </button>
          ))}
        </div>

        <div className="flex gap-3 sm:ml-auto">
          <div className="relative">
            <select
              aria-label="Monat"
              value={month ?? ""}
              onChange={(e) => setMonth(e.target.value || null)}
              className="appearance-none rounded-full border border-black/15 bg-white py-2 pl-4 pr-9 text-[14px] font-medium text-heading outline-none transition-colors hover:border-heading/50"
            >
              <option value="">Monat</option>
              {monthOptions.map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
            <Chevron />
          </div>
          <div className="relative">
            <select
              aria-label="Kategorie"
              value={category ?? ""}
              onChange={(e) => setCategory(e.target.value || null)}
              className="appearance-none rounded-full border border-black/15 bg-white py-2 pl-4 pr-9 text-[14px] font-medium text-heading outline-none transition-colors hover:border-heading/50"
            >
              <option value="">Kategorie</option>
              {eventCategories.map((c) => (
                <option key={c.label} value={c.label}>
                  {c.label}
                </option>
              ))}
            </select>
            <Chevron />
          </div>
        </div>
      </div>

      {/* Listen-Panel */}
      <div className="mt-6 rounded-2xl bg-black/[0.03] px-5 py-6 sm:px-9 sm:py-8">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={download}
            className="inline-flex items-center gap-2 text-[14px] font-medium text-heading/70 transition-colors hover:text-heading"
          >
            Herunterladen
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 9V4h12v5M6 18H4a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-2M6 14h12v6H6z" />
            </svg>
          </button>
        </div>

        {groups.length === 0 && (
          <p className="py-10 text-center text-foreground/60">
            Für diese Auswahl sind derzeit keine Veranstaltungen eingetragen.
          </p>
        )}

        {groups.map((group) => (
          <section key={`${group.label}-${group.year}`} className="pt-6 first:pt-2">
            <h2 className="text-[22px] font-semibold text-heading">{group.label}</h2>
            <ul className="mt-3">
              {group.items.map((ev) => (
                <li key={ev.slug} className="border-t border-black/10">
                  <Link
                    href={ev.href ?? `/veranstaltungen/${ev.slug}`}
                    className="group grid grid-cols-1 gap-1 py-6 sm:grid-cols-[200px_1fr] sm:gap-8"
                  >
                    <div className="pt-1.5 text-[15px] tabular-nums text-foreground/70">
                      {dateLabel(ev)}
                    </div>
                    <div>
                      <h3 className="flex items-start gap-3 text-[26px] font-semibold leading-[1.15] text-heading transition-colors group-hover:text-logo-red">
                        <span
                          className="mt-2.5 h-3 w-3 shrink-0 rounded-full"
                          style={{ backgroundColor: eventCategoryColor(ev.category) }}
                          aria-hidden="true"
                        />
                        {ev.title}
                      </h3>
                      <p className="mt-1 pl-6 text-[14px] text-foreground/60">
                        {ev.category}
                        {ev.time ? ` | ${ev.time}` : ""}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="rounded-full border border-heading px-8 py-3 text-[14px] font-semibold text-heading transition-colors hover:bg-heading hover:text-white"
          >
            Mehr laden
          </button>
        </div>
      )}
    </div>
  );
}

function Chevron() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-heading/60"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
