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
  variant?: "login"; // "login" = als hervorgehobener Knopf rechts (z. B. Mitglieder Login)
  children?: { label: string; href: string; external?: boolean }[]; // Dropdown
};

export const nav: NavItem[] = [
  // 1) Behaltene Menüpunkte -------------------------------------------------
  {
    label: "Aktuelles",
    href: "/nachrichten",
    children: [
      { label: "Veranstaltungen" , href: "/veranstaltungen"},
      { label: "Neuigkeiten" , href: "/nachrichten"},
    ],
  },
  {
    label: "Ort von Kirche",
    href: "/allgemein-ovk",
    children: [
      { label: "Was bedeutet \"Ort von Kirche\"", href: "/allgemein-ovk" },
      { label: "Mariawald als \"Ort von Kirche\"", href: "/mariawald-ovk" },
      { label: "Die Tür ist offen ...", href: "/tueroffen" },
    ],
  },

  // 2) Weitere Menüpunkte können hier ergänzt werden, z. B.:
  //    { label: "Gästehaus", href: "/gaestehaus" },
  //    { label: "Angebote", href: "/angebote", children: [ { label: "...", href: "/..." } ] },

  // 3) Infos (behalten) -----------------------------------------------------
  {
    label: "Infos",
    href: "/kontakt",
    children: [
      { label: "Kontakt", href: "/kontakt" },
      { label: "Öffnungszeiten", href: "/oeffnungszeiten"},
      { label: "Klosterführungen", href: "/klosterfuehrungen" },
      { label: "Anreise und Parken", href: "/anreise" },
    ],
  },

  // 4) Mitglieder-Login-Button (rechts, hervorgehoben) ----------------------
  { label: "Mitglieder Login", href: "/login", variant: "login" },
];

// Test-Start
export type MessageItem = {
  slug: string;
  title: string;
  href?: string;
  date?: string;
  image?: string;
  category: "Personen" | "Kloster" | "Ort von Kirche";
};

export const message: MessageItem[] = [
{
  slug: "news-1",
  title: "Bruder Clemens",
  date: "2026-09-30",
  href: "/news-1", 
  image: "/images/neuigkeiten/clemens.jpg",
  category: "Menschen",
},

{
  slug: "news-2",
  title: "Bildstöckchen",
  date: "2026-10-01",
  href: "/news-2", 
  image: "/images/neuigkeiten/Bildstöckchen.jpg",
  category: "Kloster",
},

{
  slug: "news-3",
  title: "Pferde",
  date: "2026-11-01",
  href: "/news-3", 
  image: "/images/neuigkeiten/pferde.jpg",
  category: "Ort von Kirche"
},

];
// Test-Ende

export type NewsItem = {
  slug: string;
  title: string;
  teaser: string;
  date?: string; // optional; wird nur angezeigt, wenn gesetzt
  href?: string; // optionales Linkziel (statt der automatischen Detailseite)
  image?: string; // Bild für Karte/Karussell (z. B. "/images/mariawald/xy.jpg")
  category: "Neuigkeiten" | "Kloster" | "Veranstaltung";
};

export const news: NewsItem[] = [
//  {
//    slug: "mariawalder-buechertisch",
//    title: "Mariawalder Büchertisch",
//    teaser:
//      "Der Förderverein lädt am Samstag, 29., und Sonntag, 30. August 2026, jeweils von 11 bis 17 Uhr, wieder zum traditionellen Mariawalder Büchertisch ein.",
//    date: "2026-08-29",
//    image: "/images/mariawald/buechertisch.jpg",
//    category: "Veranstaltung",
//  },
  {
    slug: "herzlich-willkommen",
    title: "Unterstützen der Messfeiern",
//    teaser:
//      "Der Sakristan ist mit seinem Team für die Klosterkirche verantwortlich.",
    href: "/sakristan",
    image: "/images/mariawald/willkommen.jpg",
    category: "Kloster",
  },
  {
    slug: "klosterfuehrungen",
    title: "Mithilfe bei der Pflege der Anlage",
//    teaser:
//      "Der Zellerar unterstützt mit seinem Team die Pflege der Klosteranlage.",
    href: "/pflege-anlage",
    image: "/images/mariawald/kreuzgang-ost.jpg",
    category: "Kloster",
  },
  {
    slug: "mariawalder-buecherschrank",
    href: "/bibliothek",
    title: "Mithilfe in der Bibliothek",
//    teaser:
//      "Der Armarius betreut mit seinem Team den Bücherbestand des Klosters.",
    image: "/images/mariawald/buecherschrank.jpg",
    category: "Kloster",
  },
  {
    slug: "klosterprodukte-online",
    title: "Singgemeinschaft",
//    teaser:
//      "Der Kantor beschäftigt sich mit dem trappistischen bzw. Mariawalder Chorgesang.",
    href: "/klosterladen",
    image: "/images/mariawald/choral.jpg",
    category: "Kloster",
  },
//  {
//    slug: "neuer-traeger",
//    title: "Mariawald bleibt ein Ort mit spiritueller Strahlkraft",
//    teaser:
//      "Seit dem 1. Januar 2021 führt die Kloster Mariawald GmbH & Co. KG die ehemalige Trappistenabtei im Geist der Mönche weiter.",
//    date: "2020-12-01",
//    image: "/images/mariawald/neuer-traeger.jpg",
//    category: "Neuigkeiten",
//  },
];

