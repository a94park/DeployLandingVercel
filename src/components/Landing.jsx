import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import ViewDownloadCV from "./ViewDownloadCV.jsx";
import SkillsCarousel2 from "./SkillsCarousel2.jsx";
import Projects from "./Projects.jsx";
import Flappy from "./Flappy.jsx";
import Chatbot from "./Chatbot.jsx";
// import PaymentForm from "./Stripe.jsx";
import Stripe2 from "./Stripe2.jsx";
import "@fontsource/jetbrains-mono";
// import Suggestions from "./Suggestions.jsx";
import "./Landing.scss";
const Landing = () => {
  return (
    <div className="portfolio-container">
      <div className="last-update">Last update: 10 July 2025</div>
      <div className="about-section">
        <div className="left-about">
          <div>
            <h1>
              Abraham <br />
              Park
            </h1>{" "}
          </div>
          <div>
            <h2>
              Software Engineer
              <br />
              Database Administrator
              <br />
              Development and Operations
            </h2>{" "}
          </div>
          <div>
            {" "}
            <ViewDownloadCV />
          </div>
        </div>
        <div className="right-about">
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
          <div className="status">
            <p>Status:</p>
            <h3>
              The following features requiring backend support are currently
              disabled.
              <br />
              - Payment through Stripe
              <br />
              - AI Interview Chatbot
              <br />
              - Career Connect Demo
              <br />
              <br />
              Backend support will be back online once a suitable hosting
              alternative is secured.
              <br />
              <br />
              Migrating from Vercel/AWS to a self-hosted solution. Please check
              back soon for updates.
              {/* - Career Connect Demo is LIVE!
              <br />- Virtual Assistant Chatbot Live!
              <br />- Now accepting payments through Stripe! */}
            </h3>
          </div>{" "}
          <Stripe2 />
        </div>
      </div>

      <Chatbot />

      <SkillsCarousel2 />
      <Projects />
      <div className="flappy">
        <Flappy />
      </div>
      {/* <PaymentForm /> */}
      {/* <Suggestions /> */}
    </div>
  );
};

export default Landing;
