# CLAUDE.md – Projektregeln Fasssauna.de

Verbindliche Regeln für die Arbeit an diesem Projekt. Bei Konflikt gewinnt eine
ausdrückliche Anweisung des Nutzers.

## Was ist das?
Präsentations-/Showroom-Website (kein Shop) für Fasssauna.de – Fass- und Oval-Saunen
der Meisel & Gerken GmbH. Statisches HTML + eine zentrale CSS-Datei. Ziel später:
Umbau als WordPress-Template (siehe `Handover_Saunamodelle_Datenmodell_2026-06-20.md`).

## Marke / Designsystem
- **Markenwelt:** Dunkel `#1C1D2C` + warme Thermoholz-Töne, Magazin-/Showroom-Charakter.
- **Das gespeicherte NVIDIA-Designsystem NICHT verwenden** – passt nicht zur Marke.
- Tonalität/Slogans: siehe `slogan-briefing.md`.

## Styling-Regeln (wichtig)
- **Eine Stilquelle:** Alles Styling läuft über `css/site.css`. **Kein Inline-CSS** und
  keine zweite Stilquelle. Neue Komponenten als Klasse in `site.css` ergänzen.
- **Cache-Busting:** Bei JEDER CSS-Änderung die Version `site.css?v=N` in **allen** HTML-Dateien
  um eins hochzählen.
  - In PowerShell beim Hochzählen **UTF-8 ohne BOM** schreiben (`[System.IO.File]` +
    `UTF8Encoding($false)`), NICHT `Set-Content -Encoding utf8` – das zerschießt sonst die Umlaute.
- **Kategorie-Links** (Oval / Fass / Vorraum) als **`.cat-link`-Text-Links** (grün, mit Pfeil),
  **keine** Buttons und **keine** bildgestützten Kachel-Reihen.

## Buttons vs. Links (Grundsatzregel, seitenübergreifend)
Nur **zwei Stufen** – der Ghost-Button (`.btn-ghost`) wird **nicht mehr** eingesetzt:
- **Gefüllter Button** (`.btn.btn-primary`) = die **eine** Hauptaktion pro Abschnitt
  (Conversion: Termin buchen / Formular öffnen). Höchstens **ein** Button pro Bildschirmbereich.
- **Text-Link mit Pfeil** (`.cat-link`, Pflicht-Vorlage) = **alles andere**: Navigation zu
  anderen Seiten/Sektionen, alternative Kontaktwege (Telefon, Kontaktformular), Querverweise.
- **Faustregel:** Erledigt der Klick *hier* den entscheidenden Schritt → Button.
  Führt er *woandershin* → Link.
- Rollout läuft seitenweise; Ziel ist, `.btn-ghost` projektweit abzulösen.

