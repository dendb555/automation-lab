(function(){
 'use strict';
 const nav=document.querySelector('.mobile-bottom-nav');
 function update(){
  const segment=(location.hash||'#home').slice(1).split('/')[0];
  const selected=['track','level','lesson'].includes(segment)?'tracks':segment==='lab'?'labs':segment;
  nav?.querySelectorAll('[data-mobile-route]').forEach(a=>{const active=a.dataset.mobileRoute===selected;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  document.body.classList.remove('nav-open');
 }
 window.addEventListener('hashchange',update);update();
 document.querySelectorAll('#sidebar a').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('nav-open')));
 if('serviceWorker' in navigator && /^https?:$/.test(location.protocol)){
  window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));
 }
})();
