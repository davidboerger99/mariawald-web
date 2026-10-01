import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import TextImage from "@/components/TextImage";

export const metadata: Metadata = { title: "Klosterladen" };

const sortiment = [
  "Mariawalder Klosterlikör, Trappisten-Abteitropfen",
  "Mariawalder Erbsensuppe",
  "La Trappe Trappistenbiere",
  "Kleingebäck und Plätzchen",
  "Gewürzkuchen",
  "Mariawalder Grau- und Schwarzbrot sowie verschiedene Brotsorten",
  "Mariawalder Trüffelpralinen (saisonal)",
  "Schokolade",
  "Ein großes Teesortiment",
  "Rindfleisch aus artgerechter Tierhaltung von unseren eigenen Wiesen",
  "Mariawalder Rindergulasch und Bolognesesauce",
  "Honig vom Kloster und echter deutscher Imkerhonig",
  "Wildschwein- und Hirschschinken aus eigener Herstellung (saisonal)",
  "Naturkosmetik (Pflege- und Hautcremes, Hautöle etc.)",
  "Handgemachte Seifen",
  "Pflegeprodukte aus eigener Herstellung",
  "Trappistenkäse aus Belgien",
  "Produkte anderer Klöster (z. B. Kräutertrunk und Kastanienextrakt aus der Abtei Maria Frieden)",
  "Weine vom Jakobsberg",
];

export default function KlosterladenPage() {
  return (
    <>
      <PageHeader
        title="Mariawald als „Ort von Kirche“"
//        intro="Klosterprodukte, Literatur und Geschenke aus Mariawald und anderen Klöstern."
        crumbs={[
          { label: "Ort von Kirche", href: "/allgemein-ovk" },
//          { label: "Kloster", href: "/unser-kloster" }
        ]}
      />

      <div className="mx-auto max-w-[1150px] px-5 py-16 lg:px-9 lg:py-24 text-justify">
        <TextImage
//          title="Herzlich willkommen im Klosterladen"
          imageSide="right"
          image="/images/mariawald/kirche.jpg"
          alt="Blick in den Klosterladen der Abtei Mariawald mit Regalen voller Klosterprodukte"
          paragraphs={[
            "Die Abtei Mariawald wurde im September 2018 offiziell aufgelöst. Zum Jahreswechsel 2018/2019 öffnete das Kloster seine Pforte für die Allgemeinheit, und bis zum Jahresende wurden über 10.000 Personen durch die Anlage geführt. Das Interesse an Mariawald war seinerzeit enorm, und noch immer besucht eine große Anzahl von Gästen das ehemals einzige Trappistenkloster Deutschlands. Im persönlichen Gespräch äußern viele Besucher ihre Verbundenheit mit dem Kloster, und nahezu alle Gäste sind von diesem Ort tief beeindruckt. Unbestritten hat Mariawald eine „anziehende Wirkung“, und Mariawald ist „besonders“. Dies zu erklären, ist schwierig. Es lässt sich nicht richtig in Worte fassen. Ein hervorstechendes Charakteristikum von Mariawald ist wohl „die Echtheit“. Die Klosteranlage ist kein Museum, sondern Mariawald ist nach wie vor ein sehr „authentischer Ort“. Vor diesem Hintergrund bemühen sich viele Menschen, die Aura des Klosters so weit wie möglich zu bewahren und Mariawald als „spirituellen Ort“ zu erhalten. Das in Mariawald existierende Engagement von ehrenamtlich tätigen Menschen soll mit der Initiative „Ort von Kirche im Bistum Aachen“ eine wirkungsvolle Struktur erhalten, etabliert und weiterentwickelt werden. Diese Zielsetzung ist in Übereinstimmung mit dem „Kloster Mariawald e.V.“, dem Rektor der Klosterkirche, Herrn Pfarrer Prof. Dr. Blumenthal und der „Kloster Mariawald GmbH & Co. KG“. Die konkrete Ausgestaltung von „Mariawald als Ort von Kirche“ wird eng mit allen Beteiligten abgestimmt. "
          ]}
        />

      <div className="h-8" />
      <span>
      <p style={{ fontSize: '30px' , fontWeight: 'bold' }}>Mariawald als „Ort von Kirche“ möchte,</p> <br />

       <p className="text-[16px] leading-relaxed text-foreground/80">

       • Menschen ansprechen, motivieren und gewinnen.</p>
       
      </span>
      <div className="h-8" />
      <span>
      <p style={{ fontSize: '30px' , fontWeight: 'bold' }}>Mariawald als „Ort von Kirche“ ermöglicht,</p> <br />

       <p className="text-[16px] leading-relaxed text-foreground/80">

       • vielfältige Aktivitäten.</p>
       
      </span>
      <div className="h-8" />
      <span>
      <p style={{ fontSize: '30px' , fontWeight: 'bold' }}>Mariawald als „Ort von Kirche“ lebt,</p> <br />

       <p className="text-[16px] leading-relaxed text-foreground/80">

       Gemeinschaft, d.h. grundsätzlich kann jeder und jede in Mariawald einen Platz finden. Dabei wird niemand vereinnahmt oder eingeengt. Jeder kann und soll – innerhalb eines definierten Rahmens – das tun, was er liebt. Diesbezüglich bietet Mariawald verschiedene Möglichkeiten bzw. Ausdrucksformen von Gemeinschaft. Diese „Gemeinschafts-alternativen“ kommen dem Einzelnen in vielerlei Hinsicht entgegen, zum Beispiel im Hinblick auf die „verfügbare Zeit“, oder in Bezug auf die individuellen Fähig- und Fertigkeiten, aber auch die „Form der Gemeinschaftserfahrung“ betreffend usw. </p>
       
      </span>

     </div>
         <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
         </div>


      {/* Sortiment */}
{/*    <section className="bg-cream">
        <div className="mx-auto max-w-[1150px] px-5 py-16 lg:px-9 lg:py-20">
          <h2 className="text-[28px] font-light text-heading sm:text-[32px]">Unser Sortiment</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-foreground/70">
           Eine Auswahl dessen, was Sie bei uns vor Ort finden:
          </p>
          <ul className="mt-8 grid gap-x-10 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {sortiment.map((item) => (
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
{/*      <div className="mx-auto max-w-[1150px] px-5 py-16 lg:px-9 lg:py-20">
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
    </>
  );
}
