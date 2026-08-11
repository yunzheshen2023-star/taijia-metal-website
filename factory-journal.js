(function () {
  "use strict";

  const photos = [
    {
      src: "factory-site-01.jpg",
      category: "facility",
      layout: "wide",
      enTitle: "Structured Plate Storage",
      zhTitle: "\u677f\u6750\u5206\u533a\u4ed3\u50a8",
      enCopy: "Sheet and plate inventory arranged on racks and pallets for clear identification and efficient order preparation.",
      zhCopy: "\u677f\u6750\u6309\u89c4\u683c\u5206\u533a\u4e0a\u67b6\u3001\u6258\u76d8\u5b58\u653e\uff0c\u4fbf\u4e8e\u8bc6\u522b\u3001\u76d8\u70b9\u4e0e\u8ba2\u5355\u5907\u6599\u3002"
    },
    {
      src: "factory-site-02.jpg",
      category: "process",
      layout: "standard",
      enTitle: "Integrated Processing Line",
      zhTitle: "\u4e00\u4f53\u5316\u52a0\u5de5\u4ea7\u7ebf",
      enCopy: "A coordinated line supports continuous material handling and controlled processing across key production stages.",
      zhCopy: "\u8fde\u7eed\u5316\u4ea7\u7ebf\u8854\u63a5\u4e0a\u6599\u3001\u52a0\u5de5\u4e0e\u8f6c\u8fd0\u73af\u8282\uff0c\u4fbf\u4e8e\u751f\u4ea7\u8fc7\u7a0b\u7684\u7a33\u5b9a\u63a7\u5236\u3002"
    },
    {
      src: "factory-site-03.jpg",
      category: "material",
      layout: "standard",
      enTitle: "Protected Coil Inventory",
      zhTitle: "\u9632\u62a4\u5377\u6750\u5e93\u5b58",
      enCopy: "Coils are protected, labelled and staged by specification to support traceable inventory management.",
      zhCopy: "\u5377\u6750\u6309\u89c4\u683c\u5206\u7c7b\u3001\u6807\u8bc6\u5e76\u91c7\u7528\u8868\u9762\u9632\u62a4\uff0c\u652f\u6301\u5e93\u5b58\u8ffd\u6eaf\u4e0e\u8ba2\u5355\u914d\u6599\u3002"
    },
    {
      src: "factory-site-04.jpg",
      category: "material",
      layout: "tall",
      enTitle: "Coil Logistics Aisle",
      zhTitle: "\u5377\u6750\u7269\u6d41\u901a\u9053",
      enCopy: "Dedicated aisles and organised coil positions help keep internal logistics clear and efficient.",
      zhCopy: "\u72ec\u7acb\u901a\u9053\u4e0e\u6709\u5e8f\u5e93\u4f4d\u5e03\u7f6e\uff0c\u4e3a\u5377\u6750\u8f6c\u8fd0\u4e0e\u5b89\u5168\u4f5c\u4e1a\u63d0\u4f9b\u6e05\u6670\u52a8\u7ebf\u3002"
    },
    {
      src: "factory-site-05.jpg",
      category: "process",
      layout: "standard",
      enTitle: "Precision Coil Processing",
      zhTitle: "\u7cbe\u5bc6\u5377\u6750\u52a0\u5de5",
      enCopy: "Dedicated coil equipment supports controlled feeding, levelling and downstream processing requirements.",
      zhCopy: "\u4e13\u7528\u5377\u6750\u8bbe\u5907\u652f\u6301\u7a33\u5b9a\u4e0a\u6599\u3001\u6821\u5e73\u4e0e\u540e\u7eed\u5b9a\u5236\u52a0\u5de5\u9700\u6c42\u3002"
    },
    {
      src: "factory-site-06.jpg",
      category: "process",
      layout: "standard",
      enTitle: "Production Equipment Cell",
      zhTitle: "\u751f\u4ea7\u8bbe\u5907\u5355\u5143",
      enCopy: "Configured equipment cells provide flexible support for different widths, formats and order requirements.",
      zhCopy: "\u8bbe\u5907\u5355\u5143\u6309\u5de5\u5e8f\u914d\u7f6e\uff0c\u7075\u6d3b\u652f\u6301\u4e0d\u540c\u5bbd\u5ea6\u3001\u5f62\u5f0f\u4e0e\u8ba2\u5355\u9700\u6c42\u3002"
    },
    {
      src: "factory-site-07.jpg",
      category: "facility",
      layout: "wide",
      enTitle: "Integrated Workshop View",
      zhTitle: "\u7efc\u5408\u8f66\u95f4\u5b9e\u666f",
      enCopy: "A broad workshop layout combines processing, storage and logistics zones within one coordinated operation.",
      zhCopy: "\u5bbd\u9614\u8f66\u95f4\u5c06\u52a0\u5de5\u3001\u4ed3\u50a8\u4e0e\u7269\u6d41\u533a\u57df\u534f\u540c\u5e03\u7f6e\uff0c\u5f62\u6210\u5b8c\u6574\u4f5c\u4e1a\u6d41\u7a0b\u3002"
    }
  ];

  const stageItems = [photos[1], photos[2], photos[6]];
  const state = { filter: "all", visible: photos.slice(), activeIndex: 0 };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
  const isZh = () => (document.documentElement.lang || "en").toLowerCase().startsWith("zh");
  const localized = (item, key) => item[(isZh() ? "zh" : "en") + key];

  function updateCountBadge() {
    const badge = $(".journal-photo-count");
    if (!badge) return;
    badge.setAttribute("aria-label", "7 factory photographs");
    const number = $("strong", badge);
    const label = $("span", badge);
    if (number) number.textContent = "7";
    if (label) {
      label.dataset.en = "SELECTED SITE PHOTOS";
      label.dataset.zh = "7 \u5f20\u5de5\u5382\u5b9e\u62cd\u7167\u7247";
      label.textContent = isZh() ? label.dataset.zh : label.dataset.en;
    }
  }

  function categoryLabel(category) {
    const labels = {
      facility: ["FACILITY", "\u8bbe\u65bd\u73af\u5883"],
      process: ["PROCESS", "\u52a0\u5de5\u80fd\u529b"],
      material: ["MATERIAL", "\u6750\u6599\u5e93\u5b58"]
    };
    return labels[category][isZh() ? 1 : 0];
  }

  function cardMarkup(item, originalIndex) {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `journal-card journal-card--${item.layout}`;
    card.dataset.category = item.category;
    card.dataset.index = String(originalIndex);
    card.setAttribute("aria-label", `${localized(item, "Title")}. ${isZh() ? "\u70b9\u51fb\u653e\u5927" : "Open image"}`);
    card.innerHTML = `
      <img src="${item.src}" alt="${localized(item, "Title")}" loading="lazy" decoding="async">
      <span class="journal-card-shade" aria-hidden="true"></span>
      <span class="journal-card-info">
        <span class="journal-card-meta"><span>${categoryLabel(item.category)}</span><span>${String(originalIndex + 1).padStart(2, "0")}</span></span>
        <strong>${localized(item, "Title")}</strong>
        <span class="journal-card-copy">${localized(item, "Copy")}</span>
        <span class="journal-card-action">${isZh() ? "\u67e5\u770b\u5927\u56fe" : "VIEW IMAGE"}<span aria-hidden="true">\u2197</span></span>
      </span>`;
    card.addEventListener("click", () => openLightbox(item));
    return card;
  }

  function renderGallery() {
    const grid = $("#factoryJournalGrid");
    if (!grid) return;
    const items = state.filter === "all" ? photos : photos.filter((item) => item.category === state.filter);
    state.visible = items;
    grid.replaceChildren(...items.map((item) => cardMarkup(item, photos.indexOf(item))));
    updateCountBadge();
    document.dispatchEvent(new CustomEvent("factoryjournal:rendered"));
  }

  function setupFilters() {
    $$(".journal-filter[data-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        state.filter = button.dataset.filter || "all";
        $$(".journal-filter[data-filter]").forEach((item) => {
          const active = item === button;
          item.classList.toggle("is-active", active);
          item.setAttribute("aria-pressed", String(active));
        });
        renderGallery();
      });
    });
  }

  function renderStage(index) {
    const item = stageItems[index] || stageItems[0];
    const image = $("#journalStageImage");
    const number = $("#journalStageIndex");
    const title = $("#journalStageTitle");
    const copy = $("#journalStageCopy");
    if (image) {
      image.src = item.src;
      image.alt = localized(item, "Title");
    }
    if (number) number.textContent = String(index + 1).padStart(2, "0");
    if (title) title.textContent = localized(item, "Title");
    if (copy) copy.textContent = localized(item, "Copy");
    $$(".journal-stage-tab").forEach((tab, tabIndex) => {
      const active = tabIndex === index;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
      const stageTitle = $("strong", tab) || $("span:last-child", tab);
      if (stageTitle) stageTitle.textContent = localized(stageItems[tabIndex] || stageItems[0], "Title");
    });
  }

  function setupStage() {
    $$(".journal-stage-tab").slice(0, 3).forEach((tab, index) => {
      tab.addEventListener("click", () => renderStage(index));
    });
    renderStage(0);
  }

  function lightboxElements() {
    return {
      box: $("#factoryJournalLightbox"),
      image: $("#journalLightboxImage"),
      count: $("#journalLightboxCount"),
      title: $("#journalLightboxTitle"),
      copy: $("#journalLightboxCopy")
    };
  }

  function renderLightbox() {
    const elements = lightboxElements();
    if (!elements.box || !state.visible.length) return;
    const item = state.visible[state.activeIndex];
    if (elements.image) {
      elements.image.src = item.src;
      elements.image.alt = localized(item, "Title");
    }
    if (elements.count) elements.count.textContent = `${String(state.activeIndex + 1).padStart(2, "0")} / ${String(state.visible.length).padStart(2, "0")}`;
    if (elements.title) elements.title.textContent = localized(item, "Title");
    if (elements.copy) elements.copy.textContent = localized(item, "Copy");
  }

  function openLightbox(item) {
    const elements = lightboxElements();
    if (!elements.box) return;
    state.visible = state.filter === "all" ? photos.slice() : photos.filter((photo) => photo.category === state.filter);
    state.activeIndex = Math.max(0, state.visible.indexOf(item));
    renderLightbox();
    elements.box.hidden = false;
    document.body.classList.add("journal-lightbox-open");
    const close = $("[data-journal-close]", elements.box) || $(".journal-lightbox-close", elements.box);
    if (close) close.focus();
  }

  function closeLightbox() {
    const { box } = lightboxElements();
    if (!box || box.hidden) return;
    box.hidden = true;
    document.body.classList.remove("journal-lightbox-open");
  }

  function moveLightbox(direction) {
    if (!state.visible.length) return;
    state.activeIndex = (state.activeIndex + direction + state.visible.length) % state.visible.length;
    renderLightbox();
  }

  function setupLightbox() {
    const { box } = lightboxElements();
    if (!box) return;
    const close = $("[data-journal-close]", box) || $(".journal-lightbox-close", box);
    const previous = $("[data-journal-prev]", box) || $(".journal-lightbox-prev", box);
    const next = $("[data-journal-next]", box) || $(".journal-lightbox-next", box);
    if (close) {
      close.textContent = "\u00d7";
      close.setAttribute("aria-label", isZh() ? "\u5173\u95ed\u5927\u56fe" : "Close image");
      close.addEventListener("click", closeLightbox);
    }
    if (previous) {
      previous.textContent = "\u2190";
      previous.setAttribute("aria-label", isZh() ? "\u4e0a\u4e00\u5f20" : "Previous image");
      previous.addEventListener("click", () => moveLightbox(-1));
    }
    if (next) {
      next.textContent = "\u2192";
      next.setAttribute("aria-label", isZh() ? "\u4e0b\u4e00\u5f20" : "Next image");
      next.addEventListener("click", () => moveLightbox(1));
    }
    box.addEventListener("click", (event) => {
      if (event.target === box || event.target.matches(".journal-lightbox-backdrop, [data-journal-close]")) closeLightbox();
    });
    document.addEventListener("keydown", (event) => {
      if (box.hidden) return;
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") moveLightbox(-1);
      if (event.key === "ArrowRight") moveLightbox(1);
    });
  }

  function refreshLanguage() {
    renderGallery();
    const selectedStage = Math.max(0, $$(".journal-stage-tab").findIndex((tab) => tab.classList.contains("is-active")));
    renderStage(selectedStage);
    const { box } = lightboxElements();
    if (box && !box.hidden) renderLightbox();
  }

  function init() {
    setupFilters();
    setupStage();
    setupLightbox();
    renderGallery();
    new MutationObserver((mutations) => {
      if (mutations.some((mutation) => mutation.attributeName === "lang")) refreshLanguage();
    }).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
