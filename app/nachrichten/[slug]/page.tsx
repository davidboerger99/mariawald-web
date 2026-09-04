import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Prose from "@/components/Prose";
import { formatDate, news } from "@/lib/content";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/nachrichten/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  return { title: item?.title ?? "Nachricht" };
}

export default async function NachrichtPage({ params }: PageProps<"/nachrichten/[slug]">) {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item) notFound();

  return (
    <>
      <PageHeader
        title={item.title}
        crumbs={[
          { label: "Aktuelles", href: "/aktuelles" },
          { label: "Nachrichten", href: "/nachrichten" },
        ]}
      />
      <Prose>
        <p className="text-sm text-foreground/50">
          {item.category}
          {item.date ? ` · ${formatDate(item.date)}` : ""}
        </p>
        <p className="text-lg">{item.teaser}</p>
        <p>
          Hier folgt der vollständige Beitragstext. Dieser Platzhalter zeigt das
          Layout einer Nachrichtenseite mit Kopfbereich, Datum und Fließtext.
        </p>
      </Prose>
    </>
  );
}
