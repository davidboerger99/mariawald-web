import HeroSlideshow from "@/components/HeroSlideshow";

export default function Hero() {
  return (
    <>
      <section className="relative h-[calc(100vh-84px)] min-h-[520px]">
        <HeroSlideshow />
        <div
          className="absolute inset-0 bg-black/25 [background:radial-gradient(ellipse_at_center,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.2)_55%,rgba(0,0,0,0.35)_100%)]"
          aria-hidden="true"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <div style={{ textShadow: "0 1px 3px rgba(0,0,0,.55), 0 4px 18px rgba(0,0,0,.5)" }}>
            <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-5">
              <span className="text-[26px] font-light tracking-[0.18em] sm:text-[42px] sm:tracking-[0.32em] md:text-[54px] md:tracking-[0.35em]">
                MARIA
              </span>
              <span aria-hidden="true" className="relative inline-block h-[62px] w-[36px] sm:h-[92px] sm:w-[54px] md:h-[110px] md:w-[64px]">
                <svg viewBox="0 0 64 110" className="h-full w-full" fill="none" stroke="currentColor">
                  <path d="M32 4 v102" strokeWidth="3" />
                  <path d="M18 18 h28" strokeWidth="3" />
                  <path d="M10 82 V42 l22 26 22 -26 v40" strokeWidth="4" />
                </svg>
              </span>
              <span className="text-[26px] font-light tracking-[0.18em] sm:text-[42px] sm:tracking-[0.32em] md:text-[54px] md:tracking-[0.35em]">
                WALD
              </span>
            </div>
            <p className="mt-4 text-[11px] font-light tracking-[0.28em] uppercase sm:text-[15px] sm:tracking-[0.5em]">
              Abtei in der Eifel
            </p>
          </div>
        </div>

        <a
          href="#veranstaltungen"
          className="absolute inset-x-0 bottom-8 mx-auto flex w-fit flex-col items-center text-white"
          style={{ textShadow: "0 1px 3px rgba(0,0,0,.4)" }}
        >
          <span className="text-[15px] tracking-[0.2em]">Mehr entdecken</span>
          <svg viewBox="0 0 24 24" className="mt-1 h-5 w-5 animate-bounce" fill="currentColor" aria-hidden="true">
            <path d="M12 16.5 4.5 9l1.4-1.4L12 13.7l6.1-6.1L19.5 9z" />
          </svg>
        </a>
      </section>
    </>
  );
}
