document.addEventListener('DOMContentLoaded', () => {
    // --- Element Selectors ---
    const languageHeaders = document.querySelectorAll('.language-header');
    const contentTitle = document.querySelector('.content-area h1');
    const sidebarToggleBtn = document.getElementById('toggle-btn');
    const sidebar = document.getElementById('sidebar');
    const quizContainer = document.querySelector('.quiz-container');

    // --- Sidebar and Navigation Logic ---
    sidebarToggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });

    languageHeaders.forEach(header => {
        const levelsList = header.nextElementSibling;
        const toggleLevels = header.querySelector('.toggle-levels');

        header.addEventListener('click', (event) => {
            // This part handles expanding the levels list without reloading the quiz
            if (event.target.classList.contains('toggle-levels')) {
                const isOpen = levelsList.style.maxHeight && levelsList.style.maxHeight !== '0px';
                levelsList.style.maxHeight = isOpen ? '0px' : '500px';
                toggleLevels.textContent = isOpen ? '+' : '-';
                return;
            }

            // This part loads the quiz when the topic name is clicked
            const topicName = header.querySelector('span').textContent.trim();
            loadQuizForTopic(topicName);
        });
    });

    // --- Quiz Management ---
    let currentQuestionIndex = 0;
    let score = 0;
    let currentQuizData = [];

    // --- Main Functions ---

    function loadQuizForTopic(topicName) {
        const quizData = quizzes[topicName];
        contentTitle.textContent = `Test Your Knowledge On ${topicName}`;

        if (quizData && quizData.length > 0) {
            currentQuizData = quizData;
            startQuiz(); 
        } else {
            quizContainer.innerHTML = `<p>Sorry, the quiz for <strong>${topicName}</strong> is not available yet.</p>`;
        }
    }

    function startQuiz() {
        currentQuestionIndex = 0;
        score = 0;
        showQuestion();
    }

    function showQuestion() {
        // Check if the quiz is over
        if (currentQuestionIndex >= currentQuizData.length) {
            showResults();
            return;
        }

        const questionData = currentQuizData[currentQuestionIndex];
        
        // Render the question and options HTML
        quizContainer.innerHTML = `
            <div class="question">${questionData.question}</div>
            <div class="options">
                ${questionData.options.map(opt => `<button class="option-btn">${opt.text}</button>`).join('')}
            </div>
            <div class="explanation" style="display:none;"></div>
            <button id="next-btn" style="display:none;">Next</button>
        `;

        // Add event listeners to the new option buttons
        const optionButtons = quizContainer.querySelectorAll('.option-btn');
        optionButtons.forEach(button => {
            button.addEventListener('click', handleOptionClick);
        });
    }

    function handleOptionClick(event) {
        const selectedOption = event.target;
        const correctAnswer = currentQuizData[currentQuestionIndex].correctAnswer;

        // Disable all buttons to prevent multiple answers
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.disabled = true;
            // Highlight the correct answer in green
            if (btn.textContent === correctAnswer) {
                btn.classList.add('correct');
            }
        });

        // **FIXED LOGIC**: Check selection and update score
        if (selectedOption.textContent === correctAnswer) {
            score++; // Only increment score if the answer is correct
        } else {
            // If the selected answer was wrong, highlight it in red
            selectedOption.classList.add('incorrect');
        }

        // Show the explanation and the "Next" button
        const explanationDiv = quizContainer.querySelector('.explanation');
        explanationDiv.innerHTML = `<strong>Explanation:</strong> ${currentQuizData[currentQuestionIndex].explanation}`;
        explanationDiv.style.display = 'block';

        const nextBtn = document.getElementById('next-btn');
        nextBtn.style.display = 'block';
        nextBtn.onclick = () => {
            currentQuestionIndex++;
            showQuestion();
        };
    }

    function showResults() {
        quizContainer.innerHTML = `
            <div class="results-summary">
                <h2>Quiz Complete!</h2>
                <p>Your score: ${score} out of ${currentQuizData.length}</p>
            </div>
        `;
    }

    // --- Initial Load ---
    // Load the JavaScript quiz by default when the page first opens
    loadQuizForTopic('JavaScript');
});

