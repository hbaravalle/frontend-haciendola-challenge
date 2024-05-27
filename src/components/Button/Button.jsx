import { useState } from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";

function Button({
  variant,
  children,
  isLoading,
  block,
  onClick = null,
  type = "button",
  style,
}) {
  return (
    <button
      className={classNames(styles.Button, styles[`Button--${variant}`])}
      type={type}
      onClick={onClick}
      disabled={isLoading}
      style={{
        ...style,
        display: block ? "flex" : "inline-block",
        width: block ? "100%" : "initial",
      }}
    >
      {!isLoading ? (
        children
      ) : (
        <div
          className="spinner-border text-light"
          style={{ width: "15px", height: "15px", aspectRatio: "1 / 1" }}
          role="status"
        ></div>
      )}
    </button>
  );
}

export default Button;
