import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: "Kontakt" };

const contacts = [
  {
    label: "Klosterpforte",
    role: "Allgemeine Anfragen und Besuch",
    tel: site.phone,
    email: site.email,
    icon: (
      <path d="M4 20V10l8-6 8 6v10h-6v-6h-4v6H4z" />
    ),
  },
  {
    label: "Gästehaus",
    role: "Übernachtung und Einkehr",
    tel: site.phone,
    email: "gaestehaus@mariawald.de",
    icon: (
      <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-5h6v5M9 11h.01M15 11h.01" />
    ),
  },
  {
    label: "Klosterführungen",
    role: "Anmeldung und Gruppen",
    tel: site.phone,
    email: site.email,
    icon: (
      <path d="M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM4 21a8 8 0 0 1 16 0" />
    ),
  },
];

export default function KontaktPage() {
  return (
    <>
      <PageHeader title="Kontakt" intro="So erreichen Sie die Abtei Mariawald." />

      <div className="mx-auto grid max-w-[1150px] gap-16 px-5 py-16 lg:grid-cols-2 lg:px-9 lg:py-20">
        {/* Formular */}
        <div>
          <h2 className="text-[28px] font-bold text-heading sm:text-[32px]">Ihre Nachricht an uns</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-foreground/70">
            Nutzen Sie das Formular für Ihre Anfrage, wir melden uns so bald wie möglich.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>

        {/* Ansprechstellen */}
        <div>
          <h2 className="text-[28px] font-bold text-heading sm:text-[32px]">Ansprechstellen</h2>
          <ul className="mt-8 space-y-8">
            {contacts.map((c) => (
              <li key={c.label} className="flex gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-cream text-logo-red">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {c.icon}
                  </svg>
                </span>
                <div>
                  <p className="text-[18px] font-bold text-heading">{c.label}</p>
                  <p className="text-[14px] text-foreground/70">{c.role}</p>
                  <p className="mt-1 text-[14px]">
                    <a href={`tel:${c.tel.replace(/[^+\d]/g, "")}`} className="text-navy hover:text-logo-red">
                      {c.tel}
                    </a>
                  </p>
                  <p className="text-[14px]">
                    <a href={`mailto:${c.email}`} className="text-navy underline hover:text-logo-red">
                      {c.email}
                    </a>
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 rounded-2xl border border-black/5 bg-muted p-6">
            <h3 className="text-[16px] font-bold text-heading">Anschrift</h3>
            <address className="mt-2 text-[15px] leading-relaxed text-foreground/80 not-italic">
              Abtei Mariawald
              <br />
              D-52396 Heimbach/Eifel
              <br />
              Telefon: {site.phone}
            </address>
          </div>
        </div>
      </div>
    </>
  );
}
