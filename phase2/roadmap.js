const roadmapData = [
    { id: 1, title: "Python Basics", desc: "Variables, Loops, Functions", status: "completed", icon: "🐍" },
    { id: 2, title: "Data Structures", desc: "Arrays, Linked Lists", status: "active", icon: "🏗️" }, // Current Level
    { id: 3, title: "Algorithms", desc: "Sorting, Searching, Big O", status: "locked", icon: "🧮" },
    { id: 4, title: "Build a Project", desc: "Create a Weather App", status: "locked", icon: "🏆" }
];

const treeContainer = document.querySelector('.skill-tree-container');

// Render Function
roadmapData.forEach(node => {
    const nodeHTML = `
        <div class="tree-node ${node.status}" onclick="handleNodeClick('${node.status}', '${node.title}')">
            <div class="node-icon">${node.status === 'completed' ? '✔' : node.icon}</div>
            <div class="node-content">
                <h3>${node.title}</h3>
                <p>${node.desc}</p>
                ${node.status === 'active' ? '<small style="color:#2563eb">▶ In Progress...</small>' : ''}
            </div>
        </div>
    `;
    treeContainer.innerHTML += nodeHTML;
});

function handleNodeClick(status, title) {
    if (status === 'locked') return; 
    alert(`Opening Module: ${title}`);
    // Here you would redirect to the specific learning page
}