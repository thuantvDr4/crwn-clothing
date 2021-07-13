import React from "react";
import "./Custom-Button.Styles.scss";

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button className="cus-button" {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
