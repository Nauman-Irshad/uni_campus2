// Video data with manual titles
const topics = {
  "(MID) DFA": [
    { title: "DFA Example - Learn With ART", url: "https://www.youtube.com/watch?v=BnI4tnEhpT0" },
    { title: "Design DFA - Easy Method", url: "https://www.youtube.com/watch?v=ajXPYSV_YB8" },
    { title: "How to Solve DFA - Tutorial", url: "https://www.youtube.com/watch?v=X_LNlp5zrp0&t=231s" },
    { title: "DFA Practice Example", url: "https://www.youtube.com/watch?v=zpJrlIqpIlU" },
    { title: "Finite Automata Explanation", url: "https://www.youtube.com/watch?v=XXeJ-EHwEfo&pp=0gcJCcwJAYcqIYzv" },
    { title: "Convert Regular Expression to DFA", url: "https://www.youtube.com/watch?v=EuxzmtyMnYY" },
    { title: "Regex to DFA Transition", url: "https://www.youtube.com/watch?v=EgeFoVHA-A4&pp=0gcJCcwJAYcqIYzv" },
    { title: "DFA Introduction by Nauman", url: "https://www.youtube.com/watch?v=_lI-hJ9GlF8" }
  ],
  "(MID) NFA": [
    { title: "NFA Full Lecture", url: "https://www.youtube.com/watch?v=Dli3czfNvlo" },
    { title: "NFA Explained with Example", url: "https://www.youtube.com/watch?v=XndSEN1z4Ro&t=928s" },
    { title: "NFA vs DFA", url: "https://www.youtube.com/watch?v=UbK0dxMwPeQ" },
    { title: "What is NFA?", url: "https://www.youtube.com/watch?v=YiyeBepvxko" },
    { title: "NFA Easy Explanation", url: "https://www.youtube.com/watch?v=4bjqVsoy6bA&t=330s" },
    { title: "Learn NFA", url: "https://www.youtube.com/watch?v=ehy0jGIYRtE" }
  ],
  "(MID) Pumping Lemma": [
    { title: "Pumping Lemma Basics", url: "https://www.youtube.com/watch?v=XeT8sJxU1ak" },
    { title: "Examples of Pumping Lemma", url: "https://www.youtube.com/watch?v=VZ3RsbQ-I7g" },
    { title: "How to Use Pumping Lemma", url: "https://www.youtube.com/watch?v=WdmbZnUesRw" },
    { title: "Tricky Pumping Lemma Q&A", url: "https://www.youtube.com/watch?v=1OKW5XiZ97U" },
    { title: "More Pumping Lemma Problems", url: "https://www.youtube.com/watch?v=3G91EqFxdxE" },
    { title: "Pumping Lemma in Automata", url: "https://www.youtube.com/watch?v=BKIUSHYpq_Y" },
    { title: "Pumping Lemma Demystified", url: "https://www.youtube.com/watch?v=-4_Q3qx6Z08" },
    { title: "Intuition Behind Pumping Lemma", url: "https://www.youtube.com/watch?v=XVUCrOuL45w" }
  ],
  "(MID) Computation Tree": [
    { title: "Computation Tree Intro", url: "https://www.youtube.com/watch?v=OHJoIveYAKc" },
    { title: "How to Build Computation Tree", url: "https://www.youtube.com/watch?v=nUVmsW68K0Y&t=269s" },
    { title: "Examples of Computation Tree", url: "https://www.youtube.com/watch?v=k0EVZTJnEXQ" },
    { title: "Detailed Computation Tree Explanation", url: "https://www.youtube.com/watch?v=KUzmeiRSSak" }
  ],
  "(MID) NFA to DFA": [
    { title: "NFA to DFA Conversion", url: "https://www.youtube.com/watch?v=LEigAZN6RdY" },
    { title: "How to Convert NFA to DFA", url: "https://www.youtube.com/watch?v=n_5wgW10ZYU" },
    { title: "NFA to DFA Tutorial", url: "https://www.youtube.com/watch?v=syjJutOdLnI" },
    { title: "Full Guide: NFA to DFA", url: "https://www.youtube.com/watch?v=jN8zvENdjBg" },
    { title: "Step-by-Step NFA to DFA", url: "https://www.youtube.com/watch?v=6aOtnyL40X8" },
    { title: "Visual NFA to DFA", url: "https://www.youtube.com/watch?v=pnyXgIXpKnc" },
    { title: "Easy NFA to DFA", url: "https://www.youtube.com/watch?v=l_-MNll56oM&t=562s" },
    { title: "Automata: NFA to DFA", url: "https://www.youtube.com/watch?v=zhnDBaspfGw" },
    { title: "Practical NFA to DFA", url: "https://www.youtube.com/watch?v=f2VaGFo61zk" }
  ],
  "(MID) Regular Expression (RE)": [
    { title: "Regular Expression - Basics", url: "https://www.youtube.com/watch?v=rjG5LwbqAp4" },
    { title: "Regular Expression by Automata Expert", url: "https://www.youtube.com/watch?v=6DwSsiFCLGc" },
    { title: "Regex Explained Simply", url: "https://www.youtube.com/watch?v=5jVfvNV4K-c&t=34s" },
    { title: "Understanding Regular Expressions", url: "https://www.youtube.com/watch?v=iffokz3wsNM" },
    { title: "Regular Expression Made Easy", url: "https://www.youtube.com/watch?v=sUcuOUXkKR0" },
    { title: "Regex in Automata", url: "https://www.youtube.com/watch?v=upu_TeZImN0&t=87s" },
    { title: "Regex Conceptual Clarity", url: "https://www.youtube.com/watch?v=qPhdi6WVjEM" },
    { title: "Regular Expressions Explained", url: "https://www.youtube.com/watch?v=pBtA8ODRpCg" }
  ],



  "(FINAL) DFA Minimization": [
    { title: "DFA Minimization Explained", url: "https://www.youtube.com/watch?v=bybq9pYvVrw&t=760s" },
    { title: "Minimize DFA Easily", url: "https://www.youtube.com/watch?v=A7eKj_GXam0" },
    { title: "DFA Reduction Example", url: "https://www.youtube.com/watch?v=l_Ygbftx_EE&t=312s" },
    { title: "Minimize DFA Steps", url: "https://www.youtube.com/watch?v=rGxyc-CJGRk&t=247s" },
    { title: "Complete DFA Minimization", url: "https://www.youtube.com/watch?v=BkGWnuSENsc&t=413s" },
    { title: "Full Playlist - DFA Minimization", url: "https://www.youtube.com/watch?v=JORJffsG4B0&list=PLHK9d-8L-FKIbl5c7vk8a0AO-DwrSNTiV" },
    { title: "Simplify DFA with Partitioning", url: "https://www.youtube.com/watch?v=0XaGAkY09Wc" }
  ],
 

 
  
  "(FINAL) CFG": [
    { title: "CFG Grammar Explanation", url: "https://www.youtube.com/watch?v=gGBUx6V63Gc" },
    { title: "Context Free Grammar Basics", url: "https://www.youtube.com/watch?v=qdxhKKi1B1g" },
    { title: "How CFG Works", url: "https://www.youtube.com/watch?v=p6Gx4oRgC-U&t=372s" },
    { title: "CFG and Derivation", url: "https://www.youtube.com/watch?v=UE0B2io8K5o&t=2s" },
    { title: "Context-Free Language Explanation", url: "https://www.youtube.com/watch?v=5jVfvNV4K-c&t=34s" },
    { title: "CFG Video - Short", url: "https://www.youtube.com/watch?v=k0EVZTJnEXQ" },
    { title: "CFG Parsing Detailed", url: "https://www.youtube.com/watch?v=AMKFvGUiR_0&t=508s" },
    { title: "Ambiguity in CFG", url: "https://www.youtube.com/watch?v=p6hANf8V1wQ" },
    { title: "CFG Solve Examples", url: "https://www.youtube.com/watch?v=-FOlg3Uf6J0" },
    { title: "CFG Simplification", url: "https://www.youtube.com/watch?v=05YdJlVkwJg&t=11s" },
    { title: "Production Rules Explained", url: "https://www.youtube.com/watch?v=dPMIWf524ls&t=208s" },
    { title: "CFG Tutorial Urdu", url: "https://www.youtube.com/watch?v=Rhu4Oo6thtk&t=324s" },
    { title: "Chomsky Normal Form", url: "https://www.youtube.com/watch?v=QxDvNdvThm0" },
    { title: "CFG Derivation Tree", url: "https://www.youtube.com/watch?v=FjSemgs2vyU&t=810s" }
  ],
  "(FINAL) PDA": [
    { title: "PDA Introduction by ART", url: "https://www.youtube.com/watch?v=xkKylBKSgK8&t=3s" },
    { title: "PDA Dry Run Tutorial", url: "https://www.youtube.com/watch?v=2zGvtHTHB04" },
    { title: "Design PDA for Language", url: "https://www.youtube.com/watch?v=bLJa20V4ulc" },
    { title: "Pushdown Automata Basics", url: "https://www.youtube.com/watch?v=djhT7k5zr78" },
    { title: "Build PDA Step by Step", url: "https://www.youtube.com/watch?v=TpRXfr-QzGg&t=455s" },
    { title: "PDA Example – UCP", url: "https://www.youtube.com/watch?v=5D8GWplAK3E" },
    { title: "CFG to PDA Explanation", url: "https://www.youtube.com/watch?v=5n0juq4lImQ" },
    { title: "Full PDA Playlist – Urdu", url: "https://www.youtube.com/watch?v=Br44Zxv84-Q" },
    { title: "Build PDA Tree", url: "https://www.youtube.com/watch?v=moYc4KRdcZs" },
    { title: "PDA Practice Problem", url: "https://www.youtube.com/watch?v=SSJ0i-I2VXU" },
    { title: "Advanced PDA Tutorial", url: "https://www.youtube.com/watch?v=UTp3RgDVy4Y&t=507s" },
    { title: "More PDA Examples", url: "https://www.youtube.com/watch?v=4J_DSP0ZqCQ" },
    { title: "Urdu PDA Guide", url: "https://www.youtube.com/watch?v=B6HJhQEdl-Q&t=534s" }
  ],
  "(FINAL) Turing Machine": [
    { title: "Intro to Turing Machines", url: "https://www.youtube.com/watch?v=ylVDnSQnN7g" },
    { title: "Turing Machine by Nauman", url: "https://www.youtube.com/watch?v=19dmDbHLEAo" },
    { title: "Turing Machine Playlist", url: "https://www.youtube.com/watch?v=OTYvrlHXpyA" },
    { title: "Turing Tape Head Example", url: "https://www.youtube.com/watch?v=mCcWziI3E3A" },
    { title: "TM Dry Run & Working", url: "https://www.youtube.com/watch?v=EuJvVBQpfO4&t=973s" },
    { title: "Turing Example Solved", url: "https://www.youtube.com/watch?v=y2nOVv0Iin4&t=205s" }
  ]
};


// Repeat above pattern for other categories (NFA, PDA, CFG, etc.)


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
