import Hero from "@/components/Hero";
import TagesimpulsBand from "@/components/TagesimpulsBand";
import NewsSection from "@/components/NewsSection";
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
