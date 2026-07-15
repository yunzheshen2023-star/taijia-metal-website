const nav=document.getElementById('nav');
const menu=document.getElementById('menu');
const navLinks=document.getElementById('navLinks');
const pageProgress=document.getElementById('pageProgress');
const hero=document.querySelector('.hero');
const heroBg=document.querySelector('.hero-bg');
const processImage=document.querySelector('.process-hero>img');
const qualityImage=document.querySelector('.quality-visual img');
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer=matchMedia('(pointer:fine)').matches;

let lang='en';
const langBtn=document.getElementById('langBtn');

function applyLanguage(nextLang){
  lang=nextLang;
  document.documentElement.lang=lang==='zh'?'zh-CN':'en';
  document.querySelectorAll('[data-zh]').forEach(el=>el.innerHTML=el.dataset[lang]);
  langBtn.textContent=lang==='zh'?'EN':'中';
  document.title=lang==='zh'?'泰嘉金属｜专业不锈钢材料与加工服务':'Taijia Metal | Stainless Steel Materials & Processing';
  updateRailLabels();
  document.dispatchEvent(new CustomEvent('languagechange',{detail:{lang}}));
}

applyLanguage('en');
langBtn.addEventListener('click',()=>applyLanguage(lang==='zh'?'en':'zh'));

function finishIntro(){
  document.getElementById('siteIntro')?.classList.add('is-hidden');
  document.body.classList.remove('is-loading');
}

if(reducedMotion){
  finishIntro();
}else{
  addEventListener('load',()=>setTimeout(finishIntro,1100),{once:true});
  setTimeout(finishIntro,2600);
}

menu.addEventListener('click',()=>navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

const staggerGroups=['.value-grid','.portfolio-grid','.finish-grid','.process-list','.application-grid','.solution-grid','.quality-steps','.cert-gallery','.service-flow','.export-grid','.rfq-items','.faq-grid','.format-tabs','.spec-builder-grid'];
staggerGroups.forEach(selector=>{
  document.querySelectorAll(selector).forEach(group=>{
    if(!group.matches('.reveal')&&!group.closest('.reveal'))group.classList.add('reveal');
    [...group.children].forEach((child,index)=>{
      child.classList.add('stagger-child');
      child.style.setProperty('--stagger-delay',`${Math.min(index,7)*75}ms`);
    });
  });
});

const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){
    entry.target.classList.add('visible');
    revealObserver.unobserve(entry.target);
  }
}),{threshold:.09,rootMargin:'0px 0px -5%'});
document.querySelectorAll('.reveal').forEach(el=>revealObserver.observe(el));

document.querySelectorAll('#productTabs button').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('#productTabs button').forEach(el=>el.classList.remove('active'));
  document.querySelectorAll('.product-panel').forEach(el=>el.classList.remove('active'));
  button.classList.add('active');
  document.getElementById(button.dataset.product).classList.add('active');
}));

const formatButtons=[...document.querySelectorAll('#formatTabs button')];
const formatPanels=[...document.querySelectorAll('.format-panel')];
formatButtons.forEach(button=>button.addEventListener('click',()=>{
  formatButtons.forEach(item=>{
    const active=item===button;
    item.classList.toggle('active',active);
    item.setAttribute('aria-selected',String(active));
  });
  formatPanels.forEach(panel=>{
    const active=panel.id===button.dataset.format;
    panel.classList.toggle('active',active);
    panel.hidden=!active;
  });
}));

const finishButtons=[...document.querySelectorAll('#finishTabs button')];
const finishPanels=[...document.querySelectorAll('.finish-panel')];
const finishVisual=document.getElementById('finishVisual');
const finishMark=document.getElementById('finishMark');
const finishVisualClasses={finishNo1:'finish-no1',finish2B:'finish-2b',finishBA:'finish-ba',finishNo4:'finish-no4',finishHL:'finish-hl',finishMirror:'finish-mirror'};
finishButtons.forEach(button=>button.addEventListener('click',()=>{
  finishButtons.forEach(item=>item.classList.toggle('active',item===button));
  finishPanels.forEach(panel=>{
    const active=panel.id===button.dataset.finish;
    panel.classList.toggle('active',active);
    panel.hidden=!active;
  });
  if(finishVisual){
    Object.values(finishVisualClasses).forEach(className=>finishVisual.classList.remove(className));
    finishVisual.classList.add(finishVisualClasses[button.dataset.finish]);
  }
  if(finishMark)finishMark.textContent=button.textContent.trim();
}));

