import Modal from "react-modal";
import { motion } from "framer-motion";
import { useState } from "react";
import "./Landing.scss";
function Projects() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Career Connect",
      description:
        "A simpler, more modern approach to connect businesses with jobseekers",
      details:
        "A full-stack web application using React, MySQL, and Flask, with JWT for secure authentication. Deployed using AWS EC2. The pre-deployed code is on Github.",
      bugs: "Known Bugs: Styling/responsiveness, Employer notifications, Employer job viewer",
      githubLink: "https://github.com/a94park/Career-Connect",
      liveLink: "http://43.201.67.146/",
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
    <>
      <h3>Full-stack Projects</h3>
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
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </motion.div>
        ))}

        <Modal
          parentSelector={() => document.querySelector(".projects-container")}
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
              <p
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  padding: "15px",
                  borderRadius: "8px",
                  marginBottom: "20px",
                  lineHeight: "1.5",
                }}>
                {selectedProject.bugs}
              </p>
              <div className="m-btn-group">
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    padding: "10px",
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
                    padding: "10px",
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
                    background: "#f00",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                    padding: "10px",
                    cursor: "pointer",
                  }}>
                  Close
                </button>{" "}
              </div>
            </div>
          )}
        </Modal>
      </div>
    </>
  );
}
export default Projects;
