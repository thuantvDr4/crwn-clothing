import React, { useEffect } from "react";
import "./Cart-Icon.Styles.scss";
import { useDispatch, useSelector } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../../assets/shopping-bag.svg";
import { toggleCartHidden } from "../../../redux/cart/cart.actions";
import { cartSelector } from "../../../redux/selector";
import { calCartTotal } from "../../../redux/cart/cart.actions";

//
const CartIcon = () => {
  const dispatch = useDispatch();
  const { cartItems, cartTotal } = useSelector(cartSelector);

  //
  useEffect(() => {
    if (!cartItems) return;
    calCartTotal(dispatch, cartItems);
  }, [cartItems]);

  //_handleToggleCart
  function _handleToggleCart() {
    toggleCartHidden(dispatch);
  }

  //
  return (
    <div className="cart-container" onClick={_handleToggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartTotal}</span>
    </div>
  );
};

export default CartIcon;