const rfqBuilder=document.getElementById('rfqBuilder');
const rfqGroups=[...document.querySelectorAll('.spec-option-group')];
const rfqSummaryText=document.getElementById('rfqSummaryText');

function getRfqSummary(){
  return rfqGroups.map(group=>{
    const selected=group.querySelector('button.active');
    return `${group.dataset.groupEn}: ${selected?.dataset.valueEn||'—'}`;
  }).join('  /  ');
}

function getRfqTemplate(){
  return `TAIJIA METAL — REQUEST FOR QUOTATION\n${getRfqSummary()}\nOrder standard / edition: [ASTM/ASME or EN — specify]\nThickness / tolerance: \nWidth / length or coil data: \nQuantity: \nEdge / protective film: \nPacking: \nDestination port / required schedule: \nAdditional documentation or inspection requirements: `;
}

function updateRfqSummary(){
  if(rfqSummaryText)rfqSummaryText.textContent=getRfqSummary();
}

function showRfqToast(message){
  if(!rfqBuilder)return;
  let toast=rfqBuilder.querySelector('.rfq-toast');
  if(!toast){
    toast=document.createElement('div');
    toast.className='rfq-toast';
    toast.setAttribute('role','status');
    rfqBuilder.appendChild(toast);
  }
  toast.textContent=message;
  toast.classList.add('show');
  clearTimeout(showRfqToast.timer);
  showRfqToast.timer=setTimeout(()=>toast.classList.remove('show'),2200);
}

async function copyRfqText(text){
  if(navigator.clipboard&&window.isSecureContext){
    await navigator.clipboard.writeText(text);
    return;
  }
  const helper=document.createElement('textarea');
  helper.value=text;
  helper.style.position='fixed';
  helper.style.opacity='0';
  document.body.appendChild(helper);
  helper.select();
  document.execCommand('copy');
  helper.remove();
}

rfqGroups.forEach(group=>group.querySelectorAll('button').forEach(button=>button.addEventListener('click',()=>{
  group.querySelectorAll('button').forEach(item=>item.classList.toggle('active',item===button));
  updateRfqSummary();
})));

document.getElementById('copyRfq')?.addEventListener('click',async()=>{
  try{
    await copyRfqText(getRfqTemplate());
    document.querySelector('.spec-output')?.classList.add('is-copied');
    setTimeout(()=>document.querySelector('.spec-output')?.classList.remove('is-copied'),600);
    showRfqToast(lang==='zh'?'英文采购规格已复制':'English purchase specification copied');
  }catch(error){
    showRfqToast(lang==='zh'?'复制失败，请使用“带入询价表”':'Copy failed — please use “Use in Inquiry”');
  }
});

document.getElementById('useRfq')?.addEventListener('click',()=>{
  const messageField=document.querySelector('#contactForm textarea[name="message"]');
  if(!messageField)return;
  messageField.value=getRfqTemplate();
  document.getElementById('contact')?.scrollIntoView({behavior:reducedMotion?'auto':'smooth'});
  setTimeout(()=>messageField.focus({preventScroll:true}),reducedMotion?0:650);
  showRfqToast(lang==='zh'?'规格已带入询价表，请补充尺寸与数量':'Specification added — complete dimensions and quantity');
});

document.addEventListener('languagechange',updateRfqSummary);
updateRfqSummary();

document.querySelectorAll('#advisorTabs button').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('#advisorTabs button').forEach(el=>el.classList.remove('active'));
  document.querySelectorAll('.advisor-panel').forEach(el=>el.classList.remove('active'));
  button.classList.add('active');
  document.getElementById(button.dataset.advisor).classList.add('active');
}));

