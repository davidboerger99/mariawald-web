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
          Als Küster sorgst du dafür, dass in der Kirche alles vorbereitet ist. Du öffnest Räume, richtest den Altar her, stellst Kerzen, Gesangbücher und Technik bereit und hilfst beim Ablauf von Gottesdiensten. Auch bei Taufen, Hochzeiten, Beerdigungen oder Gemeindefesten bist du oft im Einsatz. Viele Aufgaben laufen im Hintergrund: Heizung prüfen, Glockenanlage bedienen, kleine Reparaturen melden oder Räume wieder ordentlich machen. In alten Kirchen brauchst du außerdem ein gutes Gefühl für wertvolle Gegenstände und Denkmalschutz. 
        </p>
      </Prose>
    </>
  );
}
