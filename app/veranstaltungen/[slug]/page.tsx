import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Prose from "@/components/Prose";
import { events, formatDate } from "@/lib/content";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/veranstaltungen/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = events.find((e) => e.slug === slug);
  return { title: item?.title ?? "Veranstaltung" };
}

export default async function VeranstaltungPage({
  params,
}: PageProps<"/veranstaltungen/[slug]">) {
  const { slug } = await params;
  const item = events.find((e) => e.slug === slug);
  if (!item) notFound();

  return (
    <>
      <PageHeader
        title={item.title}
        crumbs={[
          { label: "Aktuelles", href: "/aktuelles" },
          { label: "Veranstaltungen", href: "/veranstaltungen" },
        ]}
      />
      <Prose>
        <p className="text-sm text-foreground/50">
          {formatDate(item.date)} · {item.time} · {item.location}
        </p>
        <p className="text-lg">{item.teaser}</p>
        <p>
          Hier folgen Programm, Hinweise zur Anmeldung und weitere Details.
          Dieser Platzhalter zeigt das Layout einer Veranstaltungsseite.
        </p>
      </Prose>
    </>
  );
}
