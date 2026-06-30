const fs = require('fs');
const dir = __dirname;
const rd = f => fs.readFileSync(dir + '/' + f, 'utf8');
const wr = (f, s) => fs.writeFileSync(dir + '/' + f, s, 'utf8');
const log = [];

// ---- Teaser (Kachel) je Modell ----
const teaser = {
  'premium': 'Sauna und Ruheraum in einem Fass – das Original seit 1999. Saunieren, entspannen, zwischen den Gängen sogar schlafen.',
  'palkkio': 'Ovale Sauna mit seitlichem Vorraum über die volle Tiefe. Zwei Bänke, zwei Wärmebereiche.',
  'kolmikko': 'Großzügiger, heller Oval-Saunaraum. Durchgehende Liege gegenüber zwei Bänken – ideal auch für den Holzofen.',
  'standard': 'Die klassische Fasssauna – das Original. Zu zweit liegen, zu viert bis sechst sitzen. Auch mit Vorraumverlängerung.',
  'xl': '40 cm mehr Breite: besonders breite Liegen (ca. 75 cm) und ein großes Rückwandfenster. Auch mit Vorraumverlängerung.',
  'suuri': 'Die einzige Fasssauna mit Querliege. Zwei Ebenen, zwei Wärmebereiche – liegen wie in einer Oval-Sauna.',
  'standard-vorraum': 'Die klassische Fasssauna plus geschützter Vorraum: umziehen, ablegen, im Warmen Pause machen. Ganzglastür zum Saunaraum.',
  'xl-vorraum': 'Das vollständigste Fassmodell: XL-Breite, breite Liegen, großes Fenster – plus vollwertiger Vorraum.',
  'suuri-vorraum': 'Die Suuri mit Vorraumverlängerung – Querliege und zwei Ebenen plus geschützter Vorraum. Unsere größte Fass-Variante.'
};

