import React from "react";
import "./Custom-Button.Styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${
        inverted ? "inverted" : isGoogleSignIn ? "google-signin" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
