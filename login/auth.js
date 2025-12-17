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

           // In auth.js - Login Logic Section
           // --- In auth.js (Login Section) ---

            if (userData.password === password) {
                
                // 1. Create the session object (What we want to show on dashboard)
                const sessionData = {
                    username: userData.username,   // e.g. "Harsha"
                    level: "Level 7 Master"        // You can customize this
                };

                // 2. SAVE IT -> Key must be 'activeSession'
                sessionStorage.setItem('activeSession', JSON.stringify(sessionData));
                
                alert("Login Successful!");

                // 3. Redirect to Dashboard
                // If your login file is in a folder (login/login.html), go UP one level:
                window.location.href = '../index.html'; 
                
                // OR if it's in the same folder as index.html:
                // window.location.href = 'index.html';
            } else {
                alert("❌ Incorrect password. Please try again.");
            }
        });
    }
});