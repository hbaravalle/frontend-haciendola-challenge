import { Link } from "react-router-dom";
import FormGroup from "../../../components/FormGroup";

function SendCodeToEmail() {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        voluptas laudantium maiores consequuntur minus amet enim praesentium
        saepe commodi ullam!
      </p>
      <form>
        <FormGroup title="Email address" type="text" name="email" />
        <button type="submit">Recover password</button>
        <button>Back to login</button>
      </form>
      <small>
        Already have and account? <Link to="/login">Sign in</Link>
      </small>
    </>
  );
}

export default SendCodeToEmail;
