
    function selectPath(pathId) {
        // Option 1: Simple Redirect
        // window.location.href = `${pathId}-path.html`;

        // Option 2: Save choice to memory (better for personalized dashboards later)
        console.log("User chose:", pathId);
        localStorage.setItem('selectedCareerPath', pathId);
        
        // Add a visual confirmation before redirecting
        const btn = event.currentTarget; // Get the button clicked
        const originalText = btn.innerText;
        
        btn.innerText = "Initializing Path... 🚀";
        btn.style.background = "#fff";
        btn.style.color = "#000";

        setTimeout(() => {
            // Redirect after 1 second
            window.location.href = `${pathId}-path.html`;
        }, 800);
    }
