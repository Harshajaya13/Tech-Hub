document.addEventListener('DOMContentLoaded', () => {
    
    // 1. State Management
    let stepHistory = []; // Keeps track of where we've been: ['start', 'frontend', 'uiux']

    const backBtn = document.getElementById('btn-back');
    const progressBar = document.getElementById('progressBar');

    // 2. Function to Show a specific step
    function showStep(stepId) {
        // Hide all steps
        document.querySelectorAll('.step').forEach(el => {
            el.classList.remove('active');
        });

        // Find and show the target step
        const targetStep = document.querySelector(`.step[data-step="${stepId}"]`);
        if (targetStep) {
            targetStep.classList.add('active');
        }

        // Handle Back Button Visibility
        if (stepHistory.length > 0) {
            backBtn.classList.remove('hidden');
        } else {
            backBtn.classList.add('hidden');
        }

        // Update Progress Bar (Simple logic: deeper history = more progress)
        // You can make this smarter later
        let progress = (stepHistory.length + 1) * 25; 
        if(progress > 100) progress = 100;
        progressBar.style.width = `${progress}%`;
    }

    // 3. Handle Option Clicks (Going Forward)
    document.querySelectorAll('.option-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Find the current active step ID
            const currentStep = document.querySelector('.step.active').dataset.step;
            
            // Get the ID of the next step from the clicked card
            const nextStepId = card.dataset.next;

            if (nextStepId) {
                // Add current step to history before moving
                stepHistory.push(currentStep);
                showStep(nextStepId);
            }
        });
    });

    // 4. Handle Back Button (Going Backward)
    backBtn.addEventListener('click', () => {
        if (stepHistory.length > 0) {
            // Get the previous step ID
            const previousStepId = stepHistory.pop();
            showStep(previousStepId);
        }
    });

    // Initialize
    showStep('start');
});