// ---- Detailseiten: Hero-Lead, Intro (Überblick), Specs ----
const detail = {
  'fasssauna-standard.html': {
    lead: 'Die FassSauna Standard ist die Sauna fürs Wesentliche: zwei lange Bänke, klare Proportionen, ein Rückzugsort, der sofort vertraut wirkt. Ideal für alle, die zum ersten Mal eine eigene Gartensauna möchten und Wert auf zeitlose Form legen. Zwei Personen strecken sich bequem aus, beim Sitzen finden vier bis sechs Gäste Platz.',
    intro: 'Fassform; liegend 2, sitzend 4–6 Personen; Vorraum optional; klassisches Einstiegsmodell.',
    specs: [
      ['Kapazität', 'liegend 2, sitzend 4–6 Personen'],
      ['Außenmaße', 'ca. 225 × 205 × 215 cm (L × B × H), Ø 205 cm'],
      ['Gewicht', 'ca. 750 kg'],
      ['Liegeflächen', '2 Bänke à ca. 60 × 203 cm'],
      ['Innenausstattung', 'Thermoholz, optional Espe oder Abachi'],
      ['Dach', 'Alu-Runddach oder Satteldach (Anthrazit, Moosgrün, Ziegelrot)'],
      ['Ofen', '9-kW-Elektroofen mit Touch-Steuerung, Holzofen optional'],
      ['Material', '100 % Thermoholz, ca. 45 mm']
    ]
  },
  'fasssauna-standard-vorraum.html': {
    lead: 'Die FassSauna Standard mit Vorraum erweitert das Original um genau den Bereich, der im Alltag den Unterschied macht. Gerade im Herbst und Winter zieht man sich hier in Ruhe um, legt Bademantel und Schuhe ab und verweilt vor und nach dem Saunagang im Warmen. Auch zu mehreren entsteht so mehr Flexibilität – wer früher aufhört, wartet bequem im Vorraum.',
    intro: 'Fassform mit überdachtem Vorraum; Saunaraum liegend 2, sitzend 4–6 Personen; vollwertiger Vorraum.',
    specs: [
      ['Kapazität', 'Saunaraum liegend 2, sitzend 4–6 Personen, plus Vorraum'],
      ['Außenmaße inkl. Vorraum', 'ca. 325 × 205 × 215 cm (L × B × H)'],
      ['Gewicht', 'ca. 950 kg'],
      ['Liegeflächen', '2 Bänke à ca. 60 × 203 cm; Vorraum mit 2 Sitzbänken à ca. 89 cm'],
      ['Innenausstattung', 'Thermoholz, optional Espe oder Abachi'],
      ['Dach', 'Alu-Runddach oder Satteldach (Anthrazit, Moosgrün, Ziegelrot)'],
      ['Ofen', '9-kW-Elektroofen mit Touch-Steuerung, Holzofen optional'],
      ['Besonderheit', 'Ganzglastür zwischen Vorraum und Saunaraum'],
      ['Material', '100 % Thermoholz, ca. 45 mm']
    ]
  },
  'fasssauna-xl.html': {
    lead: 'Die FassSauna XL ist rund 40 Zentimeter breiter als das klassische Modell – und der ganze Gewinn fließt in den Komfort. Aus Sitzen wird Liegen, aus Liegen wird Genießen. Ein großes Fenster in der Rückwand holt Tageslicht herein und lässt den Raum größer wirken, als er ist. Ideal für Paare und kleine Runden, die es beim Saunieren großzügig mögen.',
    intro: 'Fassform, ca. 40 cm breiter (Gesamtbreite 2,45 m); Vorraum optional; komfortbetontes Modell.',
    specs: [
      ['Kapazität', 'ideal für Paare und kleine Runden'],
      ['Außenmaße', 'ca. 225 × 245 × 225 cm (L × B × H)'],
      ['Gewicht', 'ca. 855 kg'],
      ['Liegeflächen', '2 breite Bänke à ca. 75 × 203 cm'],
      ['Innenausstattung', 'helle Espe oder Abachi, optional Thermoholz'],
      ['Dach', 'Alu-Runddach oder Satteldach (Anthrazit, Moosgrün, Ziegelrot)'],
      ['Ofen', '9-kW-Elektroofen mit Touch-Steuerung, Holzofen optional'],
      ['Besonderheit', 'großes Fenster in der Rückwand'],
      ['Material', '100 % Thermoholz, Wandstärke ca. 45 mm']
    ]
  },
  'fasssauna-xl-vorraum.html': {
    lead: 'Die FassSauna XL mit Vorraum vereint großzügigen Innenraum, breite Liegeflächen und einen vollwertigen Vorraum in einem Modell. Wer keinen Kompromiss eingehen möchte – weder beim Komfort noch beim Raum noch beim Bild im Garten – ist hier richtig. Der Vorraum schließt nahtlos an: Platz für Bademantel, Handtuch und Schuhe, für die Pause zwischen zwei Saunagängen, fürs Ankommen und Runterkommen.',
    intro: 'Fassform mit Vorraum; breite Liegen; vollständigstes Fassmodell.',
    specs: [
      ['Kapazität', 'breite Liegen plus vollwertiger Vorraum'],
      ['Außenmaße inkl. Vorraum', 'ca. 325 × 245 × 225 cm (L × B × H)'],
      ['Gewicht', 'ca. 955 kg'],
      ['Liegeflächen', '2 breite Bänke à ca. 75 × 203 cm; Vorraum mit 2 Sitzbänken'],
      ['Innenausstattung', 'helle Espe oder Abachi, optional Thermoholz'],
      ['Dach', 'Alu-Runddach oder Satteldach (Anthrazit, Moosgrün, Ziegelrot)'],
      ['Ofen', '9-kW-Elektroofen mit Touch-Steuerung, Holzofen optional'],
      ['Besonderheit', 'großes Fenster in der Rückwand'],
      ['Material', '100 % Thermoholz, Wandstärke ca. 45 mm']
    ]
  },
  'fasssauna-suuri.html': {
    lead: 'Die FassSauna Suuri ist die besondere unter den Rundmodellen: Als einzige Fasssauna hat sie eine Querliege über die gesamte Breite der Rückwand, wie man sie sonst nur aus den Oval-Saunen kennt. Zwei Ebenen schaffen zwei Wärmebereiche – wärmer oben, milder unten. Wer sich einmal quer zur Saunalänge ausgestreckt hat, kennt diese andere Qualität der Ruhe.',
    intro: 'Fassform mit Querliege auf zwei Ebenen; größere Rund-Variante; Vorraum optional.',
    specs: [
      ['Kapazität', 'zwei Wärmebereiche auf zwei Ebenen'],
      ['Außenmaße', 'ca. 225 × 245 × 225 cm (L × B × H), baugleich zur XL'],
      ['Gewicht', 'ca. 855 kg'],
      ['Liegeflächen', 'Querliege über die volle Breite, darunter U-förmige Bänke; linke untere Liege ca. 203 cm'],
      ['Innenausstattung', 'helles Holz oder Thermofichte'],
      ['Dach', 'Alu-Runddach oder Satteldach (Anthrazit, Moosgrün, Ziegelrot)'],
      ['Ofen', '9-kW-Elektroofen mit Touch-Steuerung, in Seitenbank eingelassen; Holzofen optional'],
      ['Besonderheit', 'einzige Fasssauna mit Querliege'],
      ['Material', '100 % Thermoholz, Wandstärke ca. 45 mm']
    ]
  },
  'fasssauna-suuri-vorraum.html': {
    lead: 'Die FassSauna Suuri mit Vorraum verbindet das Besondere der Suuri mit dem Komfort eines eigenen Vorraums. Im Saunaraum bleibt alles, was die Suuri ausmacht – die Querliege als wärmster Platz, darunter die U-förmige Bankanordnung. Davor ein überdachter Bereich zum Umziehen, Ablegen und Verweilen zwischen den Saunagängen. Gerade bei der größten Variante macht dieser Raum den Komfort vollständig.',
    intro: 'Fassform mit Querliege und Vorraum; größte Fass-Variante.',
    specs: [
      ['Kapazität', 'Querliege und zwei Ebenen plus Vorraum'],
      ['Außenmaße inkl. Vorraum', 'ca. 325 × 245 × 225 cm (L × B × H), baugleich zur XL mit Vorraum'],
      ['Gewicht', 'ca. 955 kg'],
      ['Liegeflächen', 'Querliege über die volle Breite, darunter U-förmige Bänke; linke Liege ca. 203 cm; Vorraum mit 2 Sitzbänken'],
      ['Innenausstattung', 'helles Holz oder Thermofichte'],
      ['Dach', 'Alu-Runddach oder Satteldach (Anthrazit, Moosgrün, Ziegelrot)'],
      ['Ofen', '9-kW-Elektroofen mit Touch-Steuerung, in Seitenbank eingelassen; Holzofen optional'],
      ['Besonderheit', 'größte Fass-Variante mit Querliege'],
      ['Material', '100 % Thermoholz, Wandstärke ca. 45 mm']
    ]
  },
  'oval-sauna-premium.html': {
    lead: 'Die Oval Sauna Premium ist unser außergewöhnlichstes Modell und das Original seit 1999. Saunaraum und Ruheoase liegen in einem einzigen Fass – ein vollständiger privater Rückzugsort, der nicht endet, wenn man die Saunatür schließt. Hinter der Glaswand wartet der Ruhebereich zum Ausruhen, Entspannen und Abschalten. Ein Versprechen, das die Premium seit über 25 Jahren hält.',
    intro: 'Ovalform; Saunaraum plus getrennter Ruheraum in einem Fass; Flaggschiff, Original seit 1999.',
    specs: [
      ['Kapazität', 'Saunaraum plus getrennter Ruheraum'],
      ['Außenmaße inkl. Dach', 'ca. 450 × 280 × 250 cm (B × T × H), Grundfläche ca. 2,8 × 4,5 m'],
      ['Gewicht', 'ca. 1.132 kg'],
      ['Liegeflächen', 'L-Bank auf zwei Ebenen bis ca. 203 cm; Ruheraum mit Liegematratze (ca. 12 cm)'],
      ['Innenausstattung', 'helle Espe oder Abachi; Varianten Exklusiv und Palkkio'],
      ['Dach', 'nur Alu-Runddach (Alu-Prefa), Standard Anthrazit'],
      ['Ofen', '9-kW-Elektroofen mit Steuerung, Holzofen optional'],
      ['Besonderheit', 'getrennter Ruheraum im selben Fass'],
      ['Material', 'ca. 45 mm Thermofichte']
    ]
  },
  'oval-sauna-palkkio.html': {
    lead: 'Die Oval Sauna Palkkio ist für alle, die keinen Kompromiss eingehen möchten – weder beim Saunaraum noch beim Platz davor. Ihr seitlicher Vorraum erstreckt sich über die gesamte Tiefe der Sauna: ein vollwertiger, überdachter Bereich zum Umziehen, Ausruhen und Innehalten, ohne einen Schritt ins Freie zu tun. Im Saunaraum sorgen zwei Bänke auf unterschiedlichen Höhen für zwei Wärmebereiche – Paare saunieren bequem nebeneinander oder strecken sich aus.',
    intro: 'Ovalform mit seitlichem Vorraum über die volle Tiefe; für Paare; zwei Wärmebereiche.',
    specs: [
      ['Kapazität', 'für Paare, zwei Wärmebereiche, seitlicher Vorraum'],
      ['Außenmaße inkl. Dach', 'ca. 280 × 375 × 240 cm (L × B × H)'],
      ['Liegeflächen', 'obere Bank ca. 203 cm (Sitzhöhe ca. 80 cm), untere ca. 197 cm (Sitzhöhe ca. 60 cm), je ca. 70 cm breit'],
      ['Innenausstattung', 'helle Espe oder Abachi, optional Thermoholz'],
      ['Dach', 'nur Alu-Runddach (Anthrazit, Rot, Grün)'],
      ['Ofen', 'Harvia Spirit 9 kW Touch mit 60 kg Steinen (bis 14 m³), Holzofen optional'],
      ['Besonderheit', 'seitlicher Vorraum über die volle Tiefe'],
      ['Material', 'Thermoholz, Wandstärke ca. 45 mm']
    ]
  },
  'oval-sauna-kolmikko.html': {
    lead: 'Die Oval Sauna Kolmikko bietet einen großzügigen, hellen Innenraum mit Fenster nach vorne und viel Freiheit beim gemeinsamen Saunieren. Auf der einen Seite liegt man entspannt auf einer durchgehenden Liege, gegenüber bieten zwei Bänke auf unterschiedlichen Ebenen verschiedene Wärmebereiche. Eine gute Wahl für Paare und kleine Gruppen – und dank des großzügigen Zuschnitts besonders schön mit dem Knistern eines Holzofens.',
    intro: 'Ovalform; durchgehende Liege gegenüber zwei Bänken; für Paare und kleine Gruppen; gut für Holzofen.',
    specs: [
      ['Kapazität', 'für Paare und kleine Gruppen'],
      ['Außenmaße inkl. Dach', 'ca. 280 × 320 × 235 cm (L × B × H)'],
      ['Liegeflächen', 'durchgehende Liege gegenüber zwei Bänken auf unterschiedlichen Ebenen'],
      ['Innenausstattung', 'helle Espe oder Abachi, optional Thermoholz'],
      ['Dach', 'nur Alu-Runddach (Anthrazit, Rot, Grün)'],
      ['Ofen', '9-kW-Elektroofen mit Touch-Steuerung oder Holzofen'],
      ['Besonderheit', 'großzügiger Zuschnitt, ideal für Holzofen'],
      ['Material', 'Thermoholz, ca. 45 mm']
    ]
  }
};

