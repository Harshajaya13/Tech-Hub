document.addEventListener('DOMContentLoaded', () => {
    
    // Updated Selectors to match the Apple Style HTML
    const gridContainer = document.getElementById('main-grid');
    const headerTitle = document.querySelector('.hub-header h1');
    const headerSubtitle = document.querySelector('.hub-header p');
    const cards = document.querySelectorAll('.hub-card');

    // --- 1. CONFIGURATION ---
    // Added 'colorClass' so sub-menus match the parent theme
    const pathConfig = {
        'engineering': {
            title: "Engineering Stream",
            subtitle: "Select your specialization.",
            colorClass: "bg-blue", 
            options: [
                { id: 'cse', icon: 'fas fa-laptop-code', title: 'CSE', desc: 'Computer Science' },
                { id: 'csm', icon: 'fas fa-robot', title: 'CSM', desc: 'AI & Machine Learning' },
                { id: 'ece', icon: 'fas fa-satellite-dish', title: 'ECE', desc: 'Electronics & Comm.' },
                { id: 'mech', icon: 'fas fa-cogs', title: 'Mechanical', desc: 'Machines & Design' }
            ]
        },
        'gate': {
            title: "GATE Preparation",
            subtitle: "Targeting PSU Jobs & M.Tech.",
            colorClass: "bg-purple",
            options: [
                { id: 'gate-cs', icon: 'fas fa-calculator', title: 'CS & IT', desc: 'Algorithms & Logic' },
                { id: 'gate-ec', icon: 'fas fa-microchip', title: 'Electronics', desc: 'Circuits & Signals' },
                { id: 'gate-me', icon: 'fas fa-industry', title: 'Mechanical', desc: 'Thermodynamics' }
            ]
        },
        'govt-prep': {
            title: "Government Exams",
            subtitle: "Stability, Service, and Rank.",
            colorClass: "bg-orange",
            options: [
                { id: 'ssc', icon: 'fas fa-flag', title: 'SSC CGL', desc: 'Staff Selection' },
                { id: 'bank', icon: 'fas fa-university', title: 'Banking', desc: 'PO & Clerk' },
                { id: 'rail', icon: 'fas fa-train', title: 'Railways', desc: 'RRB NTPC' }
            ]
        }
        // Add other categories here...
    };

    // --- 2. EVENT LISTENERS ---
    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Get the category from the clicked element
            const category = this.getAttribute('data-category');
            
            if (pathConfig[category]) {
                morphInterface(pathConfig[category]);
            } else {
                // If we haven't configured it yet (like "Foundations")
                alert("This section is coming soon! 🚧");
            }
        });
    });

    // --- 3. THE MORPHING ENGINE ---
    function morphInterface(data) {
        // 1. Fade Out
        gridContainer.style.opacity = '0';
        document.querySelector('.hub-header').style.opacity = '0';

        setTimeout(() => {
            // 2. Update Header Text
            headerTitle.innerText = data.title;
            headerSubtitle.innerText = data.subtitle;

            // 3. Generate New Cards (Using the Apple Style HTML Structure)
            let htmlContent = '';
            
            data.options.forEach(opt => {
                // Note: We inject the specific icon class and the parent color class
                htmlContent += `
                    <a href="javascript:void(0)" class="hub-card" onclick="handleSubSelection('${opt.id}')">
                        <div class="app-icon ${data.colorClass}">
                            <i class="${opt.icon}"></i>
                        </div>
                        <div class="card-content">
                            <h3>${opt.title}</h3>
                            <p>${opt.desc}</p>
                        </div>
                        <i class="fas fa-chevron-right arrow-indicator"></i>
                    </a>
                `;
            });

            // 4. Add Back Button (Styled as a Grey Card)
            htmlContent += `
                <a href="javascript:location.reload()" class="hub-card" style="background: #f0f0f5;">
                    <div class="app-icon" style="background: #86868b;">
                        <i class="fas fa-arrow-left"></i>
                    </div>
                    <div class="card-content">
                        <h3>Go Back</h3>
                        <p>Return to Main Menu</p>
                    </div>
                </a>
            `;

            gridContainer.innerHTML = htmlContent;

            // 5. Fade In
            gridContainer.style.opacity = '1';
            document.querySelector('.hub-header').style.opacity = '1';
            
        }, 300); // Wait 300ms for the fade-out to finish
    }
});

// --- 4. NAVIGATION HANDLER ---
function handleSubSelection(id) {
    console.log("User selected sub-branch:", id);
    alert(`Launching Dashboard for: ${id.toUpperCase()}`);
    // Example: window.location.href = `dashboard-${id}.html`;
}