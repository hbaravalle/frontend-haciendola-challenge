import styles from "./FormGroupOTP.module.scss";

function FormGroupOTP({ title }) {
  return (
    <div className={styles.formGroupOTP}>
      <label htmlFor="" className={styles.formGroupOTP__label}>
        {title}
      </label>
      <div className={styles.otpWrapper}>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
    </div>
  );
}

export default FormGroupOTP;
