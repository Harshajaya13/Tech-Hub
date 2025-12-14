document.addEventListener('DOMContentLoaded', () => {
    
    // Selectors
    const gridContainer = document.getElementById('main-grid');
    const headerTitle = document.querySelector('.hub-header h1');
    const headerSubtitle = document.querySelector('.hub-header p');
    const cards = document.querySelectorAll('.hub-card[data-category]');

    // --- CONFIGURATION (Add your real HTML filenames here) ---
    const pathConfig = {
        'engineering': {
            title: "Engineering Stream",
            subtitle: "Select your specialization.",
            colorClass: "bg-blue", 
            options: [
                { icon: 'fas fa-laptop-code', title: 'CSE', desc: 'Computer Science', url: '/start/start.html' },
                { icon: 'fas fa-robot', title: 'CSM', desc: 'AI & Machine Learning', url: '/start/start.html' },
                { icon: 'fas fa-satellite-dish', title: 'ECE', desc: 'Electronics', url: 'course-ece.html' },
                { icon: 'fas fa-cogs', title: 'Mechanical', desc: 'Machines & Design', url: 'course-mech.html' }
            ]
        },
        'gate': {
            title: "GATE Preparation",
            subtitle: "Master the concepts.",
            colorClass: "bg-purple",
            options: [
                { icon: 'fas fa-calculator', title: 'CS & IT', desc: 'Algorithms & Logic', url: 'gate-cs.html' },
                { icon: 'fas fa-microchip', title: 'Electronics', desc: 'Circuits & Signals', url: 'gate-ec.html' }
            ]
        },
        'govt-prep': {
            title: "Government Exams",
            subtitle: "Service and Stability.",
            colorClass: "bg-orange",
            options: [
                { icon: 'fas fa-flag', title: 'SSC CGL', desc: 'Staff Selection', url: 'govt-ssc.html' },
                { icon: 'fas fa-university', title: 'Banking', desc: 'PO & Clerk', url: 'govt-bank.html' }
            ]
        }
    };

    // --- CLICK LISTENER ---
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault(); // Stop the link from jumping immediately
            const category = this.getAttribute('data-category');
            
            if (pathConfig[category]) {
                morphInterface(pathConfig[category]);
            }
        });
    });

    // --- THE RENDERER ---
    function morphInterface(data) {
        // 1. Smooth Fade Out
        gridContainer.style.opacity = '0';
        gridContainer.style.transform = 'translateY(10px)'; // Subtle drop effect

        setTimeout(() => {
            // 2. Update Header
            headerTitle.innerText = data.title;
            headerSubtitle.innerText = data.subtitle;

            // 3. Build New Cards (Using actual hrefs)
            let htmlContent = '';
            
            data.options.forEach(opt => {
                htmlContent += `
                    <a href="${opt.url}" class="hub-card animate-card">
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

            // 4. Back Button
            htmlContent += `
                <a href="javascript:location.reload()" class="hub-card animate-card back-card">
                    <div class="app-icon" style="background: #e5e5ea; color: #1d1d1f;">
                        <i class="fas fa-arrow-left"></i>
                    </div>
                    <div class="card-content">
                        <h3>Go Back</h3>
                        <p>Main Menu</p>
                    </div>
                </a>
            `;

            gridContainer.innerHTML = htmlContent;

            // 5. Smooth Fade In
            gridContainer.style.opacity = '1';
            gridContainer.style.transform = 'translateY(0)';
            
        }, 300);
    }
});