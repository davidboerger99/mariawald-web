import Link from "next/link";
import { nav, site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-navy py-[100px] text-[14px] leading-[24px] text-white/70">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-[35px] md:grid-cols-2 lg:grid-cols-4">
        <nav aria-label="Fußnavigation">
          <ul>
            <li className="border-b border-white/15">
              <Link href="/" className="block py-2 text-white/85 hover:text-white">
                Start
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.label} className="border-b border-white/15 last:border-0">
                <Link href={item.href} className="block py-2 text-white/85 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-[18px] font-light text-white">{site.name}</h3>
          <address className="mt-4 not-italic">
            D-52396 Heimbach/Eifel
            <br />
            Tel.: {site.phone}
            <br />
            <a href={`mailto:${site.email}`} className="underline hover:text-white">
              {site.email}
            </a>
            <br />
            <a href="https://www.mariawald.de" className="underline hover:text-white">
              www.mariawald.de
            </a>
          </address>
        </div>

        <div>
          <h3 className="text-[18px] font-light text-white">Gästehaus</h3>
          <p className="mt-4">
            Tel.: {site.phone}
            <br />
            <a href="mailto:gaestehaus@mariawald.de" className="underline hover:text-white">
              gaestehaus@mariawald.de
            </a>
          </p>
        </div>

        <div>
          <h3 className="text-[18px] font-light text-white">Öffnungszeiten</h3>
          <dl className="mt-4 space-y-1">
            <div className="flex justify-between gap-4">
              <dt>Klosterpforte</dt>
              <dd className="text-white/60">9–17 Uhr</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Klosterladen</dt>
              <dd className="text-white/60">Di–So 10–17 Uhr</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Gaststätte</dt>
              <dd className="text-white/60">Di–So 11–18 Uhr</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-[1200px] border-t border-white/15 px-[35px] pt-10 text-center">
        <div className="flex justify-center gap-5">
          {["Facebook", "YouTube", "Instagram"].map((s) => (
            <a key={s} href="#" aria-label={s} className="text-white/60 hover:text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                {s === "Facebook" && (
                  <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.6V4.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.6H7.5V14h2.8v8h3.2z" />
                )}
                {s === "YouTube" && (
                  <path d="M23 7.5s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.4-1C16.6 4 12 4 12 4s-4.6 0-7.7.2c-.5.1-1.5.1-2.4 1-.7.7-.9 2.3-.9 2.3S.8 9.4.8 11.3v1.4c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2 .9 2.6 1 1.9.2 7.5.2 7.5.2s4.6 0 7.7-.2c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8v-1.4c0-1.9-.2-3.8-.2-3.8zM9.8 15.3V8.7l6.2 3.3-6.2 3.3z" />
                )}
                {s === "Instagram" && (
                  <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2a3.9 3.9 0 0 1-2.3 2.3c-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4a3.9 3.9 0 0 1-2.3-2.3c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 2A7.8 7.8 0 1 0 12 19.8 7.8 7.8 0 0 0 12 4.2zm0 2.9a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm6.4-3.2a1.1 1.1 0 1 1 0 2.3 1.1 1.1 0 0 1 0-2.3z" />
                )}
              </svg>
            </a>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-x-2 gap-y-1">
          {[
            { label: "Impressum", href: "/impressum" },
            { label: "Datenschutz", href: "/datenschutz" },
            { label: "Barrierefreiheit", href: "/barrierefreiheit" },
            { label: "Intern", href: "/intern" },
          ].map((l, i) => (
            <span key={l.href} className="flex items-center gap-2">
              {i > 0 && <span className="text-white/40">|</span>}
              <Link href={l.href} className="underline hover:text-white">
                {l.label}
              </Link>
            </span>
          ))}
        </div>
        <p className="mt-4 text-white/60">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
