document.addEventListener('DOMContentLoaded', () => {
    // 1. Selectors
    const pivotCard = document.getElementById('fail-card');
    const successCard = document.getElementById('success-card');
    const backBtn = document.getElementById('back-btn');
    const progressBar = document.getElementById('progress-fill');
    const stepCounter = document.getElementById('step-counter');

    // Get all standard question cards
    const allQuestionCards = Array.from(document.querySelectorAll('.question-card'))
        .filter(card => card.id !== 'fail-card' && card.id !== 'success-card');
    
    // 2. State
    let currentStep = 1;
    const totalQuestions = allQuestionCards.length;
    let isPivotState = false; 
    let isSuccessState = false;

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
            } else {
                showSuccessScreen();
            }
        }
    };

    window.prevStep = function() {
        if (isPivotState) {
            hidePivotScreen(); 
        } else if (isSuccessState) {
            isSuccessState = false;
            updateUI();
        } else if (currentStep > 1) {
            currentStep--;
            updateUI();
        } else {
            // Step 1 -> Back to Hub
            window.location.href = 'start.html';
        }
    };

    // 5. Core Logic
    
    function hideAll() {
        allQuestionCards.forEach(card => {
            card.classList.remove('active');
            // Reset animations by briefly removing class if needed
            // But usually, just display:none is enough
        });
        pivotCard.classList.remove('active');
        successCard.classList.remove('active');
    }

    function showPivotScreen() {
        isPivotState = true;
        hideAll();
        
        pivotCard.classList.add('active');
        
        // Update Nav
        backBtn.innerText = "← Let me re-think";
        
        // Update Progress (Red Warning)
        progressBar.style.backgroundColor = 'var(--accent-red)';
        progressBar.style.width = '100%'; 
        stepCounter.innerText = "Path Divergence";
        stepCounter.style.color = 'var(--accent-red)';
    }

    function hidePivotScreen() {
        isPivotState = false;
        // Restore color to Blue (Mac default)
        progressBar.style.backgroundColor = 'var(--accent-blue)';
        updateUI(); 
    }

    function showSuccessScreen() {
        isSuccessState = true;
        hideAll();

        successCard.classList.add('active');

        // Update Progress (Purple Victory)
        progressBar.style.backgroundColor = 'var(--accent-purple)';
        progressBar.style.width = '100%';
        stepCounter.innerText = "Gauntlet Complete";
        stepCounter.style.color = 'var(--accent-purple)';
        
        backBtn.innerText = "← Review Choices";
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

        // Update Text
        if (currentStep === 1) {
            backBtn.innerText = "← Back to Hub";
        } else {
            backBtn.innerText = "← Previous";
        }

        // Calculate %
        let percentage = (currentStep / totalQuestions) * 100;
        if(currentStep === 1) percentage = 12; 
        
        progressBar.style.width = `${percentage}%`;
        stepCounter.innerText = `Step ${currentStep} of ${totalQuestions}`;
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});