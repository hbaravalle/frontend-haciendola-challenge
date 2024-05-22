import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
import classNames from "classnames";

function Login() {
  return (
    <div className={styles.mainWrapper}>
      <div className={classNames(styles.login, "shadow-sm")}>
        <div className={styles.login__logo}>
          <img src="/logo.png" alt="Haciéndola logo" />
        </div>
        <form action="" className={styles.login__form}>
          <div className={styles.login__formGroup}>
            <label htmlFor="" className={styles.login__formLabel}>
              Username or email
            </label>
            <input type="text" className={styles.login__formInput} />
          </div>
          <div className={styles.login__formGroup}>
            <label htmlFor="" className={styles.login__formLabel}>
              Password
            </label>
            <input type="text" className={styles.login__formInput} />
            <small className={styles.forgot}>
              <Link>Forgot password?</Link>
            </small>
          </div>
          <button type="submit">Sign in</button>
        </form>

        <small>
          Not registered yet? <Link to="/register">Create and account</Link>
        </small>
      </div>
    </div>
  );
}

export default Login;