export type EventItem = {
  slug: string;
  title: string;
  date: string; // Startdatum (ISO)
  endDate?: string; // optionales Enddatum für mehrtägige Termine (ISO)
  time?: string;
  location: string;
  category: string; // muss zu einem Eintrag in eventCategories passen
  image?: string; // Bild für die Karussell-Karte (z. B. "/images/xy.jpg")
  href?: string; // eigenes Linkziel (statt der automatischen Detailseite)
  teaser: string;
};

// Kategorien mit Farbe (der Punkt vor dem Titel). Farben frei änderbar.
export const eventCategories: { label: string; color: string }[] = [
  { label: "Gottesdienst", color: "#1e265c" },
  { label: "Führung", color: "#7a8a99" },
  { label: "Dialog mit der Stille", color: "#b02218" },
  { label: "Sonstige", color: "#b8912f" },

 // { label: "Vortrag", color: "#8a6d4b" },
];

export function eventCategoryColor(label: string): string {
  return eventCategories.find((c) => c.label === label)?.color ?? "#999999";
}

export const events: EventItem[] = [
  // Sondertermine (einzelne Veranstaltungen). Die wiederkehrenden
  // Sonntagstermine (Heilige Messe, Klosterführungen) werden automatisch erzeugt.
  {
    slug: "dialog-mit-der-stille",
    title: "Dialog mit der Stille",
    date: "2026-09-27",
    time: "17:30 Uhr",
    location: "Kloster Mariawald",
    category: "Besinnung",
    teaser: "Ein Abend der Stille und der inneren Einkehr.",
  },
  {
    slug: "dialog-mit-der-stille",
    title: "Dialog mit der Stille",
    date: "2026-10-25",
    time: "17:30 Uhr",
    location: "Kloster Mariawald",
    category: "Besinnung",
    teaser: "Ein Abend der Stille und der inneren Einkehr.",
  },
  {
    slug: "dialog-mit-der-stille",
    title: "Dialog mit der Stille",
    date: "2026-11-08",
    time: "17:30 Uhr",
    location: "Kloster Mariawald",
    category: "Besinnung",
    teaser: "Ein Abend der Stille und der inneren Einkehr.",
  },
];

export type ServiceTime = { day: string; times: { time: string; name: string }[] };

export const serviceTimes: ServiceTime[] = [
  {
    day: "Sonn- und Feiertage",
    times: [
      { time: "10:00", name: "Hochamt" },
    ],
  },
//  {
//    day: "Werktage",
//    times: [
//      { time: "07:30", name: "Laudes" },
//      { time: "11:30", name: "Heilige Messe" },
//      { time: "17:30", name: "Vesper" },
//    ],
//  },

// Neuer Eintrag
  {
    day: "Donnerstag",
    times: [
      { time: "14:00", name: "Heilige Messe" },
    ],
  },
];

export type Business = { slug: string; name: string; teaser: string; image?: string };

export const businesses: Business[] = [
  {
    slug: "klosterladen",
    name: "Klosterladen",
    teaser: "Klosterprodukte, Devotionalien und Geschenke aus Mariawald und anderen Klöstern.",
    image: "/images/mariawald/klosterladen.jpg",
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
    image: "/images/mariawald/likoerfabrik.jpg",
  },
  {
    slug: "buchhandlung",
    name: "Buch- und Kunsthandlung",
    teaser: "Ausgewählte Literatur zu Spiritualität, Theologie und Geschichte der Region.",
    image: "/images/mariawald/buchhandlung.jpg",
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
  address: "Abtei Mariawald 1, 52396 Heimbach",
  phone: "+49 (0) 2446 950-60",
  fax: "+49 (0) 2446 950-630",
  email: "info@ovk-mariawald.de",
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
