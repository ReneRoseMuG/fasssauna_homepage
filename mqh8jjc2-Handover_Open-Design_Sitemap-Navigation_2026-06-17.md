# Handover – Open Design: Sitemap & Navigation Fasssauna.de

**Datum:** 17.06.2026
**Von:** Rene (Meisel & Gerken GmbH) / Claude (Konzept)
**An:** Open Design / Claude Code (Umsetzung Navigation & Seitenstruktur)
**Auftrag:** Navigation und Seitenstruktur der neuen Fasssauna.de nach aktueller Sitemap aufbauen.
**Bezug:** Ergänzt das Handover vom 14.06. (Startseiten-Gerüst) und die Änderung Modellgalerie (14.06.).

---

## 1. Worum es geht (Kontext in 30 Sekunden)

Fasssauna.de wird **keine Shop-Seite**, sondern eine **Präsentationsseite / digitaler Showroom** für hochwertige, in eigener Schreinerei gefertigte und selbst aufgebaute Saunen. Ziel jeder Seite ist der **Beratungstermin**, nicht der Kauf-Button. Die Navigation soll diesem Premium-Charakter folgen: klar, ruhig, ohne Filter-/Shop-Logik.

Dieses Handover legt fest, **wie die Seiten zusammenhängen** und **wie sich die Navigation verhält** – inklusive der neuen Vorraumvarianten-Seite.

## 2. Aktuelle Sitemap

```
Startseite
├── Saunamodelle  (Mega-Menü, 2 Familien)
│   ├── Fasssaunen — Übersichtsseite   (Vergleich/Long-Tail, NICHT „Fasssauna")
│   │   ├── FassSauna Standard
│   │   ├── FassSauna XL
│   │   └── FassSauna Suuri
│   └── Oval Saunen — Übersichtsseite   (Keyword „oval sauna")
│       ├── Oval Sauna Premium   (Ruhebereich)
│       ├── Oval Sauna Palkkio   (seitlicher Vorraum)
│       └── Oval Sauna Kolmikko
├── Vorraumvarianten  (Themenseite — bündelt die 3 Fasssaunen mit Vorraum)
│   ├── FassSauna Standard mit Vorraum
│   ├── FassSauna XL mit Vorraum
│   └── FassSauna Suuri mit Vorraum   (neu – Text/Maße noch zu erstellen)
├── Material & Herstellung  (Themenseite, 2. Welle)
├── Ausstellung  (450 m² Indoor erleben)
├── Messetermine
├── Magazin  (Struktur jetzt, Inhalte später)
└── Beratungstermin / Kontakt

Rechtsseiten: Impressum · Datenschutz · ggf. AGB
```

## 3. Verhalten der Navigation (wichtig)

Die Modellnavigation läuft über ein **Dropdown-/Mega-Menü** unter „Saunamodelle" mit zwei Spalten (Fasssaunen / Oval Saunen):

```
Saunamodelle ▾
┌─────────────────────────┬─────────────────────────┐
│ Fasssaunen   (→ Übersicht)│ Oval Saunen  (→ Übersicht)│
│ • FassSauna Standard      │ • Oval Sauna Premium      │
│ • FassSauna XL            │ • Oval Sauna Palkkio      │
│ • FassSauna Suuri         │ • Oval Sauna Kolmikko     │
└─────────────────────────┴─────────────────────────┘
```

Regeln:

- **Modellname** → führt **immer direkt** zur Modellseite. Für beide Familien identisch, kein erzwungener Zwischenhalt auf einer Kategorieseite.
- **Spaltenkopf „Fasssaunen / Oval Saunen"** → klickbar zur jeweiligen **Familien-Übersichtsseite**. Ebenfalls für beide Familien gleich (symmetrisch).
- Damit ist die Navigation konsistent: gleiche Klick-Logik für beide Familien.
- **Mobile:** Mega-Menü als aufklappbares Akkordeon abbilden (Familie aufklappen → Modelle als Liste). Familien-Übersicht zusätzlich als eigener Eintrag.

