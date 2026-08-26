import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Placeholder from "@/components/Placeholder";

export const metadata: Metadata = { title: "Eifel und Kermeter" };

const topics = [
  {
    href: "/eifel/kermeter",
    title: "Kermeter und Nationalpark",
    teaser: "Alte Buchenwälder rund um das Kloster, mitten im Nationalpark Eifel.",
  },
  {
    href: "/eifel/rursee",
    title: "Rursee",
    teaser: "Einer der größten Stauseen Deutschlands, nur wenige Kilometer entfernt.",
  },
  {
    href: "/eifel/wanderwege",
    title: "Wanderwege",
    teaser: "Vom Rurtal hinauf zum Kloster: Wege für jede Kondition.",
  },
  {
    href: "/eifel/heimbach",
    title: "Heimbach",
    teaser: "Das Städtchen an der Rur mit Burg Hengebach und Nationalpark-Tor.",
  },
];

export default function EifelPage() {
  return (
    <>
      <PageHeader
        title="Eifel und Kermeter"
        intro="Die Abtei Mariawald liegt mitten im Nationalpark Eifel, hoch über dem Rurtal."
      />
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 sm:grid-cols-2">
          {topics.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              className="group overflow-hidden rounded-xl border border-[#e5e5e5] bg-white transition-shadow hover:shadow-lg"
            >
              <Placeholder label={t.title} tone="forest" className="h-44 w-full" />
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
