import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

// Schriftart wie bei Kloster Volkenroda: Poppins (moderne, geometrische Sans-Serif)
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Abtei Mariawald | Kloster in der Eifel",
    template: "%s | Abtei Mariawald",
  },
  description:
    "Die Abtei Mariawald auf dem Kermeter bei Heimbach in der Eifel: Gottesdienstzeiten, Klosterbetriebe, Veranstaltungen und Informationen für Ihren Besuch.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
