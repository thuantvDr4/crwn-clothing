import React from "react";
import "./Cart-Icon.Styles.scss";
import { useDispatch } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../../redux/cart/cart.actions";

//
const CartIcon = () => {
  const dispatch = useDispatch();

  //_handleToggleCart
  function _handleToggleCart() {
    toggleCartHidden(dispatch);
  }

  //
  return (
    <div className="cart-container" onClick={_handleToggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
