
    function enterSite() {
        const overlay = document.getElementById('manifesto-overlay');
        
        // 1. Trigger the smooth exit CSS
        overlay.classList.add('dismissing');
        
        // 2. Wait for the animation to finish (800ms) before removing from DOM
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 100);
        
        // Optional: Save to localStorage
        // localStorage.setItem('manifestoRead', 'true');
    }
