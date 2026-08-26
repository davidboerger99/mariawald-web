import { serviceTimes } from "@/lib/content";

export default function ServiceTimesCard() {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {serviceTimes.map((block) => (
        <div
          key={block.day}
          className="card-lift rounded-2xl border border-black/5 bg-white p-6 shadow-[0_6px_24px_rgba(30,38,92,0.06)]"
        >
          <h3 className="text-[17px] font-medium text-heading">{block.day}</h3>
          <ul className="mt-4 space-y-2.5">
            {block.times.map((t) => (
              <li key={t.time + t.name} className="flex items-baseline gap-3 text-[14px]">
                <span className="rounded-md bg-accent/10 px-2 py-0.5 font-semibold text-accent tabular-nums">
                  {t.time}
                </span>
                <span className="text-foreground/85">{t.name}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
