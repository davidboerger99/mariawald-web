"use client";

import { useMemo, useState } from "react";
import { eventCategories, eventCategoryColor, events, type EventItem } from "@/lib/content";

type Row = EventItem & { id: string };

const emptyForm = {
  title: "",
  date: "",
  endDate: "",
  time: "",
  location: "",
  category: eventCategories[0]?.label ?? "",
  teaser: "",
};

type FormState = typeof emptyForm;

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function fmt(iso: string) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${d}.${m}.${y}`;
}

const field =
  "mt-1.5 w-full rounded-lg border border-black/15 bg-white px-3.5 py-2.5 text-[14px] text-heading outline-none transition-colors focus:border-heading";
const labelCls = "block text-[13px] font-medium text-heading";

export default function EventsAdmin() {
  const [rows, setRows] = useState<Row[]>(() =>
    events.map((e) => ({ ...e, id: e.slug })),
  );
  const [form, setForm] = useState<FormState>(emptyForm);
  const [editing, setEditing] = useState<string | null>(null);

  const sorted = useMemo(
    () => [...rows].sort((a, b) => a.date.localeCompare(b.date) || (a.time ?? "").localeCompare(b.time ?? "")),
    [rows],
  );

  const set = (k: keyof FormState, v: string) => setForm((f) => ({ ...f, [k]: v }));

  function resetForm() {
    setForm(emptyForm);
    setEditing(null);
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.title || !form.date) return;
    const base: Row = {
      id: editing ?? (typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : slugify(form.title) + "-" + form.date),
      slug: editing ? (rows.find((r) => r.id === editing)?.slug ?? slugify(form.title)) : slugify(form.title),
      title: form.title.trim(),
      date: form.date,
      endDate: form.endDate || undefined,
      time: form.time.trim() || undefined,
      location: form.location.trim() || "Kloster Mariawald",
      category: form.category,
      teaser: form.teaser.trim(),
    };
    setRows((prev) =>
      editing ? prev.map((r) => (r.id === editing ? base : r)) : [...prev, base],
    );
    resetForm();
  }

  function edit(row: Row) {
    setEditing(row.id);
    setForm({
      title: row.title,
      date: row.date,
      endDate: row.endDate ?? "",
      time: row.time ?? "",
      location: row.location,
      category: row.category,
      teaser: row.teaser,
    });
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function remove(id: string) {
    setRows((prev) => prev.filter((r) => r.id !== id));
    if (editing === id) resetForm();
  }

  return (
    <>
      <header className="mb-6">
        <p className="text-[13px] font-semibold uppercase tracking-wide text-accent">Inhalte</p>
        <h1 className="mt-1 text-[28px] font-semibold text-heading">Veranstaltungen</h1>
        <p className="mt-2 text-[15px] text-foreground/70">
          Sondertermine der Abtei anlegen und bearbeiten. Die wiederkehrenden Sonntagstermine
          (Heilige Messe, Klosterführungen) werden automatisch erzeugt.
        </p>
      </header>

      {/* Vorschau-Hinweis */}
      <div className="mb-6 flex items-start gap-3 rounded-xl border border-amber-300/60 bg-amber-50 p-4 text-[13px] leading-[20px] text-amber-900">
        <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 9v4M12 17h.01M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        </svg>
        <span>
          <strong>Vorschau-Modus:</strong> Änderungen werden noch nicht dauerhaft gespeichert oder
          auf der Website veröffentlicht. Die Anbindung an die Speicherung folgt im nächsten Schritt.
        </span>
      </div>

      {/* Formular */}
      <form onSubmit={submit} className="rounded-2xl border border-black/10 bg-white p-6 shadow-[0_6px_24px_rgba(30,38,92,0.05)]">
        <h2 className="text-[17px] font-semibold text-heading">
          {editing ? "Veranstaltung bearbeiten" : "Neue Veranstaltung"}
        </h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          <label className="sm:col-span-2">
            <span className={labelCls}>Titel</span>
            <input className={field} value={form.title} onChange={(e) => set("title", e.target.value)} placeholder="z. B. Dialog mit der Stille" required />
          </label>
          <label>
            <span className={labelCls}>Datum</span>
            <input type="date" className={field} value={form.date} onChange={(e) => set("date", e.target.value)} required />
          </label>
          <label>
            <span className={labelCls}>Enddatum (optional)</span>
            <input type="date" className={field} value={form.endDate} onChange={(e) => set("endDate", e.target.value)} />
          </label>
          <label>
            <span className={labelCls}>Uhrzeit (optional)</span>
            <input className={field} value={form.time} onChange={(e) => set("time", e.target.value)} placeholder="z. B. 17:30 Uhr" />
          </label>
          <label>
            <span className={labelCls}>Ort</span>
            <input className={field} value={form.location} onChange={(e) => set("location", e.target.value)} placeholder="Kloster Mariawald" />
          </label>
          <label className="sm:col-span-2">
            <span className={labelCls}>Kategorie</span>
            <select className={field} value={form.category} onChange={(e) => set("category", e.target.value)}>
              {eventCategories.map((c) => (
                <option key={c.label} value={c.label}>{c.label}</option>
              ))}
            </select>
          </label>
          <label className="sm:col-span-2">
            <span className={labelCls}>Kurzbeschreibung</span>
            <textarea className={`${field} min-h-[90px] resize-y`} value={form.teaser} onChange={(e) => set("teaser", e.target.value)} placeholder="Ein kurzer Text zur Veranstaltung." />
          </label>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <button type="submit" className="rounded-full bg-navy px-6 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-navy-dark">
            {editing ? "Änderungen übernehmen" : "Veranstaltung hinzufügen"}
          </button>
          {editing && (
            <button type="button" onClick={resetForm} className="rounded-full border border-black/15 px-6 py-2.5 text-[14px] font-semibold text-heading transition-colors hover:border-heading">
              Abbrechen
            </button>
          )}
        </div>
      </form>

      {/* Liste */}
      <h2 className="mt-10 text-[17px] font-semibold text-heading">
        Angelegte Veranstaltungen <span className="text-foreground/50">({sorted.length})</span>
      </h2>
      <ul className="mt-4 space-y-3">
        {sorted.length === 0 && (
          <li className="rounded-xl border border-dashed border-black/15 p-6 text-center text-[14px] text-foreground/60">
            Noch keine Veranstaltungen angelegt.
          </li>
        )}
        {sorted.map((row) => (
          <li key={row.id} className="flex flex-wrap items-center gap-4 rounded-xl border border-black/10 bg-white p-4">
            <div className="w-[120px] shrink-0 text-[13px] tabular-nums text-foreground/70">
              {fmt(row.date)}
              {row.endDate ? ` – ${fmt(row.endDate)}` : ""}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: eventCategoryColor(row.category) }} />
                <span className="truncate text-[15px] font-medium text-heading">{row.title}</span>
              </div>
              <div className="mt-0.5 pl-[18px] text-[12px] text-foreground/55">
                {row.category}
                {row.time ? ` · ${row.time}` : ""} · {row.location}
              </div>
            </div>
            <div className="flex gap-2">
              <button type="button" onClick={() => edit(row)} className="rounded-lg border border-black/15 px-3 py-1.5 text-[13px] font-medium text-heading transition-colors hover:border-heading">
                Bearbeiten
              </button>
              <button type="button" onClick={() => remove(row.id)} className="rounded-lg border border-black/15 px-3 py-1.5 text-[13px] font-medium text-logo-red transition-colors hover:border-logo-red">
                Löschen
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
