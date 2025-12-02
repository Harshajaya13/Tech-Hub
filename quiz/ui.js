// ui.js (Corrected)

document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggle-btn');
    const sidebar = document.getElementById('sidebar');

    // --- Sidebar Toggle Functionality ---
    toggleBtn.addEventListener('click', () => {
        // First, toggle the 'collapsed' class on the sidebar container
        sidebar.classList.toggle('collapsed');

        // Then, check if the sidebar is now collapsed and update the button's text
        if (sidebar.classList.contains('collapsed')) {
            // If it's collapsed, show an icon to indicate opening
            toggleBtn.textContent = '→'; 
        } else {
            // If it's expanded, show the hamburger menu icon
            toggleBtn.textContent = '☰';
        }
    });

    // --- Language Level Expansion ---
    const languageHeaders = document.querySelectorAll('.language-header');
    languageHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const list = header.nextElementSibling;
            list.classList.toggle('open');
            const icon = header.querySelector('.toggle-levels');
            icon.textContent = list.classList.contains('open') ? '-' : '+';
        });
    });
});

