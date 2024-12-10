const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const themeToggle = document.getElementById('theme-toggle');

// Menú móvil
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Cambiar entre modo claro y oscuro
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggle.textContent = document.body.classList.contains('dark-mode') ? 'Modo Claro' : 'Modo Oscuro';
});



