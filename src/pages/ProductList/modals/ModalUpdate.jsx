import { Modal } from "react-bootstrap";
import useInput from "../../../hooks/useInput";

function ModalUpdate({ show, handleUpdateProduct }) {
  const [title, setTitle, bindTitle, resetTitle] = useInput("");
  const [handle, setHandle, bindHandle, resetHandle] = useInput("");
  const [description, setDescription, bindDescription, resetDescription] =
    useInput("");
  const [sku, setSku, bindSku, resetSku] = useInput("");
  const [barcode, setBarcode, bindBarcode, resetBarcode] = useInput("");
  const [grams, setGrams, bindGrams, resetGrams] = useInput("");
  const [stock, setStock, bindStock, resetStock] = useInput("");
  const [price, setPrice, bindPrice, resetPrice] = useInput("");
  const [comparePrice, setComparePrice, bindComparePrice, resetComparePrice] =
    useInput("");

  return (
    // onHide={handleCloseUpdateModal()}
    <Modal show={show} onHide={null}>
      <form></form>
    </Modal>
  );
}

export default ModalUpdate;
