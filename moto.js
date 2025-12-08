// DATABASE OF STORIES
const storiesData = {
    "stuck": {
        tag: "SCENARIO: THE STUCK USER",
        title: "The Bill Gates Reality",
        text: "When Bill Gates and Paul Allen were building BASIC, they didn't have a personal computer. They wrote code on paper. They slept on the floor. They debugged lines of code in their heads before typing them.",
        truth: "Debugging isn't a sign of failure. It is the actual job. If you aren't struggling, you aren't engineering; you're just typing.",
        fix: "Walk away for 10 minutes. Drink water. The solution is usually a missing semicolon or a typo."
    },
    "comparison": {
        tag: "SCENARIO: THE COMPARISON TRAP",
        title: "The WhatsApp Rejection",
        text: "In 2009, Brian Acton was rejected by Twitter and Facebook. He felt left behind. He tweeted: 'Facebook turned me down. It was a great opportunity to connect with some fantastic people. Looking forward to life's next adventure.' 5 years later, he sold WhatsApp to Facebook for $19 Billion.",
        truth: "Speed is not the goal. Direction is. Your friends are running a sprint; you are building an Engine.",
        fix: "Stop looking at LinkedIn. Look at your code. Your journey is yours alone."
    },
    "quitter": {
        tag: "SCENARIO: THE QUITTER",
        title: "The Star Pattern Logic",
        text: "Remember the Star Pattern (* ** ***)? In Semester 1, it felt impossible. In Semester 4, it feels like a joke. Why? The code didn't change. You did.",
        truth: "The problem isn't too hard. You are just new. You are currently in the 'Confusion Phase' that comes before the 'Mastery Phase'.",
        fix: "Write one more line of code. Just one. Don't close the laptop yet."
    }
};

// DOM ELEMENTS
const selectionScreen = document.getElementById('selection-screen');
const storyScreen = document.getElementById('story-screen');

// Elements to fill
const storyTag = document.getElementById('scenario-tag');
const storyTitle = document.getElementById('story-title');
const storyText = document.getElementById('story-text');
const storyTruth = document.getElementById('story-truth');
const storyFix = document.getElementById('story-fix');

// FUNCTION TO SHOW STORY
function showStory(key) {
    const data = storiesData[key];

    // 1. Fill Data
    storyTag.innerText = data.tag;
    storyTitle.innerText = data.title;
    storyText.innerText = data.text;
    storyTruth.innerText = data.truth;
    storyFix.innerText = data.fix;

    // 2. Animate Transition
    // Hide Selection
    selectionScreen.classList.remove('active');
    selectionScreen.classList.add('hidden');

    // Show Story (Small delay for smooth effect)
    setTimeout(() => {
        storyScreen.classList.remove('hidden');
        storyScreen.classList.add('active');
        window.scrollTo(0,0);
    }, 300);
}

// FUNCTION TO GO BACK
function goBack() {
    // Hide Story
    storyScreen.classList.remove('active');
    storyScreen.classList.add('hidden');

    // Show Selection
    setTimeout(() => {
        selectionScreen.classList.remove('hidden');
        selectionScreen.classList.add('active');
    }, 300);
}