import React from "react";
import "./Checkout-Item.Styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../../../redux/selector";
import {
  removeItem,
  updateCart,
  deleteItem,
  addItem,
} from "../../../redux/cart/cart.actions";

const CheckoutItem = ({
  item: { name = "", imageUrl = "", quantity = 0, price = 0, id },
  cartItem,
}) => {
  //
  const dispatch = useDispatch();
  const { cartItems } = useSelector(cartSelector);

  //_handleDeleteItem
  function _handleDeleteItem() {
    //
    const newCart = deleteItem(cartItems, id);
    //update to store
    updateCart(dispatch, newCart);
  }

  //_handleDecrementQuantity
  function _handleDecrementQuantity() {
    //
    const newCart = removeItem(cartItems, cartItem);
    //
    updateCart(dispatch, newCart);
  }

  //_handleIncrementQuantity
  function _handleIncrementQuantity() {
    //
    const newCart = addItem(cartItems, cartItem);
    //
    updateCart(dispatch, newCart);
  }

  //------------->
  return (
    <div className="checkout-item">
      <div className="img-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={_handleDecrementQuantity}>
          &#10094;
        </div>
        {quantity}
        <div className="arrow" onClick={_handleIncrementQuantity}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="delete-button" onClick={_handleDeleteItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
