const topics = {

  "AWS Cloud Foundations Knowledge Check": [
    {
      title: "Module 1: Cloud Concepts Overview | AWS Academy | AWS Cloud Foundations",
      url: "https://www.youtube.com/watch?v=LN_dAI35rVY"
    },
    {
      title: "Module 2: Cloud Economics and Billing | AWS Academy | AWS Cloud Foundations",
      url: "https://www.youtube.com/watch?v=t0AvZDTbYK8"
    },
    {
      title: "Module 3: AWS Global Infrastructure Overview | AWS Academy | AWS Cloud Foundations",
      url: "https://www.youtube.com/watch?v=7AvNf27iygw"
    },
    {
      title: "Module 4: AWS Cloud Security | AWS Academy | AWS Cloud Foundations",
      url: "https://www.youtube.com/watch?v=9resGL4rOt4"
    },
    {
      title: "Module 5: Networking and Content Delivery | AWS Academy | AWS Cloud Foundations",
      url: "https://www.youtube.com/watch?v=KVybVUJxVRk"
    },
    {
      title: "Module 6: AWS Compute | AWS Academy | AWS Cloud Foundations",
      url: "https://www.youtube.com/watch?v=LDRYv95PpTs"
    },
    {
      title: "Module 7: AWS Storage | AWS Academy | AWS Cloud Foundations",
      url: "https://www.youtube.com/watch?v=Rtpk5JnNEAA"
    },
    {
      title: "Module 8: AWS Databases | AWS Academy | AWS Cloud Foundations",
      url: "https://www.youtube.com/watch?v=v7Re1CFNcik"
    },
    {
      title: "Module 9: AWS Cloud Architecture | AWS Academy | AWS Cloud Foundations",
      url: "https://www.youtube.com/watch?v=bo1lybjIT5M"
    },
    {
      title: "Module 10: Auto Scaling and Monitoring | AWS Academy | AWS Cloud Foundations",
      url: "https://www.youtube.com/watch?v=2CnycGvnCdY"
    }
  ],

  "AWS Labs and Activities": [
    {
      title: "Lab 1: Introduction to AWS IAM | Module 4 - AWS Cloud Security",
      url: "https://www.youtube.com/watch?v=ZNwdiYGIFrw&list=PLLzMw6QHBcBWVUPheyXXCUkFuu3d9P77q&index=5"
    },
    {
      title: "Lab 2: Build your VPC and Launch a Web Server | Module 5 - Networking & Content Delivery",
      url: "https://www.youtube.com/watch?v=pFZ2Sj5zJco&list=PLLzMw6QHBcBWVUPheyXXCUkFuu3d9P77q&index=7"
    },
    {
      title: "Lab 3: Introduction to Amazon EC2 | Module 6 - Compute",
      url: "https://www.youtube.com/watch?v=jGx3GxbrQRo&list=PLLzMw6QHBcBWVUPheyXXCUkFuu3d9P77q&index=9"
    },
    {
      title: "Activity: AWS Lambda | Module 6 - Compute",
      url: "https://www.youtube.com/watch?v=NO4BnjBlw9w&list=PLLzMw6QHBcBWVUPheyXXCUkFuu3d9P77q&index=10"
    },
    {
      title: "Activity: AWS Elastic Beanstalk | Module 6 - Compute",
      url: "https://www.youtube.com/watch?v=4DVbtNFSG2E&list=PLLzMw6QHBcBWVUPheyXXCUkFuu3d9P77q&index=11"
    },
    {
      title: "Lab 4: Working with EBS | Module 7 - Storage",
      url: "https://www.youtube.com/watch?v=xLWLwlVEOBE&list=PLLzMw6QHBcBWVUPheyXXCUkFuu3d9P77q&index=13"
    },
    {
      title: "Lab 5: Build a Database Server | Module 8 - Databases",
      url: "https://www.youtube.com/watch?v=ifchOrDiLuw&list=PLLzMw6QHBcBWVUPheyXXCUkFuu3d9P77q&index=15"
    }
  ],

  "AWS Course Assessments": [
    {
      title: "Course Assessment 1 | AWS Academy Cloud Foundations",
      url: "https://www.youtube.com/watch?v=SGdOBNycn4I&list=PLLzMw6QHBcBWVUPheyXXCUkFuu3d9P77q&index=20"
    },
    {
      title: "Course Assessment 2 | AWS Academy Cloud Foundations",
      url: "https://www.youtube.com/watch?v=yZ2Pa4uNFHs&list=PLLzMw6QHBcBWVUPheyXXCUkFuu3d9P77q&index=21"
    }
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
