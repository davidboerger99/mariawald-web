"use client";

import Link from "next/link";
import { useState } from "react";
import Placeholder from "@/components/Placeholder";
import { businesses } from "@/lib/content";

const PER_PAGE = 3;

export default function BusinessCarousel() {
  const pages = Math.ceil(businesses.length / PER_PAGE);
  const [page, setPage] = useState(0);
  const visible = businesses.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-[35px] py-24">
        <span className="eyebrow">Handwerk und Gastfreundschaft</span>
        <h1 className="section-title">Klosterbetriebe</h1>
        <p className="section-sub mx-auto max-w-2xl">
          Zum Kloster gehören mehrere Betriebe, die in der Tradition der Mariawalder
          Handwerksbrüder stehen.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {visible.map((b) => (
            <Link
              key={b.slug}
              href={`/${b.slug}`}
              className="card-lift group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_6px_24px_rgba(30,38,92,0.06)]"
            >
              <div className="overflow-hidden">
                <Placeholder
                  label=""
                  className="h-52 w-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="text-[21px] font-medium text-heading transition-colors group-hover:text-accent">
                  {b.name}
                </h2>
                <p className="mx-auto mt-2.5 max-w-sm text-[14px] leading-[24px] text-foreground/80">
                  {b.teaser}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-2">
          {Array.from({ length: pages }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Seite ${i + 1} anzeigen`}
              aria-current={i === page}
              onClick={() => setPage(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === page ? "w-8 bg-accent" : "w-2.5 bg-[#d6d6d6] hover:bg-[#bbb]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
