gsap.registerPlugin(ScrollTrigger);

// Nav: transparent in hero, solid after
var nav = document.querySelector('.hero-nav');
var heroEl = document.querySelector('.hero') || document.querySelector('.roster-hero');
if (nav && heroEl) {
  var hH = heroEl.offsetHeight;
  window.addEventListener('scroll', function() {
    nav.classList.toggle('solid', window.scrollY > hH - 100);
  });
}

// Split hero title into words
var heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
  var words = heroTitle.textContent.trim().split(/\s+/);
  heroTitle.innerHTML = words.map(function(w){ return '<span class="word" style="display:inline-block">' + w + '</span> '; }).join('');
}

// Hero entrance — set visible then animate
gsap.set('.hero-bg img,.hero-logo,.hero-nav-link,.nav-btn,.hero-title,.hero-bottom-col', {visibility:'visible'});
gsap.fromTo('.hero-bg img', {scale:1.2, opacity:0}, {scale:1, opacity:1, duration:2.5, ease:'power3.out', delay:0.2});
gsap.fromTo('.hero-logo', {y:-12, opacity:0}, {y:0, opacity:1, duration:0.7, delay:0.5});
gsap.fromTo('.hero-nav-link', {y:-8, opacity:0}, {y:0, opacity:1, stagger:0.08, duration:0.5, delay:0.6});
gsap.fromTo('.nav-btn', {y:-8, opacity:0}, {y:0, opacity:1, duration:0.5, delay:0.9});
gsap.fromTo('.hero-title .word', {y:40, opacity:0}, {y:0, opacity:1, stagger:0.12, duration:0.8, delay:0.8, ease:'power3.out'});
gsap.fromTo('.hero-bottom-col', {y:10, opacity:0}, {y:0, opacity:1, stagger:0.1, duration:0.6, delay:1.1});

// Hero parallax + scale
gsap.to('.hero-bg img', {
  scrollTrigger: {trigger:'.hero', start:'top top', end:'bottom top', scrub:true},
  y:50, scale:1.15, ease:'none'
});

// Scroll reveals
document.querySelectorAll('.reveal').forEach(function(el) {
  gsap.to(el, {
    scrollTrigger: {trigger:el, start:'top 85%'},
    opacity:1, y:0, duration:0.7, ease:'power2.out'
  });
});

// Division cards stagger
gsap.fromTo('.division-card',
  {y:40, opacity:0},
  {scrollTrigger:{trigger:'.divisions-grid', start:'top 80%'},
   y:0, opacity:1, stagger:0.15, duration:0.7, ease:'power2.out'}
);

// Showcase cards stagger
gsap.fromTo('.showcase-card',
  {x:40, opacity:0},
  {scrollTrigger:{trigger:'.showcase', start:'top 75%'},
   x:0, opacity:1, stagger:0.1, duration:0.7, ease:'power2.out'}
);

// About section fade
gsap.fromTo('.about-section',
  {opacity:0, y:40},
  {opacity:1, y:0, duration:1, ease:'power2.out', scrollTrigger:{trigger:'.about-section', start:'top 75%'}}
);

// CTA section fade
gsap.fromTo('.cta-section',
  {opacity:0, y:30},
  {opacity:1, y:0, duration:0.8, ease:'power2.out', scrollTrigger:{trigger:'.cta-section', start:'top 80%'}}
);

// Roster hero parallax
var rosterHero = document.querySelector('.roster-hero');
if (rosterHero) {
  gsap.fromTo('.roster-hero .hero-bg img', {scale:1.1, opacity:0}, {scale:1, opacity:1, duration:2, ease:'power3.out', delay:0.2});
  gsap.to('.roster-hero .hero-bg img', {
    scrollTrigger:{trigger:'.roster-hero', start:'top top', end:'bottom top', scrub:true},
    y:50, scale:1.15, ease:'none'
  });
  gsap.fromTo('.roster-hero-title', {y:30, opacity:0}, {y:0, opacity:1, duration:0.8, delay:0.5, ease:'power3.out'});
  gsap.fromTo('.roster-hero-subtitle', {y:20, opacity:0}, {y:0, opacity:1, duration:0.6, delay:0.7, ease:'power2.out'});
}

// Roster grid cards stagger
var rosterGrid = document.querySelector('.roster-grid');
if (rosterGrid) {
  gsap.fromTo('.roster-grid .showcase-card',
    {y:40, opacity:0},
    {scrollTrigger:{trigger:'.roster-grid', start:'top 80%'},
     y:0, opacity:1, stagger:0.08, duration:0.6, ease:'power2.out'}
  );
}

// Manifesto per-character reveal
document.querySelectorAll('.m-line').forEach(function(line) {
  var t = line.textContent;
  line.innerHTML = '';
  t.split('').forEach(function(c) {
    var s = document.createElement('span');
    s.className = c === ' ' ? 'm-char space' : 'm-char';
    s.textContent = c === ' ' ? ' ' : c;
    line.appendChild(s);
  });
});
var mC = gsap.utils.toArray('.m-char');
if (mC.length) {
  gsap.to(mC, {
    color: '#1A1A1A',
    stagger: 0.02,
    scrollTrigger: {
      trigger: '.manifesto',
      start: 'top 40%',
      end: 'bottom 50%',
      scrub: 0.5
    }
  });
}
