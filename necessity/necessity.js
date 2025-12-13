/* document.addEventListener('DOMContentLoaded', () => {
    
    // --- MANIFESTO LOGIC ---
    const startBtn = document.getElementById('start-quiz-btn');
    const manifestoPage = document.getElementById('manifesto-page');
    const quizApp = document.getElementById('quiz-app');

    startBtn.addEventListener('click', () => {
        // Fade out manifesto
        manifestoPage.style.opacity = '0';
        manifestoPage.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            manifestoPage.classList.add('hidden');
            
            // Show Quiz
            quizApp.classList.remove('hidden');
            quizApp.style.opacity = '0';
            quizApp.style.transition = 'opacity 0.5s ease';
            
            // Trigger reflow
            void quizApp.offsetWidth; 
            
            quizApp.style.opacity = '1';
        }, 500); // Wait for fade out
    });

   
}); */

document.addEventListener("DOMContentLoaded", () => {
    // Select all Trap cards (details tags)
    const allTraps = document.querySelectorAll("details");

    allTraps.forEach((trap) => {
        trap.addEventListener("click", (e) => {
            // Check if we are opening this trap
            // (Note: The 'open' attribute isn't added yet when the click fires, 
            // so we check if it is currently closed)
            if (!trap.hasAttribute("open")) {
                // Loop through all OTHER traps and close them
                allTraps.forEach((otherTrap) => {
                    if (otherTrap !== trap) {
                        otherTrap.removeAttribute("open");
                    }
                });
            }
        });
    });
});