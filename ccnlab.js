const videoGroups = [
  {
    title: "Basic Networking & Socket Programming",
    videos: [
      { url: "https://youtu.be/rurs7cdT5cc?si=LGDAQ70ekFsjx76l", title: "Basic Networking Commands" },
      { url: "https://youtu.be/C15nHC_PN98?si=AN9QPgLULJHD1k-x", title: "Socket Programming in C: Creating a UDP Server" },
      { url: "https://youtu.be/-ywi26WgPSQ?si=c4eS4EJPnjSUfXJC", title: "TCP Socket Programming | Socket Programming in C" },
      { url: "https://youtu.be/kgf1I3re7Uo?si=BHC9K0Qv3SArE3oV", title: "Network Programming (TCP Sockets)" },
      { url: "https://youtu.be/hGV8wsiCF28?si=86jFoJbD_Ws2Ia9T", title: "What is Wireshark | Complete Wireshark Tutorial" }
    ]
  },
  {
    title: "Cisco Packet Tracer Tutorials",
    videos: [
      { url: "https://youtu.be/Hij922BR8Sc?si=rgp-ea2ciHsWAqd-", title: "CISCO PACKET TRACER EP 5 | Static Multiple Routers" },
      { url: "https://youtu.be/1pTnDDtgBvo?si=Ixb03aIeCbc_MmHx", title: "CISCO PACKET TRACER EP 6 | DHCP Using Routers" },
      { url: "https://youtu.be/Jr7ftXcQ8EE?si=4QumckmD80kL7-_t", title: "CISCO PACKET TRACER EP 5 | Static Multiple Routers (Alternate)" },
      { url: "https://youtu.be/qfnF66ovKA4?si=RDKbtdluldUQBXdi", title: "CISCO PACKET TRACER EP 4 | Setup DHCP, DNS, HTTPs Servers" },
      { url: "https://youtu.be/J1WGc9CaIcQ?si=YtDlZmqVs9gxwiUe", title: "CISCO PACKET TRACER EP 3 | Router on a Stick" },
      { url: "https://youtu.be/5qgHEnfo91Y?si=KStmcI-ZOl2poJev", title: "CISCO PACKET TRACER EP 2 | How to Create VLAN" },
      { url: "https://youtu.be/27sSFwOmmmU?si=kQgcyrgXP_KkFsTs", title: "CISCO PACKET TRACER EP 1 | How to Setup" }
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

  videoGroups.forEach(group => {
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
