import { Modal } from "react-bootstrap";
import useInput from "../../../hooks/useInput";

function ModalDelete({ show, sku, handleProductDelete }) {
  return (
    // onHide={handleCloseDeleteModal}
    <Modal show={show}>
      <div>
        <p>Are you sure you want to delete this product?</p>
        <button>Close</button>
        <button>Delete</button>
      </div>
    </Modal>
  );
}

export default ModalDelete;
