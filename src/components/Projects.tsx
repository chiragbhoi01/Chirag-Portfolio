import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import ComponentWithDarkBackground from "./ComponentWithDarkBackground";

function Project() {
  const projects = [
    {
      title: "Miss Gypsy - Jewelry E-commerce",
      description:
        "A responsive e-commerce platform with dynamic product filtering and modern UI.",
      tech: ["React.js", "Tailwind CSS", "Firebase", "Vite"],
      highlights: [
        "Achieved 95% Lighthouse performance score.",
        "Integrated dynamic routing and real-time product data.",
      ],
      liveLink: "https://chirag-shopmissgypsy.vercel.app/",
      githubLink: "https://github.com/chiragbhoi01/Ecommerce-jewellery-website",
      image:
        "https://images.pexels.com/photos/206520/pexels-photo-206520.jpeg?auto=compress&cs=tinysrgb&h=480&w=640",
    },
    {
      title: "Personal Portfolio SPA",
      description: "A single-page application showcasing projects and GitHub stats.",
      tech: ["React.js", "Tailwind CSS", "GitHub API", "Netlify"],
      highlights: [
        "Real-time GitHub stats integration.",
        "Mobile-first design with 100% accessibility score.",
      ],
      liveLink: "https://chiragbhoimarshal.netlify.app/",
      githubLink: "https://github.com/chiragbhoi01/Chirag-Portfolio",
      image:
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&h=480&w=640",
    },
    {
      title: "Weather Checker",
      description:
        "A real-time weather app with dynamic UI based on weather conditions.",
      tech: ["JavaScript", "HTML5", "CSS3", "OpenWeather API"],
      highlights: [
        "Minimalist design with async/await for efficient API data fetching.",
      ],
      liveLink: "https://chirag-weatherchecker.netlify.app/",
      githubLink: "https://github.com/chiragbhoi01/Weather-Checker",
      image:
        "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&h=480&w=640",
    },
    {
      title: "To-Do App",
      description:
        "A clean and responsive task management app with add, edit, delete, and sorting functionalities.",
      tech: ["React.js", "TypeScript", "Tailwind CSS"],
      highlights: [
        "Features alphabetical, time, and date-based sorting.",
        "Automatic timestamping for tasks; responsive UI.",
      ],
      liveLink: "https://chirag-todoapp.vercel.app/",
      githubLink: "https://github.com/chiragbhoi01/todo-app",
      image:
        "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&h=480&w=640",
    },
  ];

  return (
    <ComponentWithDarkBackground>
      <section
        id="project"
        role="region"
        aria-label="Chirag Bhoi's Projects"
        className="flex flex-col mx-2 my-1 rounded-2xl max-h overflow-hidden p-10"
      >
        <div className="flex flex-col items-center w-full">
          <h1 className="text-6xl md:text-8xl font-bold my-5 text-center">
            Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="flex flex-col p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-200 hover:scale-105"
              >
                <img
                  src={project?.image}
                  alt={`${project.title} Screenshot`}
                  className="h-48 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-base mb-4">{project.description}</p>
                <div className="mb-4">
                  <h3 className="text-lg font-medium">Tech Stack:</h3>
                  <ul className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIdx) => (
                      <li
                        key={techIdx}
                        className="text-sm bg-indigo-500/20 px-2 py-1 rounded"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h3 className="text-lg font-medium">Highlights:</h3>
                  <ul className="list-disc pl-5 text-sm">
                    {project.highlights.map((highlight, highlightIdx) => (
                      <li key={highlightIdx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-200 hover:text-indigo-100 transition-colors duration-200"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <FiExternalLink className="mr-1" /> Live
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-200 hover:text-indigo-100 transition-colors duration-200"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    <FaGithub className="mr-1" /> GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ComponentWithDarkBackground>
  );
}

export default Project;
