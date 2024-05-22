import { Link } from "react-router-dom";
import styles from "./Register.module.scss";
import classNames from "classnames";

function Register() {
  return (
    <div className={styles.mainWrapper}>
      <div className={classNames(styles.register, "shadow-sm")}>
        <div className={styles.register__logo}>
          <img src="/logo.png" alt="Haciéndola logo" />
        </div>
        <form action="" className={styles.register__form}>
          <div className={styles.register__formGroup}>
            <label htmlFor="" className={styles.register__formLabel}>
              Name
            </label>
            <input type="text" className={styles.register__formInput} />
          </div>
          <div className={styles.register__formGroup}>
            <label htmlFor="" className={styles.register__formLabel}>
              Username
            </label>
            <input type="text" className={styles.register__formInput} />
          </div>
          <div className={styles.register__formGroup}>
            <label htmlFor="" className={styles.register__formLabel}>
              Email address
            </label>
            <input type="text" className={styles.register__formInput} />
          </div>
          <div className={styles.register__formGroup}>
            <label htmlFor="" className={styles.register__formLabel}>
              Password
            </label>
            <input type="text" className={styles.register__formInput} />
          </div>
          <div className={styles.register__formGroup}>
            <label htmlFor="" className={styles.register__formLabel}>
              Repeat password
            </label>
            <input type="text" className={styles.register__formInput} />
          </div>
          <button type="submit">Sign up</button>
        </form>
        <small>
          Already have and account? <Link to="/login">Sign in</Link>
        </small>
      </div>
    </div>
  );
}

export default Register;
