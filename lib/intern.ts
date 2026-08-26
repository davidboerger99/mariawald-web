export type Notice = {
  id: string;
  title: string;
  date: string;
  category: "Bau" | "Konvent" | "Allgemein" | "Termin";
  body: string;
};

export type Meeting = {
  title: string;
  date: string;
  time: string;
  location: string;
  note?: string;
};

export type InternDocument = {
  name: string;
  description: string;
  href: string;
  kind: string;
  updated: string;
};

export const notices: Notice[] = [
  {
    id: "renovierung-dezember",
    title: "Renovierungsarbeiten ab Ende Dezember",
    date: "2026-12-22",
    category: "Bau",
    body: "Ab Ende Dezember beginnen im Ostflügel umfangreiche Renovierungsarbeiten. Betroffen sind zeitweise der Kreuzgang und die oberen Gästezimmer. Bitte plant Führungen und Gästebelegungen entsprechend um. Der genaue Bauzeitenplan liegt in der Dateiablage.",
  },
  {
    id: "konventssitzung-protokoll",
    title: "Protokoll der letzten Konventssitzung verfügbar",
    date: "2026-08-05",
    category: "Konvent",
    body: "Das Protokoll der Konventssitzung vom 4. August steht in der Dateiablage bereit. Rückmeldungen bitte bis zum kommenden Freitag an die Verwaltung.",
  },
  {
    id: "winterpause-gaststaette",
    title: "Winterpause der Klostergaststätte",
    date: "2026-07-30",
    category: "Allgemein",
    body: "Die Klostergaststätte bleibt vom 6. bis 20. Januar geschlossen. In dieser Zeit finden Grundreinigung und kleinere Reparaturen statt.",
  },
];

export const meetings: Meeting[] = [
  {
    title: "Baubesprechung Ostflügel",
    date: "2026-12-15",
    time: "10:00 Uhr",
    location: "Verwaltung, Raum 1",
    note: "mit Architekturbüro und Bauleitung",
  },
  {
    title: "Konventssitzung",
    date: "2026-09-01",
    time: "16:30 Uhr",
    location: "Kapitelsaal",
  },
  {
    title: "Abstimmung Wintersaison",
    date: "2026-09-10",
    time: "14:00 Uhr",
    location: "Verwaltung, Raum 1",
    note: "Klosterladen, Gaststätte, Gästehaus",
  },
];

export function formatInternDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  });
}

export const documents: InternDocument[] = [
  {
    name: "Bauzeitenplan Ostflügel",
    description: "Zeitplan der Renovierungsarbeiten ab Ende Dezember.",
    href: "/intern-dateien/bauzeitenplan-ostfluegel.pdf",
    kind: "PDF",
    updated: "2026-08-11",
  },
  {
    name: "Protokoll Konventssitzung",
    description: "Sitzung vom 4. August 2026.",
    href: "/intern-dateien/protokoll-konventssitzung.pdf",
    kind: "PDF",
    updated: "2026-08-05",
  },
];
