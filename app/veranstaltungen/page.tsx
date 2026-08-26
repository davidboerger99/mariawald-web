import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import EventRow from "@/components/EventRow";
import { events } from "@/lib/content";

export const metadata: Metadata = { title: "Veranstaltungen" };

export default function VeranstaltungenPage() {
  return (
    <>
      <PageHeader
        title="Veranstaltungen"
        intro="Konzerte, Führungen, Besinnungstage und mehr in Mariawald."
        crumbs={[{ label: "Aktuelles", href: "/aktuelles" }]}
      />
      <div className="mx-auto max-w-4xl px-4 py-14">
        <div className="rounded-xl border border-[#e5e5e5] bg-white px-6">
          {events.map((e) => (
            <EventRow key={e.slug} item={e} />
          ))}
        </div>
      </div>
    </>
  );
}
