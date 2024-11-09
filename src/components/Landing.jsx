import { Element } from "react-scroll";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import ViewDownloadCV from "./ViewDownloadCV.jsx";
import "./Landing.scss";

const Landing = () => {
  return (
    <div className="portfolio-container">
      {/* <header className="portfolio-header">
        <nav>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </nav>
      </header> */}

      <Element name="about" className="interactive section about-section">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 10 }}>
          <h1>Hi, I'm Abraham!!</h1>
          <h3>
            A full-stack developer in progress,<br></br> eager to build my
            skillset further.
          </h3>
        </motion.div>
      </Element>

      {/* Contact Section */}
      <Element name="contact" className=" section contact-section">
        <div className="social-icons">
          <a
            href="https://linkedin.com/in/abraham-park-b5b55131b"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a
            href="https://https://github.com/a94park"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:a.p.00@icloud.com">
            <FaEnvelope />
          </a>
        </div>
      </Element>
      <ViewDownloadCV />
      <div className="section skills-and-projects-containter">
        <Element name="skills" className="skills-section">
          <h2>Skills</h2>
          <Skills />
        </Element>
        <Element name="projects" className="projects-section">
          <h2>Projects</h2>
          <Projects />
        </Element>
      </div>
    </div>
  );
};

export default Landing;
