import HeroSlideshow from "@/components/HeroSlideshow";

export default function Hero() {
  return (
    <>
      <section className="relative h-[calc(100vh-68px)] min-h-[520px]">
        <HeroSlideshow />
        <div
          className="absolute inset-0 bg-black/25 [background:radial-gradient(ellipse_at_center,rgba(0,0,0,0.45)_0%,rgba(0,0,0,0.2)_55%,rgba(0,0,0,0.35)_100%)]"
          aria-hidden="true"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <div style={{ textShadow: "0 1px 3px rgba(0,0,0,.55), 0 4px 18px rgba(0,0,0,.5)" }}>
            <div className="flex items-center justify-center gap-5">
              <span className="text-[42px] font-light tracking-[0.35em] sm:text-[54px]">
                MARIA
              </span>
              <span aria-hidden="true" className="relative inline-block h-[110px] w-[64px]">
                <svg viewBox="0 0 64 110" className="h-full w-full" fill="none" stroke="currentColor">
                  <path d="M32 4 v102" strokeWidth="3" />
                  <path d="M18 18 h28" strokeWidth="3" />
                  <path d="M10 82 V42 l22 26 22 -26 v40" strokeWidth="4" />
                </svg>
              </span>
              <span className="text-[42px] font-light tracking-[0.35em] sm:text-[54px]">
                WALD
              </span>
            </div>
            <p className="mt-4 text-[15px] font-light tracking-[0.5em] uppercase">
              Abtei in der Eifel
            </p>
          </div>
        </div>

        <a
          href="#tagesimpuls"
          className="absolute inset-x-0 bottom-8 mx-auto flex w-fit flex-col items-center text-white"
          style={{ textShadow: "0 1px 3px rgba(0,0,0,.4)" }}
        >
          <span className="text-[15px] tracking-[0.2em]">Wort für den Tag</span>
          <svg viewBox="0 0 24 24" className="mt-1 h-5 w-5 animate-bounce" fill="currentColor" aria-hidden="true">
            <path d="M12 16.5 4.5 9l1.4-1.4L12 13.7l6.1-6.1L19.5 9z" />
          </svg>
        </a>
      </section>
    </>
  );
}