const industryShowcase=document.getElementById('industryShowcase');
if(industryShowcase){
  const industryStage=document.getElementById('industryStage');
  const industrySlides=[...industryShowcase.querySelectorAll('.industry-slide')];
  const industryTabs=[...document.querySelectorAll('#industryTabs button')];
  const industryCurrent=document.getElementById('industryCurrent');
  const industryProgress=document.getElementById('industryProgress');
  const industryDuration=6500;
  let industryIndex=0;
  let industryTimer=null;
  let industryVisible=false;
  let industryPaused=false;
  let dragStartX=null;
  let dragStartY=null;

  function stopIndustryTimer(){
    clearTimeout(industryTimer);
    industryTimer=null;
    industryProgress.classList.remove('playing');
  }

  function startIndustryTimer(){
    stopIndustryTimer();
    if(reducedMotion||industryPaused||!industryVisible||document.hidden)return;
    void industryProgress.offsetWidth;
    industryProgress.classList.add('playing');
    industryTimer=setTimeout(()=>activateIndustry(industryIndex+1),industryDuration);
  }

  function activateIndustry(nextIndex){
    industryIndex=(nextIndex+industrySlides.length)%industrySlides.length;
    industrySlides.forEach((slide,index)=>{
      const active=index===industryIndex;
      slide.classList.toggle('active',active);
      slide.setAttribute('aria-hidden',String(!active));
    });
    industryTabs.forEach((tab,index)=>{
      const active=index===industryIndex;
      tab.classList.toggle('active',active);
      tab.setAttribute('aria-selected',String(active));
      if(active&&innerWidth<821)tab.scrollIntoView({behavior:reducedMotion?'auto':'smooth',block:'nearest',inline:'center'});
    });
    industryCurrent.textContent=String(industryIndex+1).padStart(2,'0');
    startIndustryTimer();
  }

  industryTabs.forEach((tab,index)=>tab.addEventListener('click',()=>activateIndustry(index)));
  industryShowcase.querySelector('.industry-arrow.prev').addEventListener('click',()=>activateIndustry(industryIndex-1));
  industryShowcase.querySelector('.industry-arrow.next').addEventListener('click',()=>activateIndustry(industryIndex+1));

  industryStage.addEventListener('keydown',event=>{
    if(event.key==='ArrowLeft')activateIndustry(industryIndex-1);
    if(event.key==='ArrowRight')activateIndustry(industryIndex+1);
  });

  industryStage.addEventListener('pointerdown',event=>{
    if(event.target.closest('a,button'))return;
    dragStartX=event.clientX;
    dragStartY=event.clientY;
    industryStage.classList.add('is-dragging');
    industryStage.setPointerCapture?.(event.pointerId);
  });
  industryStage.addEventListener('pointerup',event=>{
    if(dragStartX===null)return;
    const dx=event.clientX-dragStartX;
    const dy=event.clientY-dragStartY;
    if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy))activateIndustry(industryIndex+(dx<0?1:-1));
    dragStartX=null;
    dragStartY=null;
    industryStage.classList.remove('is-dragging');
  });
  industryStage.addEventListener('pointercancel',()=>{
    dragStartX=null;
    dragStartY=null;
    industryStage.classList.remove('is-dragging');
  });
  industryStage.addEventListener('pointermove',event=>{
    if(!finePointer||dragStartX!==null)return;
    const rect=industryStage.getBoundingClientRect();
    const x=(event.clientX-rect.left)/rect.width-.5;
    const y=(event.clientY-rect.top)/rect.height-.5;
    industryStage.style.setProperty('--industry-x',`${x*-12}px`);
    industryStage.style.setProperty('--industry-y',`${y*-8}px`);
  });
  industryStage.addEventListener('pointerleave',()=>{
    industryStage.style.setProperty('--industry-x','0px');
    industryStage.style.setProperty('--industry-y','0px');
  });

  industryShowcase.addEventListener('mouseenter',()=>{industryPaused=true;stopIndustryTimer()});
  industryShowcase.addEventListener('mouseleave',()=>{industryPaused=false;startIndustryTimer()});
  industryShowcase.addEventListener('focusin',()=>{industryPaused=true;stopIndustryTimer()});
  industryShowcase.addEventListener('focusout',event=>{
    if(!industryShowcase.contains(event.relatedTarget)){industryPaused=false;startIndustryTimer()}
  });
  document.addEventListener('visibilitychange',startIndustryTimer);

  const industryObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
    industryVisible=entry.isIntersecting;
    if(industryVisible)startIndustryTimer();else stopIndustryTimer();
  }),{threshold:.28});
  industryObserver.observe(industryShowcase);
  activateIndustry(0);
}

