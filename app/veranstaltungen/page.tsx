import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import VeranstaltungenList from "@/components/VeranstaltungenList";

export const metadata: Metadata = { title: "Veranstaltungen" };

export default function VeranstaltungenPage() {
  return (
    <>
      <PageHeader
        title="Veranstaltungen"
//        intro="Begegnung belebt: In Mariawald sind alle Menschen herzlich willkommen."
        crumbs={[{ label: "Aktuelles", href: "/aktuelles" }]}
      />

      <div className="mx-auto max-w-[1000px] px-[35px] py-14">
        <VeranstaltungenList />
      </div>
    </>
  );
}
