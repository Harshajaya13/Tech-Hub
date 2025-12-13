// --- STATE MANAGEMENT ---
let isUnlocked = false; // Initially locked
const linkedinBtn = document.getElementById('linkedin-btn');
const hintText = document.getElementById('unlock-hint');
const commentList = document.getElementById('comments-list');

// --- 1. MOCK DATA (The Threaded Structure) ---
const commentsData = [
    {
        id: 1,
        user: "Arjun_Dev",
        time: "2 hours ago",
        text: "How did you handle the latency with `OpenCV`? I'm getting 500ms delay.",
        replies: [
            {
                id: 2,
                user: "Rohan (Author)",
                time: "1 hour ago",
                text: "Good question! I switched to multi-threading for the frame capture. Check line 45 in the repo.",
                isAuthor: true
            }
        ]
    }
];

// --- 2. RENDER ENGINE ---
function renderComments() {
    commentList.innerHTML = '';
    
    commentsData.forEach(comment => {
        const commentHTML = createCommentHTML(comment);
        commentList.innerHTML += commentHTML;
    });
}

function createCommentHTML(data) {
    // Check if there are replies
    let repliesHTML = '';
    if(data.replies && data.replies.length > 0) {
        data.replies.forEach(reply => {
            repliesHTML += `
                <div class="comment-item">
                    <div class="comment-main">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${reply.user}" class="avatar">
                        <div class="comment-content" style="${reply.isAuthor ? 'border: 1px solid #fcd34d; background:#fffbeb;' : ''}">
                            <span class="username">${reply.user} <span class="timestamp">${reply.time}</span></span>
                            <p>${formatText(reply.text)}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    return `
        <div class="comment-item">
            <div class="comment-main">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${data.user}" class="avatar">
                <div class="comment-content">
                    <span class="username">${data.user} <span class="timestamp">${data.time}</span></span>
                    <p>${formatText(data.text)}</p>
                    <div class="comment-actions">
                        <span class="action-link">⬆ Upvote</span>
                        <span class="action-link" onclick="alert('Reply feature coming in Phase 4 Hackathon!')">Reply</span>
                    </div>
                </div>
            </div>
            <div class="replies-container">
                ${repliesHTML}
            </div>
        </div>
    `;
}

// Simple text formatter for Code (Matches text between backticks)
function formatText(text) {
    return text.replace(/`([^`]+)`/g, '<code>$1</code>');
}

// --- 3. THE SPAM SHIELD LOGIC ---
function postComment() {
    const input = document.getElementById('user-comment');
    if(input.value.length < 5) {
        alert("Please ask a valid doubt (min 5 chars).");
        return;
    }

    // Add new comment visually
    const newComment = {
        id: Date.now(),
        user: "You",
        time: "Just now",
        text: input.value,
        replies: []
    };
    commentsData.push(newComment);
    renderComments();
    input.value = '';

    // UNLOCK THE REWARD
    unlockLinkedIn();
}

function unlockLinkedIn() {
    if(isUnlocked) return;
    
    isUnlocked = true;
    linkedinBtn.classList.remove('locked-btn');
    linkedinBtn.classList.add('unlocked-btn');
    linkedinBtn.innerHTML = '<i class="fab fa-linkedin"></i> Connect on LinkedIn';
    hintText.innerText = "✅ Unlocked! You've earned this connection.";
    hintText.style.color = "#10b981";
}

function handleConnectClick() {
    if(!isUnlocked) {
        alert("🔒 Build trust first! Post a genuine doubt or read the project details to unlock this connection.");
    } else {
        window.open('https://linkedin.com/in/example', '_blank');
    }
}

// --- 4. ALTERNATIVE UNLOCK (Time Based) ---
// If user stays on page for 10 seconds (reading), unlock it automatically
setTimeout(() => {
    if(!isUnlocked) {
        unlockLinkedIn();
        console.log("Unlocked via Reading Time");
    }
}, 10000); // 10 seconds for demo

// Init
renderComments();