const skills = [
  {
    name: "Laravel",
    icon: "fab fa-laravel",
    percent: 90,
    color: "bg-danger",
  },
  { name: "PHP", icon: "fab fa-php", percent: 85, color: "bg-primary" },
  {
    name: "RESTful APIs",
    icon: "fas fa-code",
    percent: 90,
    color: "bg-success",
  },
  {
    name: "PostgreSQL/MySQL",
    icon: "fas fa-database",
    percent: 80,
    color: "bg-info",
  },
  {
    name: "JavaScript",
    icon: "fab fa-js",
    percent: 70,
    color: "bg-warning text-dark",
  },
  {
    name: "Vue.js",
    icon: "fab fa-vuejs",
    percent: 50,
    color: "bg-success",
  },
  {
    name: "WebSocket",
    icon: "fas fa-cloud",
    percent: 60,
    color: "bg-primary",
  },
  {
    name: "Kafka",
    icon: "fas fa-stream",
    percent: 60,
    color: "bg-secondary",
  },
  {
    name: "Docker",
    icon: "fab fa-docker",
    percent: 65,
    color: "bg-info",
  },
  {
    name: "HTML5",
    icon: "fab fa-html5",
    percent: 85,
    color: "bg-danger",
  },
  {
    name: "CSS3",
    icon: "fab fa-css3-alt",
    percent: 60,
    color: "bg-primary",
  },
  {
    name: "Git",
    icon: "fab fa-git-alt",
    percent: 85,
    color: "bg-secondary",
  },
];

skills.sort((a, b) => b.percent - a.percent);
const container = document.getElementById("skillsContainer");
skills.forEach((skill) => {
  const skillBlock = document.createElement("div");
  skillBlock.className =
    "mb-3 p-3 rounded bg-dark border border-secondary shadow-sm";

  const level =
    skill.percent >= 85
      ? "Expert"
      : skill.percent >= 70
      ? "Intermediate"
      : "Beginner";

  skillBlock.innerHTML = `
    <div class="d-flex justify-content-between align-items-center mb-2">
      <div>
        <i class="${skill.icon} me-2 text-info"></i>
        <strong class="text-light">${skill.name}</strong>
      </div>
      <span class="badge rounded-pill bg-primary small">${level}</span>
    </div>
    <div class="progress" role="progressbar" aria-label="${skill.name} skill bar">
      <div class="progress-bar ${skill.color}" style="width: 0%" data-width="${skill.percent}">
        ${skill.percent}%
      </div>
    </div>
  `;

  container.appendChild(skillBlock);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.dataset.width + "%";
        observer.unobserve(bar);
      }
    });
  },
  { threshold: 0.6 }
);

document.querySelectorAll(".progress-bar").forEach((bar) => {
  observer.observe(bar);
});

const terminalInput = document.getElementById("terminalInput");
const terminalOutput = document.getElementById("terminalOutput");
const commands = {
  skills: `Laravel, PHP, Kafka, PostgreSQL, MySQL, REST API, WebSocket, JavaScript, Vue.js, Docker, HTML/CSS`,
  experience: `5+ years working in Laravel API development across companies like Rishabh Software, Codebuddy, ValueCoders.`,
  projects: `Workstatus: scalable DB structure; Brizzle Store: E-com platform with real-time updates; Admin Panel improvements; Mpact-Internation; Xactimatch; HiringDay`,
  hobbies: `Writting Tech Blogs @ thedevnerd.com; playing video games; Batminton.`,
  contact: `kishankumar070997@gmail.com`,
  help: `Available commands: skills, experience, projects, help, hobbies, contact`,
};
terminalInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const input = terminalInput.value.trim().toLowerCase();
    const response =
      commands[input] || 'Command not found. Type "help" for list of commands.';
    terminalOutput.innerHTML =
      `<span style="color:#facc15">$ ${input}</span><br>${response}<br>` +
      terminalOutput.innerHTML;
    terminalInput.value = "";
  }
});
