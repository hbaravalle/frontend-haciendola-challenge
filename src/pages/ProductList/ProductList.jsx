import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Eye, Trash, Tag } from "feather-icons-react";
import { Tooltip } from "react-tooltip";
import toast from "react-hot-toast";
import Button from "../../components/Button";
import Sidebar from "../../components/Sidebar";
import Paginate from "../../components/Paginate";
import ModalCreate from "./modals/ModalCreate";
import styles from "./ProductList.module.scss";

function ProductList() {
  const token = useSelector((state) => state.auth.token);
  const [products, setProducts] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  const [createModal, setCreateModal] = useState(false);
  const handleShowCreateModal = () => setCreateModal(true);
  const handleCloseCreateModal = () => setCreateModal(false);

  const [editModal, setEditModal] = useState(false);
  const handleShowEditModal = () => setEditModal(true);
  const handleCloseEditModal = () => setEditModal(false);

  const [deleteModal, setDeleteModal] = useState(false);
  const handleShowDeleteModal = () => setDeleteModal({ active: false });
  const handleCloseDeleteModal = () => setDeleteModal({ active: false });

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleProductCreate = async (newProduct) => {
    try {
      const response = await fetch(`http://localhost:3000/api/products`, {
        method: "post",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: newProduct.title,
          handle: newProduct.handle,
          description: newProduct.description,
          sku: newProduct.sku,
          barcode: newProduct.barcode,
          grams: newProduct.grams,
          stock: newProduct.stock,
          price: newProduct.price,
          compare_price: newProduct.comparePrice,
        }),
      });

      const data = await response.json();

      if (data.status === 500 || data.status === 404) {
        toast.error("Failed to create product");
      }
      if (data.status === 201) {
        toast.success("Product created");
        fetchProducts(currentPage);
        handleCloseCreateModal();
      }
    } catch (err) {
      console.log(err);
      toast.error("Server error. Try again");
    }
  };

  const handleProductUpdate = async (productData) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/products/${productData.sku}`,

        {
          method: "put",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title,
            handle,
            description,
            sku,
            barcode,
            grams,
            stock,
            price,
            comparePrice,
          }),
        }
      );
      const data = await response.json();
      if (data.status === 500 || data.status === 404) {
        toast.error("Update error");
      }
      if (data.status === 200) {
        toast.success("Product updated");
        fetchProducts(currentPage);
        handleCloseEditModal();
      }
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleProductDelete = async (sku) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/products/${sku}`,
        {
          method: "delete",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      if (data.status === 500 || data.status === 404) {
        toast.error("Update error");
      }
      if (data.status === 200) {
        toast.success("Product deleted");
        fetchProducts(currentPage);
        handleCloseDeleteModal();
      }
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

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
      const { result: data } = await response.json();

      setProducts(data.products);
      setTotalPages(data.totalPages);
      setTotalProducts(data.count);
    } catch (err) {
      console.log(err);
    }
  };

  const paginateProps = { currentPage, totalPages, handlePageChange };

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
                  {/* <button
                    className={styles.button__create}
                    onClick={handleShowCreateModal}
                  >
                    + New product
                  </button> */}
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

      <ModalUpdate handleProductUpdate={handleProductUpdate} />
      <ModalCreate handleProductCreate={handleProductCreate} />
      <ModalDelete handleProductDelete={handleProductDelete} />
    </>
  );
}

export default ProductList;
