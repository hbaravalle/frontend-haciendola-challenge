import styles from "./TypeOTP.module.scss";
import { Link } from "react-router-dom";
import FormGroupOTP from "../../../../components/FormGroupOTP/FormGroupOTP";

function TypeOTPToken() {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        voluptas laudantium maiores consequuntur minus amet enim praesentium
        saepe commodi ullam!
      </p>
      <p>her***********@gmail.com</p>
      <form>
        <FormGroupOTP title="Type you 6 digits security code" />

        <button type="submit">Verify my account</button>
      </form>
      <small>
        Didn't get the code? <Link>Resend</Link>
      </small>
    </>
  );
}

export default TypeOTPToken;