document.querySelectorAll('.faq-grid details').forEach(detail=>detail.addEventListener('toggle',()=>{
  if(!detail.open)return;
  document.querySelectorAll('.faq-grid details[open]').forEach(other=>{
    if(other!==detail)other.removeAttribute('open');
  });
}));

function animateMetric(element){
  if(element.dataset.animated)return;
  element.dataset.animated='true';
  const finalText=element.textContent.trim();
  const numbers=[...finalText.matchAll(/\d+/g)].map(match=>Number(match[0]));
  if(!numbers.length)return;
  const duration=1050;
  const start=performance.now();
  const step=now=>{
    const progress=Math.min(1,(now-start)/duration);
    const eased=1-Math.pow(1-progress,3);
    let numberIndex=0;
    element.textContent=finalText.replace(/\d+/g,()=>Math.round(numbers[numberIndex++]*eased).toLocaleString('en-US'));
    if(progress<1)requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const metricObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){
    entry.target.querySelectorAll('b').forEach(animateMetric);
    metricObserver.unobserve(entry.target);
  }
}),{threshold:.6});
const metrics=document.querySelector('.hero-metrics');
if(metrics&&!reducedMotion)metricObserver.observe(metrics);

let scrollTicking=false;
function clamp(value,min,max){return Math.min(max,Math.max(min,value))}

function updateScrollEffects(){
  const y=scrollY;
  const maxScroll=Math.max(1,document.documentElement.scrollHeight-innerHeight);
  pageProgress.style.transform=`scaleX(${y/maxScroll})`;
  nav.classList.toggle('scrolled',y>24);
  if(!reducedMotion){
    if(heroBg&&y<innerHeight*1.2){
      heroBg.style.setProperty('--hero-shift',`${y*.115}px`);
      hero.style.setProperty('--grid-shift',`${y*.08}px`);
    }
    [[processImage,'.process-hero'],[qualityImage,'.quality-visual']].forEach(([image,containerSelector])=>{
      if(!image)return;
      const container=document.querySelector(containerSelector);
      const rect=container.getBoundingClientRect();
      const center=rect.top+rect.height/2-innerHeight/2;
      image.style.setProperty('--image-shift',`${clamp(-center*.045,-28,28)}px`);
    });
  }
  scrollTicking=false;
}

addEventListener('scroll',()=>{
  if(!scrollTicking){
    requestAnimationFrame(updateScrollEffects);
    scrollTicking=true;
  }
},{passive:true});
addEventListener('resize',updateScrollEffects,{passive:true});
updateScrollEffects();

if(finePointer&&!reducedMotion){
  const cursorGlow=document.getElementById('cursorGlow');
  addEventListener('pointermove',event=>{
    cursorGlow.style.setProperty('--mouse-x',`${event.clientX}px`);
    cursorGlow.style.setProperty('--mouse-y',`${event.clientY}px`);
  },{passive:true});

  const tiltTargets=document.querySelectorAll('.portfolio-card,.value-grid article,.finish-grid article,.solution-grid article,.export-grid article,.cert-gallery figure,.spec-option-group');
  tiltTargets.forEach(card=>{
    card.classList.add('tilt-card');
    card.addEventListener('pointermove',event=>{
      const rect=card.getBoundingClientRect();
      const x=(event.clientX-rect.left)/rect.width;
      const y=(event.clientY-rect.top)/rect.height;
      card.style.setProperty('--ry',`${(x-.5)*7}deg`);
      card.style.setProperty('--rx',`${(.5-y)*6}deg`);
      card.style.setProperty('--shine-x',`${x*100}%`);
      card.style.setProperty('--shine-y',`${y*100}%`);
    });
    card.addEventListener('pointerleave',()=>{
      card.style.setProperty('--ry','0deg');
      card.style.setProperty('--rx','0deg');
      card.style.setProperty('--shine-x','50%');
      card.style.setProperty('--shine-y','50%');
    });
  });

  document.querySelectorAll('.btn,.nav-quote').forEach(button=>{
    button.addEventListener('pointermove',event=>{
      const rect=button.getBoundingClientRect();
      button.style.setProperty('--mag-x',`${(event.clientX-rect.left-rect.width/2)*.08}px`);
      button.style.setProperty('--mag-y',`${(event.clientY-rect.top-rect.height/2)*.12}px`);
    });
    button.addEventListener('pointerleave',()=>{
      button.style.setProperty('--mag-x','0px');
      button.style.setProperty('--mag-y','0px');
    });
  });
}

