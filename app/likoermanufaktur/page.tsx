import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import TextImage from "@/components/TextImage";

export const metadata: Metadata = { title: "Likörfabrik" };

const gallery = [
  { src: "/images/mariawald/likoer-abfuellen.jpg", alt: "Mitbruder beim Abfüllen des Klosterlikörs an der Abfüllmaschine" },
  { src: "/images/mariawald/likoer-etikett.jpg", alt: "Mitbruder beim Etikettieren einer Flasche Mariawalder Klosterlikör" },
];

export default function LikoerfabrikPage() {
  return (
    <>
      <PageHeader
        title="Likörfabrik"
        intro="Der Mariawalder Klosterlikör und der Trappisten-Abteitropfen aus eigener Herstellung."
        crumbs={[{ label: "Kloster", href: "/unser-kloster" }]}
      />

      <div className="mx-auto max-w-[1150px] px-5 py-16 lg:px-9 lg:py-24">
        <TextImage
          title="Eine Rezeptur mit langer Tradition"
          imageSide="right"
          image="/images/mariawald/likoer-flaschen.jpg"
          alt="Vier Flaschen Mariawalder Klosterlikör und Trappisten-Abteitropfen auf einer Holzkiste"
          paragraphs={[
            "Vor rund 100 Jahren hatten die Mariawalder Trappisten einen guten Freund und Förderer, der sich mit dem Kloster sehr verbunden fühlte. Gemeinsam mit unserem damaligen Prior entwickelte dieser Apotheker eine Kräutermixtur, die dem Mariawalder Klosterlikör seit dieser Zeit zugrunde liegt.",
            "Für die Mischung werden ausschließlich Kräuter und andere natürliche Zutaten verwendet, die wir teils aus verschiedenen Erdteilen beschaffen müssen, um sie hier in unserem Kloster zu einer einmaligen Ingredienz zusammenzufügen – sie macht den unverwechselbaren, angenehm duftenden und leicht an Honig erinnernden Charakter unseres Klosterlikörs aus.",
          ]}
        />

        {/* Einblicke */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {gallery.map((g) => (
            <div key={g.src} className="relative aspect-[4/3] overflow-hidden rounded-xl border border-black/10">
              <Image src={g.src} alt={g.alt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Die beiden Liköre */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1150px] px-5 py-16 lg:px-9 lg:py-20">
          <h2 className="text-[28px] font-light text-heading sm:text-[32px]">Unsere beiden Liköre</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-[0_10px_30px_rgba(30,38,92,0.06)]">
              <h3 className="text-[20px] font-semibold text-heading">Mariawalder Klosterlikör</h3>
              <p className="mt-3 text-[15px] leading-[26px] text-foreground/80">
                Der milde, an Honig erinnernde Klassiker nach der über hundert Jahre alten Rezeptur –
                aus Kräutern und rein natürlichen Zutaten, in Mariawald von Hand angesetzt.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-[0_10px_30px_rgba(30,38,92,0.06)]">
              <h3 className="text-[20px] font-semibold text-heading">Trappisten-Abteitropfen</h3>
              <p className="mt-3 text-[15px] leading-[26px] text-foreground/80">
                In den fünfziger Jahren des letzten Jahrhunderts brachte uns ein Mitbruder auf den
                Gedanken, neben dem uralten Rezept einen zweiten Likör zu entwickeln – herber im
                Geschmack, für alle, die es kräftiger mögen.
              </p>
            </div>
          </div>

          <p className="mt-8 text-[15px] leading-[26px] text-foreground/80">
            Beide Liköre erhalten Sie in unserem{" "}
            <Link href="/klosterladen" className="font-medium text-accent hover:text-accent-dark">
              Klosterladen
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
