// --- ELEMENT REFERENCES ---
const searchBtn = document.getElementById('search-button');
const topicInput = document.getElementById('user-topic');
const platformSelect = document.getElementById('platform-select');
const resultsContainer = document.getElementById('results-container');
const resourcesArea = document.getElementById('resources-area');
const noteArea = document.getElementById('senpai-note-area');
const storiesArea = document.getElementById('stories-area');
const loadingSpinner = document.getElementById('loading-spinner');
const resultsTitle = document.getElementById('results-title');
const resultsSubtitle = document.getElementById('results-subtitle');

// Global variable to store the current topic's data
let currentTopicData = null;
let currentTopicKey = "";

// --- EVENT: SEARCH CLICK ---
searchBtn.addEventListener('click', () => {
    handleSearch();
});

// --- EVENT: ENTER KEY ON INPUT ---
topicInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

// --- EVENT: PLATFORM FILTER CHANGE ---
platformSelect.addEventListener('change', function () {
    if (currentTopicData) {
        const selectedCategory = this.value;
        resourcesArea.innerHTML = '';
        renderResources(currentTopicData.resources, selectedCategory);
    }
});

// --- MAIN SEARCH HANDLER ---
function handleSearch() {
    const userInputRaw = topicInput.value.trim();
    const userInput = userInputRaw.toLowerCase();

    // Reset UI
    resultsContainer.style.display = 'block';
    loadingSpinner.style.display = 'block';
    resourcesArea.innerHTML = '';
    noteArea.innerHTML = '';
    storiesArea.innerHTML = '';
    platformSelect.value = 'all';
    currentTopicData = null;
    currentTopicKey = userInputRaw;

    // Scroll into view nicely
    setTimeout(() => {
        resultsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);

    // Simulate loading
    setTimeout(() => {
        loadingSpinner.style.display = 'none';

        if (resourcesData[userInput]) {
            currentTopicData = resourcesData[userInput];

            // Update headers
            const prettyTopic = currentTopicKey || userInputRaw || userInput || "your topic";
           // resultsTitle.textContent = `Results for “${prettyTopic}”`;
            resultsSubtitle.textContent = "Your librarian has picked the best starting points. Begin with one, don't try all.";

            // Render Note
            if (currentTopicData.senpaiNote) {
                noteArea.innerHTML = `<div class="senpai-note">${currentTopicData.senpaiNote}</div>`;
            }

            // Render Resources & Stories
            renderResources(currentTopicData.resources, 'all');
            renderStories(currentTopicData.stories);

        } else {
            currentTopicData = null;
            resultsTitle.textContent = "Topic not found";
            resultsSubtitle.textContent = "No curated paths for this yet. Try a core topic like Python or Java.";

            resourcesArea.innerHTML = `
                <div class="empty-message">
                    We don't have a librarian path for <strong>${userInputRaw || 'this topic'}</strong> yet. <br><br>
                    Try <span class="hint-pill">python</span> or <span class="hint-pill">java</span> to see how this works.
                </div>
            `;
        }
    }, 550);
}

// --- RENDER RESOURCES ---
function renderResources(resourcesList, filter) {
    const filteredList = (filter === 'all')
        ? resourcesList
        : resourcesList.filter(res => res.category === filter);

    resourcesArea.innerHTML = '';

    if (!filteredList.length) {
        resourcesArea.innerHTML = `
            <div class="empty-message">
                No resources found for this category. Try switching the filter above.
            </div>
        `;
        return;
    }

    const iconMap = {
        youtube: '▶️',
        documentation: '📘',
        course: '🎓'
    };

    filteredList.forEach((res) => {
        const uniqueId = 'desc-' + Math.floor(Math.random() * 100000);

        const card = document.createElement('div');
        card.className = 'resource-card';

        const iconClass = res.category;
        const icon = iconMap[res.category] || '📌';

        card.innerHTML = `
            <div class="resource-icon ${iconClass}">
                ${icon}
            </div>
            <div class="card-main">
                <div class="card-header-top">
                    <span class="platform-tag ${res.category}">${res.category.toUpperCase()}</span>
                    <button class="toggle-btn" type="button" onclick="toggleDescription('${uniqueId}', this)">+</button>
                </div>
                <h3 class="resource-title">
                    <a href="${res.url}" target="_blank" rel="noopener noreferrer">
                        ${res.name} <span class="arrow">↗</span>
                    </a>
                </h3>
                <div class="resource-meta">
                    ${res.meta || defaultMetaText(res.category)}
                </div>
                <div id="${uniqueId}" class="card-description">
                    ${res.description}
                </div>
            </div>
        `;

        resourcesArea.appendChild(card);
    });
}

// Default subtitle based on category
function defaultMetaText(category) {
    switch (category) {
        case 'youtube':
            return 'Learn by watching – pause, rewind, and code along.';
        case 'documentation':
            return 'Use this like a Google-able reference, not a story book.';
        case 'course':
            return 'Good if you want structure, deadlines, and a certificate.';
        default:
            return '';
    }
}

// --- RENDER STORIES ---
function renderStories(storiesList) {
    storiesArea.innerHTML = '';
    storiesList.forEach(story => {
        const card = document.createElement('div');
        card.className = 'story-card';
        card.innerHTML = `
            <h4 class="story-title">📖 ${story.title}</h4>
            <p>${story.text}</p>
        `;
        storiesArea.appendChild(card);
    });
}

// --- TOGGLE DESCRIPTION (called from HTML via onclick) ---
function toggleDescription(id, btnElement) {
    const desc = document.getElementById(id);

    if (!desc) return;

    if (desc.classList.contains('active')) {
        desc.classList.remove('active');
        btnElement.textContent = '+';
    } else {
        desc.classList.add('active');
        btnElement.textContent = '−';
    }
}
