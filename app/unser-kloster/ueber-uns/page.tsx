import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import TextImage from "@/components/TextImage";
import Accordion, { type AccordionItem } from "@/components/Accordion";

export const metadata: Metadata = { title: "Über uns" };

const faq: AccordionItem[] = [
  {
    q: "Wann ist das Kloster geöffnet?",
    a: "Die Abteikirche ist täglich geöffnet. Klosterladen und Klostergaststätte haben eigene Öffnungszeiten, die Sie unter „Öffnungszeiten“ finden.",
  },
  {
    q: "Kann ich an den Gottesdiensten teilnehmen?",
    a: "Ja, alle Gottesdienste in der Abteikirche sind öffentlich. Die aktuellen Zeiten finden Sie unter „Gottesdienstzeiten“.",
  },
  {
    q: "Gibt es Führungen durch das Kloster?",
    a: "Sonntags finden regelmäßig Führungen statt, außerdem nach Vereinbarung für Gruppen. Alle Termine finden Sie unter „Klosterführungen“.",
  },
  {
    q: "Kann man im Kloster übernachten?",
    a: "Im Gästehaus stehen Zimmer für Gäste bereit, die Ruhe suchen. Anfragen richten Sie bitte an die Klosterpforte.",
  },
];

export default function UeberUnsPage() {
  return (
    <>
      <PageHeader
        title="Über uns"
        intro="Ein Ort des Gebets, der Arbeit und der Gastfreundschaft, hoch über dem Rurtal in der Eifel."
        crumbs={[{ label: "Kloster", href: "/unser-kloster" }]}
      />

      <div className="mx-auto max-w-[1150px] space-y-20 px-5 py-16 lg:px-9 lg:py-24">
        <TextImage
          title="Unsere Gemeinschaft"
          imageSide="right"
          image="/images/abteikirche.jpg"
          alt="Abteikirche Mariawald"
          paragraphs={[
            "Mariawald steht seit über fünf Jahrhunderten in der Tradition klösterlichen Lebens. Bis heute prägt der Dreiklang aus Gebet, Arbeit und Gastfreundschaft diesen besonderen Ort auf dem Kermeter.",
            "Das Kloster ist ein lebendiger Ort und kein Museum. Wer hierher kommt, ist eingeladen, am Rhythmus des Hauses teilzuhaben und für einen Moment innezuhalten.",
          ]}
          ctaLabel="Leben im Kloster"
          ctaHref="/unser-kloster/leben-im-kloster"
        />

        <TextImage
          title="Gebet und Arbeit"
          imageSide="left"
          image="/images/pforte-herbst.jpg"
          alt="Klosterpforte im Herbst"
          paragraphs={[
            "Der Tag in Mariawald folgt einem festen Rhythmus. Zwischen den Gebetszeiten in der Abteikirche stehen die Arbeit in den Klosterbetrieben, die Sorge für Haus und Garten und die Begegnung mit den Gästen.",
            "Dieses „ora et labora“, das Beten und Arbeiten, ist seit jeher das Herz benediktinischer Spiritualität und gibt dem Klosterleben seine besondere Ausgeglichenheit.",
          ]}
          ctaLabel="Gottesdienstzeiten"
          ctaHref="/gottesdienstzeiten"
        />

        <TextImage
          title="Ein Ort für Gäste"
          imageSide="right"
          image="/images/panorama.jpg"
          alt="Blick über die Eifellandschaft auf die Abtei"
          paragraphs={[
            "Gastfreundschaft gehört seit jeher zum klösterlichen Auftrag. Im Gästehaus finden Menschen einen Ort der Stille, um auszuruhen, nachzudenken oder dem Alltag für einige Tage zu entkommen.",
            "Ob zur inneren Einkehr, für ein Wochenende der Ruhe oder als Etappe auf einer Wanderung durch die Eifel, in Mariawald sind Sie herzlich willkommen.",
          ]}
          ctaLabel="Gästehaus"
          ctaHref="/gaestehaus"
        />
      </div>

      <section className="bg-muted">
        <div className="mx-auto max-w-[900px] px-5 py-20 lg:px-9">
          <h2 className="text-[28px] font-bold text-heading sm:text-[32px]">Gut zu wissen</h2>
          <div className="mt-8">
            <Accordion items={faq} />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[900px] px-5 py-20 text-center lg:px-9">
        <h2 className="text-[28px] font-bold text-heading sm:text-[32px]">Sie haben Fragen?</h2>
        <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-foreground/80">
          Die Klosterpforte hilft Ihnen gern weiter, ob zu Ihrem Besuch, zu Führungen oder zu einer
          Übernachtung im Gästehaus.
        </p>
        <Link
          href="/kontakt"
          className="mt-8 inline-flex items-center gap-3 rounded-full bg-logo-gold px-7 py-3 text-[15px] font-bold tracking-wide text-[#353535] uppercase transition-colors hover:bg-logo-gold-dark"
        >
          Kontakt
        </Link>
      </div>
    </>
  );
}