## 4. Neue Seite: Vorraumvarianten (Themenseite)

Eigenständige Themenseite, die die **drei Fasssaunen mit Vorraum** zusammenfasst (Standard, XL, Suuri mit Vorraum) und auf die jeweiligen Modellseiten verlinkt.

- Zweck: Bündelung des starken Such-Clusters „fasssauna mit vorraum / saunafass mit vorraum" auf **einer** Seite (keine separaten „mit Vorraum"-Modellseiten).
- Inhalt: kurze Einführung „Was bringt ein Vorraum?" (Umziehen, Ablegen, Verweilen, Witterungsschutz) + die drei Varianten als Karten/Abschnitte mit Bild, Kurznutzen und Link zur Modellseite.
- Einstiege: Hauptnavigation, Vorraum-Block auf der Startseite, Badge „Auch mit Vorraumverlängerung" auf den Fasssauna-Kacheln.
- Platzierung in der Hauptnavigation ist noch zur Feinabstimmung freigegeben (eigener Hauptpunkt vs. dezenter Einstieg über Startseite + Fasssaunen-Dropdown).

## 5. SEO-Logik hinter der Struktur (zur Orientierung)

- **Startseite besetzt den Geldbegriff „Fasssauna"** (Exact-Match-Domain `fasssauna.de`). Deshalb bekommt die **Fasssaunen-Übersicht** bewusst eine **andere Ausrichtung** (Vergleich / Größen / mit-ohne Vorraum / Long-Tail), um nicht mit der Startseite um dasselbe Keyword zu konkurrieren (Kannibalisierung vermeiden).
- **Oval Saunen-Übersicht** bedient den eigenständigen Cluster „oval sauna / ovale fasssauna" – klare, nicht-konkurrierende Landingpage.
- **Vorraumvarianten** bedient den Cluster „mit Vorraum" gebündelt.
- Grundlage: `Keyword-Landkarte_Fasssauna.de_2026-06-15.md`.

## 6. Was sich gegenüber dem 14.06.-Handover ändert

- Modell-Navigation jetzt als **Mega-Menü** mit zwei Familien-Spalten (statt nur Karten auf der Startseite).
- **Zwei Familien-Übersichtsseiten** (Fasssaunen, Oval Saunen) neu als Knoten.
- **Vorraumvarianten-Themenseite** neu aufgenommen.
- Startseiten-Modellgalerie bleibt bei **6 Kacheln** (3 + 3) wie in der Änderung 14.06. – unverändert.

## 7. Scope dieses Schritts

**Im Scope:**

- Hauptnavigation inkl. Mega-Menü (Desktop) und Akkordeon (Mobile) nach §3.
- Seitengerüste für: 2 Familien-Übersichtsseiten, 6 Modellseiten (Platzhalter), Vorraumvarianten-Themenseite.
- Verlinkungslogik laut §3/§4.

**Nicht im Scope (spätere Wellen):**

- Finale Texte/Maße der Modellseiten (Suuri mit Vorraum: Text/Maße folgen).
- Vollausbau Material & Herstellung, redaktionelles Magazin, dynamische Messetermine.
- SEO-Redirects der alten JTL-URLs.

## 8. Offene Punkte (vom Auftraggeber nachzuliefern)

- Finale Platzierung der Vorraumvarianten-Seite in der Hauptnavigation (eigener Punkt vs. dezenter Einstieg).
- Entscheidung, ob die Fasssaunen-Übersicht als eigene URL geführt wird oder der Spaltenkopf auf die Startseiten-Modellsektion (Anker) verweist.
- Texte/Maße für „FassSauna Suuri mit Vorraum".

---

*Grundlage: `Sitemap_Fasssauna.de.md`, `Konzept_Fasssauna.de_2026-06-13.md`, `Aenderung_Modellgalerie_2026-06-14.md`, `Keyword-Landkarte_Fasssauna.de_2026-06-15.md`, Sessions 13.–17.06.2026.*
