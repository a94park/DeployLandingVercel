import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import ViewDownloadCV from "./ViewDownloadCV.jsx";
import SkillsCarousel2 from "./SkillsCarousel2.jsx";
import Projects from "./Projects.jsx";
import Flappy from "./Flappy.jsx";
import Chatbot from "./Chatbot.jsx";
// import Suggestions from "./Suggestions.jsx";
import "./Landing.scss";
const Landing = () => {
  return (
    <div className="portfolio-container">
      <div className="last-update">Last update: 4 March 2025</div>
      <div className="about-section">
        <h1>ABRAHAM PARK</h1>
        <h2>
          Software Developer/Engineer
          <br />
          Database Administrator
          <br />
          Development and Operations
        </h2>
        <h3>
          Career Connect Demo is live as of March 4th 2025!
          <br /> Virtual Assistance Chatbot Live! <br /> Currently exploring
          mobile app development with Flutter and Firebase.
          <br /> Also learning VIM and still trying to do 3-5 LeetCode problems
          a day.
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
      <Chatbot />
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
