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
        "Originally built with React, Node.js, and MySQL, the project is currently being refactored for deployment with Next.js and Vercel, optimizing database integration.",
      githubLink: "https://github.com/a94park/Career-Connect",
      liveLink: "https://career-connect-six.vercel.app/",
    },
    {
      id: 2,
      title: "Project Two",
      description: "A mobile app developed using ...",
      details:
        "Created with React Native and Firebase. Key features include ...",
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
          whileHover={{ scale: 1.05 }}>
          <p>{project.title}</p>
          <p>{project.description}</p>
        </motion.div>
      ))}

      <Modal
        parentSelector={() => document.querySelector(".projects-section")}
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        className="project-modal"
        ariaHideApp={false}
        style={{ overlay: { background: "rgba(0,0,0,0.5)" } }}>
        {/* overlayClassName="project-modal-overlay"> */}
        {selectedProject && (
          <div>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.details}</p>
            <a
              href={selectedProject.githubLink}
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </a>
            <a
              href={selectedProject.liveLink}
              target="_blank"
              rel="noopener noreferrer">
              Live Demo
            </a>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
}
export default Projects;
