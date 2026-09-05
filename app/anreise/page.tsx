import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = { title: "Anreise und Parken" };

const textCol =
  "space-y-5 text-[14px] leading-[24px] [&_h2]:pt-4 [&_h2]:text-[24px] [&_h2]:font-light [&_h2]:text-heading [&_h3]:pt-2 [&_h3]:text-[17px] [&_h3]:font-semibold [&_h3]:text-heading";

export default function AnreisePage() {
  return (
    <>
      <PageHeader
        title="Anfahrt"
        intro="So finden Sie den Weg zur Abtei Mariawald auf dem Kermeter."
        crumbs={[{ label: "Infos", href: "/kontakt" }]}
      />

      <div className="mx-auto max-w-[1150px] px-5 py-16 lg:px-9">
        {/* Aktueller Hinweis zur Straßensperrung */}
        <div className="rounded-2xl border border-logo-red/30 bg-logo-red/[0.06] p-6 sm:p-7">
          <div className="flex items-start gap-3">
            <svg
              viewBox="0 0 24 24"
              className="mt-0.5 h-6 w-6 shrink-0 text-logo-red"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <path d="M12 9v4M12 17h.01" />
            </svg>
            <div>
              <h2 className="text-[19px] font-semibold text-heading">Aktueller Hinweis zur Anfahrt</h2>
              <p className="mt-2 text-[15px] leading-[26px] text-foreground/85">
                Aktuell ist die L249 zwischen Heimbach und Mariawald komplett gesperrt. Die Abtei ist
                von Wolfgarten frei erreichbar. Von Heimbach erfolgt die Anfahrt über die L15 über
                Schwammenaul. Es fahren bis auf Weiteres keine Busse mehr.
              </p>
              <p className="mt-3 text-[15px] leading-[26px] text-foreground/85">
                Bitte ignorieren Sie die nachfolgende Anfahrtbeschreibung. Diese gilt vorerst nicht.
                Wir informieren Sie, wenn die Bauarbeiten beendet sind. Dies dauert voraussichtlich
                noch bis Anfang 2027.
              </p>
            </div>
          </div>
        </div>

        {/* Zweispaltig: Text links, Karte rechts */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_minmax(0,460px)] lg:gap-14">
          {/* Beschreibung */}
          <div className={textCol}>
            <h2>Anreise mit dem PKW</h2>
            <p>
              Von der A1, Ausfahrt Euskirchen/Zülpich (110): B56n Richtung Zülpich, bis die B56n auf
              die B265 stößt. Dort links Richtung Schleiden. Straßenverlauf bis Vlatten folgen, dort
              rechts nach Heimbach. Ab dort ist die Abtei Mariawald ausgeschildert.
            </p>

            <h3>Aus Düren</h3>
            <p>Beschilderung nach Kreuzau, Nideggen, Abenden, Heimbach folgen.</p>

            <h3>Aus Aachen, Niederlande, Belgien</h3>
            <p>
              (A3 aus Liège, ab Grenze A44 bis Aachen-Lichterbusch, Abfahrt 2): Beschilderung nach
              Monschau, Koblenz, Trier folgen bis Roetgen. 4 km hinter Roetgen links nach
              Lammersdorf. Richtung (Beschilderung auch: Rursee) Simmerath, 1 km hinter Ortsausgang
              Richtung Rollesbroich und weiter nach Strauch. Dort Beschilderung nach Nideggen folgen
              bis Schmidt. Ab dort ist Heimbach ausgeschildert; dann Beschilderung zur Abtei
              Mariawald.
            </p>

            <h3>Aus südlicher Richtung</h3>
            <p>
              (Trier, Südeifel, Monschau, Südost-Belgien, Luxemburg): Steuern Sie Schleiden-Gemünd
              an, die Kreuzung B266 / B265. Dort folgen Sie der Beschilderung Richtung Heimbach (B265)
              und weiter auf der L249 zur Abtei Mariawald.
            </p>

            <h2>Anreise mit Bus und Bahn</h2>
            <p>
              Bahnreisende fahren mit dem Zug bis Kall und von dort mit dem Taxi zur Abtei oder mit
              dem Zug bis Düren, weiter mit der Rurtalbahn nach Heimbach und von dort mit dem Taxi zur
              Abtei.
            </p>
          </div>

          {/* Karte */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-2xl border border-black/10 shadow-[0_10px_30px_rgba(30,38,92,0.08)]">
              <iframe
                title="Karte: Abtei Mariawald in Heimbach"
                src="https://www.openstreetmap.org/export/embed.html?bbox=6.4680%2C50.6128%2C6.4922%2C50.6248&layer=mapnik&marker=50.6188387%2C6.4800691"
                className="h-[360px] w-full lg:h-[460px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Abtei+Mariawald,+52396+Heimbach"
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-5 py-3 text-[13px] font-bold uppercase tracking-wide text-white transition-colors hover:bg-navy-dark"
            >
              Route planen
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>
            <p className="mt-3 text-[13px] text-foreground/60">
              Adresse: Abtei Mariawald 1, 52396 Heimbach. Kartendaten:{" "}
              <a
                href="https://www.openstreetmap.org/?mlat=50.6188&mlon=6.4801#map=15/50.6188/6.4801"
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:text-accent-dark"
              >
                © OpenStreetMap-Mitwirkende
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
