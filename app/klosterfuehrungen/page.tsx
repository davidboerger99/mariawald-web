import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import EventsList from "@/components/EventsList";

export const metadata: Metadata = { title: "Klosterführungen" };

export default function KlosterfuehrungenPage() {
  return (
    <>
      <PageHeader
        title="Klosterführungen"
        intro="Entdecken Sie Kirche, Kreuzgang und die Geschichte der Abtei bei einer Führung. Hier finden Sie die nächsten Termine."
        crumbs={[{ label: "Infos", href: "/kontakt" }]}
      />
      <div className="mx-auto max-w-[1000px] px-[35px] py-14">
        <h2 className="text-[24px] font-semibold text-heading">Anstehende Führungen</h2>
        <div className="mt-6">
          <EventsList category="Führung" upcomingOnly limit={6} showFilters={false} />
        </div>
        <p className="mt-10 text-[14px] leading-relaxed text-foreground/70">
          Führungen können auch für Gruppen individuell vereinbart werden. Anmeldung über die
          Klosterpforte oder das Kontaktformular.
        </p>
      </div>
    </>
  );
}
