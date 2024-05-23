import styles from "./TypeOTP.module.scss";

function TypeOTPToken() {
  return (
    <div className={classNames(styles.login, "shadow-sm")}>
      <div className={styles.login__logo}>
        <img src="/logo.png" alt="Haciéndola logo" />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        voluptas laudantium maiores consequuntur minus amet enim praesentium
        saepe commodi ullam!
      </p>
      <p>her***********@gmail.com</p>
      <form action="" className={styles.login__form}>
        <div className={styles.login__formGroup}>
          <label htmlFor="" className={styles.login__formLabel}>
            Type you 6 digits security code
          </label>
          <div className={styles.login__otpWrapper}>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </div>
        </div>

        <button type="submit">Verify my account</button>
      </form>
      <small>
        Didn't get the code? <Link>Resend</Link>
      </small>
    </div>
  );
}

export default TypeOTPToken;
