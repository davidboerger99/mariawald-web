import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import VeranstaltungenList from "@/components/VeranstaltungenList";

export const metadata: Metadata = { title: "Veranstaltungen" };

export default function VeranstaltungenPage() {
  return (
    <>
      <PageHeader
        title="Veranstaltungen"
        intro="Begegnung belebt: In Mariawald sind die verschiedensten Menschen willkommen. Die Abtei ist zugleich ein Ort der Einkehr, der Stille und des geistlichen Lebens."
        crumbs={[{ label: "Aktuelles", href: "/aktuelles" }]}
      />

      <div className="mx-auto max-w-[1000px] px-[35px] py-14">
        <VeranstaltungenList />
      </div>

      {/* Newsletter-Aufruf */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1000px] px-[35px] py-16 text-center">
          <h2 className="text-[28px] font-light text-heading">
            Möchten Sie Berichte, Impulse und Infos aus dem Kloster?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-[26px] text-foreground/70">
            Mit unserem Newsletter bleiben Sie mit der Abtei Mariawald verbunden und erfahren als
            Erste von Veranstaltungen, Gottesdiensten und Neuigkeiten.
          </p>
          <div className="mt-7 flex justify-center">
            <Link
              href="/newsletter"
              className="rounded-full bg-navy px-8 py-3 text-[14px] font-bold tracking-wide text-white uppercase transition-colors hover:bg-navy-dark"
            >
              Zum Newsletter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
