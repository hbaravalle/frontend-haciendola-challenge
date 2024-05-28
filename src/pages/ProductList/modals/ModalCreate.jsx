import { Modal } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import { object, string, number } from "yup";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import styles from "./Modals.module.scss";

const ProductSchema = object({
  title: string().required("Campo requerido"),
  handle: string().required("Campo requerido"),
  description: string(),
  sku: number().required("Campo requerido"),
  grams: number().required("Campo requerido"),
  stock: number().required("Campo requerido"),
  price: number().required("Campo requerido"),
  comparePrice: number().required("Campo requerido"),
  barcode: number().required("Campo requerido"),
});

function ModalCreate({ show, handleCloseCreateModal, fetchProducts }) {
  const token = useSelector((state) => state.auth.token);
  const handleSubmit = async (values) => {
    try {
      const response = await fetch(`http://localhost:3000/api/products`, {
        method: "post",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: values.title,
          handle: values.handle,
          description: values.description,
          sku: values.sku,
          barcode: values.barcode,
          grams: values.grams,
          stock: values.stock,
          price: values.price,
          compare_price: values.comparePrice,
        }),
      });

      if (!response.ok) {
        if (response.status === 404) toast.error("Failed to create product");
        if (response.status === 500) toast.error("Failed to create product");
        toast.error("Failed to create product");
      } else {
        await response.json();
        toast.success("Product created");
        handleCloseCreateModal();
        fetchProducts(1);
      }
    } catch (err) {
      console.error(err);
      return toast.error("Server error. Try again");
    }
  };

  return (
    <Modal show={show} onHide={handleCloseCreateModal}>
      <Formik
        initialValues={{
          title: "",
          handle: "",
          description: "",
          sku: "",
          grams: "",
          stock: "",
          price: "",
          comparePrice: "",
          barcode: "",
        }}
        validationSchema={ProductSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="title" className={styles.formGroup__label}>
                Title
              </label>
              <Field
                name="title"
                id="title"
                className={styles.formGroup__input}
              />
              {errors.title && touched.title ? (
                <small className={styles.formGroup__error}>
                  {errors.title}
                </small>
              ) : null}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="handle" className={styles.formGroup__label}>
                Handle
              </label>
              <Field
                name="handle"
                id="handle"
                className={styles.formGroup__input}
              />
              {errors.handle && touched.handle ? (
                <small className={styles.formGroup__error}>
                  {errors.handle}
                </small>
              ) : null}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="description" className={styles.formGroup__label}>
                Description
              </label>
              <Field
                name="description"
                id="description"
                className={styles.formGroup__input}
                as="textarea"
              />
              {errors.description && touched.description ? (
                <small className={styles.formGroup__error}>
                  {errors.description}
                </small>
              ) : null}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              <div className={styles.formGroup}>
                <label htmlFor="sku" className={styles.formGroup__label}>
                  SKU
                </label>
                <Field
                  name="sku"
                  id="sku"
                  className={styles.formGroup__input}
                />
                {errors.sku && touched.sku ? (
                  <small className={styles.formGroup__error}>
                    {errors.sku}
                  </small>
                ) : null}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="grams" className={styles.formGroup__label}>
                  Grams
                </label>
                <Field
                  name="grams"
                  id="grams"
                  className={styles.formGroup__input}
                />
                {errors.grams && touched.grams ? (
                  <small className={styles.formGroup__error}>
                    {errors.grams}
                  </small>
                ) : null}
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              <div className={styles.formGroup}>
                <label htmlFor="stock" className={styles.formGroup__label}>
                  Stock
                </label>
                <Field
                  name="stock"
                  id="stock"
                  className={styles.formGroup__input}
                />
                {errors.stock && touched.stock ? (
                  <small className={styles.formGroup__error}>
                    {errors.stock}
                  </small>
                ) : null}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="price" className={styles.formGroup__label}>
                  Price
                </label>
                <Field
                  name="price"
                  id="price"
                  className={styles.formGroup__input}
                />
                {errors.price && touched.price ? (
                  <small className={styles.formGroup__error}>
                    {errors.price}
                  </small>
                ) : null}
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              <div className={styles.formGroup}>
                <label
                  htmlFor="comparePrice"
                  className={styles.formGroup__label}
                >
                  Compare price
                </label>
                <Field
                  name="comparePrice"
                  id="comparePricse"
                  className={styles.formGroup__input}
                />
                {errors.comparePrice && touched.comparePrice ? (
                  <small className={styles.formGroup__error}>
                    {errors.comparePrice}
                  </small>
                ) : null}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="barcode" className={styles.formGroup__label}>
                  Barcode
                </label>
                <Field
                  name="barcode"
                  id="barcode"
                  className={styles.formGroup__input}
                />
                {errors.barcode && touched.barcode ? (
                  <small className={styles.formGroup__error}>
                    {errors.barcode}
                  </small>
                ) : null}
              </div>
            </div>

            <button type="submit">Create</button>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

export default ModalCreate;
