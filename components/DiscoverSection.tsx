import Image from "next/image";
import Link from "next/link";
import Placeholder from "@/components/Placeholder";

const tags = [
  "Einkaufen",
  "Essen&Trinken",
  "Handwerkskunst",
  "Klosterprodukte",
  "Kunst&Kultur",
  "Musik&Literatur",
  "Natur",
  "Spirituell",
  "Stille",
  "Übernachten",
];

const cards = [
  {
    title: "Klosterladen",
    href: "/klosterladen",
    text: "Klosterprodukte, Devotionalien und Geschenke aus Mariawald und anderen Klöstern.",
  },
  {
    title: "Klosterführungen",
    href: "/klosterfuehrungen",
    text: "Erleben Sie die Abtei Mariawald und ihre Sehenswürdigkeiten durch unser Angebot an Führungen.",
  },
  {
    title: "Klostergaststätte",
    href: "/klostergaststaette",
    text: "Bekannt weit über die Eifel hinaus: die traditionsreiche Erbsensuppe nach Klosterrezept.",
  },
  {
    title: "Gottesdienst",
    href: "/gottesdienstzeiten",
    text: "Die Gottesdienste haben im Kloster Vorrang vor allem anderen. Besucher und Gäste sind herzlich eingeladen.",
  },
  {
    title: "Gästehaus",
    href: "/gaestehaus",
    text: "Zimmer für Gäste, die Stille suchen und am Rhythmus des Klosters teilnehmen möchten.",
  },
  {
    title: "Likörmanufaktur",
    href: "/likoermanufaktur",
    text: "Der Mariawalder Klosterlikör wird bis heute nach überlieferter Rezeptur hergestellt.",
  },
  {
    title: "Buchhandlung",
    href: "/buchhandlung",
    text: "Ausgewählte Literatur zu Spiritualität, Theologie und Geschichte der Region.",
  },
  {
    title: "Wanderwege",
    href: "/eifel/wanderwege",
    text: "Vom Rurtal hinauf zum Kloster: Wege für jede Kondition durch den Nationalpark Eifel.",
  },
];

function ArchPattern() {
  return (
    <svg
      className="arch-pattern pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id="navy-arches" width="72" height="72" patternUnits="userSpaceOnUse">
          <path
            d="M0 72 V36 A36 36 0 0 1 72 36 V72"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#navy-arches)" />
    </svg>
  );
}

export default function DiscoverSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-navy to-navy-dark text-white">
      <ArchPattern />
      <div className="relative mx-auto max-w-[1200px] px-[35px] py-24">
        <span className="eyebrow">Ihr Besuch</span>
        <h1 className="section-title !text-white">Entdecken Sie Mariawald!</h1>
        <p className="section-sub mx-auto max-w-2xl !text-white/70">
          Genießen Sie Ruhe und Spiritualität, klösterliche Gastfreundschaft und Produkte
          und die herrliche Umgebung.
        </p>

        <div className="relative mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl ring-1 ring-white/15">
          <Image
            src="/images/herbst.jpg"
            alt="Abtei Mariawald zwischen herbstlichen Bäumen"
            width={1536}
            height={840}
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-[420px] w-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors hover:bg-black/10">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/40 backdrop-blur-md transition-transform hover:scale-110">
              <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-white" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[13px] text-white/85 backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:bg-white/10"
            >
              <div className="overflow-hidden rounded-xl">
                <Placeholder
                  label=""
                  tone="forest"
                  className="h-32 w-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h2 className="mt-5 flex items-center justify-between text-[17px] font-medium text-white">
                {c.title}
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </h2>
              <p className="mt-2 text-[13.5px] leading-[22px] text-white/65">{c.text}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
