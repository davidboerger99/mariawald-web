import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import TextImage from "@/components/TextImage";

export const metadata: Metadata = { title: "Buch- und Kunsthandlung" };

const aktuell = [
  "Bücher und Devotionalien",
  "Eifel-Souvenirs und -Krimis",
  "Natur- und Wanderführer",
  "Artikel zu Kinderkommunion, Taufe, Hochzeit …",
  "Geschenkideen zu Weihnachten, Ostern …",
  "Bücher über den hl. Br. Rafael Arnáiz Barón",
  "Große Auswahl an neuen Kunstkarten und Kerzen",
  "Aktuelle Literatur und neues Kartenmaterial zum Nationalpark Eifel",
];

const gallery = [
  { src: "/images/mariawald/buchhandlung-2.jpg", alt: "Geschenk- und Kartentisch in der Buch- und Kunsthandlung" },
  { src: "/images/mariawald/buchhandlung-3.jpg", alt: "Bücher- und Kerzenregal in der Buch- und Kunsthandlung" },
  { src: "/images/mariawald/buchhandlung-4.jpg", alt: "Devotionalien und Kunstartikel in der Buch- und Kunsthandlung" },
  { src: "/images/mariawald/buchhandlung-1.jpg", alt: "Kinderbuchbereich in der Buch- und Kunsthandlung" },
];

export default function BuchhandlungPage() {
  return (
    <>
      <PageHeader
        title="Buch- und Kunsthandlung"
        intro="Religiöse Literatur, Eifelbücher, Devotionalien, Karten und Kunst aus Mariawald."
        crumbs={[{ label: "Kloster", href: "/unser-kloster" }]}
      />

      <div className="mx-auto max-w-[1150px] px-5 py-16 lg:px-9 lg:py-24">
        <TextImage
          title="Unsere Buch- und Kunsthandlung"
          imageSide="right"
          image="/images/mariawald/buchhandlung-aussen.jpg"
          alt="Eingang der Kloster-Buchhandlung der Abtei Mariawald"
          paragraphs={[
            "In unserer Buch- und Kunsthandlung finden Sie ein breit gefächertes Angebot an religiöser Literatur, Eifelliteratur, Devotionalien und anderen Kunstartikeln, Gruß- und Kunstkarten, Fachbüchern und Wanderkarten zum Nationalpark, Kerzen und zahlreiche Musik-CDs.",
            "Nicht vorrätige Bücher können kurzfristig bestellt werden.",
          ]}
        />

        {/* Einblicke */}
        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {gallery.map((g) => (
            <div key={g.src} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-black/10">
              <Image src={g.src} alt={g.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Aktuell */}
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

      {/* Öffnungszeiten */}
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
    </>
  );
}
