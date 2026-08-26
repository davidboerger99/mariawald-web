import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = { title: "Unser Kloster" };

const topics = [
  {
    href: "/unser-kloster/kirche-und-kloster",
    title: "Kirche und Kloster",
    teaser: "Die Abteikirche, der Kreuzgang und die Klosteranlage auf dem Kermeter.",
  },
  {
    href: "/unser-kloster/leben-im-kloster",
    title: "Leben im Kloster",
    teaser: "Gebet, Arbeit und Gemeinschaft: der Tagesablauf in Mariawald.",
  },
  {
    href: "/unser-kloster/geschichte",
    title: "Geschichte",
    teaser: "Von der Wallfahrtskapelle 1486 bis heute: über 500 Jahre Mariawald.",
  },
  {
    href: "/kirchenmusik",
    title: "Kirchenmusik",
    teaser: "Orgel, Choral und Konzerte in der Abteikirche.",
  },
  {
    href: "/freundeskreis",
    title: "Förderverein Freundeskreis",
    teaser: "Menschen, die Mariawald verbunden sind und das Kloster unterstützen.",
  },
  {
    href: "/gebetsanliegen",
    title: "Gebetsanliegen",
    teaser: "Wir nehmen Ihre Anliegen mit in unser Gebet.",
  },
];

export default function UnserKlosterPage() {
  return (
    <>
      <PageHeader
        title="Unser Kloster"
        intro="Ein Ort des Gebets seit 1486: Lernen Sie Kirche, Geschichte und Leben der Abtei Mariawald kennen."
      />
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group overflow-hidden rounded-xl border border-[#e5e5e5] bg-white transition-shadow hover:shadow-lg"
            >
              <Placeholder label={t.title} className="h-40 w-full" />
              <div className="p-5">
                <h2 className="text-[18px] font-normal text-heading group-hover:text-accent">
                  {t.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{t.teaser}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
