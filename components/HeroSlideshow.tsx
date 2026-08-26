"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { src: "/images/luftbild.jpg", alt: "Luftaufnahme der Abtei Mariawald auf dem Kermeter" },
  { src: "/images/abteikirche.jpg", alt: "Abteikirche Mariawald mit Dachreiter" },
  { src: "/images/pforte-herbst.jpg", alt: "Klosterpforte der Abtei Mariawald im Herbst" },
  { src: "/images/panorama.jpg", alt: "Blick über die Eifellandschaft auf die Abtei Mariawald" },
  { src: "/images/herbst.jpg", alt: "Abtei Mariawald zwischen herbstlichen Bäumen" },
];

const INTERVAL = 7000;

// alternating zoom directions so consecutive slides feel different
const motions = ["kb-zoom-in", "kb-zoom-out", "kb-pan-left", "kb-zoom-in", "kb-pan-right"];

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % slides.length), INTERVAL);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {slides.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover ${i === active ? motions[i % motions.length] : ""}`}
          />
        </div>
      ))}
    </div>
  );
}
