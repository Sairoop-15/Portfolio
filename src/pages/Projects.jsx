import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React and Node.js",
      technologies: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "A real-time task management application",
      technologies: ["React", "Firebase", "Material-UI"],
      link: "#"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website with modern animations",
      technologies: ["React", "Framer Motion", "CSS"],
      link: "#"
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