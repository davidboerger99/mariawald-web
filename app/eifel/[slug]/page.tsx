import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Prose from "@/components/Prose";

const pages: Record<string, { title: string; intro: string; body: string[] }> = {
  kermeter: {
    title: "Kermeter und Nationalpark",
    intro: "Alte Buchenwälder rund um das Kloster.",
    body: [
      "Der Kermeter ist ein ausgedehnter Waldrücken zwischen Rur und Urft und gehört zum Nationalpark Eifel. Die Abtei liegt an seinem nördlichen Rand.",
      "Vom Kloster aus führen Wege direkt in den Nationalpark, unter anderem zum barrierefreien Naturerkundungspfad Wilder Kermeter.",
    ],
  },
  rursee: {
    title: "Rursee",
    intro: "Wasser, Wald und weite Blicke.",
    body: [
      "Nur wenige Kilometer vom Kloster entfernt liegt der Rursee, einer der größten Stauseen Deutschlands. Ausflugsschiffe verbinden Heimbach mit Rurberg und Einruhr.",
    ],
  },
  wanderwege: {
    title: "Wanderwege",
    intro: "Zu Fuß nach Mariawald.",
    body: [
      "Der klassische Weg nach Mariawald führt von Heimbach über den Kreuzweg hinauf zum Kloster, ein Anstieg von etwa einer halben Stunde.",
      "Weitere Wege verbinden die Abtei mit dem Rursee, dem Wilden Kermeter und dem Wildnis-Trail durch den Nationalpark.",
    ],
  },
  heimbach: {
    title: "Heimbach",
    intro: "Das Städtchen an der Rur.",
    body: [
      "Am Fuß des Kermeters liegt Heimbach mit der Burg Hengebach, dem Jugendstil-Kraftwerk und dem Nationalpark-Tor. Von hier aus erreichen Sie das Kloster zu Fuß oder mit dem Auto.",
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(pages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/eifel/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  return { title: pages[slug]?.title ?? "Eifel" };
}

export default async function EifelUnterseite({ params }: PageProps<"/eifel/[slug]">) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();

  return (
    <>
      <PageHeader
        title={page.title}
        intro={page.intro}
        crumbs={[{ label: "Eifel", href: "/eifel" }]}
      />
      <Prose>
        {page.body.map((p) => (
          <p key={p.slice(0, 30)}>{p}</p>
        ))}
      </Prose>
    </>
  );
}
