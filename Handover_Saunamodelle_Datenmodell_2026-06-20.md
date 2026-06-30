# Handover – Datenmodell Saunamodelle (Stand 2026-06-20)

## Ziel
Die Saunamodell-Kacheln tauchen mehrfach auf (Startseite + Kategorieseiten). Statt diese
Inhalte mehrfach im HTML zu pflegen, gibt es ab jetzt **eine kanonische Datenquelle**:
`models.json`. Sie beschreibt jedes Modell **genau einmal**.

## Warum nicht jetzt schon per JavaScript rendern?
Bewusste Entscheidung: **SEO geht vor.** Würde man die Kacheln per JS aus `models.json`
erzeugen, stünden Modellnamen, Texte und interne Links nicht mehr im HTML-Quelltext –
schlecht für Suchmaschinen und „kein-JS"-Fälle. Darum bleibt das **HTML statisch** und
unverändert. `models.json` ist die **Pflege-/Wahrheitsquelle** und die **Vorlage für
WordPress** – nicht der Renderer der aktuellen Seite.

## Pflege-Regel (Übergangszeit, bis WordPress steht)
- Inhaltliche Wahrheit steht in `models.json`.
- Ändert sich ein Modell, zuerst `models.json` aktualisieren, dann die betroffenen
  statischen HTML-Kacheln nachziehen (Startseite + jeweilige Kategorieseite).

## Wo die Kacheln aktuell vorkommen
| Modell-Familie | Startseite (`index.html`) | Kategorieseite |
|---|---|---|
| Oval | Abschnitt „Unsere Modelle" | `oval-saunen.html` |
| Fass | Abschnitt „Unsere Modelle" | `fasssaunen.html` |
| Vorraum | Abschnitt „Unsere Modelle" | `vorraumvarianten.html` |

Optik kommt zentral aus `css/site.css` (`.card` auf der Startseite, `.ov-card` auf den
Kategorieseiten). Nur die **Inhalte** sind heute noch dupliziert – genau das löst WordPress.

## WordPress-Umsetzung (Zielbild)
1. **Custom Post Type** `saunamodell` – ein Eintrag pro Modell (= ein Objekt aus `modelle[]`).
2. **Taxonomie** `saunafamilie` mit Terms `oval` und `fass` (Vorraum ist eine Eigenschaft der
   Fasssaunen, keine eigene Familie).
3. **ACF-Felder** pro Eintrag:
   - `kurztext` (Textarea) → Kachel-Beschreibung
   - `tag` (Text) → kleines Label auf der Kategorieseite (z. B. „Mit getrenntem Ruheraum")
   - `bild_aussen`, `bild_hero`, `bild_innen` (Bild)
   - `vorraum_verfuegbar` (True/False)
   - ACF-Gruppe `vorraum`: `bild`, `bild_hero`, `kurztext`
4. **Template-Part / Block** `card` – die Kachel-Optik **einmal**.
5. **Query-Loop** je Seite, gefiltert nach `saunafamilie`, rendert die Kacheln serverseitig
   (SEO-freundlich, kein JS nötig).

Damit ist „eine wiederverwendbare Kachel" in WordPress der vorgesehene Standard – und
`models.json` liefert die Feldstruktur und Inhalte dafür 1:1.
