import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Prose from "@/components/Prose";

const pages: Record<string, { title: string; intro: string; body: string[] }> = {
  "kirche-und-kloster": {
    title: "Kirche und Kloster",
    intro: "Die Abteikirche und die Klosteranlage auf dem Kermeter.",
    body: [
      "Die neugotische Abteikirche bildet das Herz der Klosteranlage. Um sie gruppieren sich Kreuzgang, Kapitelsaal und die Wirtschaftsgebäude der Abtei.",
      "Die Kirche ist tagsüber für Besucherinnen und Besucher geöffnet. Der Kreuzgang kann im Rahmen von Führungen besichtigt werden.",
    ],
  },
  "leben-im-kloster": {
    title: "Leben im Kloster",
    intro: "Gebet, Arbeit und Gemeinschaft prägen den Tag in Mariawald.",
    body: [
      "Der Tag in Mariawald folgt einem festen Rhythmus aus Gebetszeiten, Arbeit und Stille. Die Gebetszeiten in der Abteikirche sind öffentlich.",
      "Gäste können im Gästehaus am Leben des Klosters teilnehmen und Tage der Stille auf dem Kermeter verbringen.",
    ],
  },
  geschichte: {
    title: "Geschichte",
    intro: "Über 500 Jahre Wallfahrt und klösterliches Leben.",
    body: [
      "Die Geschichte Mariawalds beginnt 1486 mit einer Wallfahrtskapelle zu Ehren der Schmerzhaften Mutter. Wenig später entstand das Kloster auf dem Kermeter.",
      "Nach Aufhebungen und Neubesiedlungen im Lauf der Jahrhunderte ist Mariawald bis heute ein Ziel für Pilger und ein Ort der Einkehr geblieben.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/unser-kloster/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: pages[slug]?.title ?? "Unser Kloster" };
}

export default async function KlosterUnterseite({ params }: PageProps<"/unser-kloster/[slug]">) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();

  return (
    <>
      <PageHeader
        title={page.title}
        intro={page.intro}
        crumbs={[{ label: "Unser Kloster", href: "/unser-kloster" }]}
      />
      <Prose>
        {page.body.map((p) => (
          <p key={p.slice(0, 30)}>{p}</p>
        ))}
      </Prose>
    </>
  );
}
