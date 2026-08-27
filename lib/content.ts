// ===========================================================================
//  MENÜ / NAVIGATION  —  hier steuerst du die obere Menüleiste
// ---------------------------------------------------------------------------
//  So änderst du etwas (auch über Claude Code in einfachem Deutsch):
//   - Name eines Menüpunkts ändern:      "label" anpassen
//   - Zielseite ändern:                  "href" anpassen (z. B. "/aktuelles")
//   - Menüpunkt als Knopf hervorheben:   variant: "button"  (z. B. für Login)
//   - Dropdown-Einträge ändern:          Liste in "children" bearbeiten
//   - Externen Link:                     external: true beim Eintrag setzen
//  Die Reihenfolge in dieser Liste ist auch die Reihenfolge im Menü.
// ===========================================================================
export type NavItem = {
  label: string; // angezeigter Name im Menü
  href: string; // Zielseite (interner Pfad "/..." oder externe URL)
  variant?: "button"; // "button" = als hervorgehobener Knopf darstellen
  children?: { label: string; href: string; external?: boolean }[]; // Dropdown
};

export const nav: NavItem[] = [
  // 1) Behaltene Menüpunkte -------------------------------------------------
  {
    label: "Aktuelles",
    href: "/aktuelles",
    children: [
      { label: "Veranstaltungen", href: "/veranstaltungen" },
      { label: "Nachrichten", href: "/nachrichten" },
      { label: "Aktuelle Gottesdienstzeiten", href: "/gottesdienstzeiten" },
      { label: "Aktuelle Öffnungszeiten", href: "/oeffnungszeiten" },
    ],
  },
  {
    label: "Kloster",
    href: "/unser-kloster",
    children: [
      { label: "Kirche und Kloster", href: "/unser-kloster/kirche-und-kloster" },
      { label: "Leben im Kloster", href: "/unser-kloster/leben-im-kloster" },
      { label: "Geschichte", href: "/unser-kloster/geschichte" },
      { label: "Kirchenmusik", href: "/kirchenmusik" },
      { label: "Gottesdienstzeiten", href: "/gottesdienstzeiten" },
      { label: "Förderverein Freundeskreis", href: "/freundeskreis" },
      { label: "Gebetsanliegen", href: "/gebetsanliegen" },
    ],
  },

  // 2) Drei neue Menüpunkte  —  Namen, Ziele und Dropdowns frei änderbar ----
  //    (Beispielhaft benannt. Einfach "label" und "href" auf euren Inhalt ändern.)
  {
    label: "Menüpunkt 3",
    href: "/seite-3",
    children: [
      { label: "Unterpunkt A", href: "/unterpunkt-a" },
      { label: "Unterpunkt B", href: "/unterpunkt-b" },
    ],
  },
  { label: "Menüpunkt 4", href: "/seite-4" },
  { label: "Menüpunkt 5", href: "/seite-5" },

  // 3) Infos (behalten) -----------------------------------------------------
  {
    label: "Infos",
    href: "/kontakt",
    children: [
      { label: "Kontakt", href: "/kontakt" },
      { label: "Klosterführungen", href: "/klosterfuehrungen" },
      { label: "Anreise und Parken", href: "/anreise" },
      { label: "Newsletter", href: "/newsletter" },
    ],
  },

  // 4) Login-Bereich  —  als Knopf dargestellt ------------------------------
  { label: "Login", href: "/intern", variant: "button" },
];

export type NewsItem = {
  slug: string;
  title: string;
  teaser: string;
  date: string;
  category: "Neuigkeiten" | "Kloster" | "Veranstaltung";
};

export const news: NewsItem[] = [
  {
    slug: "wallfahrtssaison-eroeffnet",
    title: "Wallfahrtssaison in Mariawald eröffnet",
    teaser:
      "Mit einem feierlichen Hochamt wurde die diesjährige Wallfahrtssaison eröffnet. Pilgerinnen und Pilger aus der ganzen Region kamen auf den Kermeter.",
    date: "2026-07-26",
    category: "Kloster",
  },
  {
    slug: "orgelkonzert-sommer",
    title: "Sommerliches Orgelkonzert in der Abteikirche",
    teaser:
      "Die Reihe der Sommerkonzerte wird mit Werken von Bach und Mendelssohn fortgesetzt. Der Eintritt ist frei, um eine Spende wird gebeten.",
    date: "2026-07-18",
    category: "Veranstaltung",
  },
  {
    slug: "neue-oeffnungszeiten-klosterladen",
    title: "Neue Öffnungszeiten im Klosterladen",
    teaser:
      "Ab August öffnet der Klosterladen auch sonntags nach dem Hochamt. Damit reagieren wir auf die vielen Besucher am Wochenende.",
    date: "2026-07-10",
    category: "Neuigkeiten",
  },
  {
    slug: "restaurierung-kreuzgang",
    title: "Restaurierung des Kreuzgangs abgeschlossen",
    teaser:
      "Nach zweijähriger Bauzeit erstrahlt der historische Kreuzgang in neuem Glanz. Führungen sind ab sofort wieder möglich.",
    date: "2026-06-28",
    category: "Kloster",
  },
  {
    slug: "besuch-aus-dem-bistum",
    title: "Besuch aus dem Bistum Aachen",
    teaser:
      "Eine Delegation des Bistums informierte sich über die Zukunftspläne für den Klosterstandort Mariawald.",
    date: "2026-06-15",
    category: "Neuigkeiten",
  },
];

