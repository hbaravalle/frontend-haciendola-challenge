import FormLayout from "../../Layouts/Form/FormLayout";
import FormGroup from "../../components/FormGroup";

function NewPassword() {
  return (
    <FormLayout>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        voluptas laudantium maiores consequuntur minus amet enim praesentium
        saepe commodi ullam!
      </p>
      <form>
        <FormGroup title="New password" name="newpassword" type="password" />
        <FormGroup title="Repeat password" name="repassword" type="password" />
        <button type="submit">Change password</button>
      </form>
    </FormLayout>
  );
}

export default NewPassword;
