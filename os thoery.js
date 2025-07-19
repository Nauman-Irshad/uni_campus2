const topics = {

  "ps -ef --forest | grep \"10\"": [
   
    { title: "Monitor Linux processes using ps", url: "https://www.youtube.com/watch?v=lz16nu5xNbs" }
  ],
  
  "execlp(\"ls\", \"ls\", \"-l\", NULL)": [
    { title: "Unix exec() family explained", url: "https://www.youtube.com/watch?v=OXW_fGqFuZk" },
    { title: "execlp() usage in C programming", url: "https://www.youtube.com/watch?v=fWGjBRHc5eQ" },
    { title: "fork and exec tutorial in C", url: "https://www.youtube.com/watch?v=l64ySYHmMmY" },
    { title: "execvp and execlp explained", url: "https://www.youtube.com/watch?v=5BE9qM79fgM" }
  ],
  "wait(&status);": [
    { title: "C fork() & wait() tutorial", url: "https://www.youtube.com/watch?v=duYojgFuT3s" },
    { title: "Using waitpid() in Linux with C", url: "https://www.youtube.com/watch?v=gJwwUGIFHhs" },
    { title: "Managing child processes in C", url: "https://www.youtube.com/watch?v=l64ySYHmMmY" },
    
  ],
  "CPU Scheduling & Algorithms": [
    { title: "CPU Scheduling Algorithms Explained", url: "https://www.youtube.com/watch?v=PAwkdM_nhbU" },
    { title: "FCFS, SJF & Round Robin overview", url: "https://www.youtube.com/watch?v=pPAKs7tT8sw" },
    { title: "Round Robin Scheduling tutorial", url: "https://www.youtube.com/watch?v=-Izsh82Ykmg" },
    { title: "Preemptive vs Non‑Preemptive CPU Scheduling", url: "https://www.youtube.com/watch?v=sCpdv8H6bnQ" }
  ],
  "Chapter 1: OS Introduction": [
   
    { title: "Functions of an OS explained", url: "https://www.youtube.com/watch?v=vLwMl9qK4T8" },
    { title: "Operating Systems Crash Course", url: "https://www.youtube.com/watch?v=9t5Ca7YGx-w" },
    { title: "Core services of OS", url: "https://www.youtube.com/watch?v=YD552ck_kQc" }
  ],
  "Chapter 2: OS Structure": [
    { title: "Monolithic vs Microkernel OS", url: "https://www.youtube.com/watch?v=RiO6Mdwh7JU" },
   
    { title: "OS architecture models explained", url: "https://www.youtube.com/watch?v=2X8IkLYQR1M" },
    { title: "Overview of OS structure", url: "https://www.youtube.com/watch?v=vLwMl9qK4T8" }
  ],
  "Chapter 3: Processes": [
    { title: "What is a process in OS?", url: "https://www.youtube.com/watch?v=exbKr6fnoUw" },
    { title: "Process states and PCB", url: "https://www.youtube.com/watch?v=2X8IkLYQR1M" },
    { title: "Thread vs Process in OS", url: "https://www.youtube.com/watch?v=9t5Ca7YGx-w" },
    { title: "Process lifecycle in OS", url: "https://www.youtube.com/watch?v=vLwMl9qK4T8" }
  ],
  "Chapter 4: CPU Scheduling": [
    { title: "Introduction to CPU Scheduling", url: "https://www.youtube.com/watch?v=PAwkdM_nhbU" },
    { title: "FCFS Scheduling Algorithm", url: "https://www.youtube.com/watch?v=TYzMMsyUGag" },
    { title: "SJF Scheduling tutorial", url: "https://www.youtube.com/watch?v=RiO6Mdwh7JU" },
    { title: "Round Robin Algorithm deep dive", url: "https://www.youtube.com/watch?v=aWlQYllBZDs" }
  ]


};


function extractVideoId(url) {
  const match = url.match(/(?:v=|\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

async function getVideoInfo(videoId) {
  // This would normally call YouTube API; simulate instead
  return {
    thumbnail: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`,
    addedAt: Date.now()
  };
}

async function preloadVideos() {
  const container = document.getElementById("videosContainer");
  container.innerHTML = "";

  for (const topic in topics) {
    const videos = topics[topic];
    const section = document.createElement("div");
    section.className = "topic-section";

    const heading = document.createElement("h2");
    heading.textContent = topic;
    section.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "video-grid";

    for (const video of videos) {
      const id = extractVideoId(video.url);
      if (id) {
        const videoInfo = await getVideoInfo(id);
        videoInfo.title = video.title;
        videoInfo.url = video.url;

        const card = document.createElement("div");
        card.className = "video-card";
        card.innerHTML = `
          <img src="${videoInfo.thumbnail}" alt="${videoInfo.title}" onclick="window.open('${videoInfo.url}', '_blank')" />
          <div class="video-title">${videoInfo.title}</div>

              <div class="video-meta">Youtube</div>
        `;
        grid.appendChild(card);
      }
    }

    section.appendChild(grid);
    container.appendChild(section);
  }
}

// Call this after DOM is ready
window.onload = preloadVideos;
