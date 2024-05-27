import { Modal } from "react-bootstrap";

function ModalCreate({ show, handleProductCreate }) {
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
    <Modal show={createModal} onHide={handleCloseCreateModal()}>
      <form
        action=""
        style={{ padding: "1rem", fontSize: "0.875rem" }}
        onSubmit={(e) => {
          e.preventDefault();
          handleProductCreate({
            title,
            handle,
            description,
            sku,
            barcode,
            grams,
            stock,
            price,
            comparePrice,
          });
        }}
      >
        <FormGroup title="Title" name="title" {...bindTitle} />
        <FormGroup title="Handle" name="handle" {...bindHandle} />
        <FormGroup
          title="Description"
          name="description"
          type="textarea"
          {...bindDescription}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "1rem",
          }}
        >
          <FormGroup title="SKU" name="sku" {...bindSku} />
          <FormGroup title="Barcode" name="barcode" {...bindBarcode} />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "1rem",
          }}
        >
          <FormGroup title="Grams" name="grams" {...bindGrams} />
          <FormGroup title="Stock" name="stock" {...bindStock} />
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "1rem",
          }}
        >
          <FormGroup title="Price" name="price" {...bindPrice} />
          <FormGroup
            title="Compare price"
            name="compare_price"
            {...bindComparePrice}
          />
        </div>
        <div style={{ padding: "0 1rem 1rem 1rem" }}>
          <button className={styles.button__save} type="submit">
            Save changes
          </button>
          <button
            onClick={handleCloseCreateModal}
            className={styles.button__close}
            type="button"
          >
            Close
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default ModalCreate;