// ---- Detailseiten anwenden ----
for (const [file, d] of Object.entries(detail)) {
  let s = rd(file);
  const before = s;
  // Hero-Lead
  s = s.replace(/(<section class="wrap mintro">\s*<h1>[\s\S]*?<\/h1>\s*<p class="lead">)[\s\S]*?(<\/p>)/, (m, a, b) => a + d.lead + b);
  // Intro unter H2 "Maße & Ausstattung"
  s = s.replace(/(<h2>Maße &amp; Ausstattung<\/h2>\s*<p>)[\s\S]*?(<\/p>)/, (m, a, b) => a + d.intro + b);
  // Specs-Grid
  const rows = d.specs.map(([k, v]) => `      <div class="spec"><div class="k">${k}</div><div class="v">${v}</div></div>`).join('\n');
  s = s.replace(/<div class="specs">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/, `<div class="specs">\n${rows}\n    </div>\n  </div>\n</section>`);
  if (s === before) { log.push('!! KEINE Änderung: ' + file); }
  else { wr(file, s); log.push('OK Detail: ' + file); }
}

// ---- models.json ----
(() => {
  const m = JSON.parse(rd('models.json'));
  const bySlug = Object.fromEntries(m.modelle.map(x => [x.slug, x]));
  bySlug['oval-sauna-premium'].kurztext = teaser['premium'];
  bySlug['oval-sauna-palkkio'].kurztext = teaser['palkkio'];
  bySlug['oval-sauna-kolmikko'].kurztext = teaser['kolmikko'];
  bySlug['fasssauna-standard'].kurztext = teaser['standard'];
  bySlug['fasssauna-xl'].kurztext = teaser['xl'];
  bySlug['fasssauna-suuri'].kurztext = teaser['suuri'];
  const setVorraum = (slug, key) => {
    const v = bySlug[slug].vorraum; if (!v) return;
    v.kurztext_start = teaser[key]; v.kurztext_kategorie = teaser[key];
  };
  setVorraum('fasssauna-standard', 'standard-vorraum');
  setVorraum('fasssauna-xl', 'xl-vorraum');
  setVorraum('fasssauna-suuri', 'suuri-vorraum');
  wr('models.json', JSON.stringify(m, null, 2) + '\n');
  log.push('OK models.json');
})();

