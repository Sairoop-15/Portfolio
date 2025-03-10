import { motion } from 'framer-motion';
import { IoMdDownload } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Home() {
  return (
    <section className="home">
      <div className="Container">
        <motion.div 
          className="home-content"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Hi, I'm <span>Sairoop Teja</span></h1>
          <div className="text-animate">
            <h3>Full Stack Developer</h3>
          </div>
          <p>Passionate developer with expertise in building modern web applications. Focused on creating elegant solutions to complex problems.</p>
          <div className="buttons">
            <button className="btn btn-outline-primary"> <IoMdDownload className='icon'/> CV</button>
          </div>

          <div className="Links">
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="link">
        <FaGithub className="icon" />
      </a>
      <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="link">
        <FaLinkedin className="icon" />
      </a>
      <a href="mailto:your-email@example.com" className="link">
        <SiGmail className="icon" />
      </a>
    </div>
        </motion.div>

        <div className="child2">
          <div className="About">
            <div className="about-img">
              <img src="/profile.jpg" alt="Profile" />
              <span className="circle-spin"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;