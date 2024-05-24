import FormGroup from "../../components/FormGroup";
import { Link } from "react-router-dom";
import styles from "./Login.module.scss";
import classNames from "classnames";
import FormLayout from "../../Layouts/Form/FormLayout";

function Login() {
  return (
    <FormLayout>
      <form action="">
        <FormGroup title="Username or email" name="user" />
        <FormGroup title="Password" name="password" type="password" />
        <button type="submit">Sign in</button>
      </form>
      <small>
        Not registered yet? <Link to="/register">Create and account</Link>
      </small>
    </FormLayout>
  );
}

export default Login;
