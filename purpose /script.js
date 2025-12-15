/* 1. DATA CONFIGURATION */
const OVERLAY_DATA = {
    // Main Cards
    "main-eng": { label: "Select Branch", items: ["Computer Science", "Electronics (ECE)", "Mechanical Engg", "Civil Engineering"] },
    "main-gate": { label: "Select Stream", items: ["CS & IT", "Electrical (EE)", "Electronics (EC)", "Mechanical (ME)"] },
    "main-govt": { label: "Choose Exam", items: ["SSC CGL / CHSL", "IBPS Banking", "RRB Railways", "UPSC / State PSC"] },

    // Sub Cards
    "sub-cse": { label: "Syllabus Map", items: ["Data Structures", "Web Development", "Operating Systems", "Algorithms"] },
    "sub-ece": { label: "Core Subjects", items: ["Analog Circuits", "Digital Logic", "Signal & Systems", "Microprocessors"] },
    "sub-mech": { label: "Core Subjects", items: ["Thermodynamics", "Fluid Mechanics", "AutoCAD / Design", "Robotics"] },
    "sub-gate-cs": { label: "Exam Pattern", items: ["Engg Math (15%)", "Aptitude (15%)", "Core CS (70%)", "Mock Series"] },
    "sub-gate-ec": { label: "Exam Pattern", items: ["Networks (15%)", "Signals (15%)", "Analog (20%)", "Mock Series"] }
};

/* 2. VIEW SWITCHER FUNCTION */
function switchView(viewId, title, subtitle) {
    // Hide all grids
    document.querySelectorAll('.hub-grid').forEach(view => {
        view.classList.remove('active-view');
        view.classList.add('hidden-view');
    });

    // Show target grid
    const targetView = document.getElementById(viewId);
    if (targetView) {
        targetView.classList.remove('hidden-view');
        targetView.classList.add('active-view');
    }

    // Update Header Text
    document.getElementById('page-title').innerText = title;
    document.getElementById('page-subtitle').innerText = subtitle;
    
    // Clean up any open mobile cards (reset state)
    document.querySelectorAll('.hub-card').forEach(c => c.classList.remove('mobile-active'));
}

/* 3. INITIALIZATION & CONTENT INJECTION */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.hub-card').forEach(card => {
        // Skip "Go Back" buttons
        if(card.classList.contains('back-btn')) return;

        // Wrap existing content in 'default-view' for the blur effect
        const originalContent = card.innerHTML;
        card.innerHTML = `<div class="default-view">${originalContent}</div>`;

        // Check if this card has Overlay Data
        const category = card.getAttribute('data-category');
        const data = OVERLAY_DATA[category];

        if (data) {
            // Generate List Items
            const listHTML = data.items.map(item => `
                <div class="overlay-item">
                    <span>${item}</span>
                    <i class="fas fa-chevron-right"></i>
                </div>
            `).join('');

            // Create Overlay HTML
            const overlayHTML = `
                <div class="mobile-toggle"><i class="fas fa-plus"></i></div>
                <div class="card-overlay">
                    <div class="overlay-header">${data.label}</div>
                    <div class="overlay-list">${listHTML}</div>
                    <div class="overlay-cta">Tap to Open <i class="fas fa-arrow-right"></i></div>
                </div>
            `;
            card.insertAdjacentHTML('beforeend', overlayHTML);

            // Add Click Listener for the Mobile Toggle Button
            const toggle = card.querySelector('.mobile-toggle');
            if (toggle) {
                toggle.addEventListener('click', (e) => {
                    e.stopPropagation(); // Prevent card click
                    e.preventDefault();
                    
                    // Close all other cards first
                    document.querySelectorAll('.hub-card').forEach(c => {
                        if(c !== card) c.classList.remove('mobile-active');
                    });
                    
                    // Toggle this card
                    card.classList.toggle('mobile-active');
                });
            }
        }
    });
});