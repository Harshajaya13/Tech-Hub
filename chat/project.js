document.addEventListener('DOMContentLoaded', () => {

    // --- CONFIG ---
    let isUnlocked = false;
    const linkedinBtn = document.getElementById('linkedin-btn');
    const hintText = document.getElementById('unlock-hint');
    const commentList = document.getElementById('comments-list');
    const commentCount = document.getElementById('comment-count');

    // --- MOCK DATA (Recursive Structure) ---
    const commentsData = [
        {
            id: 1,
            user: "Arjun_Dev",
            time: "2h ago",
            text: "How did you handle the latency with `OpenCV`? I'm getting ~500ms delay on the Pi 4.",
            replies: [
                {
                    id: 2,
                    user: "Rohan",
                    time: "1h ago",
                    text: "Great question. I switched to **multi-threading** for the frame capture. Also, try resizing the frame to 640x480 before processing.",
                    isAuthor: true,
                    replies: [
                         {
                            id: 3,
                            user: "Arjun_Dev",
                            time: "45m ago",
                            text: "Ah, the resizing trick! That worked. Thanks!",
                            replies: []
                        }
                    ]
                }
            ]
        },
        {
            id: 4,
            user: "SarahW",
            time: "5h ago",
            text: "Is the dataset public? I'd love to try this on a different model.",
            replies: []
        }
    ];

    // Update count
    commentCount.innerText = "4";

    // --- RENDER ENGINE (Recursive) ---
    function renderComments() {
        commentList.innerHTML = commentsData.map(comment => createCommentHTML(comment)).join('');
    }

    function createCommentHTML(data) {
        // Recursively generate HTML for replies
        const repliesHTML = data.replies && data.replies.length > 0 
            ? `<div class="thread-container">${data.replies.map(reply => createCommentHTML(reply)).join('')}</div>`
            : '';

        return `
            <div class="comment-root new-comment">
                <div class="comment-node">
                    <div class="comment-meta">
                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=${data.user}" class="avatar-small">
                        <span class="user-name">${data.user}</span>
                        ${data.isAuthor ? '<span class="is-author">OP</span>' : ''}
                        <span class="meta-divider">•</span>
                        <span class="time-ago">${data.time}</span>
                    </div>
                    
                    <div class="comment-text">
                        ${formatText(data.text)}
                    </div>

                    <div class="comment-actions">
                        <div class="action-btn"><i class="fas fa-arrow-up"></i> Upvote</div>
                        <div class="action-btn"><i class="fas fa-comment-alt"></i> Reply</div>
                    </div>
                </div>
                ${repliesHTML}
            </div>
        `;
    }

    // Simple Markdown Formatter
    function formatText(text) {
        let formatted = text
            .replace(/`([^`]+)`/g, '<code class="mac-code">$1</code>') // Code
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // Bold
        return formatted;
    }

    // --- ACTIONS ---
    window.postComment = function() {
        const input = document.getElementById('user-comment');
        if(input.value.length < 5) {
            alert("Please type a bit more...");
            return;
        }

        // Add to top of list for demo
        const newComment = {
            id: Date.now(),
            user: "You",
            time: "Just now",
            text: input.value,
            replies: []
        };
        
        commentsData.unshift(newComment);
        renderComments();
        input.value = '';
        
        // Unlock Logic
        unlockLinkedIn();
    };

    function unlockLinkedIn() {
        if(isUnlocked) return;
        isUnlocked = true;
        
        // Visual Transformation
        linkedinBtn.classList.remove('btn-locked');
        linkedinBtn.classList.add('btn-unlocked');
        linkedinBtn.innerHTML = '<i class="fab fa-linkedin"></i> Connect';
        
        // Hide Hint
        hintText.style.opacity = '0';
        setTimeout(() => hintText.style.display = 'none', 500);
    }

    window.handleConnectClick = function() {
        if(!isUnlocked) return;
        alert("Redirecting to LinkedIn Profile...");
    };

    // Auto-unlock after 10 seconds reading time
    setTimeout(() => {
        if(!isUnlocked) {
            unlockLinkedIn();
            console.log("Unlocked via timer");
        }
    }, 10000);

    // Initial Render
    renderComments();
});