import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import Prose from "@/components/Prose";
import Placeholder from "@/components/Placeholder";
import { businesses } from "@/lib/content";

const simplePages: Record<string, { title: string; intro: string; body: string[] }> = {
  klosterfuehrungen: {
    title: "Klosterführungen",
    intro: "Entdecken Sie Kirche, Kreuzgang und Klostergeschichte.",
    body: [
      "Führungen durch die Abteikirche und den Kreuzgang finden regelmäßig statt und können für Gruppen individuell vereinbart werden.",
      "Anmeldung über die Klosterpforte oder das Kontaktformular.",
    ],
  },
  kirchenmusik: {
    title: "Kirchenmusik",
    intro: "Orgel, Choral und Konzerte in der Abteikirche.",
    body: [
      "Die Kirchenmusik gehört seit jeher zum Gottesdienst in Mariawald. Regelmäßig finden Orgelkonzerte und Matineen statt.",
    ],
  },
  freundeskreis: {
    title: "Förderverein Freundeskreis",
    intro: "Gemeinsam für Mariawald.",
    body: [
      "Der Freundeskreis unterstützt den Erhalt der Klosteranlage und das Leben in Mariawald. Über eine Mitgliedschaft freuen wir uns.",
    ],
  },
  gebetsanliegen: {
    title: "Gebetsanliegen",
    intro: "Wir nehmen Ihre Anliegen mit in unser Gebet.",
    body: [
      "Sie können uns Ihre Gebetsanliegen per E-Mail oder über das Kontaktformular anvertrauen. Sie werden in den Gebetszeiten der Gemeinschaft bedacht.",
    ],
  },
  oeffnungszeiten: {
    title: "Aktuelle Öffnungszeiten",
    intro: "Kirche, Klosterladen und Gaststätte auf einen Blick.",
    body: [
      "Die Abteikirche ist täglich von 9 bis 18 Uhr geöffnet. Klosterladen und Klostergaststätte öffnen dienstags bis sonntags von 10 bis 17 Uhr.",
    ],
  },
  newsletter: {
    title: "Newsletter",
    intro: "Neuigkeiten aus Mariawald in Ihr Postfach.",
    body: [
      "Mit unserem Newsletter informieren wir einmal im Monat über Gottesdienste, Veranstaltungen und Neuigkeiten aus den Klosterbetrieben.",
    ],
  },
  karriere: {
    title: "Jobs",
    intro: "Arbeiten in Mariawald.",
    body: [
      "Für Gaststätte, Klosterladen und Gästehaus suchen wir immer wieder Verstärkung. Aktuelle Stellen veröffentlichen wir an dieser Stelle.",
    ],
  },
  spenden: {
    title: "Spenden",
    intro: "Ihre Unterstützung für Mariawald.",
    body: [
      "Der Erhalt der Klosteranlage und das Leben in Mariawald sind auf Spenden angewiesen. Jede Gabe hilft, diesen Ort der Stille zu bewahren.",
      "Spendenkonto und weitere Informationen folgen an dieser Stelle.",
    ],
  },
  bestattungen: {
    title: "Bestattungen",
    intro: "Ein letzter Ruheort auf dem Kermeter.",
    body: [
      "Auf dem Klosterfriedhof besteht die Möglichkeit einer Beisetzung im Umfeld der Abtei. Wir informieren Sie gern in einem persönlichen Gespräch.",
    ],
  },
  shops: {
    title: "Shops",
    intro: "Produkte aus Mariawald online bestellen.",
    body: [
      "Klosterlikör, Honig, Kerzen und Bücher aus Mariawald finden Sie in unseren Onlineshops. Die Links folgen an dieser Stelle.",
    ],
  },
  barrierefreiheit: {
    title: "Barrierefreiheit",
    intro: "",
    body: ["Hier folgen Informationen zur Barrierefreiheit von Gelände und Website."],
  },
  impressum: {
    title: "Impressum",
    intro: "",
    body: ["Angaben gemäß § 5 TMG. Dieser Platzhalter wird durch das vollständige Impressum ersetzt."],
  },
  datenschutz: {
    title: "Datenschutz",
    intro: "",
    body: ["Hier folgt die vollständige Datenschutzerklärung."],
  },
};

export function generateStaticParams() {
  return [
    ...businesses.map((b) => ({ slug: b.slug })),
    ...Object.keys(simplePages).map((slug) => ({ slug })),
  ];
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const business = businesses.find((b) => b.slug === slug);
  if (business) return { title: business.name };
  return { title: simplePages[slug]?.title ?? "Abtei Mariawald" };
}

export default async function GenericPage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;

  const business = businesses.find((b) => b.slug === slug);
  if (business) {
    return (
      <>
        <PageHeader
          title={business.name}
          intro={business.teaser}
          crumbs={[{ label: "Klosterbetriebe", href: "/klosterbetriebe" }]}
        />
        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-14 lg:grid-cols-2">
          <Placeholder label={business.name} className="h-80 w-full rounded-xl" />
          <div className="space-y-5 leading-relaxed text-foreground/80">
            <p>{business.teaser}</p>
            <p>
              Hier folgen Öffnungszeiten, Sortiment und weitere Informationen zu
              diesem Klosterbetrieb. Dieser Platzhalter zeigt das Layout einer
              Betriebsseite.
            </p>
          </div>
        </div>
      </>
    );
  }

  const page = simplePages[slug];
  if (!page) notFound();

  return (
    <>
      <PageHeader title={page.title} intro={page.intro || undefined} />
      <Prose>
        {page.body.map((p) => (
          <p key={p.slice(0, 30)}>{p}</p>
        ))}
      </Prose>
    </>
  );
}
