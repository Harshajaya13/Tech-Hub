// Load Progress on Page Load
document.addEventListener('DOMContentLoaded', () => {
    const savedLevel = localStorage.getItem('userLevel') || 1;
    restoreProgress(parseInt(savedLevel));
});

function verifyProject(levelId) {
    const input = document.getElementById(`input-${levelId}`);
    const btn = input.closest('.action-area').querySelector('.btn-apple');
    const link = input.value;

    // 1. Validation
    if (!link.includes('github.com')) {
        // Shake animation for error
        input.parentElement.style.border = "1px solid red";
        setTimeout(() => input.parentElement.style.border = "none", 500);
        return;
    }

    // 2. Loading State
    const originalText = btn.innerText;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    
    // 3. Simulate Backend Check (1.5s)
    setTimeout(() => {
        // 4. Success State
        markAsCompleted(levelId, btn);
        
        // 5. Unlock Next Level
        unlockNextLevel(levelId + 1);

        // 6. Save to LocalStorage
        localStorage.setItem('userLevel', levelId + 1);
        
        // 7. Update Progress Bar
        updateProgressBar(levelId + 1);

    }, 1500);
}

function markAsCompleted(levelId, btnElement) {
    // Change Button
    btnElement.innerHTML = 'Completed <i class="fas fa-check"></i>';
    btnElement.classList.add('success');
    
    // Change Card Style
    const card = document.getElementById(`card-${levelId}`);
    card.classList.remove('active');
    card.classList.add('completed');
    
    // Change Dot
    card.querySelector('.dot-indicator').innerHTML = '<i class="fas fa-check"></i>';
    card.querySelector('.badge-status').innerText = "Mission Accomplished";
}

function unlockNextLevel(nextLevelId) {
    const nextCard = document.getElementById(`card-${nextLevelId}`);
    if (nextCard) {
        // Visual Unlock Animation
        nextCard.classList.remove('locked');
        nextCard.classList.add('active');
        
        // Update Dot
        nextCard.querySelector('.dot-indicator').innerText = nextLevelId;
        nextCard.querySelector('.dot-indicator').innerHTML = nextLevelId; // remove lock icon
        
        // Enable Input
        const input = nextCard.querySelector('input');
        input.placeholder = "Paste repo link...";
        input.disabled = false;
        
        const btn = nextCard.querySelector('.btn-apple');
        btn.classList.remove('disabled');
        btn.setAttribute('onclick', `verifyProject(${nextLevelId})`);
    }
}

function restoreProgress(level) {
    // Loop through all previous levels to mark them complete
    for (let i = 1; i < level; i++) {
        const btn = document.querySelector(`#card-${i} .btn-apple`);
        markAsCompleted(i, btn);
        document.getElementById(`input-${i}`).value = "https://github.com/project-done"; // Mock data
    }
    // Unlock the current level
    unlockNextLevel(level);
    updateProgressBar(level);
}

function updateProgressBar(level) {
    const percentage = (level / 4) * 100;
    document.getElementById('mainProgressBar').style.width = `${percentage}%`;
    document.getElementById('currentLevelDisplay').innerText = level > 4 ? 4 : level;
}