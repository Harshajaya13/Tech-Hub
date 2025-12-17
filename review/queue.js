document.addEventListener('DOMContentLoaded', () => {
    loadQueue();
});

function loadQueue() {
    const roadmap = JSON.parse(localStorage.getItem('userRoadmap')) || [];
    // Filter for PENDING projects
    const pendingProjects = roadmap.filter(p => p.status === 'pending');
    updateUI(pendingProjects);
}

function updateUI(projects) {
    const container = document.getElementById('queueContainer');
    const countLabel = document.getElementById('queueCount');
    
    // Update header count
    if(countLabel) countLabel.innerText = `${projects.length} Pending`;

    // Empty State
    if (projects.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon"><i class="fas fa-check-circle"></i></div>
                <p>All caught up! No projects pending review.</p>
            </div>`;
        return;
    }

    container.innerHTML = '';
    
    projects.forEach(project => {
        // Default approvals to 0 if not present
        const currentApprovals = project.approvals || 0;
        const requiredApprovals = 3;
        const progressPercent = (currentApprovals / requiredApprovals) * 100;

        const card = document.createElement('div');
        card.className = 'review-card';
        
        card.innerHTML = `
            <div class="card-meta">
                <span class="level-tag">Level ${project.id}</span>
                <span class="timestamp">Submitted just now</span>
            </div>
            
            <h3 class="card-title">${project.title}</h3>
            <p class="card-desc">${project.desc}</p>
            
            <a href="${project.repoLink}" target="_blank" class="repo-link-box">
                <i class="fab fa-github repo-icon"></i>
                <div class="repo-text">${project.repoLink}</div>
                <i class="fas fa-external-link-alt" style="font-size: 0.8rem; color: #999;"></i>
            </a>

            <div style="margin-bottom: 20px;">
                <div style="display: flex; justify-content: space-between; font-size: 0.85rem; color: #86868b; margin-bottom: 6px;">
                    <span>Community Consensus</span>
                    <strong>${currentApprovals} / ${requiredApprovals} Votes</strong>
                </div>
                <div style="height: 6px; background: #E5E5EA; border-radius: 4px; overflow: hidden;">
                    <div style="width: ${progressPercent}%; height: 100%; background: #34C759; transition: width 0.3s ease;"></div>
                </div>
            </div>

            <div class="action-row">
                <button class="btn btn-reject" onclick="rejectProject(${project.id})">
                    <i class="fas fa-times"></i> Reject
                </button>
                <button class="btn btn-approve" onclick="addVote(${project.id})">
                    <i class="fas fa-thumbs-up"></i> Approve (+1)
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

function addVote(id) {
    let roadmap = JSON.parse(localStorage.getItem('userRoadmap'));
    const index = roadmap.findIndex(p => p.id === id);
    
    if(index !== -1) {
        // Initialize if undefined
        if (!roadmap[index].approvals) roadmap[index].approvals = 0;

        // 1. Increment Vote
        roadmap[index].approvals += 1;
        
        // 2. Check if Consensus Reached (3 Votes)
        if (roadmap[index].approvals >= 3) {
            roadmap[index].status = 'completed';
            
            // Unlock next level
            if(roadmap[index + 1]) {
                roadmap[index + 1].status = 'active';
            }
            alert("🎉 Consensus Reached! Project formally approved.");
        } else {
            alert(`Vote Recorded! (${roadmap[index].approvals}/3 needed)`);
        }

        // 3. Save and Refresh
        localStorage.setItem('userRoadmap', JSON.stringify(roadmap));
        loadQueue();
    }
}

function rejectProject(id) {
    let roadmap = JSON.parse(localStorage.getItem('userRoadmap'));
    const index = roadmap.findIndex(p => p.id === id);
    
    if(index !== -1) {
        roadmap[index].status = 'active'; 
        roadmap[index].approvals = 0; // Reset votes on reject
        localStorage.setItem('userRoadmap', JSON.stringify(roadmap));
        loadQueue();
        alert("Project returned to user for changes.");
    }
}