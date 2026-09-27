import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import TextImage from "@/components/TextImage";
import Timeline, { type TimelineItem } from "@/components/Timeline";

export const metadata: Metadata = { title: "Über uns" };

const timeline: TimelineItem[] = [
  {
    year: "1795",
    text: "Am 2. April hebt die französische Revolutionsregierung das Kloster auf. Der Besitz wird versteigert oder geplündert, darunter die kostbaren Glasfenster. Schnitzaltar und Gnadenbild werden 1804 in feierlicher Prozession in die Pfarrkirche von Heimbach gerettet. Die Klostergebäude wechseln mehrfach den Besitzer und verfallen.",
  },
  {
    year: "1860 / 1861",
    text: "Ephrem van der Meulen, Abt der Trappistenabtei Oelenberg im Elsass, entdeckt das verfallene Kloster, kauft das Gut und lässt es wieder aufbauen. Am 24. Februar 1861 kommen die ersten Brüder aus Oelenberg nach Mariawald.",
  },
  {
    year: "1875",
    text: "Die Kulturkampfgesetze heben das Kloster erneut auf. Weil Abt van der Meulen als Eigentümer eingetragen ist, kann das Gut nicht enteignet werden. Zwölf Jahre steht das Kloster leer.",
  },
  {
    year: "1887",
    text: "Nach dem Ende des Kulturkampfes nehmen die Mönche am 18. Oktober das reguläre klösterliche Leben wieder auf. Das Kloster gedeiht von Neuem.",
  },
  {
    year: "1909",
    text: "Am 29. September wird Mariawald zur Abtei erhoben.",
  },
  {
    year: "1914 – 1918",
    text: "Im Ersten Weltkrieg verliert Mariawald viele Mönche an den Kriegsdienst, bleibt baulich jedoch weitgehend verschont.",
  },
  {
    year: "1941",
    text: "Am 21. Juni wird die Abtei aufgelöst, die Mönche werden vertrieben oder eingezogen. Das Kloster dient zunächst als Unterkunft für Waisenkinder, später als Feldlazarett. Gegen Kriegsende ist es weitgehend zerstört; vor ihrem Abzug sprengen deutsche Truppen den Dachreiter.",
  },
  {
    year: "1945",
    text: "Am 28. April kehrt Superior Christophorus Elsen als Erster aus der Verbannung zurück und beginnt mit anderen Heimkehrern den Wiederaufbau des zerstörten Klosters.",
  },
  {
    year: "2018",
    text: "Nach Jahren zurückgehender Berufungen entscheidet Rom Ende 2017, den Konvent der letzten Trappisten zum 15. September 2018 aufzulösen. Mit einem feierlichen Gottesdienst dankt das Bistum Aachen dem Trappistenorden für die jahrhundertelange Präsenz.",
  },
];

const aebte = [
  "Laurentius Wimmer (1909–1929)",
  "Stephan Sauer (1929–1939)",
  "Christophorus Elsen (1947–1961)",
  "Andreas Schmidt (1961–1966)",
  "Otto Aßfalg (1967–1980)",
  "Meinrad Behren (1983–1992)",
  "Franziskus de Place (1993–1999)",
  "Bruno Gooskens (1999–2005)",
  "Josef Vollberg (2006–2016)",
];

