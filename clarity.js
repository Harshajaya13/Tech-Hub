document.addEventListener('DOMContentLoaded', () => {
    // 1. Selectors
    // We get the Pivot Card separately
    const pivotCard = document.getElementById('fail-card');
    
    // We get all Question Cards (excluding the Pivot Card)
    // We convert it to a real Array to make it easier to manage
    const allCards = Array.from(document.querySelectorAll('.question-card'));
    const questionCards = allCards.filter(card => card.id !== 'fail-card');

    const backBtn = document.getElementById('back-btn');
    const progressBar = document.getElementById('progress-fill');
    const stepCounter = document.getElementById('step-counter');

    // 2. State
    let currentStep = 1;
    const totalSteps = questionCards.length;
    let isPivotState = false; // "Pivot State" means showing the Designer/Fail card

    // 3. Initialize
    updateUI();

    // 4. Global Functions (attached to window for HTML onclick)
    window.handleChoice = function(action) {
        if (action === 'fail') {
            showPivotScreen();
        } else if (action === 'next') {
            if (currentStep < totalSteps) {
                currentStep++;
                isPivotState = false; // Ensure we aren't in pivot state
                updateUI();
            }
        }
    };

    window.prevStep = function() {
        // SCENARIO A: We are looking at the Pivot (Fail) Card
        if (isPivotState) {
            hidePivotScreen(); // Close pivot, show the current question again
            return;
        }

        // SCENARIO B: We are on Question 2, 3, etc.
        if (currentStep > 1) {
            currentStep--;
            updateUI();
        } 
        // SCENARIO C: We are on Question 1 -> Go back to Hub
        else if (currentStep === 1) {
            window.location.href = 'start.html';
        }
    };

    // 5. Core Logic
    
    // Helper: Hides EVERYTHING on the screen first (The Brute Force Fix)
    function hideAll() {
        allCards.forEach(card => {
            card.style.display = 'none'; // Force CSS hide
            card.classList.remove('active');
        });
        pivotCard.style.display = 'none';
        pivotCard.classList.remove('active');
    }

    function showPivotScreen() {
        isPivotState = true;
        hideAll(); // Wipe screen

        // Show Pivot Card
        pivotCard.style.display = 'block';
        pivotCard.classList.add('active');

        // Update Nav
        backBtn.innerText = "← Let me re-think";
        
        // Update Progress (Red Warning)
        progressBar.style.backgroundColor = '#ff4757';
        stepCounter.innerText = "Path Divergence";
        stepCounter.style.color = '#ff4757';
    }

    function hidePivotScreen() {
        isPivotState = false;
        // We don't need to manually hide pivot here, because updateUI calls hideAll()
        updateUI(); 
    }

    function updateUI() {
        hideAll(); // Wipe screen first!

        // Show the correct question card
        const targetCard = questionCards[currentStep - 1];
        if (targetCard) {
            targetCard.style.display = 'block';
            targetCard.classList.add('active');
        }

        // Update Nav Button Text
        if (currentStep === 1) {
            backBtn.innerText = "← Back to Hub";
        } else {
            backBtn.innerText = "← Previous Question";
        }

        // Update Progress Bar
        // Reset colors (in case we came from Pivot screen)
        progressBar.style.backgroundColor = '#ffa502'; // Gold
        stepCounter.style.color = '#e0e0e0'; // Grey/White

        // Calculate %
        let percentage = (currentStep / totalSteps) * 100;
        if(currentStep === 1) percentage = 10; // Minimum fill
        
        progressBar.style.width = `${percentage}%`;
        stepCounter.innerText = `Phase ${currentStep} of ${totalSteps}`;
        
        // Scroll to top (Helps on mobile if card sizes change)
        window.scrollTo(0,0);
    }
});