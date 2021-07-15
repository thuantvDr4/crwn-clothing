import React from "react";
import "./Collection-Item.Styles.scss";
import CustomButton from "../custom-button/Custom-Button.Component";
import { addItem, updateCart } from "../../../redux/cart/cart.actions";
import { useDispatch, useSelector } from "react-redux";
import { cartSelector } from "../../../redux/selector";

//
const CollectionItem = ({ id, name = "", imageUrl, price = 0, item }) => {
  //
  const dispatch = useDispatch();
  const { cartItems } = useSelector(cartSelector);

  //_handleAddToCart
  function _handleAddToCart() {
    const newCart = addItem(cartItems, item);
    // push to store
    updateCart(dispatch, newCart);
  }

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}$</span>
      </div>
      <CustomButton inverted onClick={_handleAddToCart}>
        add to cart
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
