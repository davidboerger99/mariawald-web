import Image from "next/image";
import Link from "next/link";

type Crumb = { label: string; href: string };

export default function PageHeader({
  title,
  intro,
  crumbs = [],
}: {
  title: string;
  intro?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative">
      <div className="relative h-72">
        <Image
          src="/images/pforte-herbst.jpg"
          alt="Klosterpforte der Abtei Mariawald im Herbst"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/85 via-black/55 to-black/35">
          <div className="mx-auto w-full max-w-[1200px] px-[35px] pb-10 text-white">
            <nav aria-label="Brotkrumen" className="text-[12px] text-white/75">
              <ol className="flex flex-wrap gap-1">
                <li>
                  <Link href="/" className="hover:underline">
                    Start
                  </Link>
                </li>
                {crumbs.map((c) => (
                  <li key={c.href}>
                    <span className="mx-1">/</span>
                    <Link href={c.href} className="hover:underline">
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
            <h1
              className="mt-2 text-[36px] font-light leading-[42px]"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,.4)" }}
            >
              {title}
            </h1>
            {intro && (
              <p
                className="mt-2 max-w-2xl font-light text-white"
                style={{ textShadow: "0 1px 6px rgba(0,0,0,.55)" }}
              >
                {intro}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
