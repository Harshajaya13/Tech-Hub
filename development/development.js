document.addEventListener('DOMContentLoaded', () => {
    // 1. Selectors
    const pivotCard = document.getElementById('fail-card');
    const backBtn = document.getElementById('back-btn');
    const progressBar = document.getElementById('progress-fill');
    const stepCounter = document.getElementById('step-counter');

    // Get all standard question cards (Steps 1-9)
    // We only need to filter out the fail-card. 
    // The "Validation Complete" card is just the last step (Step 9).
    const allQuestionCards = Array.from(document.querySelectorAll('.question-card'))
        .filter(card => card.id !== 'fail-card');
    
    // 2. State
    let currentStep = 1;
    const totalQuestions = allQuestionCards.length; // Should be 9
    let isPivotState = false; 

    // 3. Initialize
    updateUI();

    // 4. Global Functions
    window.handleChoice = function(action) {
        if (action === 'fail') {
            showPivotScreen();
        } else if (action === 'next') {
            if (currentStep < totalQuestions) {
                currentStep++;
                updateUI();
            } 
            // Note: We don't need an 'else' here because the last card (Step 9) 
            // has buttons that link to new pages, not handleChoice('next').
        }
    };

    window.prevStep = function() {
        if (isPivotState) {
            hidePivotScreen(); 
        } else if (currentStep > 1) {
            currentStep--;
            updateUI();
        } else {
            // Step 1 -> Back to Hub (change URL if needed)
            window.location.href = '/start/start.html';
        }
    };

    // 5. Core Logic
    
    function hideAll() {
        allQuestionCards.forEach(card => {
            card.classList.remove('active');
        });
        pivotCard.classList.remove('active');
    }

    function showPivotScreen() {
        isPivotState = true;
        hideAll();
        
        pivotCard.classList.add('active');
        
        // Update Nav
        backBtn.innerText = "← Let me re-think";
        
        // Update Progress (Red Warning)
        progressBar.style.backgroundColor = 'var(--accent-red)';
        // Visual indicator that progress is halted
        stepCounter.innerText = "Path Divergence";
        stepCounter.style.color = 'var(--accent-red)';
    }

    function hidePivotScreen() {
        isPivotState = false;
        // Restore color to Blue (Mac default)
        progressBar.style.backgroundColor = 'var(--accent-blue)';
        updateUI(); 
    }

    function updateUI() {
        hideAll();

        // Show current question
        const targetCard = allQuestionCards[currentStep - 1];
        if (targetCard) {
            targetCard.classList.add('active');
        }

        // Reset Colors to default Blue
        progressBar.style.backgroundColor = 'var(--accent-blue)';
        stepCounter.style.color = 'var(--text-secondary)';

        // Update Button Text
        if (currentStep === 1) {
            backBtn.innerText = "← Back to Hub";
            
        } else {
            backBtn.innerText = "← Previous";
        }

        // Calculate %
        // If we are on Step 1, show a small amount (e.g., 10%) so bar isn't empty
        // If we are on Step 9 (Final), show 100%
        let percentage = (currentStep / totalQuestions) * 100;
        
        // Optional: Make the final step green to signify completion
        if (currentStep === totalQuestions) {
            progressBar.style.backgroundColor = 'var(--accent-green)';
            stepCounter.style.color = 'var(--accent-green)';
            stepCounter.innerText = "Validation Complete";
            // Hide the 'Previous' button on the final success screen if you want:
            // backBtn.style.display = 'none'; 
        } else {
            stepCounter.innerText = `Phase ${currentStep} of ${totalQuestions}`;
        }
        
        progressBar.style.width = `${percentage}%`;
        
        // Scroll to top when changing cards
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});