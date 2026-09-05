import type { Metadata } from "next";
import NewsAdmin from "@/components/intern/NewsAdmin";

export const metadata: Metadata = {
  title: "Nachrichten verwalten",
  robots: { index: false, follow: false },
};

export default function InternNachrichtenPage() {
  return <NewsAdmin />;
}
