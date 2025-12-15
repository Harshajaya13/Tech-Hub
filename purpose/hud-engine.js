/* --- DATA CONFIGURATION --- */
const CARD_DATA = {
    "engineering": {
        label: "Branches",
        items: ["CSE / IT", "Electronics (ECE)", "Mechanical", "Civil & Others"]
    },
    "gate": {
        label: "Exam Format",
        items: ["Mathematics", "General Aptitude", "Core Subject", "Mock Tests"]
    },
    "govt-prep": {
        label: "Exams",
        items: ["SSC CGL", "Railways (RRB)", "Banking (IBPS)", "State PSC"]
    },
    "foundations": {
        label: "Classes",
        items: ["Class 11", "Class 12", "IIT JEE", "NEET Prep"]
    },
    "interview": {
        label: "Preparation",
        items: ["Mock HR", "Aptitude", "Resume Building", "Group Discussion"]
    },
    "jobs": {
        label: "Job Portal",
        items: ["Freshers World", "LinkedIn Alerts", "Off-Campus", "Internships"]
    }
};

/* --- INITIALIZATION --- */
document.addEventListener('DOMContentLoaded', () => {
    
    document.querySelectorAll('.hub-card').forEach(card => {
        // 1. Wrap existing content 
        const originalContent = card.innerHTML;
        card.innerHTML = `<div class="default-view">${originalContent}</div>`;

        // 2. Get Data
        const category = card.getAttribute('data-category');
        const data = CARD_DATA[category];

        if (data) {
            // 3. Generate Content
            const listHTML = data.items.map(item => `
                <div class="overlay-item">
                    <span>${item}</span>
                    <i class="fas fa-chevron-right"></i>
                </div>
            `).join('');

            const overlayHTML = `
                <div class="mobile-toggle">
                    <i class="fas fa-plus"></i>
                </div>

                <div class="card-overlay">
                    <div class="overlay-header">${data.label}</div>
                    <div class="overlay-list">${listHTML}</div>
                    <div class="overlay-cta">
                        Explore Workspace <i class="fas fa-arrow-right"></i>
                    </div>
                </div>
            `;
            
            // 4. Inject
            card.insertAdjacentHTML('beforeend', overlayHTML);

            // 5. MOBILE LOGIC (The (+) Button)
            const toggleBtn = card.querySelector('.mobile-toggle');
            if (toggleBtn) {
                toggleBtn.addEventListener('click', (e) => {
                    // Stop the click from bubbling to the link
                    e.preventDefault(); 
                    e.stopPropagation(); 
                    
                    // Close other cards
                    document.querySelectorAll('.hub-card').forEach(c => {
                        if(c !== card) c.classList.remove('mobile-active');
                    });
                    
                    // Toggle this card
                    card.classList.toggle('mobile-active');
                });
            }
        }
    });

    // 6. GLOBAL CLICK LISTENER (To close cards when clicking outside)
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.hub-card')) {
            document.querySelectorAll('.hub-card').forEach(c => {
                c.classList.remove('mobile-active');
            });
        }
    });
});