const projects = {

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

    link: "case-studies/lc-system.pdf"
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

    link: "case-studies/pcr-machine.pdf"
  },

  ocean: {
    title: "OceanGuard Monitoring Platform",

    timeline: [
      "Research",
      "Workflow",
      "Dashboard"
    ],

    metrics: [
      ["Automation", "Realtime"],
      ["APIs", "Integrated"],
      ["Alerts", "AI-driven"]
    ],

    problem:
      "Environmental monitoring workflows lacked centralized operational visibility.",

    insight:
      "Automation orchestration and realtime data pipelines improve risk visibility.",

    impact:
      "Designed AI-assisted monitoring workflows for environmental intelligence systems.",

    link: "#"
  },

  shaker: {
    title: "Bacterial Shaker System",

    timeline: [
      "Design",
      "Prototype",
      "Validation"
    ],

    metrics: [
      ["Operation", "Continuous"],
      ["Vibration", "Reduced"],
      ["Structure", "Improved"]
    ],

    problem:
      "Continuous laboratory shaking systems required stable and serviceable enclosure structures.",

    insight:
      "Rigid structural layout and modular access improved long-term operational stability.",

    impact:
      "Developed enclosure concept supporting laboratory equipment reliability and usability.",

    link: "case-studies/shaker.pdf"
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

    link: "case-studies/hplc-pump.pdf"
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

    link: "#"
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

    link: "#"
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

    // CASE STUDY BUTTON
    const caseLink =
    document.getElementById("case-link");

    if(data.link === "#"){

      caseLink.style.display = "none";

    } else {

      caseLink.style.display = "inline-block";
      caseLink.href = data.link;

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
