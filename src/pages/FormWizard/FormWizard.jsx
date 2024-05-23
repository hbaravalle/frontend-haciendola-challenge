import classNames from "classnames";
import styles from "./FormWizard.module.scss";
import { Link, useParams } from "react-router-dom";

function FormWizard() {
  const { step } = useParams();

  return (
    <div className={styles.mainWrapper}>
      {!step && (
        <div className={classNames(styles.login, "shadow-sm")}>
          <div className={styles.login__logo}>
            <img src="/logo.png" alt="Haciéndola logo" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            voluptas laudantium maiores consequuntur minus amet enim praesentium
            saepe commodi ullam!
          </p>
          <form action="" className={styles.login__form}>
            <div className={styles.login__formGroup}>
              <label htmlFor="" className={styles.login__formLabel}>
                Email address
              </label>
              <input type="text" className={styles.login__formInput} />
            </div>

            <button type="submit">Recover password</button>
            <button className={styles.secondary}>Back to login</button>
          </form>
        </div>
      )}
      {step === "otp" && (
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
      )}
      {step === "reset" && (
        <div className={classNames(styles.login, "shadow-sm")}>
          <div className={styles.login__logo}>
            <img src="/logo.png" alt="Haciéndola logo" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            voluptas laudantium maiores consequuntur minus amet enim praesentium
            saepe commodi ullam!
          </p>
          <form action="" className={styles.login__form}>
            <div className={styles.login__formGroup}>
              <label htmlFor="" className={styles.login__formLabel}>
                New password
              </label>
              <input type="text" className={styles.login__formInput} />
            </div>
            <div className={styles.login__formGroup}>
              <label htmlFor="" className={styles.login__formLabel}>
                Repeat new password
              </label>
              <input type="text" className={styles.login__formInput} />
            </div>

            <button type="submit">Change password</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default FormWizard;
