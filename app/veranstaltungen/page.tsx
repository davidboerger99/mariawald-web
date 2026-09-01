import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import EventsList from "@/components/EventsList";

export const metadata: Metadata = { title: "Veranstaltungen" };

export default function VeranstaltungenPage() {
  return (
    <>
      <PageHeader
        title="Veranstaltungen"
        intro="Konzerte, Führungen, Besinnungstage und Gottesdienste in der Abtei Mariawald. Sie sind herzlich eingeladen."
        crumbs={[{ label: "Aktuelles", href: "/aktuelles" }]}
      />
      <div className="mx-auto max-w-[1000px] px-[35px] py-14">
        <EventsList showFilters />
      </div>
    </>
  );
}
