import { useState } from "react";
import Modal from "react-modal";
import { FaFilePdf } from "react-icons/fa";

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
        parentSelector={() => document.querySelector(".projects-section")}
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="CV Viewer"
        style={{
          overlay: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
          content: { width: "70%", margin: "auto", maxHeight: "90vh" },
        }}>
        <div className="modal-buttons">
          <a
            href="/AbrahamCV.pdf"
            download="AbrahamCV"
            className="download-cv-btn">
            <FaFilePdf /> Download
          </a>
          <button onClick={closeModal} className="close-modal-btn">
            Close
          </button>
        </div>

        <div className="image-container">
          <img
            src="/AbrahamCV.png"
            alt="AbrahamCV"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default ViewDownloadCV;
