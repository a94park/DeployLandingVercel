import Modal from "react-modal";
import { motion } from "framer-motion";
import { useState } from "react";
// Modal.setAppElement("#root");

function Projects() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Career Connect",
      description: "Tinder for businesses and jobseekers",
      details:
        "A full-stack web application using React, MySQL, and Flask, with JWT for secure authentication. Currently, once logged in, the dashboard link is having some issues. Also, styling and responsiveness needs a lot of work.",
      githubLink: "https://github.com/a94park/Career-Connect",
      liveLink: "http://http://52.78.120.51/",
      bgpic: "/banner2.jpg",
    },
    {
      id: 2,
      title: "Project Two",
      description: "coming soon ...",
      details: "coming soon ...",
      githubLink: "https://github.com/yourprofile/project-two",
      liveLink: "https://project-two.com",
    },
  ];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setSelectedProject(null);
  };
  return (
    <div className="projects-container">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          className="project-card"
          onClick={() => handleOpenModal(project)}
          whileHover={{ scale: 1.05 }}
          style={{
            backgroundImage: `url(${project.bgpic})`,
          }}>
          <div className="card-content">
            <p>{project.title}</p>
            <p>{project.description}</p>
          </div>
        </motion.div>
      ))}

      <Modal
        parentSelector={() => document.querySelector(".projects-section")}
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        className="project-modal"
        ariaHideApp={false}
        style={{
          overlay: { background: "rgba(0,0,0,0.5)" },
          content: {
            backgroundImage: selectedProject
              ? `url(${selectedProject.bgpic})`
              : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
            padding: "20px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
        }}>
        {selectedProject && (
          <div>
            <h2
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                padding: "15px",
                borderRadius: "8px",
                color: "#72c100",

                margin: "10px",
              }}>
              {selectedProject.title}
            </h2>
            <p
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                padding: "15px",
                borderRadius: "8px",
                marginBottom: "20px",
                lineHeight: "1.5",
              }}>
              {selectedProject.details}
            </p>
            <a
              href={selectedProject.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                padding: "15px",
                borderRadius: "8px",
                color: "#72c100",
                textDecoration: "underline",
                margin: "10px",
              }}>
              GitHub
            </a>
            <a
              href={selectedProject.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                padding: "15px",
                borderRadius: "8px",
                color: "#72c100",
                textDecoration: "underline",
                margin: "10px",
              }}>
              Live Demo
            </a>
            <button
              onClick={handleCloseModal}
              style={{
                position: "absolute",
                bottom: "20px",
                right: "20px",
                background: "#f00",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "10px 15px",
                cursor: "pointer",
              }}>
              Close
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
}
export default Projects;
