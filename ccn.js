const topics = [
  {
    title: "CCN (Computer Communication & Networking)",
    videos: [
      { url: "https://youtu.be/04A4PRikkCY?si=G9q5LzWdlJwcI-a5", title: "Full Series for CCN" },
      { url: "https://youtu.be/0AcpUwnc12E?si=Yjj3gdCqSt_JP4jq", title: "Introduction to Computer Networks | Types, Working, Topologies" },
      { url: "https://youtu.be/oQkjo60fJVI?si=i9Jv0U7naC-nrRK0", title: "#2 Socket Programming" },
      { url: "https://youtu.be/0bc_T_pEZmo?si=vaGEsKp8hT6YepP9", title: "TCP Congestion Control in Computer Networks" },
      { url: "https://youtu.be/Y7UpRUE-2P4?si=hOjAzRbG-1eCXDKE", title: "What is Subnetting? | Fixed Length Subnet Mask (FLSM) Example" },
      { url: "https://youtu.be/NuTSRXR4CTg?si=RoXHUhEDWeo8qK3-", title: "What is Subnetting? | Variable Length Subnet Mask (VLSM) Example" },
      { url: "https://youtu.be/n-I9FC1RAQw?si=zG0NS69dkBQY-VyI", title: "CCN Theory: Cyclic Redundancy Check (CRC)" },
      { url: "https://youtu.be/vh76sqSCkJk?si=Bh32RnXyDUV7ZYhR", title: "CCN Theory: Subnet Mask, IPv4 Address Range & Classes" }
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
