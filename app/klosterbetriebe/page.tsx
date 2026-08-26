import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import BusinessCard from "@/components/BusinessCard";
import { businesses } from "@/lib/content";

export const metadata: Metadata = { title: "Klosterbetriebe" };

export default function KlosterbetriebePage() {
  return (
    <>
      <PageHeader
        title="Klosterbetriebe"
        intro="Die Betriebe der Abtei tragen das Kloster wirtschaftlich und heißen Gäste willkommen."
      />
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {businesses.map((b) => (
            <BusinessCard key={b.slug} item={b} />
          ))}
        </div>
      </div>
    </>
  );
}
