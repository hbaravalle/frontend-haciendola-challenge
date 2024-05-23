import styles from "./FormGroup.module.scss";

function FormGroup({ title, name, type = "text" }) {
  return (
    <div className={styles.formGroup}>
      <label className={styles.formGroup__label} htmlFor={name}>
        {title}
      </label>
      <input
        className={styles.formGroup__input}
        type={type}
        id={name}
        name={name}
      />
    </div>
  );
}

export default FormGroup;
