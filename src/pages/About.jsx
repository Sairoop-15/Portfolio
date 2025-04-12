import { motion } from 'framer-motion';

function About() {
  return (
    <section className="About">
      <h2 className="heading">About <span>Me!</span></h2>
      <div className="about-img">
        <img src="/profile.jpg" alt="Profile" />
        <span className="circle-spin"></span>
      </div>
      <div className="about-content">
        <h3>FullStack Developer!</h3>
        <div>
  <p>
    Hello, I'm Sairoopteja, a hardworking and ambitious student currently studying at VNR Vignana Jyothi Institute of Engineering and Technology (VNRVJIET). With a solid background in computer science and an insatiable curiosity that constantly drives me to explore new technologies, I'm on my way to becoming a talented and effective full-stack developer.
  </p>

  <p>
    I have a strong passion for creating real-world projects that solve real-world problems and deliver value to users. Whether it's a website or a program that optimizes a process, I enjoy transforming ideas into functional solutions. I’m not just passionate about writing code—I love building experiences that are efficient, intuitive, and impactful. Every project I work on is an opportunity to learn, grow, and contribute something meaningful.
  </p>

  <p>
    In addition to my development journey, I am also a DSA (Data Structures and Algorithms) enthusiast. I enjoy solving complex problems and sharpening my logical reasoning through regular practice. This blend of strong problem-solving abilities and practical development experience defines my approach as a future full-stack developer—focused on building robust, scalable applications grounded in solid fundamentals. I'm always eager to collaborate, learn, and take on challenges that help me improve.
  </p>
</div>

      </div>
    </section>
  );
}

export default About;