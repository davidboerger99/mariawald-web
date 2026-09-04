"use client";

import { useState } from "react";

export type AccordionItem = { q: string; a: string };

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="border-t border-black/10">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.q} className="border-b border-black/10">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
            >
              <span className="text-[18px] font-semibold text-heading">{it.q}</span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream text-logo-red">
                <svg viewBox="0 0 24 24" className={`h-4 w-4 transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <p className="pb-6 pr-12 text-[15px] leading-relaxed text-foreground/80">{it.a}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
