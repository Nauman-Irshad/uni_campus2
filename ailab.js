const topics = [
  {
    title: "AI LAB (Python Basics & Search Algorithms)",
    videos: [
      { url: "https://youtu.be/y8TxCmqOrc?si=R4h0W7mMGKKf8Apq", title: "AI LAB 01 - Python Introduction" },
      { url: "https://youtu.be/tUGT30NM_EE?si=YFBQLImONsXo4Uol", title: "AI || UCS || Python" },
      { url: "https://youtu.be/VyZdM7G5alY?si=dNNi0UnEUYHkKTd5", title: "AI || BFS & DFS || Basic Code (Python)" },
      { url: "https://youtu.be/6ESvtTkm7Sk?si=W8wyeG1F-PAmxJPu", title: "AI || A* & GBFS || Python" },
      { url: "https://youtu.be/xh5V_yR2lFw?si=28F_XUbzX5rfHuSL", title: "AI || Hill Climb Algorithm || Python" }
    ]
  },
  {
    title: "AI LAB (Game & Genetic Algorithms)",
    videos: [
      { url: "https://youtu.be/64dG5kX-JP8?si=1fBeG5aWX8rgN3qX", title: "AI LAB | Minimax Algorithm" },
      { url: "https://youtu.be/bEbLJf4PDmc?si=-xasE8GuHkfWBQEe", title: "AI LAB | Alpha Beta Pruning" },
      { url: "https://youtu.be/pt_WCNtg-Gs?si=SlZyHd8zf-JbHnYZ", title: "AI Genetic Algorithm" },
      { url: "https://youtu.be/k8BUr6EoKu0?si=w3yS5Hkabe0zMJcZ", title: "AI KNN & Naive Bayes" }
    ]
  }
];

function extractVideoId(url) {
  const match = url.match(/(?:v=|\/)([0-9A-Za-z_-]{11})(?:\?|&|$)/);
  return match ? match[1] : null;
}

function preloadVideos() {
  const container = document.getElementById("videosContainer");
  container.innerHTML = "";

  topics.forEach(group => {
    // Group Title
    const groupTitle = document.createElement("h2");
    groupTitle.className = "group-title";
    groupTitle.textContent = group.title;
    container.appendChild(groupTitle);

    // Grid for Group
    const grid = document.createElement("div");
    grid.className = "video-grid";

    group.videos.forEach(({ url, title }) => {
      const videoId = extractVideoId(url);
      if (videoId) {
        const card = document.createElement("div");
        card.className = "video-card";

        card.innerHTML = `
          <img src="https://img.youtube.com/vi/${videoId}/mqdefault.jpg" 
               alt="${title}" 
               onclick="window.open('${url}', '_blank')">
          <div class="video-title">${title}</div>
          <div class="video-meta">YouTube</div>
        `;
        grid.appendChild(card);
      }
    });

    container.appendChild(grid);
  });
}

window.onload = preloadVideos;
