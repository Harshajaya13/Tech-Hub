let balance = 0; // Starting Balance

// Function to update the big number with animation
function updateDisplay() {
    const display = document.getElementById('starBalance');
    display.innerText = balance;
    // Add a little 'pop' animation class
    display.style.transform = "scale(1.2)";
    setTimeout(() => display.style.transform = "scale(1)", 200);
}

// Function to Earn Stars
function claimStars(amount, btnElement) {
    if(btnElement.classList.contains('disabled')) return;

    balance += amount;
    updateDisplay();
    
    // Disable button to prevent spamming (in real app, this saves to DB)
    btnElement.innerText = "Claimed";
    btnElement.classList.add('disabled');
    btnElement.style.background = "#28c840"; // Green check
    
    showToast(`+${amount} Stars Added!`);
}

// Function to Spend Stars
function spendStars(cost) {
    if (balance >= cost) {
        balance -= cost;
        updateDisplay();
        showToast(`Redeemed! Check your email.`);
    } else {
        // Not enough money
        showToast(`Insufficient Funds! You need ${cost - balance} more stars.`);
        document.getElementById('starBalance').style.color = "red";
        setTimeout(() => document.getElementById('starBalance').style.color = "#333", 500);
    }
}

// Toast Helper
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.innerText = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}