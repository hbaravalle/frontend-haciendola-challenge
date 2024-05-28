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
      if (!response.ok) {
        if (response.status === 404) console.log("Error 404");
        if (response.status === 500) console.log("Error 500");
      } else {
        const data = await response.json();

        setProducts(data.result.products);
        setTotalPages(data.result.totalPages);
        setTotalProducts(data.result.count);
        setCurrentPage(data.result.page);
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
                    <div className="productList__header"></div>
                    {products.map((product) => (
                      <div
                        style={{
                          border: "1px solid red",
                          padding: "1rem",
                          borderRadius: "0.2rem",
                        }}
                      >
                        <div>
                          <h2>Título del producto</h2>
                          <small>titulo-del-producto</small>
                        </div>
                      </div>
                    ))}
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
        fetchProducts={fetchProducts}
      />
      <ModalDelete />
    </>
  );
}

export default ProductListFormik;
