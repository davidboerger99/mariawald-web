import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
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
    <html lang="de" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
