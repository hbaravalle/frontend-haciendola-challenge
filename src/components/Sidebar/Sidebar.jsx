import { Package } from "feather-icons-react";
import styles from "./Sidebar.module.scss";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <a>
        <img
          src="/logo.png"
          alt="Haciéndola logo"
          className={styles.sidebar__logo}
        />
      </a>
      <nav className={styles.sidebar__nav}>
        <ul className={styles.sidebar__list}>
          <li className={styles.sidebar__itemTitle}>Secciones</li>
          <li className={styles.sidebar__item}>
            <a href="">
              <Package
                size="16"
                style={{
                  marginRight: "10px",
                  marginBottom: "-2px",
                }}
              />
              Productos
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
