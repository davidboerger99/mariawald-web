import Link from "next/link";
import { nav } from "@/lib/content";

// Buttons spiegeln die vier Menüpunkte aus dem Navigationsbereich "Kloster".
const links = nav.find((i) => i.label === "Kloster")?.children ?? [];

export default function KlosterIntro() {
  return (
    <section className="bg-logo-gold text-navy">
      <div className="mx-auto max-w-[1240px] px-5 py-24 lg:px-9">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Text links */}
          <div className="lg:col-span-7">
            <h2 className="text-[36px] font-semibold leading-tight sm:text-[44px]">
              Die Abtei Mariawald
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-[17px] leading-relaxed text-navy/90">
              <p>
                Seit vielen Jahrhunderten ist die Abtei Mariawald ein Ort des Gebets und der
                Gastfreundschaft, ein Rastplatz für die Seele auf dem Weg durch die Eifel.
                Malerisch über dem Rurtal, hoch auf dem wilden Kermeter oberhalb von Heimbach,
                liegt das Kloster eingebettet in die unberührte Natur des Nationalparks Eifel.
              </p>
              <p>
                Ein Ort jahrhundertealter Tradition, an dem Sie zur Ruhe kommen und neue Kraft
                schöpfen: zur Besinnung in der Klosterkirche, zur Stärkung in der
                Klostergaststätte, zum Entdecken in der Buchhandlung und zum Eintauchen in die
                Geschichte bei einer Klosterführung. Ein Ort, an dem man freundlichen Menschen
                begegnet und gern verweilt.
              </p>
            </div>
          </div>

          {/* Pfeil-Buttons rechts */}
          <div className="flex flex-col gap-3 lg:col-span-4 lg:col-start-9">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group flex items-center justify-between gap-6 rounded-full border border-navy/50 px-6 py-3 text-[16px] font-bold text-navy transition-colors hover:border-navy hover:bg-navy hover:text-cream"
              >
                {l.label}
                <svg viewBox="0 0 24 24" className="h-4 w-6 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 12h15m-6-6 6 6-6 6" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
