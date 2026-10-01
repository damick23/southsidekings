const $=s=>document.querySelector(s);
document.querySelectorAll('[data-bg]').forEach(c=>{const i=document.getElementById(c.dataset.bg);if(i)c.style.backgroundImage='url('+i.src+')'});
function openP(id){const p=document.getElementById(id);if(!p)return;p.classList.add('open');p.removeAttribute('inert');requestAnimationFrame(()=>p.scrollIntoView({behavior:'smooth',block:'start'}))}
document.querySelectorAll('[data-open]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();openP(a.getAttribute('href').slice(1))}));
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>{const p=b.closest('.panel');p.classList.remove('open');p.setAttribute('inert','');$('#community').scrollIntoView({behavior:'smooth'})}));
if(location.hash)openP(location.hash.slice(1));
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));