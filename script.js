// Smooth scroll
for (const a of document.querySelectorAll('a[href^="#"]')){
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    const el = document.querySelector(id);
    if (el){ e.preventDefault(); el.scrollIntoView({behavior:'smooth', block:'start'}); }
  });
}


// === AOS minimalista (IntersectionObserver) ===
(function(){
  const els = document.querySelectorAll('.aos-fade-up');
  if(!('IntersectionObserver' in window) || els.length===0) return;
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){ entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
    });
  },{threshold:0.15});
  els.forEach(el=> io.observe(el));
})();
