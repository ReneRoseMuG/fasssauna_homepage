# Handover – Open Design: Erstes Gerüst Fasssauna.de

**Datum:** 14.06.2026
**Von:** Rene (Meisel & Gerken GmbH) / Claude (Konzept)
**An:** Open Design / Claude Code (Umsetzung erstes Gerüst)
**Auftrag:** Baue ein erstes **Layout-Gerüst** (Scaffold) der neuen Startseite Fasssauna.de.
**Status der Inhalte:** Platzhalter erlaubt – es geht in diesem Schritt um Struktur, Sektionen und Look, nicht um finale Texte/Bilder.

---

## 1. Worum es geht (Kontext in 30 Sekunden)

Fasssauna.de wird **keine Shop-Seite**, sondern eine **Präsentationsseite / digitaler Showroom** für hochwertige, in eigener Schreinerei gefertigte und selbst aufgebaute Saunen. Alle Wettbewerber sind shop-dominiert (Warenkorb, Filter, Preisvergleich) – wir gehen bewusst den Gegenweg: kuratierte Präsentation, Handwerk, persönliche Beratung. **Das Ziel jeder Seite ist der Beratungstermin**, nicht der Kauf-Button.

Die Seite soll sich eher wie ein **Magazin / Showroom** anfühlen als wie ein Katalog.

## 2. Technische Eckdaten

- **Plattform:** WordPress (komplette Domain, **kein Shop-System**).
- **Kein** Warenkorb, keine Preisangaben, keine Filter-/Varianten-Logik.
- Pflege später per MCP/Claude.
- Markenfarbe (dunkel): `#1C1D2C` + warme Thermoholz-Töne.
- Responsive (Desktop + Mobile), Performance im Blick (große Panoramabilder, siehe §5).

## 3. Aufbau der Startseite (Sektionen, von oben nach unten)

