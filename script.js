// 1. Get in Touch button alert
const contactBtn = document.querySelector('.btn');
contactBtn.addEventListener('click', () => {
    alert("Thank you for visiting my portfolio! You can contact me at devopskaren@example.com ✨");
});

// 2. Add hover effect for skill cards
const skillCards = document.querySelectorAll('.skills-cards .card');
skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 10px 30px rgba(255, 152, 0, 0.7)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 5px 20px rgba(255, 152, 0, 0.3)';
    });
});

// 3. Floating effect for hero image (optional)
const heroImage = document.querySelector('.hero-image img');
let direction = 1;
setInterval(() => {
    let currentTop = parseFloat(getComputedStyle(heroImage).top) || 0;
    if (currentTop > 15) direction = -1;
    if (currentTop < -15) direction = 1;
    heroImage.style.position = 'relative';
    heroImage.style.top = currentTop + direction + 'px';
}, 100);
