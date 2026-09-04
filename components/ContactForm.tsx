"use client";

import { site } from "@/lib/content";

export default function ContactForm() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const lines = [
      `Name: ${f.get("vorname") ?? ""} ${f.get("nachname") ?? ""}`.trim(),
      `E-Mail: ${f.get("email") ?? ""}`,
      `Telefon: ${f.get("tel") ?? ""}`,
      "",
      String(f.get("nachricht") ?? ""),
    ];
    const body = encodeURIComponent(lines.join("\n"));
    const subject = encodeURIComponent("Anfrage über die Website");
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  const field =
    "mt-1.5 w-full rounded-lg border border-black/15 bg-white px-4 py-2.5 text-[15px] text-heading outline-none transition-colors focus:border-heading";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-[14px] font-medium text-heading">
          Vorname
          <input name="vorname" type="text" required className={field} />
        </label>
        <label className="block text-[14px] font-medium text-heading">
          Nachname
          <input name="nachname" type="text" required className={field} />
        </label>
      </div>
      <label className="block text-[14px] font-medium text-heading">
        E-Mail-Adresse
        <input name="email" type="email" required className={field} />
      </label>
      <label className="block text-[14px] font-medium text-heading">
        Telefon (optional)
        <input name="tel" type="tel" className={field} />
      </label>
      <label className="block text-[14px] font-medium text-heading">
        Ihre Nachricht
        <textarea name="nachricht" rows={6} required className={field} />
      </label>
      <button
        type="submit"
        className="rounded-full bg-navy px-7 py-3 text-[14px] font-bold tracking-wide text-white uppercase transition-colors hover:bg-navy-dark"
      >
        Nachricht senden
      </button>
      <p className="text-[13px] text-foreground/50">
        Beim Absenden öffnet sich Ihr E-Mail-Programm mit der Nachricht an {site.email}.
      </p>
    </form>
  );
}