export type EventItem = {
  slug: string;
  title: string;
  date: string;
  time: string;
  location: string;
  teaser: string;
};

export const events: EventItem[] = [
  {
    slug: "orgelkonzert-august",
    title: "Orgelkonzert zur Marktzeit",
    date: "2026-08-15",
    time: "11:30 Uhr",
    location: "Abteikirche",
    teaser: "30 Minuten Orgelmusik am Feiertag Mariä Himmelfahrt.",
  },
  {
    slug: "kraeuterwanderung",
    title: "Kräuterwanderung durch den Klostergarten",
    date: "2026-08-22",
    time: "14:00 Uhr",
    location: "Treffpunkt Klosterpforte",
    teaser: "Mit anschließender Verkostung in der Klostergaststätte.",
  },
  {
    slug: "besinnungstage-herbst",
    title: "Besinnungstage im Herbst",
    date: "2026-09-11",
    time: "Fr bis So",
    location: "Gästehaus",
    teaser: "Ein Wochenende der Stille auf dem Kermeter. Anmeldung erforderlich.",
  },
  {
    slug: "lesung-klosterbibliothek",
    title: "Lesung in der Klosterbibliothek",
    date: "2026-09-25",
    time: "19:00 Uhr",
    location: "Bibliothek",
    teaser: "Texte aus der zisterziensischen Tradition, gelesen bei Kerzenlicht.",
  },
];

export type ServiceTime = { day: string; times: { time: string; name: string }[] };

export const serviceTimes: ServiceTime[] = [
  {
    day: "Sonn- und Feiertage",
    times: [
      { time: "08:00", name: "Laudes" },
      { time: "10:30", name: "Hochamt" },
      { time: "17:30", name: "Vesper" },
    ],
  },
  {
    day: "Werktage",
    times: [
      { time: "07:30", name: "Laudes" },
      { time: "11:30", name: "Heilige Messe" },
      { time: "17:30", name: "Vesper" },
    ],
  },
  {
    day: "Samstag",
    times: [
      { time: "07:30", name: "Laudes" },
      { time: "11:30", name: "Heilige Messe" },
      { time: "17:00", name: "Vorabendmesse" },
    ],
  },
];

export type Business = { slug: string; name: string; teaser: string };

export const businesses: Business[] = [
  {
    slug: "klosterladen",
    name: "Klosterladen",
    teaser: "Klosterprodukte, Devotionalien und Geschenke aus Mariawald und anderen Klöstern.",
  },
  {
    slug: "klostergaststaette",
    name: "Klostergaststätte",
    teaser: "Bekannt weit über die Eifel hinaus: die traditionsreiche Erbsensuppe nach Klosterrezept.",
  },
  {
    slug: "likoermanufaktur",
    name: "Likörmanufaktur",
    teaser: "Der Mariawalder Klosterlikör wird bis heute nach überlieferter Rezeptur hergestellt.",
  },
  {
    slug: "buchhandlung",
    name: "Buchhandlung",
    teaser: "Ausgewählte Literatur zu Spiritualität, Theologie und Geschichte der Region.",
  },
  {
    slug: "gaestehaus",
    name: "Gästehaus",
    teaser: "Zimmer für Gäste, die Stille suchen und am Rhythmus des Klosters teilnehmen möchten.",
  },
  {
    slug: "klostergaertnerei",
    name: "Klostergärtnerei",
    teaser: "Kräuter, Stauden und Gemüse aus eigenem Anbau auf dem Klostergelände.",
  },
  {
    slug: "imkerei",
    name: "Imkerei",
    teaser: "Honig von den klostereigenen Bienenvölkern am Rand des Kermeterwaldes.",
  },
  {
    slug: "kerzenwerkstatt",
    name: "Kerzenwerkstatt",
    teaser: "Handgezogene Kerzen für Liturgie und Zuhause, gefertigt in der Klosterwerkstatt.",
  },
];

export type DiscoverItem = { name: string; href: string };

export const discover: DiscoverItem[] = [
  { name: "Klosterladen", href: "/klosterladen" },
  { name: "Klosterführungen", href: "/klosterfuehrungen" },
  { name: "Klostergaststätte", href: "/klostergaststaette" },
  { name: "Gottesdienst", href: "/gottesdienstzeiten" },
  { name: "Likörmanufaktur", href: "/likoermanufaktur" },
  { name: "Gästehaus", href: "/gaestehaus" },
  { name: "Buchhandlung", href: "/buchhandlung" },
  { name: "Kirchenmusik", href: "/kirchenmusik" },
  { name: "Wanderwege", href: "/eifel/wanderwege" },
  { name: "Anreise", href: "/anreise" },
  { name: "Veranstaltungen", href: "/veranstaltungen" },
  { name: "Kontakt", href: "/kontakt" },
];

export const site = {
  name: "Abtei Mariawald",
  claim: "Kloster in der Eifel",
  address: "Abtei Mariawald, 52396 Heimbach/Eifel",
  phone: "+49 2446 9506-0",
  email: "info@mariawald.de",
};

export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  });
}
