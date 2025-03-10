import { motion } from 'framer-motion';

function Education() {
  const educationData = [
    {
      degree: "Bachelor's in Computer Science",
      institution: "Example University",
      year: "2018-2022",
      description: "Studied core computer science concepts and modern programming practices."
    },
    {
      degree: "Full Stack Development",
      institution: "Tech Academy",
      year: "2022-2023",
      description: "Intensive program covering modern web development technologies."
    }
  ];

  return (
    <section className="education">
      <h2 className="heading">My <span>Education</span></h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <motion.div 
            key={index}
            className="education-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="card-content">
              <h3>{edu.degree}</h3>
              <p className="institution">{edu.institution}</p>
              <p className="year">{edu.year}</p>
              <p className="description">{edu.description}</p>
            </div>
            <div className="animated-border"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;