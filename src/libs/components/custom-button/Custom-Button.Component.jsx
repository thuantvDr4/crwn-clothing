import React from "react";
import "./Custom-Button.Styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "google-signin" : ""} cus-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
