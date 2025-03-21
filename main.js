// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Initialize ScrollReveal
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 1000,
    delay: 200
});

ScrollReveal().reveal('.section__title, .section__subtitle, .home__title, .home__description, .home__button', { origin: 'top' });
ScrollReveal().reveal('.skills__item, .qualification__item, .services__item, .project__item, .testimonial__item', { origin: 'bottom' });

// Show scroll-up button when scrolling down
const scrollUp = document.getElementById('scroll-up');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
});

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});
