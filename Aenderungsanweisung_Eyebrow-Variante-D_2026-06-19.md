# Änderungsanweisung — Sektionsköpfe „Variante D / E2"

**Datum:** 2026-06-19
**Betrifft:** `css/site.css` (zentral) · ggf. kleine Cleanups im HTML
**Ziel:** Sektionsköpfe einheitlich auf **zentrierten Kopf (Eyebrow + Headline)** mit **linksbündigem Haupttext in zentrierter Spalte** umstellen. Eyebrow von Monospace-Versalien auf **kursive Serifen-Vorzeile** (Markenstimme) wechseln.

---

## 1. Eyebrow umstellen (Variante D)

In `css/site.css` den bestehenden Block ersetzen.

**Vorher:**
```css
.eyebrow{font-family:var(--mono);font-size:16px;letter-spacing:.16em;text-transform:uppercase;color:var(--green-deep);margin:0 0 18px;display:flex;align-items:center;gap:12px}
.eyebrow::before{content:"";width:28px;height:1px;background:var(--green);display:inline-block}
```

**Nachher:**
```css
.eyebrow{font-family:var(--display);font-style:italic;font-weight:600;font-size:clamp(18px,2vw,21px);letter-spacing:0;text-transform:none;color:var(--green-deep);margin:0 0 6px;display:block}
.eyebrow::before{content:none}
```

Hinweise:
- Der grüne Strich (`::before`) entfällt bei Variante D.
- `.is-dark .eyebrow{color:var(--green-light)}` bleibt unverändert (Magazin-Sektion).

---

## 2. Kopf zentrieren, Haupttext linksbündig (E2)

Ebenfalls in `css/site.css`.

**Vorher:**
```css
.sec-head{margin-bottom:clamp(32px,5vw,56px)}
.sec-head h2{font-size:clamp(26px,3.2vw,38px);letter-spacing:-.01em;text-wrap:balance}
.sec-head p:not(.eyebrow){margin-top:18px;color:var(--muted);font-size:18px}
```

**Nachher:**
```css
.sec-head{margin-bottom:clamp(32px,5vw,56px);text-align:center}
.sec-head h2{font-size:clamp(26px,3.2vw,38px);letter-spacing:-.01em;text-wrap:balance}
.sec-head p:not(.eyebrow){margin:18px auto 0;color:var(--muted);font-size:18px;text-align:left;max-width:58ch}
```

Wirkung: Eyebrow + Headline mittig, der Fließtext steht linksbündig in einer mittig sitzenden Spalte (~58 Zeichen) — die „E2"-Lösung.

---

## 3. CTA-Band — Doppelung entfernen (optional, sauber)

In `index.html` hat die CTA-Eyebrow noch ein Inline-`justify-content:center`, das durch den neuen `display:block` wirkungslos, aber überflüssig ist.

**Vorher:**
```html
<p class="eyebrow" style="justify-content:center">Der nächste Schritt</p>
```
**Nachher:**
```html
<p class="eyebrow">Der nächste Schritt</p>
```
Das `.cta-band` ist bereits `text-align:center` — passt damit automatisch.

---

## 4. Bewusste Ausnahmen (NICHT zentrieren)

Diese Köpfe stehen **neben einem Bild** und bleiben linksbündig — sie nutzen `.split` bzw. die Modell-Hero-Klassen, **nicht** `.sec-head`, und sind von den Änderungen oben automatisch ausgenommen:

- **Material-Sektion** (`#material`, `.split`) auf der Startseite
- **Modellseiten-Intros** (`.mhero`, `.mintro`)

Die Eyebrow dort wechselt durch Punkt 1 ebenfalls auf die kursive Serife (gewollt, sorgt für eine durchgehende Eyebrow-Stimme), bleibt aber linksbündig. Regel also: **volle Breite → zentriert, bild­begleitet → links.**

> Entscheidung offen: Falls auch diese bildbegleiteten Köpfe zentriert wirken sollen, bitte gesondert anweisen — das ist eine bewusste Abweichung, kein Versehen.

---

## 5. Prüfen nach Umsetzung

- Startseite: alle `.sec-head`-Sektionen (Beratung, Modelle, Warum wir, Aufbau, Ausstellung, Magazin) zeigen zentrierten Kopf + linken Text.
- Hero behält Linksbündigkeit, Eyebrow jetzt kursive Serife.
- Dunkle Magazin-Sektion: Eyebrow weiterhin hellgrün lesbar.
- Mobil (≤760px): Spalte `max-width:58ch` greift, Text bleibt links und lesbar.
- `css/site.css?v=…` Versionsnummer in den `<link>`-Tags hochzählen (Cache).
