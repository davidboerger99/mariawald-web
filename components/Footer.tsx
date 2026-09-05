"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const mainLinks = [
  { label: "Kontakt", href: "/kontakt" },
  { label: "Öffnungszeiten und Preise", href: "/oeffnungszeiten" },
  { label: "Anreise", href: "/anreise" },
  { label: "Gottesdienstzeiten", href: "/gottesdienstzeiten" },
  { label: "Veranstaltungen", href: "/veranstaltungen" },
  { label: "Klosterführungen", href: "/klosterfuehrungen" },
  { label: "Gästehaus", href: "/gaestehaus" },
];

const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "Barrierefreiheit", href: "/barrierefreiheit" },
  { label: "Jobs", href: "/karriere" },
];

const socials = [
  {
    label: "Facebook",
    href: "#",
    path: "M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.6V4.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.6H7.5V14h2.8v8h3.2z",
  },
  {
    label: "YouTube",
    href: "#",
    path: "M23 7.5s-.2-1.6-.9-2.3c-.9-.9-1.9-.9-2.4-1C16.6 4 12 4 12 4s-4.6 0-7.7.2c-.5.1-1.5.1-2.4 1-.7.7-.9 2.3-.9 2.3S.8 9.4.8 11.3v1.4c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2 .9 2.6 1 1.9.2 7.5.2 7.5.2s4.6 0 7.7-.2c.5-.1 1.5-.1 2.4-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8v-1.4c0-1.9-.2-3.8-.2-3.8zM9.8 15.3V8.7l6.2 3.3-6.2 3.3z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2a3.9 3.9 0 0 1-2.3 2.3c-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4a3.9 3.9 0 0 1-2.3-2.3c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2zm0 2A7.8 7.8 0 1 0 12 19.8 7.8 7.8 0 0 0 12 4.2zm0 2.9a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8zm6.4-3.2a1.1 1.1 0 1 1 0 2.3 1.1 1.1 0 0 1 0-2.3z",
  },
];

export default function Footer() {
  const pathname = usePathname();
  // Im internen Bereich (Dashboard) wird der öffentliche Footer ausgeblendet.
  if (pathname?.startsWith("/intern")) return null;

  return (
    <footer className="bg-cream text-navy">
      <div className="mx-auto max-w-[1100px] px-6 py-20 text-center">
        <Link href="/" aria-label="Zur Startseite" className="inline-block">
          <Image
            src="/images/logo-kloster-mariawald-transparent.png"
            alt="Kloster Mariawald"
            width={261}
            height={180}
            className="mx-auto h-20 w-auto"
          />
        </Link>

        <nav aria-label="Fußnavigation" className="mt-12">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-[15px] font-medium">
            {mainLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-logo-red">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Rechtliches" className="mt-6">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[14px] text-navy/80">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="underline underline-offset-4 hover:text-logo-red">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-10 flex justify-center gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="text-navy transition-colors hover:text-logo-red"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
                <path d={s.path} />
              </svg>
            </a>
          ))}
        </div>

        <p className="mt-10 text-[13px] text-navy/60">
          © {new Date().getFullYear()} Abtei Mariawald · D-52396 Heimbach/Eifel
        </p>
      </div>
    </footer>
  );
}
