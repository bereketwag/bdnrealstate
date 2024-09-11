// scripts/main.js

document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuButton = document.getElementById('close-menu');

    // Open mobile menu
    mobileMenuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('-translate-x-full');
    });

    // Close mobile menu
    closeMenuButton.addEventListener('click', function () {
        mobileMenu.classList.add('-translate-x-full');
    });
});

// JavaScript to handle loading page with a delay before showing main content
window.addEventListener('load', () => {
    setTimeout(() => {
        // Hide the loading page and show the main content
        document.getElementById('loading-page').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 3000); // Adjust the delay time (3000ms = 3 seconds)
});
