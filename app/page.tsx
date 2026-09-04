import Link from "next/link";
import Hero from "@/components/Hero";
import KlosterIntro from "@/components/KlosterIntro";
import EventsCarousel from "@/components/EventsCarousel";
import EventsList from "@/components/EventsList";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <KlosterIntro />
      <EventsCarousel />

      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-5 pt-8 pb-24 lg:px-9">
          <h2 className="text-[32px] font-bold leading-tight text-heading sm:text-[40px]">
            Gottesdienste &amp; Führungen
          </h2>
          <div className="mt-8">
            <EventsList
              categories={["Gottesdienst", "Führung"]}
              upcomingOnly
              sundayMass
              sundayTours
              limit={6}
              showFilters={false}
            />
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/gottesdienstzeiten"
              className="inline-flex items-center gap-2 rounded-full border border-heading/30 px-6 py-2.5 text-[15px] font-medium text-heading transition-colors hover:border-heading"
            >
              Gottesdienstzeiten
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
            <Link
              href="/klosterfuehrungen"
              className="inline-flex items-center gap-2 rounded-full border border-heading/30 px-6 py-2.5 text-[15px] font-medium text-heading transition-colors hover:border-heading"
            >
              Klosterführungen
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <NewsSection />
    </>
  );
}
