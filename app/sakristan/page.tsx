import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import EventsList from "@/components/EventsList";

export const metadata: Metadata = { title: "Klosterführungen" };

export default function KlosterfuehrungenPage() {
  return (
    <>
      <PageHeader
        title="Unterstützen der Messfeiern"
//        intro="Entdecken Sie Kirche, Kreuzgang und die Geschichte der Abtei bei einer Führung. Hier finden Sie die nächsten Termine."
//        crumbs={[{ label: "Infos", href: "/kontakt" }]}
      />
      <div className="mx-auto max-w-[1000px] px-[35px] py-14">
        {/* Regelmäßige Sonntagsführungen */}
        <div className="rounded-2xl border border-logo-gold/50 bg-cream/60 p-6">
{/*          <h2 className="text-[20px] font-semibold text-heading">Führungen an Sonntagen</h2>*/}
          <p className="mt-3 text-[15px] leading-relaxed text-foreground/80 text-justify">
            Die Klosterkirche ist der Ort der Messfeier. Dieser Raum ist grundsätzlich zu pflegen und 
            instand zu halten. Diesbezüglich sind viele Aufgaben zu erledigen, wie zum Beispiel die 
            Reinigung der Kirche, die Bedienung der Heizung, die Wartung der Beleuchtung, das Erledigen
            von kleinen Reparaturen, die Veranlassung von Instandsetzungen usw. Des Weiteren sind die
            Gottesdienste vorzubereiten, das heißt Türen sind zu öffnen, der Altar ist herzurichten, 
            Kerzen sind anzuzünden, Gesangbücher sind auszulegen und die Technik muss in Betrieb
            genommen werden. 
            {/*An Sonntagen finden um <strong>12:30 Uhr</strong> und um <strong>14:00 Uhr</strong> etwa
            60-minütige Führungen durch den ehemaligen Klausurbereich des Klosters statt. Als
            Kostenbeitrag zum Erhalt des alten Klosters bitten wir um 8 € für Erwachsene und 4 € für
            Jugendliche.*/}
          </p>
        </div>

        {/*<h2 className="mt-14 text-[24px] font-semibold text-heading">Anstehende Führungen</h2>
        <div className="mt-6">
          <EventsList category="Führung" upcomingOnly sundayTours limit={10} showFilters={false} />
        </div>
        <p className="mt-10 text-[14px] leading-relaxed text-foreground/70">
          Führungen können auch für Gruppen individuell vereinbart werden. Anmeldung über die
          Klosterpforte oder das Kontaktformular.
        </p>*/}
      </div>
    </>
  );
}
