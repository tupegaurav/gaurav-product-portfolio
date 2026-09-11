const projects = {

  inspectlog: {
    title: "InspectLog — AI-Powered Digital Logbook for Manufacturing QC",

    timeline: [
      "Requirements",
      "n8n Pipeline",
      "GitHub Pages POC"
    ],

    metrics: [
      ["Data Entry", "Automated"],
      ["Validation", "Live Parts List"],
      ["Pipeline", "Event-Triggered"]
    ],

    problem:
      "Manufacturing QC teams relied on manual logbook entry, creating delays and inconsistent inspection records with no live validation against parts data.",

    insight:
      "Defined product requirements for an AI agent that automates logbook data entry, extracting inspection data from a web app and validating it against a live parts list before writing to Google Sheets. Directed the event/webhook-triggered n8n pipeline design (AI Agent → validation → structured log append).",

    impact:
      "Shipped a proof-of-concept frontend on GitHub Pages and scoped a v2 upgrade to a richer factory reporting format covering defect-wise breakdowns, rejection weights, and monthly summary views.",

    links: [
      { label: "Live Demo", url: "https://quality-track-insight.lovable.app/" }
    ]
  },

  campus: {
    title: "Campus Connect — AI-Driven Student Collaboration Platform",

    timeline: [
      "Strategy",
      "Wireframes",
      "PRD & Workflows"
    ],

    metrics: [
      ["Workflows", "AI-Assisted"],
      ["Documentation", "Full PRD"],
      ["Focus", "Engagement"]
    ],

    problem:
      "Students lacked a unified platform for task management, peer communication, and coordination across group work.",

    insight:
      "Designed AI-assisted collaboration workflows covering task management, peer communication, and student coordination, delivered as a full PRD, wireframes, and end-to-end product workflows for a scalable campus platform.",

    impact:
      "Built AI-powered productivity features with a focus on measurable teamwork and engagement outcomes.",

    links: [
      { label: "PRD", url: "https://drive.google.com/file/d/1DyEpRd_ACBpHY9J-YYsXfCua7cOsJGfH/view?usp=sharing" },
      { label: "Live Demo", url: "https://tupegaurav.github.io/campus-connect/index.html" },
      { label: "GitHub", url: "https://github.com/tupegaurav/campus-connect" }
    ]
  },

  ocean: {
    title: "OceanGuard — Real-Time Coastal Risk Monitoring Platform",

    timeline: [
      "Research",
      "Pipeline Design",
      "Alerts & Dashboard"
    ],

    metrics: [
      ["Monitoring", "Automated"],
      ["Alerts", "Realtime"],
      ["Architecture", "Automation-First"]
    ],

    problem:
      "Coastal risk monitoring required continuous environmental tracking without centralized operational visibility or automated alerting.",

    insight:
      "Designed and deployed automated environmental monitoring pipelines using n8n, the Open-Meteo API, and the Telegram Bot API, engineering real-time operational alert systems with an automation-first architecture for coastal risk intelligence.",

    impact:
      "Produced full PRD documentation covering decision-support logic, risk thresholds, and system workflows.",

    links: [
      { label: "PRD", url: "https://drive.google.com/file/d/1hxCoJdyHdhwVvgvTOoarknrRcNh9IWYU/view?usp=sharing" },
      { label: "Live Demo", url: "https://tupegaurav.github.io/oceanguard/" },
      { label: "GitHub", url: "https://github.com/tupegaurav/oceanguard" }
    ]
  },

  vitalflow: {
    title: "VitalFlow — Multi-Agent Post-Discharge Patient Monitoring & Clinical Triage",

    timeline: [
      "Scoping",
      "AI Triage Agent",
      "Dashboard & Webhook"
    ],

    metrics: [
      ["Check-in", "14-Day Cycle"],
      ["Channels", "Telegram + Web"],
      ["Escalation", "AI-Branched"]
    ],

    problem:
      "Post-discharge patients lacked a consistent monitoring experience across communication channels, risking missed red-flag symptoms.",

    insight:
      "Directed the design of an AI agent (Groq/LLaMA) parsing patient replies into structured pain-level, wound-status, and red-flag data, branching into escalation or reassurance flows. Scoped and shipped a 14-day automated check-in system spanning Telegram and web-form channels, converging into one shared AI triage logic.",

    impact:
      "Delivered a Care Team Dashboard (risk-triage view) and patient check-in form as a connected product surface, backed by a production n8n webhook.",

    links: [
      { label: "PRD", url: "https://drive.google.com/file/d/1jpfuSyVfd6R3zpkcvqYjGh1Spey-9jOM/view?usp=sharing" },
      { label: "Live Demo", url: "https://healing-light-guide.lovable.app/" }
    ]
  },

  hiresmartly: {
    title: "Hiresmartly — AI-Powered HR Platform for Resume & JD Analysis",

    timeline: [
      "Architecture",
      "5-Agent Pipeline",
      "PRD & Build Guide"
    ],

    metrics: [
      ["Agents", "5"],
      ["Pipeline", "RAG-Based"],
      ["Documentation", "PRD + Build Guide"]
    ],

    problem:
      "HR teams lacked a structured, scalable way to analyze resumes against job descriptions and surface skill gaps.",

    insight:
      "Designed a five-agent RAG pipeline (Resume Parser, JD Analyzer, Gap Reasoning Agent, Coach Agent, Orchestrator Router) to help HR teams analyze resumes against job descriptions, adapting a proven orchestration architecture from a prior product into the HR domain.",

    impact:
      "Produced a full PRD and node-by-node build guide for the five-agent pipeline.",

    links: [
      { label: "PRD", url: "https://drive.google.com/file/d/1kGZnnucKSOaDUndwIfIdO341GKccejxw/view?usp=sharing" },
      { label: "Live Demo", url: "https://tupegaurav.github.io/Hiresmartly-/" },
      { label: "GitHub", url: "https://github.com/tupegaurav/Hiresmartly-" }
    ]
  },

  pmagentos: {
    title: "PM Agent OS",

    timeline: [
      "Architecture",
      "Agent Orchestration",
      "Live Deployment"
    ],

    metrics: [
      ["Workflows", "AI-Orchestrated"],
      ["Agents", "Multi-Agent"],
      ["System", "Deployed"]
    ],

    problem:
      "Product managers lacked a unified, AI-assisted operating layer to orchestrate the many workflows involved in running a product.",

    insight:
      "Designed an agent operating system that coordinates multiple AI agents around core product management workflows, giving PMs a structured, AI-assisted operating layer instead of disconnected point tools.",

    impact:
      "Shipped a live, working system demonstrating AI-assisted product management orchestration end to end.",

    links: [
      { label: "Case Study", url: "https://drive.google.com/file/d/1bdYxBEpGcR8rcTfyUprPc-wqaBlsvp82/view?usp=sharing" },
      { label: "Live Demo", url: "https://agent-nexus-18.lovable.app" }
    ]
  },

  lc: {
    title: "Liquid Chromatography System",

    timeline: [
      "POC",
      "Prototype",
      "Production"
    ],

    metrics: [
      ["Subsystems", "Integrated"],
      ["DFM", "Applied"],
      ["Workflow", "Validated"]
    ],

    problem:
      "Initial enclosure systems lacked structured manufacturability and scalable integration planning.",

    insight:
      "Early alignment between design, manufacturing, and subsystem workflows reduced downstream redesign effort.",

    impact:
      "Supported development of a production-oriented analytical instrumentation enclosure system.",

    links: [
      { label: "Case Study", url: "https://drive.google.com/file/d/1LJhufDIFlKm07_3dRtWaPbJypjK4Y7Ob/view?usp=sharing" }
    ]
  },

  pcr: {
    title: "PCR Machine Enclosure",

    timeline: [
      "POC",
      "Prototype",
      "Validation"
    ],

    metrics: [
      ["Thermal", "Optimized"],
      ["Serviceability", "Improved"],
      ["Prototype", "Validated"]
    ],

    problem:
      "PCR systems required thermally stable and serviceable enclosure architecture.",

    insight:
      "Thermal-aware layout planning improved operational usability and future scalability.",

    impact:
      "Delivered enclosure structure supporting repeated testing and laboratory validation workflows.",

    links: [
      { label: "Case Study", url: "https://drive.google.com/file/d/1LBzgja19m06TF-IEbWH38eVHxJw80X-U/view?usp=sharing" }
    ]
  },

  pump: {
    title: "HPLC Piston Pump",

    metrics: [
      ["Mechanisms", "2"],
      ["Prototype", "Functional"],
      ["Trade-offs", "Analyzed"]
    ],

    problem:
      "Academic environments lacked transparent and affordable HPLC pumping systems.",

    insight:
      "Mechanical alignment and manufacturability strongly affect precision fluid delivery.",

    impact:
      "Developed working prototype demonstrating core piston-pump principles.",

    links: [
      { label: "Case Study", url: "https://drive.google.com/file/d/1POPTynJdtOx1r3bXT5_OaqurHpIV8mSI/view?usp=sharing" }
    ]
  },

  speed: {
    title: "Car Speed Detection System",

    metrics: [
      ["Realtime", "Enabled"],
      ["Sensors", "Integrated"],
      ["Platform", "Arduino"]
    ],

    problem:
      "Low-cost realtime vehicle speed detection systems were needed for academic experimentation.",

    insight:
      "Embedded systems can provide affordable realtime monitoring capabilities.",

    impact:
      "Built and validated Arduino-based vehicle speed monitoring prototype.",

    links: []
  },

  web: {
    title: "Website Development",

    metrics: [
      ["Projects", "2"],
      ["Frontend", "Responsive"],
      ["Users", "Business-focused"]
    ],

    problem:
      "Small businesses lacked structured digital presence and clear service communication.",

    insight:
      "Simple task-oriented interfaces improve usability and customer engagement.",

    impact:
      "Developed responsive websites for healthcare and furniture business applications.",

    links: [
      { label: "Live Demo", url: "https://vijayas-luxe-beauty.lovable.app" }
    ]
  }

};

