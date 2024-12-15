import { useState } from "react";
import Modal from "react-modal";
import { FaFilePdf } from "react-icons/fa";
import html2pdf from "html2pdf.js";
import "./Landing.scss";
import MyCV from "./MyCV";

const ViewDownloadCV = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const handleDownload = () => {
    // Get the resume content from the HTML element
    const doc = document.querySelector(".resume");

    // You can capture HTML from an element and add it to the PDF
    const options = {
      margin: 1,
      filename: "Abraham_Park_Resume.pdf",
      html2canvas: { scale: 2 }, // Ensures better quality rendering
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    // Generate PDF from HTML content
    html2pdf().from(doc).set(options).save();
  };

  return (
    <div>
      <button onClick={openModal} className="download-cv-btn">
        <FaFilePdf /> View/Download CV
      </button>

      <Modal
        parentSelector={() => document.querySelector(".portfolio-container")}
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="CV Viewer"
        className="cv-modal"
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
          content: {
            position: "relative",
            top: "10%",
            width: "80%",
            height: "80%",
            margin: "auto",
          },
        }}>
        <div className="modal-buttons">
          <button className="modal-download" onClick={handleDownload}>
            <FaFilePdf /> Download
          </button>
          <button onClick={closeModal} className="close-modal-btn">
            Close
          </button>
        </div>
        <MyCV className="resume-container" />
      </Modal>
    </div>
  );
};

export default ViewDownloadCV;
