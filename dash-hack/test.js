// test.js

// --- 1. THE "DATABASE" (Scalable Schema) ---
// In the future, this comes from an API call like: fetch('/api/user/roadmap')
const defaultRoadmap = [
    {
        id: 1,
        title: "The Cine-Verse Dashboard",
        category: "React Basics",
        desc: "Build a Netflix clone. Fetch data from TMDB API.",
        status: "active", // active, pending, completed, locked
        repoLink: null,
        reviewId: null
    },
    {
        id: 2,
        title: "The Kanban Board",
        category: "State Management",
        desc: "Drag and Drop Trello clone. Master complex state.",
        status: "locked",
        repoLink: null,
        reviewId: null
    },
    {
        id: 3,
        title: "Real-Time Chat App",
        category: "Advanced Hooks",
        desc: "WebSockets and Polling. Build a chat room.",
        status: "locked",
        repoLink: null,
        reviewId: null
    }
];

// User Profile State
let userProfile = {
    level: 1,
    isReviewer: false // Becomes true when Level >= 3
};

// --- 2. INITIALIZATION ---

document.addEventListener('DOMContentLoaded', () => {
    // Load from LocalStorage or use Default
    const savedData = localStorage.getItem('userRoadmap');
    const roadmapState = savedData ? JSON.parse(savedData) : defaultRoadmap;
    
    // Render the UI based on State
    renderRoadmap(roadmapState);
    checkReviewerPrivileges(roadmapState);
});

// --- 3. RENDERING ENGINE (Scalable UI) ---

function renderRoadmap(data) {
    const container = document.querySelector('.timeline-wrapper');
    const existingHTML = container.innerHTML; 
    // Note: In a real React app, we'd map through data. 
    // Here, we maintain your "Peak HTML" by just updating the DOM elements that exist.
    
    data.forEach(project => {
        const card = document.getElementById(`card-${project.id}`);
        const input = document.getElementById(`input-${project.id}`);
        const btn = card.querySelector('.btn-apple');
        const statusBadge = card.querySelector('.badge-status');
        const dot = card.querySelector('.dot-indicator');

        // Reset Classes
        card.className = `level-card ${project.status}`;
        
        // Handle States
        if (project.status === 'locked') {
            btn.classList.add('disabled');
            input.disabled = true;
            input.placeholder = "Locked";
            dot.innerHTML = `<i class="fas fa-lock"></i>`;
        } 
        else if (project.status === 'active') {
            btn.classList.remove('disabled');
            btn.innerHTML = `<span>Verify</span>`;
            btn.onclick = () => submitProject(project.id);
            input.disabled = false;
            input.placeholder = "Paste repo link...";
            dot.innerText = project.id;
        } 
        else if (project.status === 'pending') {
            // THE NEW "COMMUNITY CHECK" STATE
            btn.innerHTML = `<span><i class="fas fa-clock"></i> In Review</span>`;
            btn.classList.add('disabled'); // Can't submit again
            btn.style.background = "#f5a623"; // Orange for pending
            input.value = project.repoLink;
            input.disabled = true;
            statusBadge.innerText = "Community Verifying...";
            statusBadge.style.background = "#fff3cd";
            statusBadge.style.color = "#856404";
            dot.innerHTML = `<i class="fas fa-hourglass-half"></i>`;
        } 
        else if (project.status === 'completed') {
            btn.innerHTML = `<span>Completed <i class="fas fa-check"></i></span>`;
            btn.classList.add('success');
            input.value = project.repoLink;
            input.disabled = true;
            statusBadge.innerText = "Mission Accomplished";
            statusBadge.style.background = "#d4edda";
            statusBadge.style.color = "#155724";
            dot.innerHTML = `<i class="fas fa-check"></i>`;
        }
    });

    updateProgressBar(data);
}

// --- 4. CORE LOGIC (Submission & Verification) ---

// Inside test.js

function submitProject(id) {
    const input = document.getElementById(`input-${id}`);
    const link = input.value;

    if (!link.includes('github.com')) {
        alert("Please submit a valid GitHub link.");
        return;
    }

    const roadmap = getRoadmapState();
    const projectIndex = roadmap.findIndex(p => p.id === id);
    
    // UPDATE STATE
    roadmap[projectIndex].status = 'pending';
    roadmap[projectIndex].repoLink = link;
    roadmap[projectIndex].approvals = 0; // <--- RESET APPROVALS TO 0 ON SUBMIT
    
    saveState(roadmap);
    renderRoadmap(roadmap);

    alert("Project submitted! Waiting for 3 community reviews.");
}

function simulateSeniorApproval(id) {
    const roadmap = getRoadmapState();
    const projectIndex = roadmap.findIndex(p => p.id === id);
    
    // Mark Current as Completed
    roadmap[projectIndex].status = 'completed';
    
    // Unlock Next Level (if exists)
    if (roadmap[projectIndex + 1]) {
        roadmap[projectIndex + 1].status = 'active';
    }

    saveState(roadmap);
    renderRoadmap(roadmap);
    
    // Check if user is now eligible to be a reviewer
    checkReviewerPrivileges(roadmap);
    
    // Notify User
    // In real app, this would be a notification in dashboard
    alert(`🎉 Your Project "${roadmap[projectIndex].title}" was approved by the community! Level ${id + 1} Unlocked.`);
}

// --- 5. THE "REVIEWER" LOGIC (Gatekeeping) ---

function checkReviewerPrivileges(roadmap) {
    // Logic: If user has completed 2 projects, they can review others
    const completedCount = roadmap.filter(p => p.status === 'completed').length;
    
    if (completedCount >= 2) {
        userProfile.isReviewer = true;
        showReviewerButton();
    }
}

function showReviewerButton() {
    // Check if button already exists
    if(document.getElementById('reviewerBtn')) return;

    // Create a floating action button for Senior Devs
    const btn = document.createElement('button');
    btn.id = 'reviewerBtn';
    btn.className = 'reviewer-fab';
    btn.innerHTML = `<i class="fas fa-glasses"></i> Review Queue <span class="badge">3</span>`;
    btn.onclick = () => window.location.href = '/review/queue.html'; // Future page
    
    document.body.appendChild(btn);
}

// --- Helpers ---

function getRoadmapState() {
    const saved = localStorage.getItem('userRoadmap');
    return saved ? JSON.parse(saved) : defaultRoadmap;
}

function saveState(data) {
    localStorage.setItem('userRoadmap', JSON.stringify(data));
    updateProgressBar(data);
}

function updateProgressBar(data) {
    const completed = data.filter(p => p.status === 'completed').length;
    const total = data.length;
    const percentage = (completed / total) * 100;
    
    document.getElementById('mainProgressBar').style.width = `${percentage}%`;
    document.getElementById('currentLevelDisplay').innerText = completed + 1;
}