document.addEventListener('DOMContentLoaded', () => {
    
    const feedContainer = document.getElementById('project-feed');

    // --- MOCK DATA ---
    const projects = [
        {
            user: "Aravind K.",
            college: "Tier-3 • Remote",
            role: "AI Engineer",
            avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Aravind",
            image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80",
            title: "AI Chatbot for Rural Healthcare",
            stats: { code: "Top 15%", activity: "High" },
            links: { linkedin: "#", github: "#" }
        }, 
        {
            user: "Sneha R.",
            college: "Gitam Univ",
            role: "Product Designer",
            avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Sneha",
            image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
            title: "College Fest UI Kit System",
            stats: { code: "Design", activity: "10 Repos" },
            links: { linkedin: "#", github: "#" }
        },
        {
            user: "Rahul M.",
            college: "NIT Warangal",
            role: "Full Stack",
            avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Rahul",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
            title: "E-Commerce Price Aggregator",
            stats: { code: "Rank 1400", activity: "Emerald" },
            links: { linkedin: "#", github: "#" }
        },
        {
            user: "Priya S.",
            college: "SRM Chennai",
            role: "Blockchain",
            avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Priya",
            image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
            title: "Decentralized Voting System",
            stats: { code: "Solidity", activity: "Active" },
            links: { linkedin: "#", github: "#" }
        }
    ];

    // --- RENDER FUNCTION ---
    function renderFeed(data) {
        feedContainer.innerHTML = ''; 

        data.forEach(project => {
            const card = document.createElement('div');
            card.className = 'app-card';

            card.innerHTML = `
                <img src="${project.image}" class="card-visual" alt="Project">
                
                <div class="card-body">
                    <div class="user-row">
                        <img src="${project.avatar}" class="avatar-small">
                        <div class="meta">
                            <h4>${project.user}</h4>
                            <p>${project.college}</p>
                        </div>
                    </div>

                    <div class="project-title">${project.title}</div>

                    <div class="stats-row">
                        <div class="stat-pill"><i class="fas fa-bolt"></i> ${project.stats.code}</div>
                        <div class="stat-pill"><i class="fas fa-code-branch"></i> ${project.stats.activity}</div>
                    </div>

                    <div class="card-actions">
                        <button class="btn-ios btn-get" onclick="window.open('${project.links.github}')">
                            Code
                        </button>
                        <button class="btn-ios btn-connect" onclick="window.open('${project.links.linkedin}')">
                            CONNECT
                        </button>
                    </div>
                </div>
            `;

            feedContainer.appendChild(card);
        });
    }

    // Initial Render
    renderFeed(projects);

    // --- SEARCH LOGIC ---
    document.getElementById('search-input').addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = projects.filter(p => 
            p.title.toLowerCase().includes(term) || 
            p.user.toLowerCase().includes(term)
        );
        renderFeed(filtered);
    });
});