import React from "react";
import Modal from "react-modal";
import "../Styles/OptionModal.css";

Modal.setAppElement("#root");

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    onRequestClose={props.handleCloseModal}
    contentLabel="Selected Option"
    className="option-modal"
    overlayClassName="option-overlay"
    closeTimeoutMS={500}
  >
    <h3 className="modal-heading">Selected Option</h3>
    <p className="modal-text">{props.selectedOption}</p>
    <button className="modal-btn" onClick={props.handleCloseModal}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