document.querySelectorAll(".project-card")
.forEach(card => {

  card.addEventListener("click", () => {

    const key = card.dataset.key;
    const data = projects[key];

    document.getElementById("modal-title")
    .innerText = data.title;

    document.getElementById("modal-problem")
    .innerText = data.problem;

    document.getElementById("modal-insight")
    .innerText = data.insight;

    document.getElementById("modal-impact")
    .innerText = data.impact;

    // LINKS (Live Demo / PRD / GitHub / Case Study)
    const linksWrap =
    document.getElementById("modal-links");

    linksWrap.innerHTML = "";

    if(data.links && data.links.length){

      linksWrap.style.display = "flex";

      data.links.forEach(link => {

        const a = document.createElement("a");

        a.className = "full-case-btn";
        a.href = link.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.innerText = link.label;

        linksWrap.appendChild(a);

      });

    } else {

      linksWrap.style.display = "none";

    }

    // METRICS
    const metrics =
    document.getElementById("modal-metrics");

    metrics.innerHTML = "";

    data.metrics.forEach(m => {

      const div = document.createElement("div");

      div.className = "metric";

      div.innerHTML = `
        <strong>${m[1]}</strong>
        ${m[0]}
      `;

      metrics.appendChild(div);

    });

    // TIMELINE
    const timeline =
    document.getElementById("timeline");

    timeline.innerHTML = "";

    if(data.timeline){

      timeline.style.display = "flex";

      data.timeline.forEach(stage => {

        const div = document.createElement("div");

        div.className = "stage";

        div.innerHTML = stage;

        timeline.appendChild(div);

      });

    } else {

      timeline.style.display = "none";

    }

    // OPEN MODAL
    document.getElementById("modal")
    .style.display = "block";

  });

});

// CLOSE BUTTON
document.querySelector(".close")
.onclick = () => {

  document.getElementById("modal")
  .style.display = "none";

};

// OUTSIDE CLICK
window.onclick = e => {

  if(e.target.id === "modal"){

    document.getElementById("modal")
    .style.display = "none";

  }

};
