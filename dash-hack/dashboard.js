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


document.addEventListener('DOMContentLoaded', () => {
    updateDashboardAuth();
});

// --- In dashboard.js ---

document.addEventListener('DOMContentLoaded', () => {
    updateDashboardAuth();
});
document.addEventListener('DOMContentLoaded', () => {
    updateDashboardAuth();
});

function updateDashboardAuth() {
    const rawSession = sessionStorage.getItem('activeSession');
    const userContainer = document.getElementById('user-container');
    const heroGreeting = document.getElementById('hero-greeting');

    // --- 1. GUEST MODE ---
    if (!rawSession) {
        if (heroGreeting) heroGreeting.innerText = "Guest";
        
        // Show Sign In Button in Sidebar
        if (userContainer) {
            userContainer.innerHTML = `
                <a href="/login/login.html" class="nav-item" style="background: #0071e3; color: white; justify-content: center;">
                    <i class="fas fa-sign-in-alt"></i> Sign In
                </a>
            `;
        }
        return; // Stop here if guest
    }

    // --- 2. LOGGED IN MODE ---
    const user = JSON.parse(rawSession);
    
    // Update Hero Text
    if (heroGreeting) heroGreeting.innerText = user.username.split(" ")[0];

    // Inject User Card into Sidebar
    if (userContainer) {
        userContainer.innerHTML = `
            <div class="user-card" id="sidebar-user-btn" style="cursor: pointer;">
                <img src="https://api.dicebear.com/7.x/notionists/svg?seed=${user.username}&backgroundColor=lightblue&radius=50" alt="User">
                <div class="user-info">
                    <strong>${user.username}</strong>
                    <span>${user.level}</span>
                </div>
                <i class="fas fa-chevron-right arrow"></i>
            </div>
        `;
    }

    // --- 3. CONNECT THE MODAL ---
    const sidebarBtn = document.getElementById('sidebar-user-btn');
    const modal = document.getElementById('profile-modal');
    const closeModalBtn = document.getElementById('close-modal-btn');
    const logoutBtn = document.getElementById('logout-btn');

    // A. OPEN MODAL (Click Sidebar Card)
    if (sidebarBtn && modal) {
        sidebarBtn.addEventListener('click', () => {
            // Update Modal Text dynamically before showing it
            const modalName = modal.querySelector('h2');
            const modalLevel = modal.querySelector('p');
            const modalImg = modal.querySelector('img');

            if(modalName) modalName.innerText = user.username;
            if(modalLevel) modalLevel.innerText = user.level;
            if(modalImg) modalImg.src = `https://api.dicebear.com/7.x/notionists/svg?seed=${user.username}&backgroundColor=lightblue&radius=50`;

            // Show the modal (Add your CSS class for visible, e.g., 'active')
            modal.classList.add('active'); 
            modal.style.display = 'flex'; // Ensure it's visible if you use display:none
        });
    }

    // B. CLOSE MODAL (Click X button)
    if (closeModalBtn && modal) {
        closeModalBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            modal.style.display = 'none';
        });
    }

    // C. CLOSE MODAL (Click Outside)
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            modal.style.display = 'none';
        }
    });

    // D. LOGOUT LOGIC
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            const confirmLogout = confirm("Are you sure you want to log out?");
            if (confirmLogout) {
                // 1. Clear Session
                sessionStorage.removeItem('activeSession');
                
                // 2. Refresh Page (will load as Guest)
                window.location.reload(); 
                
                // OR Redirect to Login:
                // window.location.href = 'login/login.html';
            }
        });
    }
}