/* Fasssauna.de — Navigation: Mobile-Panel + Mega-Akkordeon */
(function () {
  var header = document.querySelector('.nav');
  if (!header) return;
  var toggle = header.querySelector('.nav-toggle');
  var mq = window.matchMedia('(max-width:760px)');

  // Hamburger öffnet/schließt das Mobile-Panel
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Mega-Menü als Akkordeon (nur Mobile): Klick auf "Saunamodelle" klappt auf
  header.querySelectorAll('.has-mega > .nav-top').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      if (!mq.matches) return;            // Desktop: per Hover/Focus via CSS
      e.preventDefault();
      btn.parentElement.classList.toggle('open');
    });
  });

  // Beim Wechsel auf Desktop alles zurücksetzen
  mq.addEventListener('change', function (e) {
    if (!e.matches) {
      header.classList.remove('nav-open');
      header.querySelectorAll('.has-mega.open').forEach(function (li) { li.classList.remove('open'); });
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

/* Saisonale Komponenten: data-season="winter" (Okt–März) | "sommer" (Apr–Sep, Fallback).
   Winter-Elemente starten im HTML mit hidden → ohne JS bleibt Sommer sichtbar (Fallback). */
(function () {
  var winterMonths = [10, 11, 12, 1, 2, 3];
  var m = new Date().getMonth() + 1;                 // 1–12
  var isWinter = winterMonths.indexOf(m) !== -1;
  document.querySelectorAll('[data-season]').forEach(function (el) {
    var s = el.getAttribute('data-season');
    el.hidden = isWinter ? (s !== 'winter') : (s !== 'sommer');
  });
})();

/* Lightbox: Elemente mit [data-lb], gruppiert über [data-lb-group].
   Das href des Auslösers ist zugleich Bild-Quelle + No-JS-Fallback. */
(function () {
  var items = Array.prototype.slice.call(document.querySelectorAll('[data-lb]'));
  if (!items.length) return;
  var overlay, imgEl, capEl, prevBtn, nextBtn, group = [], current = 0;

  function build() {
    overlay = document.createElement('div');
    overlay.className = 'lb-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.innerHTML =
      '<button class="lb-close" type="button" aria-label="Schließen">×</button>' +
      '<button class="lb-nav lb-prev" type="button" aria-label="Vorheriges Bild">‹</button>' +
      '<figure class="lb-stage"><img class="lb-img" alt=""><figcaption class="lb-cap"></figcaption></figure>' +
      '<button class="lb-nav lb-next" type="button" aria-label="Nächstes Bild">›</button>';
    document.body.appendChild(overlay);
    imgEl = overlay.querySelector('.lb-img');
    capEl = overlay.querySelector('.lb-cap');
    prevBtn = overlay.querySelector('.lb-prev');
    nextBtn = overlay.querySelector('.lb-next');
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
    overlay.querySelector('.lb-close').addEventListener('click', close);
    prevBtn.addEventListener('click', function (e) { e.stopPropagation(); step(-1); });
    nextBtn.addEventListener('click', function (e) { e.stopPropagation(); step(1); });
    document.addEventListener('keydown', function (e) {
      if (!overlay.classList.contains('is-open')) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'ArrowRight') step(1);
    });
  }
  function show(i) {
    current = (i + group.length) % group.length;
    var el = group[current];
    imgEl.src = el.getAttribute('href');
    var cap = el.getAttribute('data-caption') || '';
    imgEl.alt = cap;
    capEl.textContent = cap;
    var multi = group.length > 1;
    prevBtn.hidden = !multi;
    nextBtn.hidden = !multi;
  }
  function step(d) { show(current + d); }
  function open(el) {
    var name = el.getAttribute('data-lb-group') || 'default';
    group = items.filter(function (it) { return (it.getAttribute('data-lb-group') || 'default') === name; });
    if (!overlay) build();
    show(group.indexOf(el));
    overlay.classList.add('is-open');
    document.documentElement.style.overflow = 'hidden';
  }
  function close() {
    overlay.classList.remove('is-open');
    document.documentElement.style.overflow = '';
  }
  items.forEach(function (el) {
    el.addEventListener('click', function (e) { e.preventDefault(); open(el); });
  });
})();

/* Coverflow: [data-coverflow] mit .cf-slide-Bildern. Großes Mittelbild, kleinere
   Nachbarn, Endlosschleife. Ohne JS bleibt die schlichte 3er-Reihe als Fallback. */
(function () {
  document.querySelectorAll('[data-coverflow]').forEach(function (cf) {
    var slides = Array.prototype.slice.call(cf.querySelectorAll('.cf-slide'));
    if (slides.length < 2) return;
    var prevBtn = cf.querySelector('.cf-prev');
    var nextBtn = cf.querySelector('.cf-next');
    var dotsWrap = cf.querySelector('.cf-dots');
    var n = slides.length, current = 0, dots = [];

    if (dotsWrap) {
      slides.forEach(function (_, i) {
        var b = document.createElement('button');
        b.type = 'button';
        b.setAttribute('aria-label', 'Bild ' + (i + 1));
        b.addEventListener('click', function () { go(i); });
        dotsWrap.appendChild(b);
        dots.push(b);
      });
    }

    function render() {
      slides.forEach(function (s, i) {
        var rel = (i - current + n) % n;
        s.classList.remove('is-active', 'is-prev', 'is-next');
        if (rel === 0) s.classList.add('is-active');
        else if (rel === 1) s.classList.add('is-next');
        else if (rel === n - 1) s.classList.add('is-prev');
      });
      dots.forEach(function (d, i) { d.classList.toggle('is-active', i === current); });
    }
    function go(i) { current = (i + n) % n; render(); }
    function step(d) { go(current + d); }

    if (prevBtn) prevBtn.addEventListener('click', function () { step(-1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { step(1); });
    slides.forEach(function (s, i) {
      s.addEventListener('click', function () {
        var rel = (i - current + n) % n;
        if (rel === 1) step(1);            // rechtes Nachbarbild -> nach vorne
        else if (rel === n - 1) step(-1);  // linkes Nachbarbild -> nach vorne
      });
    });

    cf.classList.add('is-on');
    render();
  });
})();
