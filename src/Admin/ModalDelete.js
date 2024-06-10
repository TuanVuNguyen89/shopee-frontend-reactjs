import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
const ModalDelete = (props) => {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, Bạn có chắc chắn muốn xóa sản phẩm ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Đóng
          </Button>
          <Button variant="primary" onClick={props.confirmDeleteProduct}>
            Xóa sản phẩm
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


export default ModalDelete;