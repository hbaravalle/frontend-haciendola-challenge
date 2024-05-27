import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Eye, Trash, Tag } from "feather-icons-react";
import { Tooltip } from "react-tooltip";
import toast from "react-hot-toast";

import ModalUpdate from "../../pages/ProductList/modals/ModalUpdate";
import ModalDelete from "../../pages/ProductList/modals/ModalDelete";
import ModalCreate from "../../pages/ProductList/modals/ModalCreate";

import Button from "../../components/Button";
import Sidebar from "../../components/Sidebar";
import Paginate from "../../components/Paginate";
import styles from "./ProductList.module.scss";

function ProductListFormik() {
  const token = useSelector((state) => state.auth.token);
  const [products, setProducts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  const [showCreateModal, setShowCreateModal] = useState(false);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleShowCreateModal = () => setShowCreateModal(true);
  const handleCloseCreateModal = () => setShowCreateModal(false);

  // const handleShowEditModal = () => setEditModal(true);
  // const handleCloseEditModal = () => setEditModal(false);

  // const handleShowDeleteModal = () => setDeleteModal(true);
  // const handleCloseDeleteModal = () => setDeleteModal(false);

  const paginateProps = { currentPage, totalPages, handlePageChange };

  const fetchProducts = async (page) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/products?page=${page}`,
        {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setProducts(data.result.products);
        setTotalPages(data.result.totalPages);
        setTotalProducts(data.result.count);
      } else {
        if (response.status === 404) console.log("Error 404");
        if (response.status === 500) console.log("Error 500");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
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
                <header
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h1>Productos</h1>
                  <Button
                    variant="primary"
                    onClick={handleShowCreateModal}
                    style={{ marginTop: "-20px" }}
                  >
                    + New product
                  </Button>
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

      <ModalUpdate />
      <ModalCreate
        show={showCreateModal}
        handleCloseCreateModal={handleCloseCreateModal}
      />
      <ModalDelete />
    </>
  );
}

export default ProductListFormik;
