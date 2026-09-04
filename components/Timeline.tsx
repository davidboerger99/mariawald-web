export type TimelineItem = { year: string; text: string };

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative ml-3 space-y-10 border-l-2 border-logo-gold/50 pl-8">
      {items.map((it) => (
        <li key={it.year} className="relative">
          <span
            className="absolute top-1.5 -left-[41px] flex h-4 w-4 items-center justify-center rounded-full bg-logo-red ring-4 ring-white"
            aria-hidden="true"
          />
          <div className="text-[20px] font-bold text-logo-red">{it.year}</div>
          <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-foreground/80">{it.text}</p>
        </li>
      ))}
    </ol>
  );
}
