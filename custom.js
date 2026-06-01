if(window.location.pathname.indexOf('/apply')!==-1)document.body.classList.add('body-apply');
document.querySelectorAll('.nav-btn').forEach(function(btn){if(btn.textContent.trim().replace(/[^a-zA-Z]/g,'').trim()==='Apply')btn.href='/apply'});
document.querySelectorAll('.hero-nav-link').forEach(function(link){if(link.textContent.trim()==='Contact')link.href='/contact'});
document.querySelectorAll('*').forEach(function(el){if(el.children.length===0&&el.textContent.indexOf('Belgrade')!==-1)el.textContent=el.textContent.replace(/Belgrade,?\s*Serbia/g,'Zagreb, Croatia').replace(/Belgrade/g,'Zagreb')});
// Group form fields with section dividers
;(function(){
var form=document.querySelector('.apply-form form');if(!form)return;
var labels=form.querySelectorAll('label');
var groups=[
{before:0,title:'Personal'},
{before:6,title:'Social'},
{before:8,title:'Photos'}
];
groups.reverse().forEach(function(g){
var target=labels[g.before];if(!target)return;
var div=document.createElement('div');
div.className='form-group-title';div.textContent=g.title;
target.parentNode.insertBefore(div,target);
});
})();
gsap.registerPlugin(ScrollTrigger);
var nav=document.querySelector('.hero-nav');var heroEl=document.querySelector('.hero')||document.querySelector('.roster-hero')||document.querySelector('.model-hero');if(nav&&heroEl){var hH=heroEl.offsetHeight;window.addEventListener('scroll',function(){nav.classList.toggle('solid',window.scrollY>hH-100)})}
if(nav&&!heroEl){nav.classList.add('solid')}
var heroTitle=document.querySelector('.hero-title');if(heroTitle){var words=heroTitle.textContent.trim().split(/\s+/);heroTitle.innerHTML=words.map(function(w){return'<span class="word" style="display:inline-block">'+w+'</span> '}).join('')}
gsap.set('.hero-bg img,.hero-logo,.hero-nav-link,.nav-btn,.hero-title,.hero-bottom-col',{visibility:'visible'});gsap.fromTo('.hero-bg img',{scale:1.05,opacity:0},{scale:1,opacity:1,duration:2,ease:'power3.out',delay:0.2});gsap.fromTo('.hero-logo',{y:-12,opacity:0},{y:0,opacity:1,duration:0.7,delay:0.5});gsap.fromTo('.hero-nav-link',{y:-8,opacity:0},{y:0,opacity:1,stagger:0.08,duration:0.5,delay:0.6});gsap.fromTo('.nav-btn',{y:-8,opacity:0},{y:0,opacity:1,duration:0.5,delay:0.9});gsap.fromTo('.hero-title .word',{y:40,opacity:0},{y:0,opacity:1,stagger:0.12,duration:0.8,delay:0.8,ease:'power3.out'});gsap.fromTo('.hero-bottom-col',{y:10,opacity:0},{y:0,opacity:1,stagger:0.1,duration:0.6,delay:1.1});
document.querySelectorAll('.reveal').forEach(function(el){gsap.to(el,{scrollTrigger:{trigger:el,start:'top 85%'},opacity:1,y:0,duration:0.7,ease:'power2.out'})});
gsap.fromTo('.division-card',{y:40,opacity:0},{scrollTrigger:{trigger:'.divisions-grid',start:'top 80%'},y:0,opacity:1,stagger:0.15,duration:0.7,ease:'power2.out'});
gsap.fromTo('.showcase-card',{x:40,opacity:0},{scrollTrigger:{trigger:'.showcase',start:'top 75%'},x:0,opacity:1,stagger:0.1,duration:0.7,ease:'power2.out'});
gsap.fromTo('.about-section',{opacity:0,y:40},{opacity:1,y:0,duration:1,ease:'power2.out',scrollTrigger:{trigger:'.about-section',start:'top 75%'}});
gsap.fromTo('.cta-section',{opacity:0,y:30},{opacity:1,y:0,duration:0.8,ease:'power2.out',scrollTrigger:{trigger:'.cta-section',start:'top 80%'}});
var rosterHero=document.querySelector('.roster-hero');if(rosterHero){gsap.fromTo('.roster-hero .hero-bg img',{scale:1.1,opacity:0},{scale:1,opacity:1,duration:2,ease:'power3.out',delay:0.2});gsap.fromTo('.roster-hero-title',{y:30,opacity:0},{y:0,opacity:1,duration:0.8,delay:0.5,ease:'power3.out'});gsap.fromTo('.roster-hero-subtitle',{y:20,opacity:0},{y:0,opacity:1,duration:0.6,delay:0.7,ease:'power2.out'})}
var rosterGrid=document.querySelector('.roster-grid');if(rosterGrid){gsap.fromTo('.roster-grid .showcase-card',{y:40,opacity:0},{scrollTrigger:{trigger:'.roster-grid',start:'top 80%'},y:0,opacity:1,stagger:0.08,duration:0.6,ease:'power2.out'})}
document.querySelectorAll('.m-line').forEach(function(line){var t=line.textContent;line.innerHTML='';t.split('').forEach(function(c){var s=document.createElement('span');s.className=c===' '?'m-char space':'m-char';s.textContent=c===' '?' ':c;line.appendChild(s)})});var mC=gsap.utils.toArray('.m-char');if(mC.length){gsap.to(mC,{color:'#1A1A1A',stagger:0.02,scrollTrigger:{trigger:'.manifesto',start:'top 40%',end:'bottom 50%',scrub:0.5}})}
// Custom lightbox for gallery
;(function(){
var imgs=document.querySelectorAll('.gallery-item img');if(!imgs.length)return;
var overlay=document.createElement('div');overlay.className='lb-overlay';
var img=document.createElement('img');img.className='lb-img';
var close=document.createElement('div');close.className='lb-close';close.textContent='\u00D7';
var prev=document.createElement('div');prev.className='lb-prev';prev.textContent='\u2039';
var next=document.createElement('div');next.className='lb-next';next.textContent='\u203A';
overlay.appendChild(img);overlay.appendChild(close);overlay.appendChild(prev);overlay.appendChild(next);
document.body.appendChild(overlay);
var srcs=[],cur=0;
imgs.forEach(function(i,idx){i.style.cursor='pointer';i.addEventListener('click',function(){srcs=Array.from(imgs).map(function(el){return el.src});cur=idx;img.src=srcs[cur];overlay.classList.add('active')})});
close.addEventListener('click',function(){overlay.classList.remove('active')});
overlay.addEventListener('click',function(e){if(e.target===overlay)overlay.classList.remove('active')});
prev.addEventListener('click',function(e){e.stopPropagation();cur=(cur-1+srcs.length)%srcs.length;img.src=srcs[cur]});
next.addEventListener('click',function(e){e.stopPropagation();cur=(cur+1)%srcs.length;img.src=srcs[cur]});
document.addEventListener('keydown',function(e){if(!overlay.classList.contains('active'))return;if(e.key==='Escape')overlay.classList.remove('active');if(e.key==='ArrowLeft'){cur=(cur-1+srcs.length)%srcs.length;img.src=srcs[cur]}if(e.key==='ArrowRight'){cur=(cur+1)%srcs.length;img.src=srcs[cur]}});
})();
// Contact email character wave animation
document.querySelectorAll('.contact-email,.contact-email-1').forEach(function(el){
var text=el.textContent;
el.innerHTML=text.split('').map(function(c,i){
return '<span class="char" style="transition-delay:'+i*20+'ms">'+(c===' '?'&nbsp;':c)+'</span>';
}).join('');
});
