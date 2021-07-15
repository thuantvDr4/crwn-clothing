import React from "react";
import "./CartItem.Styles.scss";

const CartItem = ({
  item: { name = "", imageUrl = "", quantity = 0, price = 0 },
}) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="cart-info">
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
