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
      bugs: "Known Bugs: Styling/mobile responsiveness, Employer notifications, Employer job viewer. As I am using AWS EC2, the server may be down after the free tier limit is reached. Demo is down.",
      githubLink: "https://github.com/a94park/Career-Connect",
      liveLink: "http://54.180.117.152/",
      bgpic: "/banner2.jpg",
    },
    {
      id: 2,
      title: "Flappy Bird (myVersion)",
      description:
        "My attempt at remaking Flappy Bird with some added features.",
      details:
        "Fulfilling my dreams as a game developer. I used Unity with C# and followed along a Youtube video by Game Maker's Toolkit. I added the start screen so the game doesn't run upon open, extra points feature, and adjust the speeds to make a little more difficult.",
      bugs: "Will be adding to this every now and then. No Github, demo is below (might take a minute to load).",
      // githubLink: "",
      // liveLink: "",
      bgpic: "/flappy.png",
    },
    {
      id: 3,
      title: "My Landing Page",
      description:
        "Instead of following the usual landing page templates I wanted to showcase my ability to work with pre written code.",
      details:
        "I created and deployed my own landing page using React and Vercel, incorporating features such as accepting donations, resume downloads, and chatbots. This project allowed me to showcase my ability to integrate pre-written code, like an interactive background, with my own while maintaining full functionality. Additionally, I practiced styling with SCSS and focused on designing a responsive, user-friendly layout to ensure visitors could easily navigate the site and find the information they needed.",
      bugs: "Will be adding to this every now and then and when I am able to deploy my new projects.",
      githubLink: "https://github.com/a94park/DeployLandingVercel",
      // liveLink: "",
      bgpic: "/landing.png",
    },
    {
      id: 4,
      title: "Virtual Assistant for Interviews",
      description:
        "A chatbot that is trained with a context file and will answer questions based on the context.",
      details:
        "Created with a React front end and python backend, using python's huggingface sentence transformer. Made to be used as any virtual assistant would be used. Can be demoed on my landing page here. It is trained on interview questions and will answer based on my resume and some other personal information. ",
      bugs: "Still figuring out how to better fine-tune the model and deploying the backend. No Live Demo link, backend is down.",
      githubLink: "https://github.com/a94park/python_sent_transformer",
      // liveLink: "",
      bgpic: "/chatbot.png",
    },

    {
      id: 5,
      title: "Stripe Integration",
      description: "Stripe API integration, custom payments.",
      details:
        "Created with a React front end and Flask backend, and deployed on an AWS EC2 instance. The front end is set up to redirect to the Stripe checkout page with the session URL. The backend is set up to accept the Stripe webhook event and return a success URL to redirect to after payment is successful.",
      bugs: "No live link, but is LIVE on my landing page. Look for the DONATE button. Caution: This is a real payment system. Currently not available.",
      githubLink: "https://github.com/a94park/Stripe-React-Flask",
      // liveLink: "",
      bgpic: "/stripe-pic.png",
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
      <h3>Projects</h3>
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
              // color: "white",
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
                  marginBottom: "10px",
                  lineHeight: "1.5",
                }}>
                {selectedProject.details}
              </p>
              <p
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  padding: "15px",
                  borderRadius: "8px",
                  marginBottom: "10px",
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
                    margin: "0px",
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
