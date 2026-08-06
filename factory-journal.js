(() => {
  const journal = document.querySelector('.factory-journal');
  if (!journal) return;

  const items = [
    ['facility', 'Workshop overview', '车间全景', 'A clear view of the production and material-handling floor.', '生产与物料周转区域的现场全景。'],
    ['material', 'Stainless steel coil inventory', '不锈钢卷材库存', 'Organized stainless steel coils prepared for processing and dispatch.', '分类存放的不锈钢卷材，便于加工与发运。'],
    ['process', 'Slitting and leveling area', '分条与开平区域', 'Processing equipment supports width conversion and flat-sheet preparation.', '加工设备用于宽度分切与平板备料。'],
    ['facility', 'Material handling aisle', '物料搬运通道', 'Marked traffic lanes support orderly workshop logistics.', '清晰划分的通道保障车间物流有序运行。'],
    ['material', 'Protected coil stock', '带保护膜卷材', 'Surface-protected coils are staged according to order requirements.', '带表面保护的卷材按订单要求分类暂存。'],
    ['process', 'Coil processing line', '卷材加工线', 'A coordinated line for feeding, processing and controlled transfer.', '用于上料、加工与受控转运的连续生产线。'],
    ['facility', 'Production floor', '生产车间', 'Real workshop conditions with equipment, storage and lifting systems.', '设备、仓储及吊运系统组成的真实生产现场。'],
    ['material', 'Sheet and plate storage', '板材与板料存储', 'Sheet and plate products are protected and stacked for handling.', '板材与板料经过保护后分层堆放，便于周转。'],
    ['facility', 'Factory work area', '工厂作业区域', 'A practical view of the operating area and material flow.', '作业区域与物料流转的现场记录。'],
    ['facility', 'Factory work area', '工厂作业区域', 'Another angle documenting the same workshop workflow.', '从另一角度记录同一区域的现场作业。'],
    ['process', 'Coil lifting operation', '卷材吊运作业', 'Overhead lifting equipment supports controlled coil movement.', '桥式起重设备用于卷材的受控吊运。'],
    ['process', 'Forklift handling', '叉车搬运', 'Forklift operations connect storage, processing and outbound staging.', '叉车作业衔接仓储、加工与待发区域。'],
    ['material', 'Finished coil staging', '成品卷材待运区', 'Processed coils are staged for inspection, packing or dispatch.', '加工后的卷材进入检验、包装或待发区域。'],
    ['process', 'Equipment operation', '设备作业', 'Operators coordinate material positioning around processing equipment.', '操作人员围绕加工设备进行物料定位与协同。'],
    ['facility', 'Wide workshop view', '车间广角实景', 'A wide-angle view presents the scale and organized layout of the site.', '广角画面展示生产现场的规模与区域布局。'],
    ['material', 'Coil inventory rows', '卷材库存区', 'Multiple coil specifications are arranged for efficient order matching.', '不同规格卷材有序陈列，便于快速匹配订单。'],
    ['process', 'Processing equipment', '加工设备', 'Heavy-duty equipment supports stable stainless steel service operations.', '重型设备为不锈钢加工服务提供稳定支持。'],
    ['material', 'Surface-protected material', '表面保护材料', 'Protective films help preserve finish quality during handling.', '保护膜有助于在加工与搬运过程中保持表面质量。'],
    ['facility', 'Workshop exterior', '工厂外景', 'The exterior view documents the operating site and workshop entrance.', '工厂外景记录生产基地与车间入口。'],
    ['process', 'Material transfer', '物料转运', 'Dedicated handling equipment supports safe internal material movement.', '专用搬运设备用于厂内物料转运。'],
    ['material', 'Stainless steel stock', '不锈钢现货', 'Coils in multiple widths and surface conditions are held on site.', '现场储备多种宽度与表面状态的卷材。'],
    ['process', 'Slitting line detail', '分条线细节', 'A closer view of the line used for precision width preparation.', '近距离展示用于精确宽度备料的分条设备。'],
    ['material', 'Finished material area', '成品材料区', 'Finished and semi-finished materials are separated for traceable handling.', '成品与半成品分区管理，便于追踪和周转。'],
    ['facility', 'Production base interior', '生产基地内部', 'Production, storage and lifting zones operate within one organized facility.', '生产、仓储与吊运区域在同一基地内协同运行。'],
    ['process', 'Coil preparation', '卷材上机准备', 'Coils are positioned and prepared before entering the processing line.', '卷材在进入加工线前完成定位与准备。'],
    ['process', 'Controlled operation', '规范作业', 'Operators manage material movement around guarded equipment zones.', '操作人员在设备防护区域内进行规范物料作业。'],
    ['facility', 'Workshop overview', '车间实景', 'A full-site view of equipment, inventory and workshop circulation.', '设备、库存与车间动线的整体实景。'],
    ['facility', 'Workshop overview', '车间实景', 'A second full-site view retained as part of the complete photo record.', '作为完整现场记录保留的第二张全景照片。'],
    ['process', 'Coil processing', '卷材加工', 'Production equipment supports coil feeding and downstream preparation.', '生产设备用于卷材上料及后续加工准备。'],
    ['process', 'Team operation', '协同作业', 'Team members coordinate lifting and material positioning tasks.', '现场人员协同完成吊运与物料定位。'],
    ['facility', 'Equipment zone', '设备区域', 'The equipment zone shows the integrated processing layout.', '设备区域展示加工产线的集成布局。'],
    ['facility', 'Factory exterior', '工厂外景', 'An exterior record of the workshop building and access area.', '车间建筑与出入口区域的外部实拍。'],
    ['facility', 'Storage and production area', '仓储与生产区域', 'Storage and production areas are connected for efficient workflow.', '仓储区与生产区相互衔接，提升内部流转效率。'],
    ['material', 'Coil storage', '卷材存储', 'Stainless steel coils are arranged by size and processing status.', '不锈钢卷材按规格与加工状态分类存放。'],
    ['process', 'Process equipment', '加工设备', 'A detailed view of equipment used in stainless steel service operations.', '不锈钢加工服务设备的现场细节。']
  ].map((entry, index) => ({
    id: index + 1,
    category: entry[0],
    titleEn: entry[1],
    titleZh: entry[2],
    copyEn: entry[3],
    copyZh: entry[4],
    source: `factory-site-${String(index + 1).padStart(2, '0')}.jpg`
  }));

  const grid = journal.querySelector('#factoryJournalGrid, .journal-grid');
  const filters = [...journal.querySelectorAll('.journal-filter')];
  const stageTabs = [...journal.querySelectorAll('.journal-stage-tab')];
  const stageImage = journal.querySelector('#journalStageImage');
  const stageTitle = journal.querySelector('#journalStageTitle');
  const stageCopy = journal.querySelector('#journalStageCopy');
  const lightbox = document.querySelector('.journal-lightbox');
  const lightboxImage = document.querySelector('#journalLightboxImage');
  const lightboxTitle = document.querySelector('#journalLightboxTitle');
  const lightboxCopy = document.querySelector('#journalLightboxCopy');
  const lightboxCount = document.querySelector('#journalLightboxCount');
  const closeButtons = [...document.querySelectorAll('[data-journal-close]')];
  const closeButton = closeButtons.find((element) => element.matches('button'));
  const previousButton = document.querySelector('[data-journal-prev]');
  const nextButton = document.querySelector('[data-journal-next]');
  const countBadge = journal.querySelector('.journal-photo-count strong');

  let activeFilter = 'all';
  let visibleItems = [...items];
  let activeIndex = 0;
  let lastTrigger = null;

  const isChinese = () => document.documentElement.lang.toLowerCase().startsWith('zh');
  const localized = (item, field) => item[`${field}${isChinese() ? 'Zh' : 'En'}`];
  const categoryLabel = category => {
    const labels = {
      facility: ['Facility', '厂区'],
      material: ['Material', '材料'],
      process: ['Processing', '加工']
    };
    const value = labels[category] || labels.facility;
    return value[isChinese() ? 1 : 0];
  };

  function buildCard(item) {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'journal-card';
    card.dataset.journalCategory = item.category;
    card.dataset.source = item.source;
    card.dataset.itemId = String(item.id);
    card.setAttribute('aria-label', `${localized(item, 'title')} — ${item.id} / ${items.length}`);

    const visual = document.createElement('span');
    visual.className = 'journal-card-media';
    const image = document.createElement('img');
    image.src = item.source;
    image.alt = localized(item, 'title');
    image.loading = item.id <= 6 ? 'eager' : 'lazy';
    image.decoding = 'async';
    visual.appendChild(image);

    const index = document.createElement('span');
    index.className = 'journal-card-index';
    index.textContent = String(item.id).padStart(2, '0');
    visual.appendChild(index);

    const info = document.createElement('span');
    info.className = 'journal-card-info';
    const meta = document.createElement('small');
    meta.textContent = categoryLabel(item.category);
    const title = document.createElement('strong');
    title.textContent = localized(item, 'title');
    const copy = document.createElement('span');
    copy.textContent = localized(item, 'copy');
    info.append(meta, title, copy);
    card.append(visual, info);

    card.addEventListener('click', () => openLightbox(item, card));
    return card;
  }

  function renderGrid() {
    if (!grid) return;
    visibleItems = activeFilter === 'all'
      ? [...items]
      : items.filter(item => item.category === activeFilter);
    grid.replaceChildren(...visibleItems.map(buildCard));
    if (countBadge) countBadge.textContent = String(items.length);
  }

  function setFilter(filter) {
    activeFilter = filter;
    filters.forEach(button => {
      const isActive = button.dataset.filter === filter;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
    });
    renderGrid();
  }

  function updateStage(tab) {
    if (!tab || !stageImage || !stageTitle || !stageCopy) return;
    stageTabs.forEach(button => {
      const isActive = button === tab;
      button.classList.toggle('is-active', isActive);
      button.setAttribute('aria-selected', String(isActive));
    });
    stageImage.classList.add('is-changing');
    window.setTimeout(() => {
      stageImage.src = tab.dataset.source || tab.dataset.image || stageImage.src;
      stageImage.alt = isChinese() ? tab.dataset.titleZh : tab.dataset.titleEn;
      stageTitle.textContent = isChinese() ? tab.dataset.titleZh : tab.dataset.titleEn;
      stageCopy.textContent = isChinese() ? tab.dataset.copyZh : tab.dataset.copyEn;
      stageImage.classList.remove('is-changing');
    }, 140);
  }

  function updateLightbox() {
    if (!lightbox || !visibleItems.length) return;
    const item = visibleItems[activeIndex];
    lightboxImage.src = item.source;
    lightboxImage.alt = localized(item, 'title');
    lightboxTitle.textContent = localized(item, 'title');
    lightboxCopy.textContent = localized(item, 'copy');
    lightboxCount.textContent = `${String(activeIndex + 1).padStart(2, '0')} / ${String(visibleItems.length).padStart(2, '0')}`;
  }

  function openLightbox(item, trigger) {
    if (!lightbox) return;
    activeIndex = Math.max(0, visibleItems.findIndex(entry => entry.id === item.id));
    lastTrigger = trigger;
    updateLightbox();
    lightbox.hidden = false;
    document.body.classList.add('journal-lightbox-open');
    requestAnimationFrame(() => lightbox.classList.add('is-open'));
    closeButton?.focus({ preventScroll: true });
  }

  function closeLightbox() {
    if (!lightbox || lightbox.hidden) return;
    lightbox.classList.remove('is-open');
    document.body.classList.remove('journal-lightbox-open');
    window.setTimeout(() => {
      lightbox.hidden = true;
      lastTrigger?.focus({ preventScroll: true });
    }, 180);
  }

  function moveLightbox(direction) {
    if (!visibleItems.length) return;
    activeIndex = (activeIndex + direction + visibleItems.length) % visibleItems.length;
    updateLightbox();
  }

  filters.forEach(button => button.addEventListener('click', () => setFilter(button.dataset.filter || 'all')));
  stageTabs.forEach(tab => tab.addEventListener('click', () => updateStage(tab)));
  closeButtons.forEach((element) => element.addEventListener('click', closeLightbox));
  previousButton?.addEventListener('click', () => moveLightbox(-1));
  nextButton?.addEventListener('click', () => moveLightbox(1));
  lightbox?.addEventListener('click', event => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', event => {
    if (!lightbox || lightbox.hidden) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') moveLightbox(-1);
    if (event.key === 'ArrowRight') moveLightbox(1);
  });

  const languageObserver = new MutationObserver(() => {
    renderGrid();
    const activeStage = stageTabs.find(tab => tab.classList.contains('is-active')) || stageTabs[0];
    if (activeStage && stageTitle && stageCopy) {
      stageTitle.textContent = isChinese() ? activeStage.dataset.titleZh : activeStage.dataset.titleEn;
      stageCopy.textContent = isChinese() ? activeStage.dataset.copyZh : activeStage.dataset.copyEn;
      stageImage.alt = isChinese() ? activeStage.dataset.titleZh : activeStage.dataset.titleEn;
    }
    if (lightbox && !lightbox.hidden) updateLightbox();
  });
  languageObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  setFilter('all');
  if (stageTabs.length) updateStage(stageTabs.find(tab => tab.classList.contains('is-active')) || stageTabs[0]);
})();
