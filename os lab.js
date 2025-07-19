const topics = {

  "Matrix Sum with Threads": [
    { title: "Multi-threaded Matrix Sum in C", url: "https://www.youtube.com/watch?v=C5NhMVqq90k" },
    { title: "Parallel Matrix Addition Tutorial", url: "https://www.youtube.com/watch?v=YHX4CEvAg3A" },
    { title: "Multithreading Matrix Sum (POSIX)", url: "https://www.youtube.com/watch?v=ldJ8WGZVXZk" },
    { title: "C Matrix Threading Example", url: "https://www.youtube.com/watch?v=d9s_d28yJq0" }
  ],
  "POSIX Threads": [
    { title: "Multithreading with POSIX‑Threads (pthreads)", url: "https://www.youtube.com/watch?v=C5NhMVqq90k" },
    { title: "Creating POSIX Threads in C++", url: "https://www.youtube.com/watch?v=wBD8jrDEDC4" },
    { title: "Understanding Pthreads Playlist", url: "https://www.youtube.com/watch?v=YHX4CEvAg3A" },
    { title: "Intro to Threads (pthreads) in C", url: "https://www.youtube.com/watch?v=ldJ8WGZVXZk" }
  ],
  "Semaphore": [
    { title: "Introduction to semaphores in C", url: "https://www.youtube.com/watch?v=YSn8_XdGH7c" },
    { title: "POSIX named semaphore example", url: "https://www.youtube.com/watch?v=KwcvmRBkAcg" },
    { title: "Semaphore Example in Posix Threads", url: "https://www.youtube.com/watch?v=gXS2xrPp1GA" },
    { title: "Semaphore concept & C example", url: "https://www.youtube.com/watch?v=ukM_zzrIeXs" }
  ],
  "Final Sum with Threads": [
    { title: "Threaded Summation Program in C", url: "https://www.youtube.com/watch?v=C5NhMVqq90k" },
    { title: "Sum Reduction with pthreads", url: "https://www.youtube.com/watch?v=YHX4CEvAg3A" },
    { title: "Sum of an array using threads", url: "https://www.youtube.com/watch?v=ldJ8WGZVXZk" },
    { title: "Mutex & Sum with Threads", url: "https://www.youtube.com/watch?v=d9s_d28yJq0" }
  ],
  "Buffer and Mutex": [
    { title: "Producer-Consumer using Mutex & Semaphore", url: "https://www.youtube.com/watch?v=ukM_zzrIeXs" },
    { title: "Mutex introduction with pthreads", url: "https://www.youtube.com/watch?v=YHX4CEvAg3A" },
    { title: "Buffering with Mutex Locks", url: "https://www.youtube.com/watch?v=ldJ8WGZVXZk" },
    { title: "Thread Synchronization: Mutex", url: "https://www.youtube.com/watch?v=C5NhMVqq90k" }
  ],
  "Factorial by Threads": [
    { title: "Compute Factorial using pthreads in C", url: "https://www.youtube.com/watch?v=ldJ8WGZVXZk" },
    { title: "Threaded Factorial Program", url: "https://www.youtube.com/watch?v=C5NhMVqq90k" },
    { title: "Parallel Factorial Calculation", url: "https://www.youtube.com/watch?v=YHX4CEvAg3A" },
    { title: "C Factorial Multithreading", url: "https://www.youtube.com/watch?v=d9s_d28yJq0" }
  ],
  "Matrix Multiply in Threads": [
    { title: "Multithreaded Matrix Multiplication in C", url: "https://www.youtube.com/watch?v=C5NhMVqq90k" },
    { title: "Parallel Matrix Multiplication pthreads", url: "https://www.youtube.com/watch?v=YHX4CEvAg3A" },
    { title: "Matrix Mul with Threads Example", url: "https://www.youtube.com/watch?v=ldJ8WGZVXZk" },
    { title: "C Threaded Matrix Multiply", url: "https://www.youtube.com/watch?v=d9s_d28yJq0" }
  ],
  "Thread Synchronization (Mutex/Semaphore/Deadlock)": [
    { title: "Mutex & Semaphore using pthreads", url: "https://www.youtube.com/watch?v=ukM_zzrIeXs" },
    { title: "Pthreads vs Semaphores Explained", url: "https://www.youtube.com/watch?v=pG8FUIJWZBQ" },
    { title: "Avoid Deadlocks in Threading", url: "https://www.youtube.com/watch?v=QMNtAFZtFMA" },
    { title: "Lock, Unlock & Starvation Concepts", url: "https://www.youtube.com/watch?v=QMNtAFZtFMA" }
  ],
  "Rand() in Threaded Programs": [
    { title: "rand() in Multithreading – Thread Safety?", url: "https://www.youtube.com/watch?v=C5NhMVqq90k" },
    { title: "Random Number Generation pthreads", url: "https://www.youtube.com/watch?v=YHX4CEvAg3A" },
    { title: "Thread-Safe srand()/rand()", url: "https://www.youtube.com/watch?v=ldJ8WGZVXZk" },
    { title: "rand() issues with threads", url: "https://www.youtube.com/watch?v=d9s_d28yJq0" }
  ],
  "Command Line in Kali Linux": [
   
    { title: "Using pthreads CLI examples", url: "https://www.youtube.com/watch?v=C5NhMVqq90k" },
    { title: "Kali Linux multithreading demo", url: "https://www.youtube.com/watch?v=YHX4CEvAg3A" },
    { title: "CLI Threading Tools in Linux", url: "https://www.youtube.com/watch?v=ldJ8WGZVXZk" }
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
