const topics = [
  {
    title: "Artificial Intelligent Agents",
    videos: [
      { url: "https://youtu.be/BkedAnQfJ_U?si=LIWrcau18_UEbH4D", title: "Artificial Intelligent Agent with Types" },
      { url: "https://youtu.be/KZFfbebQPAU?si=4QArlt_CzoAh5a9q", title: "Simple Reflex Agent" },
      { url: "https://youtu.be/xKxh3fQwU8E?si=rtfWRBWL3AJxyijC", title: "Model Based Reflex Agent" },
      { url: "https://youtu.be/HsdiMkKnNLk?si=nEdzB3g9NKoiW-HB", title: "Goal Based Agents" },
      { url: "https://youtu.be/e-egxFtAF_4?si=XGTNGQ98XXOxM_zQ", title: "Utility Based Agents" }
    ]
  },
  {
    title: "Problem Solving & Search",
    videos: [
      { url: "https://youtu.be/E5jVBqe59EE?si=l0y-KPcC6KP8Ji_7", title: "Introduction to Problem Solving" },
      { url: "https://youtu.be/gZpUcsB9TFc?si=phTi6GedLsIsD3UH", title: "Uninformed Vs Informed Search Intro" },
      { url: "https://youtu.be/qul0f79gxGs?si=zAbcE05JwSdoz5xb", title: "Breadth First Search (BFS) Example" },
      { url: "https://youtu.be/f8luGFRtshY?si=NSv0fd2c3xRyn5vB", title: "Depth First Search (DFS) Example" },
      { url: "https://youtu.be/0-vP781wblQ?si=-lXj1xRcEeim495b", title: "Iterative Deepening DFS (IDDFS)" },
      { url: "https://youtu.be/w5Xawyfrf0s?si=GHYo480zRqYF5Con", title: "Uniform Cost Search (UCS)" },
      { url: "https://youtu.be/GVvN0ikNekw?si=8AJflVUybliSwU-J", title: "Greedy Best First Search" },
      { url: "https://youtu.be/lusRf5v-TI0?si=_xfxet-6TKk6fdjm", title: "A* Search Algorithm" },
      { url: "https://youtu.be/nmWGhb9E4es?si=k0buyD7ntz4XiBJ-", title: "Solve 8-Puzzle Problem (Informed Search)" },
      { url: "https://youtu.be/BUHc8p5Mpdo?si=HzVBX_30Y2_7ww-k", title: "Iterative Deepening A* (IDA Star)" }
    ]
  },
  {
    title: "Hill Climbing & Minimax",
    videos: [
      { url: "https://youtu.be/3SiWtAnUROs?si=N0KO6xs1x8pyQd3t", title: "Hill Climbing Algorithm Intro" },
      { url: "https://youtu.be/Ntu8nNBL28o?si=OwIzBKpwII_6RD3i", title: "Minimax Algorithm" },
      { url: "https://youtu.be/dEs_kbvu_0s?si=NgWQSJu0P6HktTAn", title: "Alpha Beta Pruning" }
    ]
  },
  {
    title: "Genetic Algorithms",
    videos: [
      { url: "https://youtu.be/96-u9s6D16k?si=T8tVh1zdpYGa41i_", title: "Genetic Algorithm Introduction" },
      { url: "https://youtu.be/gxGe2v7c5E8?si=aqOmqqZOV2U5LIHb", title: "8 Queen's Problem using GA" },
      { url: "https://youtu.be/frB2zIpOOBk?si=BdFNq9aTUg38JUg-", title: "Genetic Algorithm Example" },
      { url: "https://youtu.be/udN28wPqaZI?si=oEXzBd25JWTKRZz9", title: "GA Solved Example (Maximizing Function)" },
      { url: "https://youtu.be/_u4amTrweso?si=JfunzWr3xf4u0LsP", title: "GA Applications (TSP & Max Function)" },
      { url: "https://youtu.be/JgqBM7JG9ew?si=Xz2gwYvKwLO9GuD6", title: "Knapsack Problem (GA)" }
    ]
  },
  {
    title: "WUMPUS & Logic",
    videos: [
      { url: "https://youtu.be/SHfP8SPOEEw?si=Az8UxoR2yxHJ8bcS", title: "WUMPUS World Problem" },
      { url: "https://youtu.be/dqDRtJs7Ork?si=ExMH1uLTGxAMPOlT", title: "WUMPUS World using Truth Table" },
      { url: "https://youtu.be/Aw3EOSr64j0?si=XXuTX7UV24Bz3hH8", title: "First Order / Predicate Logic" }
    ]
  },
  {
    title: "Machine Learning Basics",
    videos: [
      { url: "https://youtu.be/4dwsSz_fNSQ?si=KXsPe6JxEWU_qQop", title: "Supervised, Unsupervised & Reinforcement Learning" },
      { url: "https://youtu.be/1TmUwRALJW0?si=1CMaDATwauDrrysL", title: "Neural Networks" },
      { url: "https://youtu.be/O1nWXTXcCwI?si=F7GsqsHuKEsIRBrf", title: "kNN Classification (Real Life Example)" },
      { url: "https://youtu.be/5FpsGnkbEpM?si=s1fEHBq_tHsQKeoi", title: "K-means Clustering Example" },
      { url: "https://youtu.be/GBMMtXRiQX0?si=0-O-xtxfg-0upxqN", title: "Naive Bayes Classification" }
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
    // Create Group Title
    const groupTitle = document.createElement("h2");
    groupTitle.className = "group-title";
    groupTitle.textContent = group.title;
    container.appendChild(groupTitle);

    // Create Video Grid for this Group
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
