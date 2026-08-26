import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceTimesCard from "@/components/ServiceTimesCard";

export const metadata: Metadata = { title: "Gottesdienstzeiten" };

export default function GottesdienstzeitenPage() {
  return (
    <>
      <PageHeader
        title="Aktuelle Gottesdienstzeiten"
        intro="Alle Gottesdienste in der Abteikirche sind öffentlich. Sie sind herzlich eingeladen, mitzufeiern."
        crumbs={[{ label: "Aktuelles", href: "/aktuelles" }]}
      />
      <div className="mx-auto max-w-6xl px-4 py-14">
        <ServiceTimesCard />
        <p className="mt-8 max-w-2xl text-sm text-foreground/60">
          An Hochfesten und in der Kar- und Osterwoche gelten gesonderte Zeiten.
          Änderungen werden unter Aktuelles und im Aushang an der Klosterpforte
          bekannt gegeben.
        </p>
      </div>
    </>
  );
}
