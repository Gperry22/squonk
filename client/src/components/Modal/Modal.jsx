import React from "react";
import "./Modal.css";
import { Button, Modal } from "react-bootstrap";

const Modal1 = props => {
  return <div className="static-modal">
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>SQUONK</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <h5>{props.value.modalMessage}</h5>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={props.onClose}>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>;
};

export default Modal1;
