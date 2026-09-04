import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import { formatDate, type NewsItem } from "@/lib/content";

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="card-lift group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_6px_24px_rgba(30,38,92,0.06)]">
      <Link href={item.href ?? `/nachrichten/${item.slug}`} className="flex h-full flex-col">
        <div className="overflow-hidden">
          <Placeholder
            label=""
            className="h-44 w-full transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-2 text-[12px]">
            <span className="rounded-full bg-accent/10 px-3 py-1 font-semibold text-accent">
              {item.category === "Kloster" ? "Aus Kloster & Konvent" : item.category}
            </span>
            {item.date && <span className="text-[#999]">{formatDate(item.date)}</span>}
          </div>
          <h3 className="mt-4 text-[18px] font-medium leading-snug text-heading transition-colors group-hover:text-accent">
            {item.title}
          </h3>
          <p className="mt-2 flex-1 text-[14px] leading-[24px] text-foreground/80">{item.teaser}</p>
          <span className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-medium text-accent">
            Mehr erfahren
            <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M5 12h14m-6-6 6 6-6 6" />
            </svg>
          </span>
        </div>
      </Link>
    </article>
  );
}
