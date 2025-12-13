document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // --- Registration Logic ---
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent form from submitting the default way

            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            // Basic validation
            if (password !== confirmPassword) {
                alert("Passwords do not match!");
                return;
            }

            // Check if user already exists
            if (localStorage.getItem(email)) {
                alert("An account with this email already exists.");
                return;
            }

            // Create a user object
            const userData = {
                username: username,
                password: password // In a real app, this should be hashed!
            };

            // Save the user data to localStorage, using the email as the unique key
            localStorage.setItem(email, JSON.stringify(userData));
            
            alert("Registration successful! You can now sign in.");
            window.location.href = 'login.html'; // Redirect to the login page
        });
    }

    // --- Login Logic ---
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            // Check if a user with this email exists in localStorage
            const storedUserData = localStorage.getItem(email);

            if (!storedUserData) {
                alert("No account found with this email. Please register first.");
                return;
            }

            // Parse the stored data from a string back into an object
            const userData = JSON.parse(storedUserData);

            // Check if the password matches
            if (userData.password === password) {
                alert(`Welcome back, ${userData.username}!`);
                // **IMPORTANT**: Here you would redirect to your main app/dashboard
                // For example: window.location.href = 'dashboard.html';
            } else {
                alert("Incorrect password. Please try again.");
            }
        });
    }
});