const railItems=[
  ['about','About','关于泰嘉'],
  ['materials','Materials','材料产品'],
  ['product-center','Product Center','产品中心'],
  ['technical','Technical','技术参考'],
  ['processing','Processing','加工能力'],
  ['applications','Applications','应用领域'],
  ['quality','Quality','质量体系'],
  ['export','Export','出口支持'],
  ['faq','FAQ','采购问答'],
  ['contact','Contact','联系我们']
];
const sectionRail=document.createElement('aside');
sectionRail.className='section-rail';
sectionRail.setAttribute('aria-label','Page sections');
sectionRail.innerHTML=railItems.map(([id,en,zh])=>`<a href="#${id}" data-en-label="${en}" data-zh-label="${zh}" aria-label="${en}"></a>`).join('');
document.body.appendChild(sectionRail);

function updateRailLabels(){
  const rail=document.querySelector('.section-rail');
  if(!rail)return;
  rail.querySelectorAll('a').forEach(link=>{
    const label=lang==='zh'?link.dataset.zhLabel:link.dataset.enLabel;
    link.dataset.label=label;
    link.setAttribute('aria-label',label);
  });
}
updateRailLabels();

const sectionObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){
    sectionRail.querySelectorAll('a').forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${entry.target.id}`));
  }
}),{rootMargin:'-42% 0px -48%',threshold:0});
railItems.forEach(([id])=>{
  const section=document.getElementById(id);
  if(section)sectionObserver.observe(section);
});

const contactForm=document.getElementById('contactForm');
const formNote=document.getElementById('formNote');

contactForm.addEventListener('submit',async event=>{
  event.preventDefault();

  if(window.location.protocol==='file:'){
    formNote.className='form-status info';
    formNote.textContent=lang==='zh'
      ?'这是本地预览。部署到 Netlify 后，询盘会保存到 Forms 后台并可同步发送至指定邮箱。'
      :'This is a local preview. Once deployed on Netlify, inquiries will be stored in Forms and can be forwarded to your designated email.';
    return;
  }

  const submitButton=contactForm.querySelector('button[type="submit"]');
  const buttonLabel=submitButton.querySelector('span');
  submitButton.disabled=true;
  submitButton.classList.add('is-sending');
  buttonLabel.textContent=lang==='zh'?'正在安全提交…':'Sending securely…';
  formNote.className='form-status';
  formNote.textContent='';

  try{
    const response=await fetch('/',{
      method:'POST',
      headers:{'Content-Type':'application/x-www-form-urlencoded'},
      body:new URLSearchParams(new FormData(contactForm)).toString()
    });
    if(!response.ok)throw new Error(`Submission failed: ${response.status}`);

    formNote.className='form-status success';
    formNote.textContent=lang==='zh'
      ?'询盘已成功发送。我们会根据您留下的邮箱尽快回复。'
      :'Your inquiry has been sent successfully. We will reply to the email provided as soon as possible.';
    contactForm.reset();
  }catch(error){
    formNote.className='form-status error';
    formNote.textContent=lang==='zh'
      ?'暂时未能发送，请稍后重试或通过公司邮箱联系我们。'
      :'We could not send your inquiry. Please try again later or contact us by company email.';
  }finally{
    submitButton.disabled=false;
    submitButton.classList.remove('is-sending');
    buttonLabel.textContent=lang==='zh'?'提交询价':'Send Inquiry';
  }
});
