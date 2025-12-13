// Function to update the Slider Value and Hint
function updateRangeValue(val) {
    document.getElementById('hour-display').innerText = val;
    
    const hint = document.getElementById('effort-hint');
    if (val < 2) {
        hint.innerText = "Casual learning. Progress will be slow.";
        hint.style.color = "#94a3b8";
    } else if (val < 5) {
        hint.innerText = "Sustainable pace. Good for working professionals.";
        hint.style.color = "#4ade80"; // Green
    } else {
        hint.innerText = "Hardcore Mode. Watch out for burnout.";
        hint.style.color = "#f87171"; // Red
    }
}

// Function to handle the Form Submission
function generateRoadmap(event) {
    event.preventDefault(); // Stop page reload

    const deadlineMonths = parseInt(document.getElementById('deadline').value);
    const dailyHours = parseInt(document.getElementById('hours').value);
    const currentLevel = document.querySelector('input[name="level"]:checked').value;
    
    // CALCULATE THE BUDGET
    // Example: 3 months * 30 days * 2 hours = 180 Total Hours
    const totalHoursBudget = deadlineMonths * 30 * dailyHours;

    console.log(`User Budget: ${totalHoursBudget} Hours`);
    console.log(`User Level: ${currentLevel}`);

    // HERE IS WHERE WE WILL CALL THE NEXT FUNCTION
    // filterTopics(selectedPath, totalHoursBudget, currentLevel);
    
    alert(`Logic Calculated! You have a budget of ${totalHoursBudget} hours. Generating plan...`);
}