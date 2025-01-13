import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import ViewDownloadCV from "./ViewDownloadCV.jsx";
import SkillsCarousel2 from "./SkillsCarousel2.jsx";
import Projects from "./Projects.jsx";
import Flappy from "./Flappy.jsx";
// import Suggestions from "./Suggestions.jsx";
import "./Landing.scss";
const Landing = () => {
  return (
    <div className="portfolio-container">
      <div className="last-update">Last update: 13 Jan 2025</div>
      <div className="about-section">
        <h1>Abraham Park</h1>
        <h2>Full-stack Developer</h2>
        <h3>
          Learning how to use Docker and containerizing for more light-weight,
          scalable deployments. <br /> Also learning VIM and still trying to do
          3-5 LeetCode problems a day.
        </h3>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <div className="social-icons">
          <a
            href="https://linkedin.com/in/abraham-park-b5b55131b"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/a94park"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:a.p.00@icloud.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
      <ViewDownloadCV />

      <SkillsCarousel2 />
      <Projects />
      <div className="flappy">
        <Flappy />
      </div>

      {/* <Suggestions /> */}
    </div>
  );
};

export default Landing;
