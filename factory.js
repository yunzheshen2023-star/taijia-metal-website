(() => {
  const factoryCards = [...document.querySelectorAll('.factory-card')];
  const materialCards = [...document.querySelectorAll('.advisor-orbit[data-factory-src]')];
  const galleries = [factoryCards, materialCards].filter((gallery) => gallery.length);
  const box = document.getElementById('factoryLightbox');
  if (!galleries.length || !box) return;

  const image = document.getElementById('factoryLightboxImage');
  const caption = document.getElementById('factoryLightboxCaption');
  const closeButton = box.querySelector('.factory-lightbox-close');
  const previous = box.querySelector('.factory-lightbox-nav.prev');
  const next = box.querySelector('.factory-lightbox-nav.next');
  let cards = galleries[0];
  let current = 0;
  let lastTrigger = null;
  let touchStartX = 0;

  const currentLanguage = () => document.documentElement.lang.startsWith('zh') ? 'zh' : 'en';

  function render() {
    const card = cards[current];
    const language = currentLanguage();
    image.src = card.dataset.factorySrc;
    image.alt = card.querySelector('img').alt;
    image.classList.toggle('is-flipped-x', card.dataset.imageFlip === 'horizontal');
    caption.textContent = card.dataset[`caption${language[0].toUpperCase()}${language.slice(1)}`];
  }

  function open(gallery, index) {
    cards = gallery;
    current = (index + cards.length) % cards.length;
    lastTrigger = cards[current];
    render();
    box.classList.add('open');
    box.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeButton.focus({ preventScroll: true });
  }

  function close() {
    box.classList.remove('open');
    box.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    lastTrigger?.focus({ preventScroll: true });
  }

  function change(step) {
    current = (current + step + cards.length) % cards.length;
    render();
  }

  galleries.forEach((gallery) => {
    gallery.forEach((card, index) => {
      card.addEventListener('click', () => open(gallery, index));
      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          open(gallery, index);
        }
      });
    });
  });

  closeButton.addEventListener('click', close);
  previous.addEventListener('click', () => change(-1));
  next.addEventListener('click', () => change(1));
  box.addEventListener('click', (event) => { if (event.target === box) close(); });
  document.addEventListener('keydown', (event) => {
    if (!box.classList.contains('open')) return;
    if (event.key === 'Escape') close();
    if (event.key === 'ArrowLeft') change(-1);
    if (event.key === 'ArrowRight') change(1);
  });
  box.addEventListener('touchstart', (event) => { touchStartX = event.changedTouches[0].clientX; }, { passive: true });
  box.addEventListener('touchend', (event) => {
    const distance = event.changedTouches[0].clientX - touchStartX;
    if (Math.abs(distance) > 45) change(distance > 0 ? -1 : 1);
  }, { passive: true });
  document.addEventListener('languagechange', () => {
    if (box.classList.contains('open')) render();
  });
})();