1. **Hero mit Slider** – großes Bild/Slider mit den schönsten Modellen in Szene. Klare Headline (z. B. „Hochwertige Saunen – made in Germany, aufgebaut von uns"). Primärer CTA **„Beratungstermin"**.
2. **Sauna Modelle** – die 9 Modelle als Karten, gruppiert nach Familie (FassSauna / Oval Sauna), Hinweis „mit Vorraum". *Herzstück der Seite.*
3. **Warum wir?** – kompakter Vertrauens-Block (Icons/Kacheln) mit den USPs: eigene Schreinerei seit 1999, Thermoholz aus Finnland, eigene Aufbau-Teams, persönliche Beratung statt anonymer Online-Kauf. Das Fragezeichen ist gewollt (Einladung statt Behauptung).
4. **Aufbau Service** – Ablauf Beratung → Produktion → Montage, auch an unwegsamen Orten. Bildstrecke.
5. **Material & Produktion** – Teaser auf die spätere Themenseite (Thermoholz, eigene Fertigung, regionale Partner).
6. **Ausstellung & Messen** – Einladung in die 450 m²-Ausstellung + nächste Messetermine (später dynamisch).
7. **Blog / Magazin** – Teaser-Bereich, Gerüst jetzt, Inhalte später.
8. **Footer** – Kontakt, Beratungstermin, rechtliche Seiten, Social.

> **Offen / später einschiebbar:** Eigener **Vorraum**-Block und ein dezenter **Zubehör**-Teaser (Link zu meisel-gerken.de) sind bewusst noch nicht platziert. Bitte das Layout so bauen, dass sich zwischen den Sektionen problemlos ein zusätzlicher Block einschieben lässt.

## 4. Beratungstermin (zentraler CTA – wichtig)

Es existiert bereits eine **Termin-vereinbaren-Funktion über den Nextcloud-Kalender (Appointments)**, über die Besucher freie Termine wählen und buchen können.

**Einbindung im Gerüst:**

- **Eigene Unterseite „Beratungstermin"**, die das Nextcloud-Appointment-Widget einbettet (per Link bzw. iframe).
- **Alle CTA-Buttons** (Hero, Ende jeder Sektion wo sinnvoll, Footer) verlinken auf diese Unterseite.
- Der Beratungstermin ist der **primäre Handlungsaufruf** der gesamten Seite – im Gerüst bitte als durchgängig wiederkehrendes Element anlegen.
- **Platzhalter:** Die genaue Einbettungs-URL des Nextcloud-Appointment-Links wird nachgeliefert – im Gerüst zunächst Platzhalter-Link/iframe setzen.

## 5. Panorama-Trennstreifen zwischen den Sektionen (Design-Element)

Zwischen den Bereichen laufen **schmale, über die volle Seitenbreite gehende Panoramabilder** – entweder **fix** oder mit **dezentem Parallax-Effekt**. Sie geben der Seite Rhythmus und erzählen nebenbei die Geschichte. Sie sollen thematisch zum **folgenden** Block überleiten:

| Trennstreifen (Bild) | Position (vor Block) | Erzählt |
|---|---|---|
| Sauna im Schnee | vor „Sauna Modelle" | Emotion, Produkterlebnis |
| Werkstattbild | vor „Warum wir?" | Manufaktur, Handwerk |
| Truck mit Anhänger | vor „Aufbau Service" | Lieferung & eigene Montage |
| Nadelwald | vor „Material & Produktion" | Thermoholz aus Finnland, Herkunft |

**Technische Vorgaben für die Streifen:**

- Parallax **dezent** halten (leichter Versatz, nicht extrem) – Premium-Wirkung statt verspielt.
- Auf **Mobile** Parallax auf **„fix"** reduzieren (Performance, Ruckeln vermeiden).
- `prefers-reduced-motion` respektieren (Effekt für entsprechende Nutzer aus).
- Bilder breit genug für große Monitore, aber komprimiert ausliefern (Ladezeit).

## 6. Bildmaterial

Es liegen bereits **520 Bilder** der alten Seite lokal vor (Ordner `Fasssauna.de\Fasssauna-Bilder\`). Daraus können Platzhalter für Hero, Modellkarten und ggf. Panoramastreifen gezogen werden. Falls passende Querformate für die Panoramastreifen fehlen, im Gerüst Platzhalter-Flächen vorsehen.

## 7. Die 9 Saunamodelle (für die Modellkarten)

| Modell | Familie | Besonderheit |
|---|---|---|
| FassSauna Standard | FassSauna | Klassisch kompakt |
| FassSauna Standard mit Vorraum | FassSauna | Kompakt + Vorraum |
| FassSauna XL | FassSauna | Breite Liegeflächen |
| FassSauna XL mit Vorraum | FassSauna | Breite Liegen + Vorraum |
| FassSauna Suuri | FassSauna | Zwei Ebenen, breite Querliege |
| FassSauna Suuri mit Vorraum *(neu)* | FassSauna | Zwei Ebenen + Vorraum (Text/Maße folgen) |
| Oval Sauna Premium | Oval Sauna | Saunaraum + Ruhebereich (Flaggschiff) |
| Oval Sauna Palkkio | Oval Sauna | Seitlicher Vorraum |
| Oval Sauna Kolmikko | Oval Sauna | Liege + 2 Bänke, ideal für Holzofen |

Detaillierte Maße/Texte liegen im Konzept-Dokument (`Konzept_Fasssauna.de_2026-06-13.md`) bzw. PROJ-4 und werden bei den Modellseiten nachgeliefert. Für das Gerüst reichen Modellkarten mit Name, Bild und kurzem Platzhaltertext.

## 8. Scope dieses Schritts (Gerüst v1)

**Im Scope:**

- Startseite mit allen 8 Sektionen (§3), als responsives Layout.
- Panorama-Trennstreifen (§5) als Layout-Element (Platzhalterbilder ok).
- Unterseite „Beratungstermin" mit eingebettetem Widget (Platzhalter-iframe) + durchgängige CTA-Verlinkung (§4).
- Modell-Übersicht mit 9 Karten (Platzhalterinhalte).
- Grobe Designrichtung: dunkle Markenfarbe `#1C1D2C` + warme Holztöne.

**Nicht im Scope (spätere Wellen):**

- Ausgearbeitete Einzel-Modellseiten, finale Texte/Maße.
- Themenseite „Material & Produktion" in voller Tiefe.
- Redaktionelles Magazin, dynamische Messetermine.
- Vorraum-Block und Zubehör-Teaser (später einschiebbar, §3).
- SEO-Redirects der alten JTL-URLs.

## 9. Offene Punkte (vom Auftraggeber nachzuliefern)

- Genaue Einbettungs-URL/iframe des Nextcloud-Appointment-Widgets.
- Feinwahl der Designrichtung (naturnah-holzig · skandinavisch-clean · edel-dunkel · kraftvoll-emotional).
- Finale Panorama-Bilder (oder Auswahl aus dem 520er-Bildbestand).

---

*Diese Handover dient als Briefing für das erste Gerüst in Open Design. Grundlage: Konzept_Fasssauna.de_2026-06-13.md + Sessions 13./14.06.2026.*
