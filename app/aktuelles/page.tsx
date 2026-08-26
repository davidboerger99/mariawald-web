import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import NewsCard from "@/components/NewsCard";
import EventRow from "@/components/EventRow";
import { events, news } from "@/lib/content";

export const metadata: Metadata = { title: "Aktuelles" };

export default function AktuellesPage() {
  return (
    <>
      <PageHeader
        title="Aktuelles"
        intro="Nachrichten und Veranstaltungen aus der Abtei Mariawald."
      />
      <Section title="Nachrichten" moreHref="/nachrichten" moreLabel="Alle Nachrichten">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.slice(0, 3).map((n) => (
            <NewsCard key={n.slug} item={n} />
          ))}
        </div>
      </Section>
      <Section
        title="Veranstaltungen"
        moreHref="/veranstaltungen"
        moreLabel="Alle Veranstaltungen"
        tone="sand"
      >
        <div className="rounded-xl border border-[#e5e5e5] bg-white px-6">
          {events.map((e) => (
            <EventRow key={e.slug} item={e} />
          ))}
        </div>
      </Section>
    </>
  );
}
