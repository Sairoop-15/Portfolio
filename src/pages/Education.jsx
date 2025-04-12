import { motion } from 'framer-motion';

function Education() {
  const educationData = [
    {
      degree: "Bachelor's in Computer Science and Business Systems",
      institution: "VNR Vignana Jyothi Institute of Engineering and Technology",
      year: "2023-2027",
      Percentage:"B.Tech CGPA as of Now : 8.52/10",
      description: "As part of my CSBS curriculum, I studied core computer science subjects along with business systems and analytics. The course helped me develop problem-solving skills, critical thinking, and a strong understanding of how technology supports business goals. It also improved my communication and professional skills through practical, industry-relevant learning."
    },
    {
      degree: "Intermediate",
      institution: "Resonance Junior College",
      year: "2021-2023",
      Percentage:"Intermediate Grade : 95.2%",
      description: "I completed my Intermediate education at Resonance Junior College in the MPC (Maths, Physics, Chemistry) stream. The program strengthened my analytical and problem-solving skills, and laid a strong foundation in core subjects that prepared me for engineering studies.."
    },
    {
      degree: "10th",
      institution: "Vignan Bo Tree School",
      year: "2020-2021",
      Percentage:"10th Percentage : 93%",
      description: "I completed my schooling at Vignan Bo Tree School, where I developed a strong academic foundation. The school provided a comprehensive education, focusing on both academics and extracurricular activities. It helped me build a well-rounded skill set that supported my future academic pursuits."
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
              <p className="Percentage">{edu.Percentage}</p>
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