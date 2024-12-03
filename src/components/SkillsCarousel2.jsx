import { useRef, useState, useEffect } from "react";
import skills from "./SkillsData.jsx";

import "./Landing.scss";
import "./SkillsCarousel.scss";

function SkillsCarousel2() {
  const skillsRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Scroll buttons
  const scrollByCards = (direction) => {
    const cardWidth = skillsRef.current.children[0].offsetWidth;
    const scrollDistance = cardWidth; // Adjust the scroll by 1 card
    skillsRef.current.scrollBy({
      left: direction * scrollDistance,
      behavior: "smooth",
    });
  };

  // Drag functions
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - skillsRef.current.offsetLeft);
    setScrollLeft(skillsRef.current.scrollLeft);
    skillsRef.current.classList.add("dragging");
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - skillsRef.current.offsetLeft;
    const walk = x - startX; // Distance moved
    skillsRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    skillsRef.current.classList.remove("dragging");
  };

  useEffect(() => {
    // Add mouseUp listener to the whole document to handle when the mouse is outside the container
    const handleMouseUpOutside = () => {
      if (isDragging) {
        setIsDragging(false);
        skillsRef.current.classList.remove("dragging");
      }
    };

    // Listen for mouseMove and mouseUp events
    document.addEventListener("mouseup", handleMouseUpOutside);

    // Remove event listener on cleanup
    return () => {
      document.removeEventListener("mouseup", handleMouseUpOutside);
    };
  }, [isDragging]);

  useEffect(() => {
    const container = skillsRef.current;
    const handleScroll = () => {
      const cardWidth = container.children[0].offsetWidth;
      const scrollPosition = container.scrollLeft;
      if (scrollPosition >= cardWidth * skills.length) {
        container.scrollLeft = cardWidth * skills.length - 1;
      }
      if (scrollPosition <= 0) {
        container.scrollLeft = 0;
      }
    };
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <h3>
        Languages, frameworks, environments, databases, <br />
        VPSs, and other tools I have worked with.
      </h3>
      <div className="skills-carousel">
        <button className="scroll-btn left" onClick={() => scrollByCards(-1)}>
          ◀
        </button>
        <div className="fade left"></div>
        <div
          className={`skills-container ${isDragging ? "dragging" : ""}`}
          ref={skillsRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}>
          {skills.map((skill) => (
            <div key={skill.id} className="skill-card">
              <img
                src={skill.logo}
                alt={`${skill.name} logo`}
                draggable="false"
              />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
        <div className="fade right"></div>
        <button className="scroll-btn right" onClick={() => scrollByCards(1)}>
          ▶
        </button>
      </div>
    </>
  );
}

export default SkillsCarousel2;
