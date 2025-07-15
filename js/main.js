// Initialize VANTA.js background
VANTA.WAVES({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: document.documentElement.scrollHeight,
  minWidth: window.innerWidth,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x1a2980,
  shininess: 27.0,
  waveHeight: 20.0,
  waveSpeed: 0.75,
  zoom: 0.9,
  amplitude: 1.0,
  coverage: 1.2,
});

// Update VANTA height on window resize and content changes
window.addEventListener("resize", () => {
  if (window.VANTA) {
    window.VANTA.resize();
    window.VANTA.options.minHeight = document.documentElement.scrollHeight;
  }
});

// Project data
const projects = [
  {
    title: "E-commerce Platform",
    description:
      "E-Commerce Website and Service Information, Developed a fully functional e-commerce website for a furniture and services company.",
    image: "images/ecommerce.png",
    technologies: [
      "Laravel",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
    ],
    liveLink: "https://servexegypt.com/",
  },
  {
    title: "Hospital Appointment System",
    description:
      "Afull-featured Laravel web app for booking hospital appointments, managing doctors, and handling secure online payments via MyFatoorah.",
    image: "images/hospital.png",
    technologies: ["Laravel", "JavaScript", "Pusher", "MySQL", "My Fatoorah"],
    liveLink:
      "https://www.linkedin.com/posts/moataz-ahmed-b18a49276_laravel-backend-hospitalabrsystem-activity-7334595360683638786-DaSr?utm_source=share&utm_medium=member_desktop&rcm=ACoAAENuHwQBIqpFEZsQzKHw5ezQX-yVDQXgg64",
    githubLink: "https://github.com/Moataz6333/Hospital-project",
  },
  {
    title: "Competition-and-Quiz-Website",
    description:
      "Developed a web application for hosting competitions and quizzes, allowing admins to create quizzes and students to register, participate, and receive their results.",
    image: "images/esc.png",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
    liveLink: "https://github.com/Moataz6333/Competition-and-Quiz-Website",
    githubLink: "https://github.com/Moataz6333/Competition-and-Quiz-Website",
  },
  {
    title: "Pegion (chat application)",
    description:
      "Pigeon is an online chat website makes you able to message your friends, share Media and voice messages and more, our website is totally secure all your chats data are secured no one can see it except you and whom you chat with.",
    image: "images/pegion.png",
    technologies: ["Laravel", "LiveWire", "JavaScript", "Tailwind CSS"],
    liveLink: "https://moataz6333.github.io/Pigeon-demo/",
    githubLink:
      "https://www.linkedin.com/posts/moataz-ahmed-b18a49276_laravel-livewire-backend-activity-7299828894830911488-mvJL?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAENuHwQBIqpFEZsQzKHw5ezQX-yVDQXgg64",
  },
  {
    title: "Notes",
    description:
      "Developed a week management system to allow users to organize and track all weekly tasks,enhancing productivity.",
    image: "images/notes.png",
    technologies: ["Laravel", "HTML", "CSS", "JavaScript"],
    liveLink:
      "https://www.linkedin.com/posts/moataz-ahmed-b18a49276_webdevelopment-fullstack-laravel-activity-7221857139395297280-P4BG?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAENuHwQBIqpFEZsQzKHw5ezQX-yVDQXgg64",
    githubLink: "https://github.com/Moataz6333/Notes-Task-Management",
  },
  {
    title: "2Where (Tourism website)",
    description:
      "Developed a secure RESTful API using Laravel as the backend developer. Designed a complex relational database and built an admin dashboard to manage resources like cities, places, hotels, restaurants, tour guides, and users, with full authentication and authorization control.",
    image: "images/2where.png",
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "Bootstrap"],
    liveLink: "https://github.com/Moataz6333/2where-project",
    githubLink: "https://github.com/Moataz6333/2where-project",
  },
];

// Function to create project cards
function createProjectCards() {
  const projectsContainer = document.getElementById("projects-container");

  projects.forEach((project) => {
    const projectCard = `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card project-card">
                    <img src="${
                      project.image
                    }" class="card-img-top project-image" alt="${
      project.title
    }">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.description}</p>
                        <div class="project-tech">
                            ${project.technologies
                              .map((tech) => `<span>${tech}</span>`)
                              .join("")}
                        </div>
                        <div class="project-links">
                            <a href="${
                              project.liveLink
                            }" target="_blank" class="btn btn-primary btn-sm">
                                <i class="fas fa-external-link-alt me-1"></i> Live Demo
                            </a>
                            <a href="${
                              project.githubLink
                            }" target="_blank" class="btn btn-dark btn-sm ms-2">
                                <i class="fab fa-github me-1"></i> GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    projectsContainer.innerHTML += projectCard;
  });
}

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  createProjectCards();
});
