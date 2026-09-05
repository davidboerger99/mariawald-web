import type { Metadata } from "next";
import EventsAdmin from "@/components/intern/EventsAdmin";

export const metadata: Metadata = {
  title: "Veranstaltungen verwalten",
  robots: { index: false, follow: false },
};

export default function InternVeranstaltungenPage() {
  return <EventsAdmin />;
}
