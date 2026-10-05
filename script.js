// ===== Abrir el sobre =====
const sobre = document.getElementById('sobre');
const inv = document.getElementById('inv');

function abrir() {
  sobre.classList.add('abierto');
  inv.classList.add('visible');
  setTimeout(() => sobre.remove(), 1000);
}
sobre.addEventListener('click', abrir);
sobre.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') abrir(); });

// ===== Cuenta regresiva =====
const destino = new Date(document.getElementById('cuenta').dataset.fecha.replace(' ', 'T'));
const el = id => document.getElementById(id);

function actualizar() {
  let diff = Math.max(0, destino - new Date());
  el('d').textContent = Math.floor(diff / 864e5);
  el('h').textContent = String(Math.floor(diff / 36e5) % 24).padStart(2, '0');
  el('m').textContent = String(Math.floor(diff / 6e4) % 60).padStart(2, '0');
  el('s').textContent = String(Math.floor(diff / 1e3) % 60).padStart(2, '0');
}
actualizar();
setInterval(actualizar, 1000);

// ===== Aparecer al bajar =====
const obs = new IntersectionObserver(items => {
  items.forEach(i => { if (i.isIntersecting) { i.target.classList.add('on'); obs.unobserve(i.target); } });
}, { threshold: 0.2 });
document.querySelectorAll('.ver').forEach(s => obs.observe(s));
