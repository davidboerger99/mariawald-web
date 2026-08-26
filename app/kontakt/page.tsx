import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: "Kontakt" };

export default function KontaktPage() {
  return (
    <>
      <PageHeader title="Kontakt" intro="So erreichen Sie die Abtei Mariawald." />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-2">
        <div>
          <h2 className="text-[24px] font-light text-heading">Anschrift</h2>
          <address className="mt-4 not-italic leading-relaxed text-foreground/80">
            {site.address}
            <br />
            Telefon: {site.phone}
            <br />
            E-Mail:{" "}
            <a href={`mailto:${site.email}`} className="text-accent underline">
              {site.email}
            </a>
          </address>
          <h2 className="mt-10 text-[24px] font-light text-heading">Pforte</h2>
          <p className="mt-4 leading-relaxed text-foreground/80">
            Die Klosterpforte ist täglich von 9 bis 17 Uhr besetzt. Außerhalb
            dieser Zeiten erreichen Sie uns per E-Mail.
          </p>
        </div>
        <form className="rounded-xl border border-[#e5e5e5] bg-cream p-6">
          <h2 className="text-[24px] font-light text-heading">Nachricht schreiben</h2>
          <div className="mt-5 space-y-4">
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Ihr Name</span>
              <input
                type="text"
                name="name"
                className="w-full rounded-md border border-[#e5e5e5] bg-white px-3 py-2"
                required
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Ihre E-Mail-Adresse</span>
              <input
                type="email"
                name="email"
                className="w-full rounded-md border border-[#e5e5e5] bg-white px-3 py-2"
                required
              />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Ihre Nachricht</span>
              <textarea
                name="message"
                rows={6}
                className="w-full rounded-md border border-[#e5e5e5] bg-white px-3 py-2"
                required
              />
            </label>
            <button
              type="submit"
              className="rounded-md bg-accent px-6 py-3 text-sm font-medium tracking-wide text-white uppercase transition-colors hover:bg-accent-dark"
            >
              Absenden
            </button>
            <p className="text-xs text-foreground/50">
              Hinweis: Das Formular ist in dieser Vorlage noch nicht mit einem
              Versand verbunden.
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
