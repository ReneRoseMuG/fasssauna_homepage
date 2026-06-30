# Konzept Fasssauna.de — Ist-Zustand des ersten Gerüsts

**Stand:** 14.06.2026
**Basis:** Handover „Open Design – Erstes Gerüst Fasssauna.de" (14.06.2026)
**Zweck dieses Dokuments:** Abgleich des ursprünglichen Konzepts mit dem tatsächlich gebauten Gerüst (Soll → Ist).

---

## 0. Kurzfassung

Aus dem Handover ist ein responsives Startseiten-Gerüst entstanden – **nicht** als Shop, sondern als Präsentations-/Showroom-Seite. Es liegen **drei Design-Richtungen** vor; die aktuelle Arbeitsfassung ist **`fasssauna-v3-2.html`** (helle Variante, Weiß dominant). Logo und Markenfarben wurden aus der **alten Seite** extrahiert. Erste echte Bilder sind eingebunden; Hero, Modellbilder und ein Trennstreifen sind noch Platzhalter.

---

## 1. Markenwelt (Ist)

Aus der alten `fasssauna.de` extrahiert und in `brand-spec.md` dokumentiert:

| Token | Wert | Rolle |
|---|---|---|
| Dunkel | `#1C1D2C` | Basis-Markenfarbe |
| Logo-Grün | `#4f9e45` | Akzent / primärer CTA (aus dem grünen Wimpel-Logo) |
| Grün dunkel | `#246e1b` | Hover/aktiv |
| Braunton | `#ae926c` | Warmes Thermoholz (Flächen) |
| Holz mittel/tief | `#997a50` · `#8c6a3b` · `#745c3a` | Abstufungen |
| Gold | `#f8bf00` | sehr sparsamer Zweitakzent |

- **Logo wird real verwendet** (`assets/old-logo2.png`, grüner Wimpel „FASSSAUNA") – in Navigation und Footer.
- Typografie: Serif-Display (Magazin-Charakter) + klare Sans für Fließtext.

> Hinweis: Das im Projekt hinterlegte fremde Design-System (NVIDIA/Cisco) wird bewusst **ignoriert** – es passt nicht zum Holz-Sauna-Showroom.

---

## 2. Design-Richtungen (Ist)

| Datei | Richtung |
|---|---|
| `index.html` | V1 – edel-dunkel, warme Holztöne |
| `index-v2.html` / `fasssauna-v2.html` | V2 – dunkel + Braunton + Logo-Grün |
| `fasssauna-v3.html` | V3 – hell, Weiß dominant |
| **`fasssauna-v3-2.html`** | **Aktuelle Arbeitsfassung** (V3 hell, mit echten Bildern) |

Empfehlung: eine Richtung als Basis festlegen, dann nur diese weiter ausbauen.

---

## 3. Startseite – Sektionen (Soll → Ist)

| # | Sektion (Konzept) | Status im Gerüst |
|---|---|---|
| 1 | Hero mit Slider + CTA „Beratungstermin" | ✅ angelegt (3 Slides) – **Bilder noch Platzhalter** |
| 2 | Sauna Modelle (9 Karten, 2 Familien, „mit Vorraum") | ✅ Struktur komplett – **Modellbilder Platzhalter** |
| 3 | Warum wir? (4 USPs) | ✅ fertig |
| 4 | Aufbau-Service (Beratung → Produktion → Montage) | ✅ fertig (Bildstrecke Platzhalter) |
| 5 | Material & Produktion (Teaser) | ✅ fertig – **Bild eingebunden** (Thermoholz) |
| 6 | Ausstellung & Messen | ✅ Struktur – Messetermine Platzhalter |
| 7 | Blog / Magazin (Teaser) | ✅ Rahmen angelegt |
| 8 | Footer | ✅ fertig (Logo, Beratungstermin-CTA) |

Sektionsgrenzen sind kommentiert, sodass sich **Vorraum-** und **Zubehör-Block** später dazwischen einschieben lassen.

---

## 4. Panorama-Trennstreifen (Soll → Ist)

Mit dezentem Parallax (Desktop), fix auf Mobile, `prefers-reduced-motion` respektiert. Aufhellung nur am unteren Rand für die Lesbarkeit der Bildunterschrift.

| Streifen (vor Block) | Status in `fasssauna-v3-2.html` |
|---|---|
| Sauna im Schnee (vor Modelle) | ✅ `mqdwni1n-fasssauna-xl-winterpanorama.jpg` |
| Werkstatt (vor Warum wir?) | ⬜ **noch Platzhalter** |
| Lieferung & Montage (vor Aufbau) | ✅ `mqdwqi9c-meisel-gerken-saunalieferung.jpg` |
| Herkunft / Nadelwald (vor Material) | ✅ `mqdwyzgt-holzernte-im-wald.jpg` |

---

## 5. Beratungstermin (Ist)

- Eigene Unterseite **`beratungstermin.html`** mit eingebettetem Widget-Bereich (**Platzhalter-iframe** – Nextcloud-Appointment-URL wird nachgeliefert).
- Alle CTA-Buttons (Hero, Sektionen, Footer) verlinken durchgängig auf diese Unterseite.

---

## 6. Bildmaterial (Ist)

Eingebunden: XL-Winterpanorama, Lieferfahrzeug, Holzernte im Wald, Thermoholz-Stapel, Logo.
Noch offen: Hero-Slider (3), 9 Modellbilder, Werkstatt-Streifen, Aufbau-Bildstrecke, Ausstellungsbild.

---

## 7. Offene Punkte (nachzuliefern)

- [ ] **Nextcloud-Appointment-URL** für das Beratungstermin-Widget.
- [ ] **Design-Richtung final festlegen** (V1 / V2 / V3).
- [ ] **Werkstatt-Bild** für den fehlenden Trennstreifen.
- [ ] **Hero-Bilder** (3) und **9 Modellbilder** aus dem Bildbestand.
- [ ] Kontaktdaten (Telefon, E-Mail, Anfahrt, Social) + Messetermine.
- [ ] Finale Texte/Maße der Modelle (Einzelseiten, spätere Welle).

---

## 8. Nicht im Scope (spätere Wellen)

Einzel-Modellseiten, Themenseite „Material & Produktion" in voller Tiefe, redaktionelles Magazin, dynamische Messetermine, Vorraum-/Zubehör-Block, SEO-Redirects der alten JTL-URLs.

---

*Dieses Dokument spiegelt den Ist-Zustand des Gerüsts in Open Design wider. Grundlage: Handover 14.06.2026 + Bild-/Marken-Stand 14.06.2026.*
