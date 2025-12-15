// 1. THE DATA (Easy to edit)
const CARD_DATA = {
    "engineering": {
        label: "Branches",
        items: ["CSE / IT", "Electronics (ECE)", "Mechanical", "Civil & Others"]
    },
    "gate": {
        label: "Exam Format",
        items: ["Engg Mathematics", "General Aptitude", "Subject Core (70m)", "Mock Tests"]
    },
    "govt-prep": {
        label: "Opportunities",
        items: ["SSC CGL / CHSL", "Railways (RRB)", "Banking (IBPS)", "State PSC"]
    },
    "foundations": {
        label: "School Level",
        items: ["Class 11 Physics", "Class 12 Maths", "JEE Mains Prep", "NEET Biology"]
    },
    "interview": {
        label: "Placement Prep",
        items: ["Mock HR Round", "Aptitude Tests", "Resume Building", "Group Discussion"]
    },
    "jobs": {
        label: "Job Feeds",
        items: ["Freshers World", "LinkedIn Alerts", "Off-Campus Drives", "Internships"]
    }
};

// 2. THE INJECTION ENGINE
document.querySelectorAll('.hub-card').forEach(card => {
    // A. Wrap existing content in a container called "default-view"
    // This allows us to blur it later without removing it.
    const originalContent = card.innerHTML;
    card.innerHTML = `<div class="default-view">${originalContent}</div>`;

    // B. Get the Data
    const category = card.getAttribute('data-category');
    const data = CARD_DATA[category];

    if (data) {
        // C. Generate the Overlay HTML
        const listHTML = data.items.map(item => `
            <div class="overlay-item">
                <span>${item}</span>
                <i class="fas fa-chevron-right"></i>
            </div>
        `).join('');

        const overlayHTML = `
            <div class="card-overlay">
                <div class="overlay-header">${data.label}</div>
                <div class="overlay-list">${listHTML}</div>
                <div class="overlay-cta">Click to Explore <i class="fas fa-arrow-right"></i></div>
            </div>
        `;

        // D. Inject it inside the card (so it sits on top)
        card.insertAdjacentHTML('beforeend', overlayHTML);
    }
});