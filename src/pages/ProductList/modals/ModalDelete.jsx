import { Modal } from "react-bootstrap";

function ModalDelete({ show, sku, handleProductDelete }) {
  return (
    <Modal show={show} onHide={handleCloseDeleteModal}>
      <div style={{ padding: "1rem" }}>
        <p>Are you sure you want to delete this product?</p>
        <button
          onClick={handleCloseDeleteModal}
          className={styles.button__close}
        >
          Close
        </button>
        <button
          className={styles.button__delete}
          onClick={() => handleProductDelete(sku)}
        >
          Delete
        </button>
      </div>
    </Modal>
  );
}

export default ModalDelete;
