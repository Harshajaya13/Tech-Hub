const chatWindow = document.getElementById('chat-window');
const messagesContainer = document.getElementById('ai-messages');
const notifDot = document.getElementById('ai-notif');

// 1. Toggle Open/Close
function toggleChat() {
    const isHidden = chatWindow.style.display === 'none' || chatWindow.style.display === '';
    chatWindow.style.display = isHidden ? 'flex' : 'none';
    if(isHidden) notifDot.style.display = 'none'; // Clear notification when opened
}

// 2. Add Message to UI
function addMessage(text, sender) {
    const div = document.createElement('div');
    div.classList.add('msg', sender);
    div.innerText = text;
    messagesContainer.appendChild(div);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Auto scroll
}

// 3. SIMULATED EMPATHY (The "Check-in")
// Trigger this 3 seconds after page load
setTimeout(() => {
    // You can customize this message based on the page/context
    const empathyMsg = "Hey! 👋 I noticed you've been on the 'Data Structures' module for a while. It's a tough topic! Do you want a quick 5-minute summary before you start?";
    
    addMessage(empathyMsg, 'ai');
    notifDot.style.display = 'flex'; // Show notification
}, 3000);

// 4. Handle User Input
function sendMessage() {
    const input = document.getElementById('user-input');
    const text = input.value;
    if(!text) return;

    addMessage(text, 'user');
    input.value = '';

    // Mock Response
    setTimeout(() => {
        addMessage("That's a great question. Let me pull up the best resource for that...", 'ai');
    }, 1000);
}