export default function UeberUnsPage() {
  return (
    <>
      <PageHeader
        title="Über uns"
        intro="Über 500 Jahre Geschichte auf dem Kermeter, hoch über dem Rurtal in der Eifel."
        crumbs={[{ label: "Kloster", href: "/unser-kloster" }]}
      />

      <div className="mx-auto max-w-[1150px] space-y-20 px-5 py-16 lg:px-9 lg:py-24">
        <TextImage
          title="Unser Kloster"
          imageSide="right"
          image="/images/abteikirche.jpg"
          alt="Abteikirche Mariawald"
          paragraphs={[
            "Mariawald ist seit über 500 Jahren ein Ort des Gebets. Die Wurzeln des Klosters reichen bis in die Zeit um 1470 zurück: Damals erwarb der Heimbacher Strohdachdecker Henrich Fluitter in Köln ein Gnadenbild und stellte es an der Wegkreuzung am Bersched auf dem Kermeter in einer Hütte zur Verehrung auf. In einer selbst errichteten Einsiedelei betreute er bis zu seinem Tod das Bild und die stetig wachsende Zahl der Pilger.",
            "1479 errichtete Pfarrer Daum von Heimbach eine hölzerne Kapelle und führte samstägliche Prozessionen zum Gnadenbild ein. Als der Zustrom der Pilger weiter zunahm, bat er die Zisterzienser von Bottenbroich um Hilfe und schenkte ihnen am 10. November 1480 die Kapelle. Die Mönche verpflichteten sich, die Pilger zu betreuen und ein Kloster zu errichten.",
            "Am 4. April 1486 bezogen die ersten Mönche unter Prior Johannes vom Goch das Kloster und begannen das reguläre Leben auf dem Kermeter – der eigentliche Gründungstag der Abtei Mariawald. Die Neugründung erhielt den Namen Nemus Mariae, „Wald Mariens“.",
          ]}
        />
      </div>

      {/* Wahlspruch */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[900px] px-5 py-16 text-center lg:px-9">
          <p
            className="text-[26px] leading-snug text-navy italic sm:text-[32px]"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            „Luceat lux vestra – Euer Licht soll leuchten.“
          </p>
          <p className="mt-4 text-[14px] tracking-wide text-navy/70 uppercase">
            Matthäus 5,16 · Wahlspruch der Abtei Mariawald
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-[1150px] space-y-20 px-5 py-16 lg:px-9 lg:py-24">
        <TextImage
          title="Blütezeit und Wallfahrt"
          imageSide="left"
          image="/images/panorama.jpg"
          alt="Blick über die Eifellandschaft auf die Abtei"
          paragraphs={[
            "Über 300 Jahre lebten die Mönche im Zisterzienserpriorat Mariawald und betreuten die Wallfahrt zur Schmerzhaften Mutter. Zahlreiche Votivgaben schmückten den Altar mit dem Schmerzensbild, und das Kloster wurde stetig aus- und weitergebaut.",
            "Zu den kostbarsten Kunstwerken zählten der Schnitzaltar, in dessen Mitte das Schmerzensbild seinen Platz fand, sowie die prächtigen bunten Glasfenster in Kirche, Kreuzgang und Kapitelsaal.",
          ]}
        />
      </div>

      {/* Zeittafel */}
      <section className="bg-muted">
        <div className="mx-auto max-w-[900px] px-5 py-20 lg:px-9">
          <h2 className="text-[28px] font-bold text-heading sm:text-[32px]">Eine wechselvolle Geschichte</h2>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-foreground/70">
            Dreimal wurden die Mönche in über 500 Jahren vertrieben – und dreimal wurde das
            klösterliche Leben neu begonnen.
          </p>
          <div className="mt-12">
            <Timeline items={timeline} />
          </div>
        </div>
      </section>

      {/* Hoffnung + Äbte */}
      <div className="mx-auto max-w-[900px] px-5 py-20 lg:px-9">
        <div className="rounded-2xl border border-logo-gold/50 bg-cream/60 p-8">
          <p className="text-[17px] leading-relaxed text-navy/90">
            Auch wenn das monastische Leben in Mariawald zeitweise ruhte, wurde es stets neu begonnen.
            Als Christen dürfen wir wie Abraham „gegen alle Hoffnung voll Hoffnung“ sein (vgl. Röm 4,18).
            So hoffen wir auf eine erneute Besiedlung des Klosters durch eine stabile christliche
            Gemeinschaft.
          </p>
        </div>

        <h2 className="mt-16 text-[28px] font-bold text-heading sm:text-[32px]">Die Äbte von Mariawald</h2>
        <ul className="mt-6 grid gap-x-10 gap-y-2 sm:grid-cols-2">
          {aebte.map((a) => (
            <li key={a} className="border-b border-black/10 py-2.5 text-[15px] text-foreground/80">
              {a}
            </li>
          ))}
        </ul>

        <div className="mt-14 text-center">
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-3 rounded-full bg-logo-gold px-7 py-3 text-[15px] font-bold tracking-wide text-[#353535] uppercase transition-colors hover:bg-logo-gold-dark"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </>
  );
}
