import { useRef } from "react";
// https://worldvectorlogo.com/
import htmllogo from "../assets/html-1.svg";
import csslogo from "../assets/css-3.svg";
import jslogo from "../assets/logo-javascript.svg";
import pythonlogo from "../assets/python-5.svg";
import reactlogo from "../assets/react-2.svg";
import njslogo from "../assets/nodejs-1.svg";
import sasslogo from "../assets/sass-1.svg";
import flasklogo from "../assets/flask.svg";
import jwtlogo from "../assets/jwt-3.svg";
import mysqllogo from "../assets/mysql-3.svg";
import awslogo from "../assets/aws-2.svg";
import nginxlogo from "../assets/nginx-1.svg";
import gunicornlogo from "../assets/gunicorn.svg";

import "./Landing.scss";
import "./SkillsCarousel.scss";

function SkillsCarousel2() {
  const skillsRef = useRef(null);

  // Scroll left function
  const scrollLeft = () => {
    const cardWidth = skillsRef.current.children[0].offsetWidth;
    const scrollDistance = cardWidth * 3; // Adjust the scroll by 3 cards
    skillsRef.current.scrollBy({
      left: -scrollDistance,
      behavior: "smooth",
    });
  };

  // Scroll right function
  const scrollRight = () => {
    const cardWidth = skillsRef.current.children[0].offsetWidth;
    const scrollDistance = cardWidth * 3; // Adjust the scroll by 3 cards
    skillsRef.current.scrollBy({
      left: scrollDistance,
      behavior: "smooth",
    });
  };

  const skills = [
    { id: 1, name: "HTML", logo: htmllogo },
    { id: 2, name: "CSS", logo: csslogo },
    { id: 3, name: "JavaScript", logo: jslogo },
    { id: 4, name: "Python", logo: pythonlogo },
    { id: 5, name: "React", logo: reactlogo },
    { id: 6, name: "Node.js", logo: njslogo },
    { id: 7, name: "Sass", logo: sasslogo },
    { id: 8, name: "Flask", logo: flasklogo },
    { id: 9, name: "JWT", logo: jwtlogo },
    { id: 10, name: "MySQL", logo: mysqllogo },
    { id: 11, name: "AWS", logo: awslogo },
    { id: 12, name: "Nginx", logo: nginxlogo },
    { id: 13, name: "Gunicorn", logo: gunicornlogo },
  ];

  return (
    <>
      <h3>
        Languages, frameworks, environments, databases, <br />
        VPSs, and other tools I have worked with.
      </h3>
      <div className="skills-carousel">
        <button className="scroll-btn left" onClick={scrollLeft}>
          ◀
        </button>
        <div className="fade left"></div>
        <div className="skills-container" ref={skillsRef}>
          {skills.map((skill) => (
            <div key={skill.id} className="skill-card">
              <img src={skill.logo} alt={`${skill.name} logo`} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
        <div className="fade right"></div>
        <button className="scroll-btn right" onClick={scrollRight}>
          ▶
        </button>
      </div>
    </>
  );
}

export default SkillsCarousel2;
