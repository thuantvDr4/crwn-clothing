import React from "react";
import "./Cart-Dropdown.Styles.scss";
import CustomButton from "../custom-button/Custom-Button.Component";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomButton>GO TO CHECK OUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
