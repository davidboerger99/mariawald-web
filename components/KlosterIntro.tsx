import Link from "next/link";

const links = [
  { label: "Unser Kloster", href: "/unser-kloster" },
  { label: "Gottesdienstzeiten", href: "/gottesdienstzeiten" },
  { label: "Gästehaus", href: "/gaestehaus" },
  { label: "Klosterführungen", href: "/klosterfuehrungen" },
];

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
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-navy/90">
              Hoch über dem Rurtal, mitten im Nationalpark Eifel, liegt die Abtei Mariawald.
              Seit über 500 Jahren ist sie ein Ort des Gebets, der Stille und der
              Gastfreundschaft, offen für alle, die hier zur Ruhe kommen möchten.
            </p>
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
