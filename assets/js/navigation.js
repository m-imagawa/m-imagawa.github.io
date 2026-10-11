const navToggle = document.querySelector('.nav-toggle');
const siteMenu = document.querySelector('#site-menu');

if (navToggle && siteMenu) {
    navToggle.addEventListener('click', () => {
        const isOpen = siteMenu.classList.toggle('is-open');
        navToggle.setAttribute('aria-expanded', isOpen);
    });
}