document.addEventListener('DOMContentLoaded', () => {

    const paths = {
        'frontend': 'path-frontend',
        'backend': 'path-backend',
        'mobile': 'path-mobile'
    };

    const results = {
        'uiux': {
            title: "Your Path is UI/UX Design",
            description: "You love crafting beautiful and intuitive user experiences. Your journey starts with understanding user behavior and mastering design tools.",
            pack: "<strong>Starter Pack:</strong> Figma, HTML, and CSS.",
            roadmap: `<p><strong>Your Next Steps:</strong></p>
                      <a href="/roadmap/figma2.html">1. Learn Figma Basics & Design Principles</a><br>
                      <a href="https://www.figma.com/community/file/1178835199062865931/projects-ui-ux">2. Create a Project (e.g., redesign a simple app)</a><br>
                      <a href="/roadmap/html2.html">3. Learn HTML/CSS to understand implementation</a>`
        },
        'frontend-dev': {
            title: "Your Path is Front-End Development",
            description: "You love bringing designs to life with code. Your journey starts with the core languages of the web.",
            pack: "<strong>Starter Pack:</strong> HTML, CSS, and JavaScript.",
            roadmap: `<p><strong>Your Next Steps:</strong></p>
                      <a href="/roadmap/html2.html">1. Master HTML, CSS, and modern JavaScript (ES6+)</a><br>
                      <a href="/roadmap/css2.html">2. Build several small, interactive projects</a><br>
                      <a href="/roadmap/js2.html">3. Learn a framework like React or Vue.js</a>`
        },
        'enterprise': {
            title: "Your Path is Enterprise Back-End",
            description: "You want to build the robust, secure systems that power big businesses. Your journey starts with powerful, established languages.",
            pack: "<strong>Starter Pack:</strong> Java or C#.",
            roadmap: `<p><strong>Your Next Steps:</strong></p>
                      <a href="/roadmap/java2.html">1. Learn the fundamentals of Java or C#</a><br>
                      <a href="/roadmap/sql2.html">2. Understand databases and SQL</a><br>
                      <a href="https://spring.io/">3. Explore a framework like Spring (Java) or .NET (C#)</a>`
        },
        'modern-backend': {
            title: "Your Path is Modern Web Back-End",
            description: "You want to build fast, flexible APIs and services for modern web apps. Your journey starts with today's most popular web technologies.",
            pack: "<strong>Starter Pack:</strong> Python (with Django/Flask) or Node.js.",
            roadmap: `<p><strong>Your Next Steps:</strong></p>
                      <a href="/roadmap/python2.html">1. Learn Python or JavaScript (Node.js)</a><br>
                      <a href="https://restfulapi.net/">2. Build a simple REST API project</a><br>
                      <a href="https://learn.microsoft.com/en-us/sql/relational-databases/lesson-1-connecting-to-the-database-engine?view=sql-server-ver17">3. Understand how to connect to a database</a>`
        },
        'ios': {
            title: "Your Path is iOS Development",
            description: "You're excited to build apps for the Apple ecosystem. Your journey starts with Apple's modern programming language.",
            pack: "<strong>Starter Pack:</strong> Swift and Xcode.",
            roadmap: `<p><strong>Your Next Steps:</strong></p>
                      <a href="/roadmap/swift2.html">1. Learn the Swift programming language</a><br>
                      <a href="https://developer.apple.com/xcode/">2. Get comfortable with the Xcode IDE</a><br>
                      <a href="https://github.com/fnk0/iOS-Calculator-Tutorial">3. Build a simple utility app (e.g., a calculator)</a>`
        },
        'android': {
            title: "Your Path is Android Development",
            description: "You want to build apps for the most popular mobile platform in the world. Your journey starts with Google's official language.",
            pack: "<strong>Starter Pack:</strong> Kotlin and Android Studio.",
            roadmap: `<p><strong>Your Next Steps:</strong></p>
                      <a href="/roadmap/kotlin2.html">1. Learn the Kotlin programming language</a><br>
                      <a href="https://developer.android.com/studio">2. Get comfortable with Android Studio</a><br>
                      <a href="https://developer.android.com/codelabs/basic-android-kotlin-compose-first-app">3. Build a simple app that uses a list</a>`
        },
        'cross-platform': {
            title: "Your Path is Cross-Platform Development",
            description: "You want to write code once and run it on both iPhones and Android phones. Your journey starts with a powerful cross-platform framework.",
            pack: "<strong>Starter Pack:</strong> React Native or Flutter.",
            roadmap: `<p><strong>Your Next Steps:</strong></p>
                      <a href="/roadmap/react-native2.html">1. Choose between Flutter (Dart) or React Native (JavaScript)</a><br>
                      <a href="https://reactnative.dev/docs/environment-setup">2. Follow the 'Get Started' guide for your chosen framework</a><br>
                      <a href="https://www.geeksforgeeks.org/react-native/how-to-create-todo-app-using-react-native/">3. Build a 'To-Do List' app that works on both platforms</a>`
        }
    };

    function hideAllSubsequent(step) {
        // Hide all step 2 paths
        Object.values(paths).forEach(id => document.getElementById(id).hidden = true);
        // Hide the final result
        document.getElementById('result-container').hidden = true;
    }

    function revealAndScroll(elementId) {
        const element = document.getElementById(elementId);
        if (element) {
            element.hidden = false;
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    
    // Handle Step 1 Choice
    document.querySelectorAll('input[name="interest-base"]').forEach(radio => {
        radio.addEventListener('change', (event) => {
            hideAllSubsequent(1); // Hide everything after step 1
            const choice = event.target.value;
            const nextElementId = paths[choice];
            if (nextElementId) {
                revealAndScroll(nextElementId);
            }
        });
    });

    // Handle Step 2 Choices (all paths)
    document.querySelectorAll('input[name^="interest-"]').forEach(radio => {
        // Exclude the first question from this listener
        if (radio.name === 'interest-base') return;

        radio.addEventListener('change', (event) => {
            const choice = event.target.value;
            const resultData = results[choice];

            if (resultData) {
                document.getElementById('result-title').textContent = resultData.title;
                document.getElementById('result-description').innerHTML = `<p>${resultData.description}</p><p>${resultData.pack}</p>`;
                document.getElementById('result-roadmap').innerHTML = resultData.roadmap;
                revealAndScroll('result-container');
            }
        });
    });
});
