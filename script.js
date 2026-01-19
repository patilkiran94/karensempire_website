// Contact button action
const btn = document.getElementById('contactBtn');

btn.addEventListener('click', () => {
  alert('Thanks for reaching out!\nEmail: devopskaren@gmail.com');
});

// Soft glow animation for hero graphic
const graphic = document.querySelector('.hero-graphic');
let hue = 0;

setInterval(() => {
  hue = (hue + 2) % 360;
  graphic.style.filter = `drop-shadow(0 0 25px hsl(${hue},100%,60%))`;
}, 100);
