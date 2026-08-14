(function () {
  'use strict';

  var destinations = [
    { id: 'product-center', en: 'Products', zh: '\u4ea7\u54c1' },
    { id: 'technical', en: 'Engineering', zh: '\u5de5\u827a' },
    { id: 'factory-journal', en: 'Factory', zh: '\u5de5\u5382' },
    { id: 'quality', en: 'Quality', zh: '\u8d28\u91cf' },
    { id: 'contact', en: 'Contact', zh: '\u8054\u7cfb' }
  ];

  function language() {
    return (document.documentElement.lang || 'en').toLowerCase().indexOf('zh') === 0 ? 'zh' : 'en';
  }

  function buildRail() {
    if (document.querySelector('.experience-rail')) return;

    var progress = document.createElement('div');
    progress.className = 'experience-progress';
    progress.setAttribute('aria-hidden', 'true');
    document.body.appendChild(progress);

    var nav = document.createElement('nav');
    nav.className = 'experience-rail';
    nav.setAttribute('aria-label', 'Quick section navigation');

    destinations.forEach(function (item) {
      if (!document.getElementById(item.id)) return;
      var link = document.createElement('a');
      link.className = 'experience-rail__link';
      link.href = '#' + item.id;
      link.dataset.target = item.id;
      link.dataset.en = item.en;
      link.dataset.zh = item.zh;
      link.dataset.label = language() === 'zh' ? item.zh : item.en;
      link.setAttribute('aria-label', link.dataset.label);
      link.innerHTML = '<span class="experience-rail__dot" aria-hidden="true"></span>';
      link.addEventListener('click', function (event) {
        var target = document.getElementById(item.id);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
        history.replaceState(null, '', '#' + item.id);
      });
      nav.appendChild(link);
    });

    document.body.appendChild(nav);
    updateLabels();
    observeSections();
    updateProgress();
  }

  function updateLabels() {
    var lang = language();
    document.querySelectorAll('.experience-rail__link').forEach(function (link) {
      var label = lang === 'zh' ? link.dataset.zh : link.dataset.en;
      link.dataset.label = label;
      link.setAttribute('aria-label', label);
    });
  }

  function observeSections() {
    if (!('IntersectionObserver' in window)) return;
    var links = Array.prototype.slice.call(document.querySelectorAll('.experience-rail__link'));
    var observer = new IntersectionObserver(function (entries) {
      var visible = entries.filter(function (entry) { return entry.isIntersecting; })
        .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; });
      if (!visible.length) return;
      var id = visible[0].target.id;
      links.forEach(function (link) {
        var active = link.dataset.target === id;
        link.classList.toggle('is-active', active);
        if (active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-28% 0px -55% 0px', threshold: [0, 0.08, 0.2, 0.45] });

    destinations.forEach(function (item) {
      var target = document.getElementById(item.id);
      if (target) observer.observe(target);
    });
  }

  function updateProgress() {
    var scrollable = document.documentElement.scrollHeight - window.innerHeight;
    var percent = scrollable > 0 ? Math.min(100, Math.max(0, window.scrollY / scrollable * 100)) : 0;
    document.documentElement.style.setProperty('--experience-progress', percent.toFixed(2) + '%');
  }

  function addSpotlight(scope) {
    var root = scope || document;
    var selector = '.product-card, .material-card, .capability-card, .quality-card, .application-card, .export-card, .buyer-card, .process-card, .technical-card';
    root.querySelectorAll(selector).forEach(function (card) {
      if (card.dataset.spotlightReady) return;
      card.dataset.spotlightReady = 'true';
      card.addEventListener('pointermove', function (event) {
        var rect = card.getBoundingClientRect();
        card.style.setProperty('--spot-x', (event.clientX - rect.left) + 'px');
        card.style.setProperty('--spot-y', (event.clientY - rect.top) + 'px');
      });
    });
  }

  function revealOnView() {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var items = document.querySelectorAll('.journal-card, .product-card, .material-card, .capability-card, .quality-card, .application-card, .process-card');
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.animate([
          { opacity: 0, transform: 'translateY(22px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ], { duration: 620, easing: 'cubic-bezier(.2,.75,.25,1)', fill: 'both' });
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -7% 0px' });
    items.forEach(function (item) { observer.observe(item); });
  }

  function init() {
    buildRail();
    addSpotlight(document);
    revealOnView();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress, { passive: true });

    new MutationObserver(updateLabels).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    document.addEventListener('factoryjournal:rendered', function () {
      addSpotlight(document.getElementById('factory-journal') || document);
      revealOnView();
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