## Gruppen-Headlines = `.group-label` (Pflicht-Vorlage, seitenübergreifend)
Überschriften, die **eine Gruppe gleichartiger Kachel- oder Slide-Reihen** betiteln
(z. B. Modellfamilien auf der Startseite, Dachvarianten-Gruppen auf „Ausstattung & Material"),
sind **immer** als `.group-label` umzusetzen – Mono-Versalien, linksbündig, mit auslaufender Linie.
- **Keine** zweite Gestaltung erfinden (keine zentrierte Serif-`<h3>`, keine eigene Oberlinie).
  `.family-label` ist nur ein **Alias** auf denselben Stil.
- **Farb-Differenzierung läuft automatisch über den Kontext:** auf weißem Hintergrund
  Holzfarbe (`--wood-deep`); in farbigen Sektionen (`.is-tint`) tiefere Holzfarbe (`--wood-dark`).
  Dafür einfach das Label in die jeweilige Sektion setzen – **keine** Inline-Farbe.
- Stil-Definition liegt zentral in `css/site.css` (`.group-label,.family-label`).
  Neue Gruppen-Überschriften erhalten die Klasse `group-label`, nichts wird neu gestylt.

## Hero ohne Links (Grundsatzregel, seitenübergreifend)
Der Hero-Bereich (`.phero` / `.phero-wrap` + der direkt anschließende Intro-Block mit
Eyebrow, `<h1>` und Lead) enthält **keine Links und keine Buttons** – kein `.mhero-cta`,
keine `.cat-link`, kein `.btn`. Der Hero setzt nur das Bild und die Aussage; alle Aktionen
und Querverweise leben in den Sektionen darunter.

## Saunamodell-Kacheln = Datengetrieben über `models.json`  ⟵ zentral
- **`models.json` ist die Single Source of Truth** für alle Saunamodelle
  (Titel, Familie, Tag, Kurztext, Detailseite, Bildpfade, Vorraum-Variante).
- **Workflow bei JEDER Kachel-Änderung (eigenständig anwenden, ohne Rückfrage):**
  1. Änderung zuerst in `models.json` eintragen.
  2. Dann die betroffenen **statischen HTML-Kacheln** nachziehen
     (Startseite `index.html` + die jeweilige Kategorieseite).
- **Warum noch im HTML?** SEO: Die Kacheln müssen im HTML-Quelltext stehen, deshalb
  bewusst **kein** JS-Rendering. `models.json` ist Pflege-/Wahrheitsquelle und WordPress-Vorlage.
- **Kachel-Optik:** Startseite nutzt `.card`, Kategorieseiten nutzen `.ov-card`. Keine braunen
  `.tag`-Pills auf der Startseite.

### Wo die Kacheln vorkommen
| Familie | Startseite | Kategorieseite |
|---|---|---|
| Oval | `index.html` (Abschnitt „Unsere Modelle") | `oval-saunen.html` |
| Fass | `index.html` | `fasssaunen.html` |
| Vorraum | `index.html` | `vorraumvarianten.html` |

## Wiederkehrende Inhaltsblöcke (Teaser) = Datengetrieben über `content.json`
- **`content.json` ist die Single Source of Truth** für Blöcke, die auf mehreren Seiten
  identisch vorkommen. Aktuell:
  - **`teaser_berater`** (Klasse `teaser-berater`, Bild-Variante `teaser-berater--image`) –
    „Beratung und Kontakt": zwei Ansprechpartner + Text-Links.
  - **`teaser_ausstattung`** (Klasse `teaser-ausstattung`) – Querverweis-Band auf
    `ausstattung.html` mit vier Bild-Kacheln.
- **Namensregel (verbindlich, seitenübergreifend):** Wiederkehrende Querverweis-/Kontakt-Bänder
  heißen einheitlich mit Präfix **`teaser-`** (CSS-/HTML-Klasse) bzw. **`teaser_`**
  (Schlüssel in `content.json`). Neue Blöcke dieser Art folgen demselben Schema; keine
  Sonderbezeichnungen mehr (früher „berater-band", „ausstattung-teaser").
- **Demoseite:** Alle Teaser werden auf **`teaser-demo.html`** im echten Kontext gesammelt
  (interne Referenz, `noindex`). Neue Teaser dort ergänzen.
- **Workflow bei JEDER Textänderung (eigenständig, ohne Rückfrage):**
  1. Änderung zuerst in `content.json` eintragen.
  2. Dann **alle** statischen Vorkommen im HTML nachziehen (siehe `vorkommen`-Liste im
     jeweiligen Block), inkl. `teaser-demo.html`.
- Gleiche Logik wie bei den Kacheln: HTML bleibt statisch (SEO), Datendatei ist Pflege-/
  Wahrheitsquelle und WordPress-Vorlage (Reusable Block / Template-Part).

## Seitenstruktur Kategorieseiten (einheitlich)
Breadcrumb → `sec-head` → `.ov-grid` mit `.ov-card`-Kacheln → `teaser-berater`
(„Beratung und Kontakt") → Footer.

## Bilder
- Bildordner mit Bindestrich-Schreibweise unter `assets/bilder/<modell>/`.
- Detail-Hero im Startseiten-Format (16:9). Hero-Dateien: `*-hero.png`.
- Bei sehr großen Dateien (z. B. >2 MB) Web-Optimierung anbieten.

## Bild-Zoom = eine zentrale Lightbox (Pflicht-Regel, seitenübergreifend)
Jedes vergrößerbare Bild nutzt **denselben** Mechanismus – **keinen** zweiten Zoom-/Modal-Weg erfinden.
- **Auslöser:** `<a … data-lb data-lb-group="<gruppe>" data-caption="…" href="<Bildquelle>">` um das `<img>`.
  Das `href` ist zugleich Bildquelle **und** No-JS-Fallback. Der Handler in `js/site.js`
  (`[data-lb]`) findet die Elemente automatisch – kein zusätzliches JS pro Seite.
- **`data-lb-group`** fasst zusammengehörige Bilder für die Vor/Zurück-Navigation im Overlay zusammen
  (ein sprechender Gruppenname je Bildreihe, z. B. `kolmikko-innen`).
- **Zwei Kachel-Typen, eine Affordance:**
  - **Fotos** → `.gtile` im `.gallery`-Raster, Auslöser-`<a>` zusätzlich mit **`.gtile-zoom`**
    (Bild `cover`, zoomt beim Hover sanft heran).
  - **Technische Zeichnungen / Grundrisse** (müssen vollständig sichtbar sein) → **`.dtile`** im `.dgrid`
    (Bild `contain` mit Innenabstand, Kachel hebt sich beim Hover).
  - Beide tragen **dieselbe** Lupen-Plakette oben rechts + Zoom-Cursor + grünen Fokus-Rahmen.
    Diese Affordance liegt zentral in `css/site.css` (`.gtile-zoom`, `.dtile`) – **nichts** neu stylen.
- Neue Zoom-Stellen folgen exakt diesem Schema; keine Einzellösungen mehr.

## WordPress-Zielbild (Kurz)
Custom Post Type `saunamodell` + Taxonomie `saunafamilie` (oval/fass) + ACF-Felder.
Kachel als Template-Part/Block, Grids per Query-Loop. `models.json` liefert das Feld-Schema.
Details: `Handover_Saunamodelle_Datenmodell_2026-06-20.md`.
