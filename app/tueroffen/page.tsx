import Section from "@/components/Section";
import NewsCard from "@/components/NewsCard";
import EventsList from "@/components/EventsList";
import { news } from "@/lib/content";

import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import TextImage from "@/components/TextImage";

export const metadata: Metadata = { title: "Die Tür ist offen ..." };

export default function BuchhandlungPage() {
  return (
    <>
      <PageHeader
        title="Die Tür ist offen ..."
        crumbs={[
          { label: "Ort von Kirche", href: "/allgemein-ovk" },
//          { label: "Kloster", href: "/unser-kloster" }
        ]}
      />

      <div className="mx-auto max-w-[1150px] px-5 py-16 lg:px-9 lg:py-24 text-justify">
        <TextImage
 //         title={"Mariawald als „Ort von Kirche“"}
          imageSide="right"
          image="/images/mariawald/mw4.jpg"
          alt="Eingang der Kloster-Buchhandlung der Abtei Mariawald"
          paragraphs={[
           
				"Die Tür ist offen, das Herz weit mehr – Das ist die Grußformel der Zisterzienser. Kirche muss \„lebendig\“ sein. Daher braucht ein \„Ort von Kirche\“ unbedingt Menschen, denn ohne Menschen fehlt das \„Leben\“. Vor diesem Hintergrund nehmen wir die Grußformel der Zisterzienser sehr ernst, denn wir möchten Menschen für Mariawald begeistern und im Weiteren darauf hinwirken, dass diese Begeisterung sich wandelt in Engagement. Und vielleicht gelingt es am Ende, dass dieses Engagement übergeht in ein dauerhaftes Mitwirken für \„Mariawald als Ort von Kirche\“. Wir glauben, dass jeder Mensch ein Abbild Gottes ist, und jeder Mensch ist von Gott mit Talenten und Fähigkeiten beschenkt, die letztlich seine Person ausmachen. Es gilt, diese Charismen zu entdecken, zuzulassen und zu fördern. Genau dies soll in Mariawald möglich sein. Daher ist jeder und jede eingeladen, mit seinem bzw. mit ihrem Charisma beim Aufbau von \„Mariawald als Ort von Kirche\“ beizutragen.",             
            
          ]}
        />

        {/* Einblicke */}
 {/*        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
  auskommentiert         
          {gallery.map((g) => (
            <div key={g.src} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-black/10">
              <Image src={g.src} alt={g.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </div>
          ))}
 
        </div>
*/}
      </div>
      {/* Aktuell */}
 {/* auskommentiert
      <section className="bg-cream">
        <div className="mx-auto max-w-[1150px] px-5 py-16 lg:px-9 lg:py-20">
          <h2 className="text-[28px] font-light text-heading sm:text-[32px]">Aktuell im Angebot</h2>
          <ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {aktuell.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] leading-[24px] text-foreground/85">
                <svg
                  viewBox="0 0 24 24"
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
*/}
      {/* Öffnungszeiten */}
{/* auskommentiert
      <div className="mx-auto max-w-[1150px] px-5 py-16 lg:px-9 lg:py-20">
        <div className="max-w-md rounded-2xl border border-black/10 bg-white p-7 shadow-[0_10px_30px_rgba(30,38,92,0.06)]">
          <h2 className="text-[22px] font-semibold text-heading">Öffnungszeiten</h2>
          <dl className="mt-5 space-y-3 text-[15px]">
            <div className="flex items-center justify-between border-b border-black/10 pb-3">
              <dt className="text-foreground/80">Montag bis Samstag</dt>
              <dd className="font-medium tabular-nums text-heading">11:00 – 18:00 Uhr</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-foreground/80">Sonn- und Feiertage</dt>
              <dd className="font-medium tabular-nums text-heading">11:00 – 18:00 Uhr</dd>
            </div>
          </dl>
        </div>
      </div>
*/}
{/* Test*/}
{/*      <PageHeader
        title="Aktuelles"
        intro="Nachrichten und Veranstaltungen aus der Abtei Mariawald."
      />
*/}
{/*
      <Section title="Ehrenamtliche Aktivitäten in Mariawald" moreHref="/nachrichten" moreLabel="Alle Nachrichten">
*/}
      <Section title="Ehrenamtliche Aktivitäten in Mariawald">

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.slice(0, 3).map((n) => (
            <NewsCard key={n.slug} item={n} />
          ))}
        </div>
      </Section>
{/*      <Section
        title="Veranstaltungen"
        moreHref="/veranstaltungen"
        moreLabel="Alle Veranstaltungen"
        tone="sand"
      >
        <div className="mx-auto max-w-[1000px]">
          <EventsList limit={5} showFilters={false} />
        </div>
      </Section>
*/}
  



    </>
  );
}
