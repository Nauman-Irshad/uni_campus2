const topics = {
  "MapReduce": [
    { title: "MapReduce explained with example | System Design", url: "https://www.youtube.com/watch?v=cHGaQz0E7AU" },
    { title: "Introduction to MapReduce Framework", url: "https://www.youtube.com/watch?v=UzR7XB74tuk" },
    { title: "MapReduce Tutorial – Edureka", url: "https://www.youtube.com/playlist?list=PLGc09ZOFT66j1hRwe1i2t-r6gi9CYvJMQ" },
    { title: "What is MapReduce & how it works?", url: "https://www.youtube.com/watch?v=yD6AuLWALSQ" },
    { title: "MapReduce Complete Video", url: "https://www.youtube.com/watch?v=ULtOZqlZnCw" },
    { title: "Basic Concepts of MapReduce", url: "https://www.youtube.com/watch?v=_bi7kxj6nqA" }
  ],
  "Hadoop & Distributed Systems": [
    { title: "Apache Hadoop overview", url: "https://en.wikipedia.org/wiki/Apache_Hadoop" },
    { title: "Hadoop 3.0 Features (Erasure Coding)", url: "https://www.youtube.com/watch?v=GGGO-qqcNCI" },
    { title: "HDFS Erasure Coding Introduction", url: "https://data-flair.training/blogs/hadoop-hdfs-erasure-coding/" },
    { title: "Erasure Coding - Key to Efficient Storage", url: "https://www.youtube.com/watch?v=uOj12A6hVSQ" },

  ],
  
  "RAID & File Formats": [
    { title: "Erasure Coding in HDFS", url: "https://www.youtube.com/watch?v=uOj12A6hVSQ" },
    { title: "RAID Levels Explained (RAID 0/1/5/6/10)", url: "https://www.youtube.com/watch?v=tRZGeaHPoaw" },

  ],
  "ALL": [
  { url: "https://www.youtube.com/watch?v=aReuLtY0YMI&t=343s", title: "Hadoop 3 Overview" },
  { url: "https://www.youtube.com/watch?v=taTfW2kXSoE", title: "Apache Hive Tutorial" },
  { url: "https://www.youtube.com/watch?v=AXvGkP20CDs", title: "HiveQL Queries Explained" },
  { url: "https://www.youtube.com/watch?v=qQsGx1vIdn4", title: "Bucketing in Hive" },
  { url: "https://www.youtube.com/watch?v=eE7Bfw9lFfs", title: "RAID 0 and 1 Explained" },
  { url: "https://www.youtube.com/watch?v=9ArtEmpop7w", title: "Hadoop YARN Architecture" },
  { url: "https://www.youtube.com/watch?v=ZFbkNY6Xn94", title: "YARN Explained" },
  { url: "https://www.youtube.com/watch?v=F3-8jFI_OPY", title: "Spark Architecture" },
  { url: "https://www.youtube.com/watch?v=mBDmCU8VGhk", title: "Hadoop 3 Detailed Tutorial" },
  { url: "https://www.youtube.com/watch?v=A5ErLpznTgg", title: "Hadoop 3 Video" },
  { url: "https://www.youtube.com/watch?v=v_uodKAywXA", title: "Spark in Big Data" },
  { url: "https://www.youtube.com/watch?v=Lb4wbINtYVA", title: "Hadoop 2 Overview" },
  { url: "https://www.youtube.com/watch?v=YDWCwku5Wx0", title: "Hadoop 2 Architecture" },
  { url: "https://www.youtube.com/watch?v=o2tIEnFqma8", title: "Hive Query Language Basics" }
 ],
 "Apache Pig": [
    { title: "Pig Tutorial – Hadoop Script (Edureka)", url: "https://www.youtube.com/watch?v=qRtSAKKe1_A" },
  
  ],
  "Apache Mahout": [
    { title: "Apache Mahout Tutorial – Edureka", url: "https://www.youtube.com/watch?v=zvfKH9Yb0s0" },
    { title: "Machine Learning with Mahout", url: "https://www.youtube.com/watch?v=74Uj1wLFrmw" },

  ],
  "Apache Hive": [
    { title: "Hive Tutorial – Edureka", url: "https://www.youtube.com/playlist?list=PL9ooVrP1hQOETJp8sDQvmgCmvO7PFxD7s" },
    { title: "Hive 101: Guide to the Basics", url: "https://www.youtube.com/watch?v=991o2lOKekI" },
 

  ],
  "Apache Spark": [
    { title: "Apache Spark Architecture - EXPLAINED!", url: "https://www.youtube.com/watch?v=iXVIPQEGZ9Y" },
    { title: "Spark Cluster Architecture Explained", url: "https://www.youtube.com/watch?v=jffQhcweGwY" },
    { title: "Learn Apache Spark in 10 Minutes", url: "https://www.youtube.com/watch?v=v_uodKAywXA" },
    { title: "Spark Ultimate Guide – Full Course", url: "https://www.youtube.com/watch?v=FNJze2Ea780" },
    { title: "Spark Architecture Playlist", url: "https://www.youtube.com/playlist?list=PL50mYnndduIG8bRY2Imv4f1mQJg25EBpr" }

  ],
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
