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
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime provident 
          quis facilis corporis temporibus iste molestias soluta? Rerum, eveniet 
          et esse, magni placeat dolorum molestiae tempore ex asperiores, aliquid 
          iste mollitia quas eum. Laborum facilis distinctio sunt officia.
        </p>
        <button className="btn btn-outline-primary">Read More</button>
      </div>
    </section>
  );
}

export default About;