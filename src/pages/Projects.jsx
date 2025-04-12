import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: "Anonymous Chat Application",
      description: "A full-stack chat application that lets users sign in securely while keeping their identity hidden from others. It enables real-time, anonymous conversations with new people in a safe and user-friendly environment. The app focuses on privacy, seamless interaction, and meaningful connections without revealing personal information.",
      technologies: ["React.js", "Node.js", "MongoDB","Socket.IO"],
      link: "https://github.com/Sairoop-15/Flare.git"
    },
    {
      title: "Snake Game",
      description: "A classic Snake Game built using React with clean and responsive UI. The game features smooth controls, real-time score tracking, and dynamic grid-based movement. Designed to showcase interactive UI logic and state management in React.",
      technologies: ["JavaScript","React.js","CSS","HTML"],
      link: "https://github.com/Sairoop-15/snake-game.git"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website with modern animations",
      technologies: ["React.js", "Node.js", "CSS","MongoDB"],
      link: "https://github.com/Sairoop-15/Portfolio.git"
    },
    {
      title: "Console Survey App",
      description: "A console-based survey application built using Java, JDBC, and SQL. It allows users to create, manage, and submit surveys with responses stored in a relational database. Designed to demonstrate CRUD operations and database connectivity through a simple CLI.",
      technologies: ["Java", "JDBC", "SQL"],
      link: "https://github.com/Sairoop-15/Survey-App.git"
    }
  ];

  return (
    <section className="projects">
      <h2 className="heading">My <span>Projects</span></h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            className="project-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">View Project</a>
            </div>
            <div className="animated-border"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;