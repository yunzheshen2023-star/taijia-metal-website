(() => {
  const journal = document.querySelector('.factory-journal');
  if (!journal) return;

  const root = document.documentElement;
  const cards = Array.from(journal.querySelectorAll('.journal-card'));
  const filters = Array.from(journal.querySelectorAll('.journal-filter'));
  const stages = Array.from(journal.querySelectorAll('.journal-stage'));
  const stageImage = journal.querySelector('.journal-stage-image');
  const stageTitle = journal.querySelector('.journal-stage-copy-panel h3');
  const stageDescription = journal.querySelector('.journal-stage-copy-panel p');
  const modal = journal.querySelector('.journal-modal');
  const modalImage = journal.querySelector('.journal-modal-image-wrap img');
  const modalTitle = journal.querySelector('.journal-modal-copy h3');
  const modalDescription = journal.querySelector('.journal-modal-copy p');
  const modalCount = journal.querySelector('.journal-modal-count');
  const modalClose = journal.querySelector('.journal-modal-close');
  const modalPrevious = journal.querySelector('.journal-modal-prev');
  const modalNext = journal.querySelector('.journal-modal-next');

  let visibleCards = [...cards];
  let activeCardIndex = 0;
  let activeStage = stages[0];
  let lastTrigger = null;

  const language = () => root.lang && root.lang.toLowerCase().startsWith('zh') ? 'zh' : 'en';
  const localized = (element, suffix) => element.dataset[`${suffix}${language() === 'zh' ? 'Zh' : 'En'}`] || '';

  const updateStage = (stage) => {
    if (!stage) return;
    activeStage = stage;
    stages.forEach((item) => {
      const isActive = item === stage;
      item.classList.toggle('is-active', isActive);
      item.setAttribute('aria-selected', String(isActive));
    });

    const nextSrc = stage.dataset.image;
    if (stageImage && nextSrc && stageImage.getAttribute('src') !== nextSrc) {
      stageImage.style.opacity = '0';
      window.setTimeout(() => {
        stageImage.src = nextSrc;
        stageImage.alt = localized(stage, 'alt');
        stageImage.style.opacity = '1';
      }, 130);
    }
    if (stageTitle) stageTitle.textContent = localized(stage, 'title');
    if (stageDescription) stageDescription.textContent = localized(stage, 'description');
  };

  const applyFilter = (filter) => {
    filters.forEach((button) => {
      const isActive = button.dataset.filter === filter;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
    cards.forEach((card) => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
    visibleCards = cards.filter((card) => !card.hidden);
    activeCardIndex = 0;
  };

  const updateModal = () => {
    const card = visibleCards[activeCardIndex];
    if (!card || !modalImage) return;
    modalImage.src = card.dataset.image;
    modalImage.alt = localized(card, 'alt');
    if (modalTitle) modalTitle.textContent = localized(card, 'title');
    if (modalDescription) modalDescription.textContent = localized(card, 'description');
    if (modalCount) modalCount.textContent = `${String(activeCardIndex + 1).padStart(2, '0')} / ${String(visibleCards.length).padStart(2, '0')}`;
  };

  const openModal = (card) => {
    visibleCards = cards.filter((item) => !item.hidden);
    activeCardIndex = Math.max(0, visibleCards.indexOf(card));
    lastTrigger = card;
    updateModal();
    modal.hidden = false;
    document.body.classList.add('journal-modal-open');
    window.requestAnimationFrame(() => modal.classList.add('is-open'));
    window.setTimeout(() => modalClose?.focus(), 180);
  };

  const closeModal = () => {
    if (modal.hidden) return;
    modal.classList.remove('is-open');
    document.body.classList.remove('journal-modal-open');
    window.setTimeout(() => {
      modal.hidden = true;
      lastTrigger?.focus();
    }, 180);
  };

  const moveModal = (direction) => {
    if (!visibleCards.length) return;
    activeCardIndex = (activeCardIndex + direction + visibleCards.length) % visibleCards.length;
    updateModal();
  };

  stages.forEach((stage) => stage.addEventListener('click', () => updateStage(stage)));
  filters.forEach((filter) => filter.addEventListener('click', () => applyFilter(filter.dataset.filter)));
  cards.forEach((card) => card.addEventListener('click', () => openModal(card)));
  modalClose?.addEventListener('click', closeModal);
  modalPrevious?.addEventListener('click', () => moveModal(-1));
  modalNext?.addEventListener('click', () => moveModal(1));
  modal?.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });

  document.addEventListener('keydown', (event) => {
    if (modal.hidden) return;
    if (event.key === 'Escape') closeModal();
    if (event.key === 'ArrowLeft') moveModal(-1);
    if (event.key === 'ArrowRight') moveModal(1);
  });

  new MutationObserver((changes) => {
    if (changes.some((change) => change.attributeName === 'lang')) {
      updateStage(activeStage);
      if (!modal.hidden) updateModal();
    }
  }).observe(root, { attributes: true, attributeFilter: ['lang'] });

  applyFilter('all');
  updateStage(activeStage);
})();
