import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";
import NewsCard from "@/components/NewsCard";
import EventsList from "@/components/EventsList";
import { news } from "@/lib/content";

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
        <div className="mx-auto max-w-[1000px]">
          <EventsList limit={5} showFilters={false} />
        </div>
      </Section>
    </>
  );
}
