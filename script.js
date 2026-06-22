document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('.hero-scroll');
    const year = document.getElementById('year');

    if (year) year.textContent = new Date().getFullYear();

    // Fake urgency timer
    let time = 1800; // 30 min
    setInterval(() => {
        if (time <= 0) return;
        time--;
        if (time % 60 === 0) {
            console.log(`Offer ends soon: ${Math.floor(time / 60)} min left`);
        }
    }, 1000);

    // Add subtle scroll animation to hero
    window.addEventListener('scroll', () => {
        if (!hero) return;
        hero.style.opacity = String(Math.max(0.7, 1 - window.scrollY / 500));
    });
});
