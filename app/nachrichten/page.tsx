import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import NewsCard from "@/components/NewsCard";
import { news } from "@/lib/content";
import { message } from "@/lib/content";
import MessageCard from "@/components/MessageCard";


export const metadata: Metadata = { title: "Nachrichten" };

export default function NachrichtenPage() {
  return (
    <>
      <PageHeader
        title="Neuigkeiten"
        intro="Mariawald - Ort von Kirche"
        crumbs={[{ label: "Aktuelles", href: "/aktuelles" }]}
      />
 {/*
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((n) => (
            <NewsCard key={n.slug} item={n} />
          ))}
        </div>
      </div>
*/}

      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {message.map((n) => (
            <MessageCard key={n.slug} item={n} />
          ))}
        </div>
      </div>

    </>
  );
}
