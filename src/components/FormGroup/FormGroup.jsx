import styles from "./FormGroup.module.scss";

function FormGroup({ title, name, type = "text", value = "" }) {
  return (
    <div className={styles.formGroup}>
      <label className={styles.formGroup__label} htmlFor={name}>
        {title}
      </label>
      {type !== "textarea" && (
        <input
          className={styles.formGroup__input}
          type={type}
          id={name}
          name={name}
          value={value}
        />
      )}
      {type === "textarea" && (
        <textarea name={name} id={name}>
          {value}
        </textarea>
      )}
    </div>
  );
}

export default FormGroup;
