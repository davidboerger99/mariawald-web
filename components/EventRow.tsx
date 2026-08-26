import Link from "next/link";
import { formatDate, type EventItem } from "@/lib/content";

export default function EventRow({ item }: { item: EventItem }) {
  const [, month, day] = item.date.split("-");
  const monthNames = ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"];
  return (
    <Link
      href={`/veranstaltungen/${item.slug}`}
      className="group flex items-center gap-5 rounded-xl px-3 py-3.5 transition-colors hover:bg-cream/60"
    >
      <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl bg-accent/10 text-accent">
        <span className="text-[24px] font-semibold leading-none tabular-nums">{Number(day)}</span>
        <span className="mt-0.5 text-[11px] font-medium tracking-wide uppercase">
          {monthNames[Number(month) - 1]}
        </span>
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-[16px] font-medium text-heading transition-colors group-hover:text-accent">
          {item.title}
        </h3>
        <p className="mt-0.5 truncate text-[13px] text-[#999]">
          {formatDate(item.date)} · {item.time} · {item.location}
        </p>
      </div>
      <svg viewBox="0 0 24 24" className="hidden h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-1 sm:block" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <path d="M5 12h14m-6-6 6 6-6 6" />
      </svg>
    </Link>
  );
}
