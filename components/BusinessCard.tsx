import Link from "next/link";
import Placeholder from "@/components/Placeholder";
import type { Business } from "@/lib/content";

export default function BusinessCard({ item }: { item: Business }) {
  return (
    <Link
      href={`/${item.slug}`}
      className="card-lift group block overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_6px_24px_rgba(30,38,92,0.06)]"
    >
      <div className="overflow-hidden">
        <Placeholder
          label=""
          className="h-40 w-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="text-[17px] font-medium text-heading transition-colors group-hover:text-accent">
          {item.name}
        </h3>
        <p className="mt-2 text-[14px] leading-[24px] text-foreground/80">{item.teaser}</p>
      </div>
    </Link>
  );
}
