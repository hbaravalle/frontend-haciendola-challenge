import { Eye, Trash, Tag } from "feather-icons-react";
import { Tooltip } from "react-tooltip";
import { Modal } from "react-bootstrap";
import Sidebar from "../../components/Sidebar";
import Paginate from "../../components/Paginate";
import FormGroup from "../../components/FormGroup";
import styles from "./ProductList.module.scss";
import { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  const [editModal, setEditModal] = useState({
    active: false,
  });

  const [deleteModal, setDeleteModal] = useState({
    active: false,
  });

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleCloseEditModal = () => setEditModal({ active: false });
  const handleShowEditModal = (product) => {
    setEditModal({ active: true, ...product });
    console.log({ active: true, ...product });
  };

  const handleCloseDeleteModal = () => setDeleteModal({ active: false });
  const handleShowDeleteModal = (product) => {
    // Delete
    setDeleteModal({ active: true, ...product });
  };

  const paginateProps = { currentPage, totalPages, handlePageChange };

  useEffect(() => {
    const fetchProducts = async (page) => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/products?page=${page}`
        );
        const { result: data } = await response.json();
        console.log(data);
        setProducts(data.products);
        setTotalPages(data.totalPages);
        setTotalProducts(data.count);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts(currentPage);
  }, [currentPage]);

  return (
    <>
      <div className={styles.mainWrapper}>
        <Sidebar />
        <main>
          {/* Navbar */}
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <header>
                  <h1>Productos</h1>
                </header>
                {products && (
                  <>
                    <div className="table-responsive">
                      <table className={styles.table}>
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>SKU</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Grams</th>
                            <th>Stock</th>
                            <th>Barcode</th>
                            <th className="text-center">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {products.map((product) => {
                            return (
                              <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.sku}</td>
                                <td>{product.title}</td>
                                <td>
                                  {product.price}{" "}
                                  <span
                                    style={{ textDecoration: "line-through" }}
                                  >
                                    ({product.compare_price})
                                  </span>
                                </td>
                                <td>{product.grams}</td>
                                <td>{product.stock}</td>
                                <td className="text-center">
                                  <span
                                    style={{ cursor: "help" }}
                                    data-tooltip-id={`tooltip-barcode-${product.barcode}`}
                                    data-tooltip-content={product.barcode}
                                  >
                                    <Tag size="16" />
                                  </span>
                                  <Tooltip
                                    id={`tooltip-barcode-${product.barcode}`}
                                  />
                                </td>
                                <td>
                                  <div className={styles.table__actions}>
                                    <button
                                      className={styles.table__actionButton}
                                    >
                                      <span
                                        data-tooltip-id={`tooltip-detail-${product.id}`}
                                        data-tooltip-content={"Detail"}
                                        onClick={() =>
                                          handleShowEditModal(product)
                                        }
                                      >
                                        <Eye size="16" />
                                      </span>
                                      <Tooltip
                                        id={`tooltip-detail-${product.id}`}
                                      />
                                    </button>
                                    <button
                                      className={styles.table__actionButton}
                                    >
                                      <span
                                        data-tooltip-id={`tooltip-delete-${product.id}`}
                                        data-tooltip-content={"Delete"}
                                        onClick={() =>
                                          handleShowDeleteModal(product)
                                        }
                                      >
                                        <Trash size="16" />
                                      </span>
                                      <Tooltip
                                        id={`tooltip-delete-${product.id}`}
                                      />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    <div className={styles.table__info}>
                      <small>
                        {totalProducts} resultados <b>·</b> Mostrando{" "}
                        {currentPage} de {totalPages} páginas
                      </small>
                      <Paginate {...paginateProps} />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
      <Modal show={editModal.active} onHide={handleCloseEditModal}>
        {/* <Modal.Header closeButton></Modal.Header> */}
        <form action="" style={{ padding: "1rem", fontSize: "0.875rem" }}>
          <FormGroup title="Title" name="title" value={editModal.title} />
          <FormGroup title="Handle" name="handle" value={editModal.handle} />
          <FormGroup
            title="Description"
            name="description"
            value={editModal.description}
            type="textarea"
          />
          <FormGroup title="SKU" name="sku" value={editModal.sku} />
          <FormGroup title="Grams" name="grams" value={editModal.grams} />
          <FormGroup title="Stock" name="stock" value={editModal.stock} />
          <FormGroup title="Price" name="price" value={editModal.price} />
          <FormGroup
            title="Compare price"
            name="compare_price"
            value={editModal.compare_price}
          />
          <FormGroup title="Barcode" name="barcode" value={editModal.barcode} />
        </form>
        <button onClick={handleCloseEditModal}>Close</button>
        <button>Save changes</button>
      </Modal>
      <Modal show={deleteModal.active} onHide={handleCloseDeleteModal}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum natus
          eos impedit iste architecto culpa numquam tenetur aliquam eaque minus?
        </p>
        <button onClick={handleCloseDeleteModal}>Close</button>
        <button>Save changes</button>
      </Modal>
    </>
  );
}

export default ProductList;
