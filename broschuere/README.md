# Produktbroschüre Fasssauna.de

Eigenständiges, druckbares Broschüren-Projekt der Meisel & Gerken GmbH.
Unabhängig von der Website (kein Bezug zu `site.css`). Jede Seite ist eine
druckbare A4-Datei (Hochformat).

## Aufbau

```
broschuere/
├── index.html          Interne Übersicht / Launcher (wird nicht gedruckt)
├── vorbereitung.html   Seite 01 · Vorbereitungen am Bauplatz
├── vorlage.html        Blanko-Vorlage für neue Seiten
├── css/
│   └── broschuere.css  Gemeinsame Druckstile + Marken-Tokens + Schrift
└── bilder/             Bilder der Broschüre (4:3, ca. 1000 × 750 px)
```

## Neue Seite anlegen

1. `vorlage.html` kopieren und sinnvoll benennen (z. B. `lieferung.html`).
2. Titel, Kopf-Kennung (`doc-tag`), Headline, Texte und Bilder einsetzen.
3. Bilder nach `bilder/` legen, im 4:3-Format, damit sie randfüllend passen.
4. Seite in `index.html` in die Liste eintragen.

## Marke

- Dunkel `#1C1D2C`, Holz `#ae926c`, Serifen-Display **EB Garamond**.
- Alle Stile liegen zentral in `css/broschuere.css`. Nichts inline stylen.

## Drucken / PDF

- Im Browser über Drucken → Ziel „Als PDF speichern".
- Papierformat A4, Ränder „Keine", Hintergrundgrafiken aktivieren
  (sonst fehlen Holz-Linie und Bildrahmen).

## Schrift offline

Die Schrift EB Garamond wird aktuell von Google Fonts geladen (Internet nötig).
Für garantiert identischen Druck ohne Internet kann die Schrift lokal
eingebettet werden (Font-Dateien in `css/` ablegen und `@import` in
`broschuere.css` durch `@font-face` ersetzen).
