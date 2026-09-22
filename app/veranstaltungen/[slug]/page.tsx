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
        <p style={{ textAlign: 'justify'}}>
          Sie sind herzlich eingeladen, die Spiritualität der Zisterzienser näher kennen zu lernen. Im „Dialog mit der Stille" werden, und zwar wechselnd, bestimmte Themen der Zisterzienserspiritualität präsentiert und beleuchtet. Des Weiteren werden dann, im Anschluss an die Lesung, der Kreuzgang und die Kirche des Klosters besucht. Dort haben Sie die Möglichkeit, die gehörten Texte zu reflektieren. Der „Dialog mit der Stille" ist kein Diskussionsforum, und auch ist damit keine Klosterbesichtigung verbunden. Der „Dialog mit der Stille" ist mehr eine „Andacht", welche in enger Anlehnung an den Lebensalltag der Mönche von Mariawald gestaltet ist, das heißt alles erfolgt „schweigend" und „in stiller Einkehr".<br />
         <br />
          Das aktuelle Thema lautet<br />
        <br />
        </p>
        <p style={{ textAlign: 'center', fontSize: '30px', color: 'red' }}>
        Gastfreundschaft
        </p>
<br />
<p>
Der „Dialog mit der Stille" dauert etwa 45 Minuten. Die Teilnahme ist kostenfrei. Treffpunkt ist zur angegebenen Zeit an der Klosterpforte.        
        </p>
      </Prose>
    </>
  );
}
