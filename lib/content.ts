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
      { label: "Über uns", href: "/unser-kloster/ueber-uns" },
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
      { label: "Klosterführungen", href: "/klosterfuehrungen" },
      { label: "Anreise und Parken", href: "/anreise" },
    ],
  },

  // 4) Mitglieder-Login-Button (rechts, hervorgehoben) ----------------------
  { label: "Mitglieder Login", href: "/login", variant: "login" },
];

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
  {
    slug: "mariawalder-buechertisch",
    title: "Mariawalder Büchertisch",
    teaser:
      "Der Förderverein lädt am Samstag, 29., und Sonntag, 30. August 2026, jeweils von 11 bis 17 Uhr, wieder zum traditionellen Mariawalder Büchertisch ein.",
    date: "2026-08-29",
    image: "/images/mariawald/buechertisch.jpg",
    category: "Veranstaltung",
  },
  {
    slug: "herzlich-willkommen",
    title: "Herzlich willkommen in Mariawald",
    teaser:
      "Ob Sie einen Ausflug planen, ein religiöses Angebot suchen oder dem Kloster seit Langem verbunden sind – in Mariawald sind Sie herzlich willkommen.",
    image: "/images/mariawald/willkommen.jpg",
    category: "Kloster",
  },
  {
    slug: "klosterfuehrungen",
    title: "Klosterführungen",
    teaser:
      "Blicken Sie hinter die alten Klostermauern und erhalten Sie Einblick in das Leben der Trappisten. Exklusive Führungen, ca. eine Stunde, Treffpunkt Klosterpforte. Anmeldung im Klosterladen.",
    href: "/klosterfuehrungen",
    image: "/images/mariawald/kreuzgang-ost.jpg",
    category: "Kloster",
  },
  {
    slug: "mariawalder-buecherschrank",
    title: "Mariawalder Bücherschrank",
    teaser:
      "Im Bücherschrank an der Klosterpforte finden Sie Bücher, die dem Kloster geschenkt wurden, gelegentlich auch Schallplatten und ausgemusterte Bände aus der Klosterbibliothek.",
    image: "/images/mariawald/buecherschrank.jpg",
    category: "Kloster",
  },
  {
    slug: "klosterprodukte-online",
    title: "Einkaufen vor Ort oder online bestellen",
    teaser:
      "Im Klosterladen gibt es Kunst, Literatur und das komplette Sortiment eigener Klosterprodukte – von der Mariawalder Erbsensuppe über die Klosterliköre bis zu hauseigenem Gebäck. Vieles ist auch online erhältlich.",
    href: "/klosterladen",
    image: "/images/mariawald/klosterladen-pakete.jpg",
    category: "Kloster",
  },
  {
    slug: "neuer-traeger",
    title: "Mariawald bleibt ein Ort mit spiritueller Strahlkraft",
    teaser:
      "Seit dem 1. Januar 2021 führt die Kloster Mariawald GmbH & Co. KG die ehemalige Trappistenabtei im Geist der Mönche weiter.",
    date: "2020-12-01",
    image: "/images/mariawald/neuer-traeger.jpg",
    category: "Neuigkeiten",
  },
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
  { label: "Konzert", color: "#b8912f" },
  { label: "Führung", color: "#7a8a99" },
  { label: "Besinnung", color: "#b02218" },
  { label: "Vortrag", color: "#8a6d4b" },
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
    date: "2026-09-13",
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
  email: "info@kloster-mariawald.de",
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
