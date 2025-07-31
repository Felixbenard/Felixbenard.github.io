// Activate AOS (scroll animations)
AOS.init({
  duration: 1000,
  once: true,
});

// WhatsApp message confirmation (optional)
const whatsappBtn = document.querySelector('.contact .btn');
if (whatsappBtn) {
  whatsappBtn.addEventListener('click', () => {
    console.log('Opening WhatsApp...');
  });
}

// Dark/Light mode toggle setup (future-ready)
const toggle = document.createElement('button');
toggle.textContent = '🌓';
toggle.style.position = 'fixed';
toggle.style.top = '20px';
toggle.style.right = '20px';
toggle.style.padding = '10px';
toggle.style.background = 'gold';
toggle.style.border = 'none';
toggle.style.borderRadius = '50%';
toggle.style.cursor = 'pointer';
document.body.appendChild(toggle);

let isDark = true;

toggle.addEventListener('click', () => {
  isDark = !isDark;
  document.body.style.backgroundColor = isDark ? "#000" : "#fff";
  document.body.style.color = isDark ? "#fff" : "#000";
  toggle.style.background = isDark ? "gold" : "#111";
});
