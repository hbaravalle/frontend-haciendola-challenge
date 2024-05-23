import { Link } from "react-router-dom";
import styles from "./Register.module.scss";
import FormLayout from "../../Layouts/Form/FormLayout";
import FormGroup from "../../components/FormGroup/FormGroup";

function Register() {
  return (
    <FormLayout>
      <form action="" className={styles.formLayout__form}>
        <FormGroup title="Name" name="name" />
        <FormGroup title="Username" name="username" />
        <FormGroup title="Email address" name="email" type="email" />
        <FormGroup title="Password" name="password" type="password" />
        <FormGroup
          title="Confirm password"
          name="repassword"
          type="repassword"
        />
        <button type="submit">Sign up</button>
      </form>
      <small>
        Already have and account? <Link to="/login">Sign in</Link>
      </small>
    </FormLayout>
  );
}

export default Register;
