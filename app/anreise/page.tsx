import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Prose from "@/components/Prose";

export const metadata: Metadata = { title: "Anreise und Parken" };

export default function AnreisePage() {
  return (
    <>
      <PageHeader
        title="Anreise und Parken"
        intro="So finden Sie den Weg auf den Kermeter."
        crumbs={[{ label: "Infos", href: "/kontakt" }]}
      />
      <Prose>
        <h2>Mit dem Auto</h2>
        <p>
          Die Abtei liegt an der L 249 zwischen Heimbach und Gemünd. Vor dem
          Klostergelände stehen kostenfreie Parkplätze zur Verfügung, auch für
          Busse.
        </p>
        <h2>Mit Bus und Bahn</h2>
        <p>
          Die Rurtalbahn verbindet Düren mit Heimbach. Vom Bahnhof Heimbach
          erreichen Sie das Kloster zu Fuß über den Kreuzweg in etwa 30 Minuten
          oder mit dem Bus in Richtung Schleiden.
        </p>
        <h2>Zu Fuß</h2>
        <p>
          Mehrere Wanderwege führen nach Mariawald, unter anderem von Heimbach,
          vom Rursee und über den Wilden Kermeter.
        </p>
      </Prose>
    </>
  );
}