// ---- Kacheln: exakte <p>-Ersetzungen je Datei ----
const repl = (file, pairs) => {
  let s = rd(file); let n = 0;
  for (const [oldP, newP] of pairs) {
    if (s.includes(oldP)) { s = s.replace(oldP, newP); n++; }
    else log.push(`!! nicht gefunden in ${file}: ${oldP.slice(0, 40)}…`);
  }
  wr(file, s); log.push(`OK ${file} (${n} Kacheln)`);
};
const P = t => `<p>${t}</p>`;

repl('index.html', [
  [P('Saunaraum plus separater Ruhebereich – unser Flaggschiff.'), P(teaser['premium'])],
  [P('Seitlicher Vorraum – elegante Aufteilung in ovaler Form.'), P(teaser['palkkio'])],
  [P('Liege plus zwei Bänke – ideal für den Holzofen.'), P(teaser['kolmikko'])],
  [P('Klassisch kompakt – die zeitlose Form für jeden Garten.'), P(teaser['standard'])],
  [P('Breite Liegeflächen für entspanntes Liegen zu zweit.'), P(teaser['xl'])],
  [P('Zwei Ebenen, breite Querliege – für das große Schwitzritual.'), P(teaser['suuri'])],
  [P('Die FassSauna Standard mit überdachtem Vorraum.'), P(teaser['standard-vorraum'])],
  [P('Die FassSauna XL mit großzügigem Vorraum.'), P(teaser['xl-vorraum'])],
  [P('Die FassSauna Suuri mit Vorraumverlängerung.'), P(teaser['suuri-vorraum'])]
]);

