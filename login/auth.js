document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // --- 1. Registration Logic ---
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value.toLowerCase(); // Save emails in lowercase
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (password !== confirmPassword) {
                alert("❌ Passwords do not match!");
                return;
            }

            if (localStorage.getItem(email)) {
                alert("⚠️ An account with this email already exists.");
                return;
            }

            const userData = {
                username: username,
                password: password
            };

            localStorage.setItem(email, JSON.stringify(userData));
            
            alert("✅ Registration successful! Please sign in.");
            window.location.href = 'login.html'; 
        });
    }

    // --- 2. Login Logic ---
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('email').value.toLowerCase();
            const password = document.getElementById('password').value;

            const storedUserData = localStorage.getItem(email);

            if (!storedUserData) {
                alert("❌ No account found. Please register first.");
                return;
            }

            const userData = JSON.parse(storedUserData);

            if (userData.password === password) {
                // SAVE SESSION (So we know they are logged in)
                sessionStorage.setItem('loggedInUser', userData.username);
                
                // REDIRECT TO HOME PAGE
                window.location.href = 'index.html'; 
            } else {
                alert("❌ Incorrect password. Please try again.");
            }
        });
    }
});