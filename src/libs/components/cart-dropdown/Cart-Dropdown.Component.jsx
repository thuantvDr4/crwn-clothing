import React from "react";
import "./Cart-Dropdown.Styles.scss";
import { useSelector } from "react-redux";
import CustomButton from "../custom-button/Custom-Button.Component";
import CartItem from "../cart-item/CartItem.Component";
import { cartSelector } from "../../../redux/selector";

const CartDropdown = () => {
  const { cartItems } = useSelector(cartSelector);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {!cartItems
          ? null
          : cartItems.map((cardItem, index) => {
              return <CartItem key={"KEY:" + index} item={cardItem} />;
            })}
      </div>
      <CustomButton>GO TO CHECK OUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
