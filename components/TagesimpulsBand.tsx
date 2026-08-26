function ArchPattern() {
  return (
    <svg
      className="arch-pattern pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern id="band-arches" width="72" height="72" patternUnits="userSpaceOnUse">
          <path
            d="M0 72 V36 A36 36 0 0 1 72 36 V72"
            fill="none"
            stroke="white"
            strokeWidth="1.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#band-arches)" />
    </svg>
  );
}

export default function TagesimpulsBand() {
  const today = new Date().toLocaleDateString("de-DE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section
      id="tagesimpuls"
      className="relative overflow-hidden bg-gradient-to-br from-accent via-accent to-accent-dark text-white"
    >
      <ArchPattern />
      <div className="relative mx-auto max-w-[1200px] px-[35px] py-24 text-center">
        <span className="eyebrow !text-white/80">Tagesimpuls</span>
        <h1 className="text-[38px] font-light leading-[46px]">
          Wort <strong className="font-semibold">für den Tag</strong>
        </h1>
        <p className="mt-3 text-[14px] text-white/85">{today}</p>

        <div className="mx-auto mt-10 max-w-[620px] rounded-3xl border border-white/25 bg-white/10 px-8 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.15)] backdrop-blur-md">
          <svg viewBox="0 0 24 24" className="mx-auto h-6 w-6 fill-white/90" aria-hidden="true">
            <path d="M6 5a4 4 0 0 0-4 4v10h8V9H5.5A2.5 2.5 0 0 1 8 6.5V5H6zm12 0a4 4 0 0 0-4 4v10h8V9h-4.5A2.5 2.5 0 0 1 20 6.5V5h-2z" />
          </svg>
          <p className="mt-5 text-[19px] font-light leading-relaxed">
            Suche Frieden und jage ihm nach.
          </p>
          <p className="mt-3 text-[15px] italic text-white/80">Psalm 34,15</p>
        </div>

        <a
          href="/gebetsanliegen"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-2.5 text-[14px] font-medium transition-colors hover:bg-white hover:text-accent"
        >
          Weiterlesen
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        </a>
      </div>
    </section>
  );
}
