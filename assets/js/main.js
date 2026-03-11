// Detect base path for assets and links
const isInsidePages = window.location.pathname.includes('/pages/');
const pathPrefix = isInsidePages ? '../' : '';

// Mobile menu toggle logic
const menuIcon = document.getElementById('menu-icon');
const sidebar = document.getElementById('sidebar');
const menuOverlay = document.getElementById('overlay-menu');

if (menuIcon && sidebar && menuOverlay) {

    // Close mobile menu and restore page scroll
    function closeMenu() {
        menuIcon.classList.replace('fa-xmark', 'fa-bars');
        sidebar.classList.replace('left-0', 'left-[-90px]');
        menuOverlay.classList.replace('flex', 'hidden');
        document.body.classList.remove('overflow-hidden');
    }

    // Toggle menu open / close
    menuIcon.addEventListener('click', () => {
        if (menuIcon.classList.contains('fa-bars')) {
            menuIcon.classList.replace('fa-bars', 'fa-xmark');
            sidebar.classList.replace('left-[-90px]', 'left-0');
            menuOverlay.classList.replace('hidden', 'flex');
            document.body.classList.add('overflow-hidden');
        } else {
            closeMenu();
        }
    });

    // Close menu when clicking overlay
    menuOverlay.addEventListener('click', closeMenu);

    // Close menu when navigating through sidebar links
    const navLinks = sidebar.querySelectorAll('a');
    navLinks.forEach(link => link.addEventListener('click', closeMenu));
}

// Technology carousel animation
document.addEventListener('DOMContentLoaded', () => {

    const carousel = document.querySelector('aside ul');
    const container = document.querySelector('aside');

    if (carousel && container) {

        // Duplicate items to create infinite scroll effect
        const items = carousel.innerHTML;
        carousel.innerHTML = items + items;

        // Switch animation direction depending on screen size
        const handleAnimation = () => {
            const isDesktop = window.innerWidth >= 1280;

            if (isDesktop) {
                carousel.classList.replace('animate-scroll-x-reverse', 'animate-scroll-y-reverse');
                carousel.style.flexDirection = 'column';
            } else {
                carousel.classList.replace('animate-scroll-y-reverse', 'animate-scroll-x-reverse');
                carousel.style.flexDirection = 'row';
            }
        };

        handleAnimation();
        window.addEventListener('resize', handleAnimation);

        // Container helper class for styling / masking
        container.classList.add('tech-carousel-container');
    }
});

// Dynamic footer year
const currentYear = document.getElementById('current-year');

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// Back to top button behavior
const initBackToTop = () => {

    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    // Show / hide button depending on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.remove('translate-y-[100px]', 'opacity-0');
            btn.classList.add('translate-y-0', 'opacity-100');
        } else {
            btn.classList.add('translate-y-[100px]', 'opacity-0');
            btn.classList.remove('translate-y-0', 'opacity-100');
        }
    });

    // Smooth scroll to top
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
};

// Initialize back-to-top after full page load
window.addEventListener('load', initBackToTop);