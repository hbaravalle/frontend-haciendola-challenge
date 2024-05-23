import classNames from "classnames";
import { Link, useParams } from "react-router-dom";

function FormLayout() {
  const { step } = useParams();

  return <div className={styles.mainWrapper}></div>;
}

export default FormLayout;
