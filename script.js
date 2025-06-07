
// Oculta el logo principal al hacer scroll
window.addEventListener('scroll', function () {
  const logo = document.getElementById('mainLogo');

  if (window.scrollY > 50) {
    logo.classList.add('hidden');
  } else {
    logo.classList.remove('hidden');
  }
});

// Cuenta regresiva para la boda (ajusta la fecha a la tuya)
const weddingDate = new Date("2026-07-10T00:00:00").getTime();

const countdown = setInterval(function () {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = `
    <div><strong>${days}</strong><br>Días</div>
    <div><strong>${hours}</strong><br>Horas</div>
    <div><strong>${minutes}</strong><br>Minutos</div>
    <div><strong>${seconds}</strong><br>Segundos</div>
  `;

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "¡Feliz boda! 🎉";
  }
}, 1000);

// Animación con IntersectionObserver para secciones con fade-in
const fadeInSections = document.querySelectorAll('.fade-in-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.2
});

fadeInSections.forEach(section => {
  observer.observe(section);
});

// Inicializa AOS (Animate On Scroll)
AOS.init({
  duration: 1000,
  once: true,
  easing: 'ease-in-out'
});