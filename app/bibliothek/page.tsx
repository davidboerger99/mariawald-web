import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import EventsList from "@/components/EventsList";

export const metadata: Metadata = { title: "Klosterführungen" };

export default function KlosterfuehrungenPage() {
  return (
    <>
      <PageHeader
        title="Mithilfe in der Bibliothek"
//        intro="Entdecken Sie Kirche, Kreuzgang und die Geschichte der Abtei bei einer Führung. Hier finden Sie die nächsten Termine."
//        crumbs={[{ label: "Infos", href: "/kontakt" }]}
      />
      <div className="mx-auto max-w-[1000px] px-[35px] py-14">
        {/* Regelmäßige Sonntagsführungen */}
        <div className="rounded-2xl border border-logo-gold/50 bg-cream/60 p-6">
{/*          <h2 className="text-[20px] font-semibold text-heading">Führungen an Sonntagen</h2>*/}
          <p className="mt-3 text-[15px] leading-relaxed text-foreground/80 text-justify">
           Die Bibliothek von Mariawald beherbergt aktuell keine eigentlichen „Schätze“ mehr. 
           Dennoch muss man sehen, dass zum einen viele Bücher vorhanden sind, welche relevant 
           für die (jüngere) Geschichte von Mariawald sind. Zum anderen finden sich im Bestand 
           der Abtei viele Bücher zur Spiritualität der Zisterzienser bzw. Trappisten, wozu 
           insbesondere auch abteieigene Beiträge zählen. Des Weiteren ist das gesamte Kloster 
           (immer noch) mit vielen Gegenständen verschiedenster Art ausgestattet. All diese 
           Objekte geben im Allgemeinen ein Zeugnis vom Leben der Mönche, ebenfalls vermitteln 
           sie etwas vom trappistischen Denken, von ihren Idealen, und schließlich repräsentieren 
           sie in diverser Hinsicht auch Zeitgeschichte.
           
           Der vorangehend, in recht groben Zügen, skizzierte Wert der Bücher als auch derjenige 
           der Gegenstände ist Auslöser für zwei umfangreiche Initiativen. Erstens soll der in 
           Mariawald vorhandene Bücherbestand wieder in eine funktionsfähige bzw. intakte 
           Bibliothek überführt werden, um das – man könnte sagen – geistliche Erbe“ der Abtei 
           weiterzupflegen. Zweitens soll eine Sammlung aufgebaut werden, welche verschiedenste 
           Objekte aus dem Kloster in systematischer Weise erfasst und gesondert aufbewahrt.
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
