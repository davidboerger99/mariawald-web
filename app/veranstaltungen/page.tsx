import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import VeranstaltungenList from "@/components/VeranstaltungenList";

export const metadata: Metadata = { title: "Veranstaltungen" };

export default function VeranstaltungenPage() {
  return (
    <>
      <PageHeader
        title="Veranstaltungen"
        intro="Begegnung belebt: In Mariawald sind die verschiedensten Menschen willkommen. Die Abtei ist zugleich ein Ort der Einkehr, der Stille und des geistlichen Lebens."
        crumbs={[{ label: "Aktuelles", href: "/aktuelles" }]}
      />

      <div className="mx-auto max-w-[1000px] px-[35px] py-14">
        <VeranstaltungenList />
      </div>
    </>
  );
}
