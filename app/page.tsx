import Link from "next/link";
import Hero from "@/components/Hero";
import TagesimpulsBand from "@/components/TagesimpulsBand";
import NewsSection from "@/components/NewsSection";
import EventsList from "@/components/EventsList";
import ServiceTimesSection from "@/components/ServiceTimesSection";
import ImageBand from "@/components/ImageBand";
import BusinessCarousel from "@/components/BusinessCarousel";
import DiscoverSection from "@/components/DiscoverSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TagesimpulsBand />
      <NewsSection />

      <section className="bg-muted">
        <div className="mx-auto max-w-[1000px] px-[35px] py-24">
          <span className="eyebrow">Termine</span>
          <h1 className="section-title">Veranstaltungen</h1>
          <p className="section-sub">
            Konzerte, Führungen, Besinnungstage und Gottesdienste in Mariawald.
          </p>
          <div className="mt-10">
            <EventsList limit={5} showFilters={false} />
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/veranstaltungen"
              className="inline-flex items-center gap-2 rounded-full border border-logo-red/40 px-6 py-2.5 text-[14px] font-medium text-logo-red transition-colors hover:bg-logo-red hover:text-white"
            >
              Alle Veranstaltungen
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <ServiceTimesSection />
      <ImageBand
        src="/images/abteikirche.jpg"
        alt="Abteikirche Mariawald mit Dachreiter"
        title="Unser Kloster"
        href="/unser-kloster"
      />
      <BusinessCarousel />
      <ImageBand
        src="/images/panorama.jpg"
        alt="Blick über die Eifellandschaft auf die Abtei Mariawald"
        title="Eifel und Kermeter"
        href="/eifel"
      />
      <DiscoverSection />
    </>
  );
}
