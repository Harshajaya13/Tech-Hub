// dashboard.js

let balance = 0; 

// Run this when dashboard loads
document.addEventListener('DOMContentLoaded', () => {
    loadLiveActivity();
});

// --- NEW FUNCTION: Render the Live Feed ---
function loadLiveActivity() {
    const feedContainer = document.querySelector('.feed-list');
    
    // Get data from "Database"
    const activities = JSON.parse(localStorage.getItem('activityFeed')) || [];

    if (activities.length > 0) {
        // Clear hardcoded HTML
        feedContainer.innerHTML = ''; 

        activities.forEach(item => {
            // Generate the HTML for the notification
            const html = `
                <div class="feed-item" onclick="goToChat('${item.id}')" style="cursor: pointer;">
                    <div class="avatar icon" style="background: #e1f5fe; color: #0288d1;">
                        <i class="fas fa-users"></i>
                    </div>
                    <div class="feed-text">
                        <strong>${item.reviewers.join(', ')}</strong> are reviewing <br> 
                        "${item.title}"
                    </div>
                    <span class="time">${item.timestamp}</span>
                </div>
            `;
            feedContainer.innerHTML += html;
        });
    }
}

// Function to simulate going to the chat
function goToChat(projectId) {
    // In a real app, you would pass the ID in the URL
    // window.location.href = `/chat/project.html?id=${projectId}`;
    
    // For now, let's just go to the page
    console.log("Opening chat for project ID:", projectId);
    window.location.href = 'chat/project.html'; 
}

// ... (Keep your existing Stars/Balance logic below here) ...

function updateDisplay() {
    const display = document.getElementById('starBalance');
    if(display) {
        display.innerText = balance;
        display.style.transform = "scale(1.2)";
        setTimeout(() => display.style.transform = "scale(1)", 200);
    }
}

function claimStars(amount, btnElement) {
    if(btnElement.classList.contains('disabled')) return;
    balance += amount;
    updateDisplay();
    btnElement.innerText = "Claimed";
    btnElement.classList.add('disabled');
    btnElement.style.background = "#28c840"; 
    showToast(`+${amount} Stars Added!`);
}

function showToast(message) {
    // Create toast element dynamically if it doesn't exist in HTML
    let toast = document.getElementById('toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast';
        document.body.appendChild(toast);
        // Add basic CSS for toast via JS if missing
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.right = '20px';
        toast.style.padding = '12px 24px';
        toast.style.background = '#333';
        toast.style.color = '#fff';
        toast.style.borderRadius = '8px';
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s';
    }
    
    toast.innerText = message;
    toast.style.opacity = '1';
    setTimeout(() => toast.style.opacity = '0', 3000);
}

document.addEventListener('DOMContentLoaded', () => {

    // 1. Select Elements
    const sidebarBtn = document.getElementById('sidebar-user-btn'); // The trigger
    const modal = document.getElementById('profile-modal');       // The hidden modal
    const closeBtn = document.getElementById('close-modal-btn');  // The X button
    const logoutBtn = document.getElementById('logout-btn');      // The Logout button

    // 2. Open Modal
    if (sidebarBtn) {
        sidebarBtn.addEventListener('click', () => {
            modal.classList.add('active'); // CSS makes it visible
        });
    }

    // 3. Close Modal (Click X)
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });
    }

    // 4. Close Modal (Click Outside on the dark background)
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // 5. Logout Logic
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            const confirmLogout = confirm("Are you sure you want to log out?");
            if (confirmLogout) {
                alert("Logging out...");
                // Here you can redirect to login page
                // window.location.href = 'login.html';
            }
        });
    }
});