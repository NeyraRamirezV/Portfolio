// =============== SWIPER INITIALIZATION ===============
const swiper = new Swiper('.swiper-container', {
    loop: true, // Enable continuous loop
    pagination: {
        el: '.swiper-pagination', // Add pagination dots
        clickable: true, // Allow clicking on dots to navigate
    },
});

// =============== SCROLLREVEAL INITIALIZATION ===============
ScrollReveal({
    reset: true, // Reset animations on scroll
    distance: '60px', // Distance to animate
    duration: 1000, // Animation duration
    delay: 200, // Delay before animation starts
});

// Animate elements on scroll
ScrollReveal().reveal('.section__title, .section__subtitle, .home__title, .home__description, .home__button', { origin: 'top' });
ScrollReveal().reveal('.skills__item, .qualification__item, .services__item, .project__item, .testimonial__item', { origin: 'bottom' });

// =============== SCROLL-UP BUTTON FUNCTIONALITY ===============
const scrollUp = document.getElementById('scroll-up');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 200) {
        scrollUp.classList.add('show-scroll'); // Show button when scrolling down
    } else {
        scrollUp.classList.remove('show-scroll'); // Hide button when at the top
    }
});

// =============== DARK THEME TOGGLE ===============
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme); // Apply saved theme
}

// Toggle dark theme
themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme'); // Toggle dark theme class
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark-theme'); // Save dark theme preference
    } else {
        localStorage.removeItem('theme'); // Remove dark theme preference
    }
});
