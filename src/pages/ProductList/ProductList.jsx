import {
  Eye,
  Trash,
  Tag,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "feather-icons-react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Sidebar from "../../components/Sidebar";
import styles from "./ProductList.module.scss";

function ProductList() {
  return (
    <>
      <div class={styles.mainWrapper}>
        <Sidebar />
        <main className="px-3">
          <Navbar collapseOnSelect expand="lg" style={{ fontSize: "14px" }}>
            <Container>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                  <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <header>
                  <h1>Productos</h1>
                </header>
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
                      <tr>
                        <td>1</td>
                        <td>60870131001</td>
                        <td>COLA GLITTER 23 GRS</td>
                        <td>1161</td>
                        <td>100</td>
                        <td>1013</td>
                        <td className="text-center">
                          <Tag size="16" />
                        </td>
                        <td>
                          <div className={styles.table__actions}>
                            <button className={styles.table__actionButton}>
                              <Eye size="16" />
                            </button>
                            <button className={styles.table__actionButton}>
                              <Trash size="16" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>60870120101</td>
                        <td>MASA DE MODELAR SOFT 150 GRS</td>
                        <td>1611</td>
                        <td>100</td>
                        <td>359</td>
                        <td className="text-center">
                          <Tag size="16" />
                        </td>
                        <td>
                          <div className={styles.table__actions}>
                            <button className={styles.table__actionButton}>
                              <Eye size="16" />
                            </button>
                            <button className={styles.table__actionButton}>
                              <Trash size="16" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>60870110301</td>
                        <td>PLASTICINA EN PANES 100 GRS</td>
                        <td>891</td>
                        <td>100</td>
                        <td>1988</td>
                        <td className="text-center">
                          <Tag size="16" />
                        </td>
                        <td>
                          <div className={styles.table__actions}>
                            <button className={styles.table__actionButton}>
                              <Eye size="16" />
                            </button>
                            <button className={styles.table__actionButton}>
                              <Trash size="16" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>60870164501</td>
                        <td>TEMPERA 100 ML</td>
                        <td>1071</td>
                        <td>100</td>
                        <td>483</td>
                        <td className="text-center">
                          <Tag size="16" />
                        </td>
                        <td>
                          <div className={styles.table__actions}>
                            <button className={styles.table__actionButton}>
                              <Eye size="16" />
                            </button>
                            <button className={styles.table__actionButton}>
                              <Trash size="16" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>60870160201</td>
                        <td>TEMPERA 250 ML</td>
                        <td>1791</td>
                        <td>100</td>
                        <td>218</td>
                        <td className="text-center">
                          <Tag size="16" />
                        </td>
                        <td className={styles.table__actions}>
                          <button className={styles.table__actionButton}>
                            <Eye size="16" />
                          </button>
                          <button className={styles.table__actionButton}>
                            <Trash size="16" />
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>60870161701</td>
                        <td>TEMPERA 500 ML</td>
                        <td>3411</td>
                        <td>100</td>
                        <td>96</td>
                        <td className="text-center">
                          <Tag size="16" />
                        </td>
                        <td>
                          <div className={styles.table__actions}>
                            <button className={styles.table__actionButton}>
                              <Eye size="16" />
                            </button>
                            <button className={styles.table__actionButton}>
                              <Trash size="16" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className={styles.table__info}>
                  <small>
                    57 resultados <b>·</b> Mostrando 1 de 10
                  </small>
                  <div className={styles.table__paginate}>
                    <button className={styles.table__paginateButton}>
                      <ChevronsLeft size="13" />
                    </button>
                    <button className={styles.table__paginateButton}>
                      <ChevronLeft size="13" />
                    </button>
                    <button className={styles.table__paginateButton}>1</button>
                    <button className={styles.table__paginateButton}>2</button>
                    <button className={styles.table__paginateButton}>3</button>
                    <button className={styles.table__paginateButton}>4</button>
                    <button className={styles.table__paginateButton}>5</button>
                    <button className={styles.table__paginateButton}>
                      <ChevronRight size="13" />
                    </button>
                    <button className={styles.table__paginateButton}>
                      <ChevronsRight size="13" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default ProductList;
