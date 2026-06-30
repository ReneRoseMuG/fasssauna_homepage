# Saison-Panorama – automatisch datumsgesteuert

Das große Panorama unter dem Hero wird **automatisch** nach Datum umgeschaltet – kein manueller Tausch nötig.

## Regel
- **Winterhalbjahr (Oktober–März):** Winterpanorama
- **Sommerhalbjahr (April–September):** Sommerpanorama
- **Fallback (z. B. JavaScript deaktiviert):** Sommerpanorama

## Wie es funktioniert
Beide Varianten stehen im `index.html`. Steuerung über das Attribut `data-season`:
```html
<div class="panorama" data-parallax data-season="sommer" …> … Sommer … </div>
<div class="panorama" data-parallax data-season="winter" … hidden> … Winter … </div>
```
- Das **Winter**-Element startet mit `hidden` → ohne JS bleibt Sommer sichtbar (Fallback).
- `js/site.js` prüft beim Laden den Monat (Uhr des Besuchers) und zeigt die passende Variante.
- Wintermonate sind in `js/site.js` als `winterMonths = [10,11,12,1,2,3]` definiert – dort bei Bedarf anpassen.

## Wiederverwendbar
`data-season="winter"` / `data-season="sommer"` funktioniert an **jedem** Element (z. B. saisonale Banner, Aktionen), nicht nur am Panorama.

## Bilder & Slogans
- Sommer: `assets/bilder/startseite/Panorama-Streifen/sommer-panorama.jpg` · „Ihr Spa – ganzjährig vor der Tür."
- Winter: `assets/bilder/startseite/Panorama-Streifen/fasssauna-xl-winterpanorama.jpg` · „Wärme, die man im Winter am meisten spürt."
- Slogan-Alternativen: „Saunieren ohne Fahrtkosten." · „Urlaubsgefühl beginnt im eigenen Garten."
