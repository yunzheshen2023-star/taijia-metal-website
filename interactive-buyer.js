(() => {
  "use strict";

  const routes = {
    kitchen: {
      index: "01",
      tab: "304",
      en: {
        tag: "KITCHEN & FOOD EQUIPMENT",
        title: "Surface quality, forming performance and cleanability",
        body: "A practical starting point for sinks, cookware, worktops, cabinets and food-contact equipment. Final selection depends on forming depth, finish, welding, corrosion exposure and customer specification.",
        grade: "304 / 304L / 430 (application-dependent)",
        form: "Coil · sheet · strip",
        finish: "2B · BA/2R · No.4 · HL",
        process: "Slitting · cut-to-length · surface finishing · protective film",
        docs: "Mill Test Certificate · EN 10204 3.1 when specified · packing list",
        note: "Preliminary guidance only. Confirm the final grade, finish and tolerances against the drawing, forming route and service environment.",
        rfq: "Build a kitchenware RFQ",
        material: "Review material grades"
      },
      zh: {
        tag: "厨具与食品设备",
        title: "兼顾表面品质、成形性能与易清洁性",
        body: "适用于水槽、锅具、工作台、橱柜及食品设备的初步选材入口。最终牌号需结合拉伸深度、表面要求、焊接方式、腐蚀环境及客户标准确认。",
        grade: "304 / 304L / 430（按应用确认）",
        form: "卷材 · 板材 · 带材",
        finish: "2B · BA/2R · No.4 · HL",
        process: "分条 · 开平 · 表面加工 · 贴膜",
        docs: "材质证明 · 指定时提供 EN 10204 3.1 · 装箱单",
        note: "此处仅作初步选材参考，最终牌号、表面和公差需按图纸、成形工艺与使用环境确认。",
        rfq: "生成厨具项目询价",
        material: "查看材料牌号"
      }
    },
    automotive: {
      index: "02",
      tab: "409L",
      en: {
        tag: "AUTOMOTIVE COMPONENTS",
        title: "Stable strip supply for heat, forming and corrosion demands",
        body: "Candidate materials for exhaust parts, brackets, housings and formed components. Grade and delivery condition must be matched to operating temperature, corrosion exposure, welding route and component geometry.",
        grade: "409L / 304 (component-dependent)",
        form: "Strip · coil · sheet",
        finish: "2B / 2D or project-specified finish",
        process: "Precision slitting · width control · cut-to-length · protected packing",
        docs: "Mill Test Certificate · dimensional report when agreed · packing record",
        note: "Material selection is component-specific. Share the drawing, target standard, operating temperature and corrosion conditions for confirmation.",
        rfq: "Build an automotive RFQ",
        material: "Review material grades"
      },
      zh: {
        tag: "汽车零部件",
        title: "面向耐热、成形与耐腐蚀要求的稳定带材供应",
        body: "适用于排气部件、支架、壳体及冲压成形件的候选材料。牌号与交付状态需结合工作温度、腐蚀环境、焊接工艺和零件结构确认。",
        grade: "409L / 304（按零件确认）",
        form: "带材 · 卷材 · 板材",
        finish: "2B / 2D 或项目指定表面",
        process: "精密分条 · 宽度控制 · 开平 · 防护包装",
        docs: "材质证明 · 约定时提供尺寸报告 · 包装记录",
        note: "汽车材料需按零件确认，请提供图纸、目标标准、工作温度和腐蚀条件。",
        rfq: "生成汽车项目询价",
        material: "查看材料牌号"
      }
    },
    industrial: {
      index: "03",
      tab: "316",
      en: {
        tag: "INDUSTRIAL & COASTAL",
        title: "Corrosion-aware material selection with traceable documentation",
        body: "For tanks, process equipment, chemical service and coastal environments. 316/316L is often considered where chloride exposure is relevant, while 304 may suit general service after an engineering review.",
        grade: "316 / 316L · 304 / 304L after review",
        form: "Plate · sheet · coil",
        finish: "No.1 · 2B · No.4 as specified",
        process: "Cut-to-length · cutting · grinding · protective film",
        docs: "Mill Test Certificate · inspection records · heat/lot traceability when agreed",
        note: "Corrosion performance depends on concentration, temperature, fabrication and maintenance. Final selection requires the project environment and governing standard.",
        rfq: "Build an industrial RFQ",
        material: "Review material grades"
      },
      zh: {
        tag: "工业与沿海环境",
        title: "重视腐蚀环境判断与材料文件追溯",
        body: "适用于储罐、流程设备、化工及沿海环境。存在氯化物暴露时通常会评估 316/316L；一般工况可在工程确认后考虑 304 系列。",
        grade: "316 / 316L · 评估后可选 304 / 304L",
        form: "中厚板 · 薄板 · 卷材",
        finish: "No.1 · 2B · No.4（按要求）",
        process: "开平 · 切割 · 磨砂 · 贴膜",
        docs: "材质证明 · 检验记录 · 约定时提供炉批追溯",
        note: "耐腐蚀表现受浓度、温度、加工和维护影响，最终选材需结合项目环境与执行标准。",
        rfq: "生成工业项目询价",
        material: "查看材料牌号"
      }
    },
    elevator: {
      index: "04",
      tab: "430",
      en: {
        tag: "ELEVATOR & ARCHITECTURE",
        title: "Controlled decorative finish for visible metal surfaces",
        body: "A starting point for elevator interiors, doors, trims and architectural panels. Visual consistency requires an agreed finish sample, grain direction, protective film and handling specification.",
        grade: "304 / 430 (environment and design-dependent)",
        form: "Sheet · coil",
        finish: "No.4 · HL · BA/2R",
        process: "Cut-to-length · grinding · finish matching · protective film",
        docs: "Approved finish sample · Mill Test Certificate · inspection and packing record",
        note: "Decorative acceptance is project-specific. Approve a physical finish sample and define grain direction, film type and viewing criteria before production.",
        rfq: "Build an elevator RFQ",
        material: "Review material grades"
      },
      zh: {
        tag: "电梯与建筑装饰",
        title: "为可视金属表面控制装饰效果一致性",
        body: "适用于电梯轿厢、门板、装饰条和建筑面板。视觉一致性需要提前确认表面样板、纹路方向、保护膜和搬运要求。",
        grade: "304 / 430（按环境与设计确认）",
        form: "板材 · 卷材",
        finish: "No.4 · HL · BA/2R",
        process: "开平 · 磨砂 · 表面匹配 · 贴膜",
        docs: "确认样板 · 材质证明 · 检验与包装记录",
        note: "装饰面验收具有项目属性，生产前应确认实物样板、纹路方向、膜型及观察标准。",
        rfq: "生成电梯项目询价",
        material: "查看材料牌号"
      }
    }
  };

  const routeVisuals = {
    kitchen: { src: "commercial-kitchen.webp", en: "Commercial kitchen and food equipment", zh: "\u5546\u7528\u53a8\u623f\u4e0e\u98df\u54c1\u8bbe\u5907" },
    automotive: { src: "automotive-manufacturing.webp", en: "Automotive component manufacturing", zh: "\u6c7d\u8f66\u96f6\u90e8\u4ef6\u5236\u9020" },
    industrial: { src: "industrial-equipment.webp", en: "Industrial and coastal equipment", zh: "\u5de5\u4e1a\u4e0e\u6cbf\u6d77\u8bbe\u5907" },
    elevator: { src: "elevator-interior.webp", en: "Elevator and architectural interiors", zh: "\u7535\u68af\u4e0e\u5efa\u7b51\u88c5\u9970" }
  };

  const buttons = Array.from(document.querySelectorAll(".route-choice[data-route]"));
  const result = document.querySelector(".route-result");
  if (!buttons.length || !result) return;

  const routeImage = document.getElementById("routeImage");
  const routeVisualCaption = document.getElementById("routeVisualCaption");

  const fields = {
    tag: document.getElementById("routeTag"),
    title: document.getElementById("routeTitle"),
    body: document.getElementById("routeBody"),
    grade: document.getElementById("routeGrade"),
    form: document.getElementById("routeForm"),
    finish: document.getElementById("routeFinish"),
    process: document.getElementById("routeProcess"),
    docs: document.getElementById("routeDocs"),
    note: document.getElementById("routeNote"),
    index: document.querySelector(".route-index")
  };
  const rfqButton = document.getElementById("routeRfqBtn");
  const materialButton = document.getElementById("routeMaterialBtn");
  let active = "kitchen";
  let switchTimer;

  const language = () =>
    document.documentElement.lang.toLowerCase().startsWith("zh") ? "zh" : "en";

  const activeData = () => routes[active][language()];

  function render() {
    const data = activeData();
    const visual = routeVisuals[active];
    if (routeImage && visual) {
      routeImage.src = visual.src;
      routeImage.alt = visual[language()];
    }
    if (routeVisualCaption && visual) routeVisualCaption.textContent = visual[language()];
    Object.keys(fields).forEach((key) => {
      if (!fields[key]) return;
      fields[key].textContent = key === "index" ? routes[active].index : data[key];
    });
    if (rfqButton) rfqButton.textContent = data.rfq;
    if (materialButton) materialButton.textContent = data.material;
    buttons.forEach((button) => {
      const selected = button.dataset.route === active;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", selected ? "true" : "false");
    });
    result.setAttribute("data-route", active);
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const next = button.dataset.route;
      if (!next || next === active) return;
      result.classList.add("is-switching");
      window.clearTimeout(switchTimer);
      switchTimer = window.setTimeout(() => {
        active = next;
        render();
        window.requestAnimationFrame(() => result.classList.remove("is-switching"));
      }, 140);
    });
  });

  if (materialButton) {
    materialButton.addEventListener("click", () => {
      const target = document.getElementById("materials") || document.getElementById("product-center");
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  if (rfqButton) {
    rfqButton.addEventListener("click", () => {
      const data = activeData();
      const textarea = document.querySelector('#contact textarea[name="message"], textarea[name="message"]');
      const isZh = language() === "zh";
      const message = isZh
        ? [
            `应用领域：${data.tag}`,
            `候选牌号：${data.grade}`,
            `产品形态：${data.form}`,
            `表面要求：${data.finish}`,
            `加工需求：${data.process}`,
            "请在此补充尺寸、公差、数量、目的港及执行标准："
          ].join("\n")
        : [
            `Application: ${data.tag}`,
            `Candidate grade(s): ${data.grade}`,
            `Product form: ${data.form}`,
            `Surface finish: ${data.finish}`,
            `Processing: ${data.process}`,
            "Please add dimensions, tolerances, quantity, destination port and governing standard:"
          ].join("\n");

      if (textarea) {
        textarea.value = message;
        textarea.dispatchEvent(new Event("input", { bubbles: true }));
        textarea.dispatchEvent(new Event("change", { bubbles: true }));
      }

      const contact = document.getElementById("contact");
      if (contact) contact.scrollIntoView({ behavior: "smooth", block: "start" });
      if (textarea) window.setTimeout(() => textarea.focus({ preventScroll: true }), 650);
    });
  }

  new MutationObserver((mutations) => {
    if (mutations.some((mutation) => mutation.attributeName === "lang")) render();
  }).observe(document.documentElement, { attributes: true, attributeFilter: ["lang"] });

  render();
})();