repl('oval-saunen.html', [
  [P('Saunaraum plus separater Ruhebereich – unser Flaggschiff.'), P(teaser['premium'])],
  [P('Seitlicher Vorraum – elegante Aufteilung in ovaler Form.'), P(teaser['palkkio'])],
  [P('Liege plus zwei Bänke – ideal für den Holzofen.'), P(teaser['kolmikko'])]
]);

repl('fasssaunen.html', [
  [P('Klassisch kompakt – die zeitlose Form für jeden Garten.'), P(teaser['standard'])],
  [P('Breite Liegeflächen für entspanntes Liegen zu zweit.'), P(teaser['xl'])],
  [P('Zwei Ebenen, breite Querliege – für das große Schwitzritual.'), P(teaser['suuri'])]
]);

repl('vorraumvarianten.html', [
  [P('Die kompakte Form plus geschützter Vorraum zum Umkleiden – ideal für kleine Gärten ohne Kompromiss beim Komfort.'), P(teaser['standard-vorraum'])],
  [P('Breite Liegeflächen plus Vorraum – Komfort in voller Breite, mit Raum zum Verweilen vor und nach dem Aufguss.'), P(teaser['xl-vorraum'])],
  [P('Zwei Ebenen plus Vorraum – unsere größte Variante. Text und Maße folgen.'), P(teaser['suuri-vorraum'])]
]);

console.log(log.join('\n'));
