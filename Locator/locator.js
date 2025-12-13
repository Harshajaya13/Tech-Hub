// --- DOM ELEMENTS ---
const searchBtn = document.getElementById('search-button');
const userInputField = document.getElementById('user-topic'); // Renamed for clarity
const platformSelect = document.getElementById('platform-select');
const resultsContainer = document.getElementById('results-container');
const resourcesArea = document.getElementById('resources-area');
const noteArea = document.getElementById('senpai-note-area');
const storiesArea = document.getElementById('stories-area');
const loadingSpinner = document.getElementById('loading-spinner');

// Global state
let currentTopicData = null; 

// --- EVENT LISTENERS ---

// 1. Click Search Button
searchBtn.addEventListener('click', performSearch);

// 2. Press "Enter" inside input box (The Pro Feature)
userInputField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// 3. Filter Dropdown Change
platformSelect.addEventListener('change', function() {
    if (currentTopicData) {
        // Add a small animation effect when filtering
        resourcesArea.style.opacity = '0.5';
        setTimeout(() => {
            renderResources(currentTopicData.resources, this.value);
            resourcesArea.style.opacity = '1';
        }, 200);
    }
});

// --- CORE FUNCTIONS ---

function performSearch() {
    const rawInput = userInputField.value;
    const topic = rawInput.toLowerCase().trim(); // Removes spaces: " Python " -> "python"
    
    if(!topic) return; // Don't search if empty

    // UI Reset
    resultsContainer.style.display = 'block';
    loadingSpinner.style.display = 'block';
    resourcesArea.innerHTML = '';
    noteArea.innerHTML = '';
    storiesArea.innerHTML = '';
    platformSelect.value = 'all'; 

    // Fake Loading Delay (Makes it feel like it's "Thinking")
    setTimeout(() => {
        loadingSpinner.style.display = 'none';

        if (resourcesData[topic]) {
            currentTopicData = resourcesData[topic];
            
            // 1. Render Senpai Note
            noteArea.innerHTML = `
                <div class="senpai-note">
                    ${currentTopicData.senpaiNote}
                </div>`;
            
            // 2. Render Resources
            renderResources(currentTopicData.resources, 'all');

            // 3. Render Stories (if they exist)
            if(currentTopicData.stories){
                renderStories(currentTopicData.stories);
                document.querySelector('.stories-section').style.display = 'block';
            } else {
                document.querySelector('.stories-section').style.display = 'none';
            }

        } else {
            // Error State
            resourcesArea.innerHTML = `
                <div style="text-align:center; padding:40px; color:#666;">
                    <h2>😕 Topic not found</h2>
                    <p>Try searching for: <b>Python, Java, HTML, CSS, JavaScript</b></p>
                </div>`;
            currentTopicData = null;
        }
    }, 500); // 0.5s delay
}

function renderResources(list, filter) {
    resourcesArea.innerHTML = ''; // Clear current

    const filtered = (filter === 'all') 
        ? list 
        : list.filter(item => item.category === filter);

    if (filtered.length === 0) {
        resourcesArea.innerHTML = `<p style="text-align:center; width:100%; color:#888;">No ${filter} resources found for this topic.</p>`;
        return;
    }

    filtered.forEach(res => {
        // Unique ID for the toggle
        const uid = 'desc-' + Math.random().toString(36).substr(2, 9);

        const card = document.createElement('div');
        card.className = 'resource-card';
        card.innerHTML = `
            <div class="card-header">
                <div>
                    <span class="platform-tag ${res.category}">${res.category}</span>
                    <h3 class="resource-title">
                        <a href="${res.url}" target="_blank" class="resource-link">${res.name} <i class="fa-solid fa-arrow-up-right-from-square" style="font-size:0.8em"></i></a>
                    </h3>
                </div>
                <button class="toggle-btn" onclick="toggleDescription('${uid}', this)">+</button>
            </div>
            <div id="${uid}" class="card-description">
                ${res.description}
            </div>
        `;
        resourcesArea.appendChild(card);
    });
}

function renderStories(stories) {
    storiesArea.innerHTML = '';
    stories.forEach(story => {
        storiesArea.innerHTML += `
            <div class="story-card">
                <h4 class="story-title">⚡ ${story.title}</h4>
                <p>${story.text}</p>
            </div>
        `;
    });
}

// Global scope function for the onclick event in HTML
window.toggleDescription = function(id, btn) {
    const el = document.getElementById(id);
    if (el.classList.contains('active')) {
        el.classList.remove('active');
        btn.innerText = "+";
        btn.style.background = "#f0f2f5";
        btn.style.color = "#555";
    } else {
        el.classList.add('active');
        btn.innerText = "-";
        btn.style.background = "#2563EB"; // Blue
        btn.style.color = "white";
    }
};