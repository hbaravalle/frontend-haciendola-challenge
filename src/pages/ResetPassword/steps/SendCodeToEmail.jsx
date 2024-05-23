function Email() {
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
  );
}
