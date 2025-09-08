/* All the code inside the <script> tags goes into this file */

function showPage(pageId) {
    // Hide all page divs
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    // Show the selected page
    const activePage = document.getElementById('page-' + pageId);
    if (activePage) {
        activePage.style.display = 'block';
    }

    // Update active nav link
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    const activeLink = document.getElementById('nav-' + pageId);
    if (activeLink) {
        activeLink.classList.add('active');
    }

    // --- NEW ---
    // Add a class to the main container when the homepage is active.
    // This allows the CSS to target it for the special edge effect.
    const container = document.querySelector('.container');
    if (container) {
        if (pageId === 'about') {
            container.classList.add('home-active');
        } else {
            container.classList.remove('home-active');
        }
    }
}

// Show the initial page on load
document.addEventListener('DOMContentLoaded', function() {
    showPage('about');
});

