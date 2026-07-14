const nav=document.getElementById('nav');
const menu=document.getElementById('menu');
const navLinks=document.getElementById('navLinks');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>24));
menu.addEventListener('click',()=>navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting)entry.target.classList.add('visible');
}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('#productTabs button').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('#productTabs button').forEach(el=>el.classList.remove('active'));
  document.querySelectorAll('.product-panel').forEach(el=>el.classList.remove('active'));
  button.classList.add('active');
  document.getElementById(button.dataset.product).classList.add('active');
}));

let lang='en';
const langBtn=document.getElementById('langBtn');
document.querySelectorAll('[data-en]').forEach(el=>el.innerHTML=el.dataset.en);
document.documentElement.lang='en';
document.title='Taijia Metal | Stainless Steel Materials & Processing';
langBtn.addEventListener('click',()=>{
  lang=lang==='zh'?'en':'zh';
  document.documentElement.lang=lang==='zh'?'zh-CN':'en';
  document.querySelectorAll('[data-zh]').forEach(el=>el.innerHTML=el.dataset[lang]);
  langBtn.textContent=lang==='zh'?'EN':'中';
  document.title=lang==='zh'?'泰嘉金属｜专业不锈钢材料与加工服务':'Taijia Metal | Stainless Steel Materials & Processing';
});

document.getElementById('contactForm').addEventListener('submit',event=>{
  event.preventDefault();
  document.getElementById('formNote').textContent=lang==='zh'?'需求已记录。正式上线时可接入企业邮箱或CRM。':'Request recorded. Email or CRM integration can be enabled for production.';
  event.target.reset();
});
