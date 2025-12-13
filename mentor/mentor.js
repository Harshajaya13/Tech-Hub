// Simple Filter Logic for the Tabs
const tabs = document.querySelectorAll('.tab');
const mentorCards = document.querySelectorAll('.mentor-card');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // 1. Remove active class from all
        tabs.forEach(t => t.classList.remove('active'));
        // 2. Add active to clicked
        tab.classList.add('active');
        
        // 3. Simple filter animation (In real app, filter by data attributes)
        // Here we just shake the cards to show interaction
        mentorCards.forEach(card => {
            card.style.opacity = '0.5';
            setTimeout(() => {
                card.style.opacity = '1';
            }, 300);
        });
    });
});