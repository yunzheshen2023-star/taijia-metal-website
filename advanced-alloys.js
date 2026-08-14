(function () {
  'use strict';

  const selectorData = {
    seawater: {
      form: {
        family: 'Duplex / Super Austenitic',
        product: 'Plate / Sheet / Coil',
        grade: '2205 / 2507 / 254 SMO',
        service: 'Chloride-bearing, seawater or marine service'
      },
      en: {
        kicker: 'CHLORIDE & MARINE SERVICE',
        title: 'Corrosion resistance with structural efficiency',
        text: 'A preliminary route for seawater systems, marine equipment and chloride-bearing environments. Final grade selection depends on temperature, chloride level, design code and fabrication route.',
        grades: ['2205', '2507', '254 SMO']
      },
      zh: {
        kicker: '含氯与海洋服役',
        title: '在耐蚀性与结构效率之间取得平衡',
        text: '适用于海水系统、海洋装备及含氯环境的初步材料路径。最终牌号需结合温度、氯离子浓度、设计规范与制造工艺确认。',
        grades: ['2205', '2507', '254 SMO']
      }
    },
    acid: {
      form: {
        family: 'Super Austenitic / Nickel Alloy',
        product: 'Plate / Sheet',
        grade: '904L / 254 SMO / Alloy 825 / C-276',
        service: 'Chemical, acid-bearing or severe corrosion service'
      },
      en: {
        kicker: 'CHEMICAL CORROSION SERVICE',
        title: 'Material routes for severe process media',
        text: 'A preliminary route for chemical, sulfuric-acid-related and other aggressive process environments. Selection must be checked against concentration, temperature, contaminants, welding and equipment design.',
        grades: ['904L', '254 SMO', 'Alloy 825', 'C-276']
      },
      zh: {
        kicker: '化工腐蚀工况',
        title: '面向严苛工艺介质的材料路径',
        text: '适用于化工、硫酸相关及其他强腐蚀介质的初步材料路径。选材须结合浓度、温度、杂质、焊接与设备设计进行确认。',
        grades: ['904L', '254 SMO', 'Alloy 825', 'C-276']
      }
    },
    thermal: {
      form: {
        family: 'Nickel Alloy',
        product: 'Plate / Sheet',
        grade: '800 / 800H / 800HT / 600 / 601 / 625',
        service: 'High-temperature, oxidation or thermal cycling service'
      },
      en: {
        kicker: 'HIGH-TEMPERATURE SERVICE',
        title: 'Alloy routes for heat, oxidation and cycling',
        text: 'A preliminary route for furnace components, high-temperature process equipment and thermal-cycling service. Final selection depends on design temperature, atmosphere, stress and fabrication requirements.',
        grades: ['800H / 800HT', 'Alloy 600', 'Alloy 601', 'Alloy 625']
      },
      zh: {
        kicker: '高温服役',
        title: '面向高温、氧化与热循环的合金路径',
        text: '适用于炉体部件、高温工艺设备及热循环工况的初步材料路径。最终选材取决于设计温度、气氛、应力与制造要求。',
        grades: ['800H / 800HT', 'Alloy 600', 'Alloy 601', 'Alloy 625']
      }
    },
    precision: {
      form: {
        family: 'Precision Alloy',
        product: 'Plate / Sheet / Strip',
        grade: '4J36',
        service: 'Low-expansion or dimensional-stability service'
      },
      en: {
        kicker: 'DIMENSIONAL STABILITY',
        title: 'Low-expansion material for precision systems',
        text: '4J36 is a low-expansion precision-alloy route for instruments and components where dimensional stability matters. Required performance and delivery condition must be confirmed in the technical specification.',
        grades: ['4J36', 'Low expansion', 'Precision strip']
      },
      zh: {
        kicker: '尺寸稳定性',
        title: '面向精密系统的低膨胀材料',
        text: '4J36可作为重视尺寸稳定性的仪器与部件的低膨胀精密合金路径。所需性能与交货状态须在技术规范中确认。',
        grades: ['4J36', '低膨胀', '精密带材']
      }
    }
  };

  const sceneData = {
    chemical: {
      image: 'assets/alloys/chemical-processing.webp',
      form: {
        family: 'Nickel Alloy',
        product: 'Plate / Sheet',
        grade: 'Alloy 825 / C-276 / Alloy 625',
        service: 'Chemical process equipment exposed to corrosive media'
      },
      en: {
          alt: 'Nickel-alloy chemical processing equipment',
        kicker: 'CHEMICAL PROCESS',
        title: 'Corrosion-resistant equipment for aggressive media',
        text: 'Nickel-alloy plate is considered for heat exchangers, reactor shells and process piping where temperature and corrosive media interact. Final selection remains project-specific.',
        grades: ['Alloy 825', 'C-276', 'Alloy 625']
      },
      zh: {
          alt: '镍基合金化工设备应用',
        kicker: '化工流程',
        title: '严苛介质中的耐蚀设备',
        text: '在温度与腐蚀介质共同作用的工况中，镍基合金板材可用于换热器、反应器壳体与工艺管道。最终选材仍须按项目工况确认。',
        grades: ['Alloy 825', 'C-276', 'Alloy 625']
      }
    },
    thermal: {
      image: 'assets/alloys/high-temperature-service.webp',
      form: {
        family: 'Nickel Alloy',
        product: 'Plate / Sheet',
        grade: 'Alloy 600 / Alloy 601 / 800H / 800HT',
        service: 'High-temperature, oxidation or thermal cycling service'
      },
      en: {
          alt: 'Nickel-alloy high-temperature equipment',
        kicker: 'HIGH-TEMPERATURE SYSTEMS',
        title: 'Alloys for heat, oxidation and thermal cycling',
        text: 'Nickel alloys may be considered for furnace internals, radiant components and thermal-processing equipment where oxidation resistance and strength retention matter.',
        grades: ['Alloy 600', 'Alloy 601', '800H / 800HT']
      },
      zh: {
          alt: '镍基合金高温设备应用',
        kicker: '高温系统',
        title: '面向高温、氧化与热循环的合金方案',
        text: '在重视抗氧化能力与高温强度保持的工况中，镍基合金可用于炉内构件、辐射部件与热处理设备。',
        grades: ['Alloy 600', 'Alloy 601', '800H / 800HT']
      }
    },
    marine: {
      image: 'assets/alloys/marine-heat-exchange.webp',
      form: {
        family: 'Nickel Alloy',
        product: 'Plate / Sheet',
        grade: 'Monel 400 / Alloy 625 / Alloy 825',
        service: 'Seawater, marine or heat-exchange service'
      },
      en: {
          alt: 'Nickel-alloy marine heat-exchange systems',
        kicker: 'MARINE & HEAT EXCHANGE',
        title: 'Material routes for seawater and heat exchange',
        text: 'For seawater, offshore and heat-exchange service, candidate nickel alloys are screened against chloride level, temperature, velocity, fouling and fabrication requirements.',
        grades: ['Monel 400', 'Alloy 625', 'Alloy 825']
      },
      zh: {
          alt: '镍基合金海洋换热系统应用',
        kicker: '海洋与换热',
        title: '面向海水与换热系统的材料路线',
        text: '面向海水、海工与换热工况，候选镍基合金需结合氯离子浓度、温度、流速、结垢与制造要求进行筛选。',
        grades: ['Monel 400', 'Alloy 625', 'Alloy 825']
      }
    }
  };

  const familyScenario = {
    duplex: 'seawater',
    austenitic: 'acid',
    nickel: 'thermal',
    precision: 'precision'
  };

  function currentLanguage() {
    return document.documentElement.lang.toLowerCase().startsWith('zh') ? 'zh' : 'en';
  }

  function replaceChips(container, values) {
    if (!container) return;
    container.replaceChildren();
    values.forEach(function (value) {
      const chip = document.createElement('span');
      chip.textContent = value;
      container.appendChild(chip);
    });
  }

  function setFormValue(form, name, value) {
    const field = form && form.elements.namedItem(name);
    if (!field) return;
    field.value = value;
    field.dispatchEvent(new Event('input', { bubbles: true }));
    field.dispatchEvent(new Event('change', { bubbles: true }));
  }

  function prefillRfq(formData) {
    const form = document.getElementById('contactForm');
    if (!form) return;

    setFormValue(form, 'material_family', formData.family);
    setFormValue(form, 'product_form', formData.product);
    setFormValue(form, 'grade_spec', formData.grade);
    setFormValue(form, 'service_conditions', formData.service);

    const message = form.elements.namedItem('message');
    if (message && !message.value.trim()) {
      message.value = currentLanguage() === 'zh'
        ? '请根据上述工况协助确认可供牌号、标准版本、尺寸范围、交货状态、文件要求与预计数量。'
        : 'Please confirm available grades, standard edition, dimensional range, delivery condition, document requirements and estimated quantity for the selected service.';
      message.dispatchEvent(new Event('input', { bubbles: true }));
    }

    const contact = document.getElementById('contact');
    if (contact) contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.setTimeout(function () {
      const firstField = form.querySelector('input, select, textarea');
      if (firstField) firstField.focus({ preventScroll: true });
    }, 650);
  }

  function setupTabs(tabs, activate) {
    tabs.forEach(function (tab, index) {
      tab.addEventListener('click', function () { activate(tab); });
      tab.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          activate(tab);
          return;
        }
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        let nextIndex = index;
        if (event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
        if (event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
        if (event.key === 'Home') nextIndex = 0;
        if (event.key === 'End') nextIndex = tabs.length - 1;
        tabs[nextIndex].focus();
        activate(tabs[nextIndex]);
      });
    });
  }

  function init() {
    const section = document.getElementById('advanced-alloys');
    if (!section) return;

    const selectorTabs = Array.from(section.querySelectorAll('.alloy-scenario-tab'));
    const familyCards = Array.from(section.querySelectorAll('.alloy-family-card[data-family]'));
    const selectorPanel = section.querySelector('.alloy-recommendation');
    const selectorKicker = document.getElementById('alloyRecKicker');
    const selectorTitle = document.getElementById('alloyRecTitle');
    const selectorText = document.getElementById('alloyRecText');
    const selectorGrades = document.getElementById('alloyRecGrades');
    const selectorRfq = document.getElementById('alloyRfq');

    const sceneTabs = Array.from(section.querySelectorAll('[data-alloy-scene]'));
    const sceneStage = document.getElementById('alloySceneStage');
    const sceneImage = document.getElementById('alloySceneImage');
    const sceneKicker = document.getElementById('alloySceneKicker');
    const sceneTitle = document.getElementById('alloySceneTitle');
    const sceneText = document.getElementById('alloySceneText');
    const sceneGrades = document.getElementById('alloySceneGrades');
    const sceneRfq = document.getElementById('alloySceneRfq');

    let activeScenario = (selectorTabs.find(function (tab) { return tab.classList.contains('active'); }) || selectorTabs[0])?.dataset.scenario || 'seawater';
    let activeScene = (sceneTabs.find(function (tab) { return tab.classList.contains('active'); }) || sceneTabs[0])?.dataset.alloyScene || 'chemical';

    function renderSelector(animate) {
      const data = selectorData[activeScenario];
      if (!data) return;
      const copy = data[currentLanguage()];
      if (animate && selectorPanel) selectorPanel.classList.add('is-changing');
      window.setTimeout(function () {
        if (selectorKicker) selectorKicker.textContent = copy.kicker;
        if (selectorTitle) selectorTitle.textContent = copy.title;
        if (selectorText) selectorText.textContent = copy.text;
        replaceChips(selectorGrades, copy.grades);
        if (selectorPanel) selectorPanel.classList.remove('is-changing');
      }, animate ? 130 : 0);

      selectorTabs.forEach(function (tab) {
        const selected = tab.dataset.scenario === activeScenario;
        tab.classList.toggle('active', selected);
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
      });

      const activeFamily = Object.keys(familyScenario).find(function (family) {
        return familyScenario[family] === activeScenario;
      });
      familyCards.forEach(function (card) {
        const selected = card.dataset.family === activeFamily;
        card.classList.toggle('active', selected);
        card.setAttribute('aria-pressed', String(selected));
      });
    }

    function activateSelector(tab, animate) {
      if (!tab || !selectorData[tab.dataset.scenario]) return;
      activeScenario = tab.dataset.scenario;
      renderSelector(animate !== false);
    }

    function renderScene(animate) {
      const data = sceneData[activeScene];
      if (!data) return;
      const copy = data[currentLanguage()];
      if (animate && sceneStage) sceneStage.classList.add('is-changing');
      window.setTimeout(function () {
        if (sceneImage) {
          sceneImage.src = data.image;
          sceneImage.alt = copy.alt;
        }
        if (sceneKicker) sceneKicker.textContent = copy.kicker;
        if (sceneTitle) sceneTitle.textContent = copy.title;
        if (sceneText) sceneText.textContent = copy.text;
        replaceChips(sceneGrades, copy.grades);
        if (sceneStage) sceneStage.classList.remove('is-changing');
      }, animate ? 130 : 0);

      sceneTabs.forEach(function (tab) {
        const selected = tab.dataset.alloyScene === activeScene;
        tab.classList.toggle('active', selected);
        tab.setAttribute('aria-selected', String(selected));
        tab.tabIndex = selected ? 0 : -1;
      });
    }

    function activateScene(tab, animate) {
      if (!tab || !sceneData[tab.dataset.alloyScene]) return;
      activeScene = tab.dataset.alloyScene;
      renderScene(animate !== false);
    }

    setupTabs(selectorTabs, function (tab) { activateSelector(tab, true); });
    setupTabs(sceneTabs, function (tab) { activateScene(tab, true); });

    familyCards.forEach(function (card) {
      function activateFamily() {
        const scenario = familyScenario[card.dataset.family];
        const tab = selectorTabs.find(function (item) { return item.dataset.scenario === scenario; });
        if (tab) {
          activateSelector(tab, true);
          selectorPanel?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
      card.addEventListener('click', activateFamily);
      card.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          activateFamily();
        }
      });
    });

    if (selectorRfq) {
      selectorRfq.addEventListener('click', function (event) {
        event.preventDefault();
        prefillRfq(selectorData[activeScenario].form);
      });
    }

    if (sceneRfq) {
      sceneRfq.addEventListener('click', function (event) {
        event.preventDefault();
        prefillRfq(sceneData[activeScene].form);
      });
    }

    function refreshLanguage() {
      renderSelector(false);
      renderScene(false);
    }

    const languageObserver = new MutationObserver(function (mutations) {
      if (mutations.some(function (mutation) { return mutation.attributeName === 'lang'; })) refreshLanguage();
    });
    languageObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    window.addEventListener('languagechange', refreshLanguage);

    renderSelector(false);
    renderScene(false);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }
})();
