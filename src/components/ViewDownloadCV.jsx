import { useState } from "react";
import Modal from "react-modal";
import { FaFilePdf } from "react-icons/fa";
import "./Landing.scss";
import MyCV from "./MyCV";

const ViewDownloadCV = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

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
          <a
            href="/AbrahamCVwLinks.pdf"
            download="AbrahamCVwLinks"
            className="modal-download">
            <FaFilePdf /> Download
          </a>
          <button onClick={closeModal} className="close-modal-btn">
            Close
          </button>
        </div>
        <MyCV />
      </Modal>
    </div>
  );
};

export default ViewDownloadCV;
