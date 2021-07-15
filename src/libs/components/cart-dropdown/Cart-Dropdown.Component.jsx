import React from "react";
import "./Cart-Dropdown.Styles.scss";
import { useSelector } from "react-redux";
import CustomButton from "../custom-button/Custom-Button.Component";
import CartItem from "../cart-item/CartItem.Component";
import { cartSelector } from "../../../redux/selector";
import { useHistory } from "react-router-dom";

const CartDropdown = () => {
  const history = useHistory();
  const { cartItems } = useSelector(cartSelector);

  //
  function _handleCheckout() {
    history.push("/checkout");
  }

  //---------->
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {!cartItems.length ? (
          <span className="empty-message">Your cart is empty</span>
        ) : (
          cartItems.map((cardItem, index) => {
            return <CartItem key={"KEY:" + index} item={cardItem} />;
          })
        )}
      </div>
      <CustomButton onClick={_handleCheckout}>GO TO CHECK OUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
