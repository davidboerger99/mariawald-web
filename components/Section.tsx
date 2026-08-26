import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  title: string;
  intro?: string;
  moreHref?: string;
  moreLabel?: string;
  tone?: "white" | "sand";
  children: ReactNode;
};

export default function Section({ title, intro, moreHref, moreLabel, tone = "white", children }: Props) {
  return (
    <section className={tone === "sand" ? "bg-muted" : "bg-white"}>
      <div className="mx-auto max-w-[1200px] px-[35px] py-20">
        <h2 className="section-title">{title}</h2>
        {intro && <p className="section-sub mx-auto max-w-2xl">{intro}</p>}
        <div className="mt-10">{children}</div>
        {moreHref && (
          <div className="mt-10 text-center">
            <Link
              href={moreHref}
              className="inline-flex items-center gap-2 rounded-full border border-accent/40 px-6 py-2.5 text-[14px] font-medium text-accent transition-colors hover:bg-accent hover:text-white"
            >
              {moreLabel ?? "Mehr erfahren"}
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
