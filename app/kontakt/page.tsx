import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: "Kontakt" };

const departments = [
  { label: "Pforte & Verwaltung", tel: "+49 (0) 2446 950-612", tel2: "+49 (0) 2446 950-611", fax: "+49 (0) 2446 950-6218" },
  { label: "Geschäftsleitung", tel: "+49 (0) 2446 950-614", fax: "+49 (0) 2446 950-6218" },
  { label: "Klostergaststätte", tel: "+49 (0) 2446 950-616" },
  { label: "Kunst- & Buchhandlung", tel: "+49 (0) 2446 950-629" },
  { label: "Klosterladen", tel: "+49 (0) 2446 950-629" },
  { label: "Likörfabrik", tel: "+49 (0) 2446 950-618", fax: "+49 (0) 2446 950-6218" },
];

function telHref(t: string) {
  return "tel:" + t.replace("(0)", "").replace(/[^+\d]/g, "");
}

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

        {/* Kontaktdaten */}
        <div>
          <h2 className="text-[28px] font-bold text-heading sm:text-[32px]">Kloster Mariawald</h2>

          <div className="mt-6 rounded-2xl border border-black/5 bg-muted p-6">
            <address className="text-[15px] leading-relaxed text-foreground/85 not-italic">
              Abtei Mariawald 1
              <br />
              52396 Heimbach
            </address>
            <dl className="mt-4 space-y-1 text-[15px]">
              <div className="flex gap-3">
                <dt className="w-16 shrink-0 text-foreground/60">Telefon</dt>
                <dd>
                  <a href={telHref(site.phone)} className="text-navy hover:text-logo-red">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-16 shrink-0 text-foreground/60">Fax</dt>
                <dd className="text-foreground/80">{site.fax}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-16 shrink-0 text-foreground/60">E-Mail</dt>
                <dd>
                  <a href={`mailto:${site.email}`} className="text-navy underline hover:text-logo-red">
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          <h3 className="mt-10 text-[18px] font-bold text-heading">Durchwahlen</h3>
          <ul className="mt-4 divide-y divide-black/10 border-t border-black/10">
            {departments.map((d) => (
              <li key={d.label} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3">
                <span className="text-[15px] font-semibold text-heading">{d.label}</span>
                <span className="text-[14px] text-foreground/80">
                  <a href={telHref(d.tel)} className="text-navy hover:text-logo-red">
                    {d.tel}
                  </a>
                  {d.tel2 && (
                    <>
                      {" / "}
                      <a href={telHref(d.tel2)} className="text-navy hover:text-logo-red">
                        {d.tel2}
                      </a>
                    </>
                  )}
                  {d.fax && <span className="text-foreground/50"> · Fax {d.fax}</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
