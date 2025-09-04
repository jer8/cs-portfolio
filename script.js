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
}

// Show the initial page on load
document.addEventListener('DOMContentLoaded', function() {
    showPage('about');
});
