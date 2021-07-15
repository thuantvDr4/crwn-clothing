import React, { useEffect } from "react";
import "./CheckOut.Styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { cartSelector } from "../../redux/selector";
import CheckoutItem from "../../libs/components/checkout-item/Checkout-Item.Component";
import { calPriceTotal } from "../../redux/cart/cart.actions";

const CheckOut = () => {
  //
  const dispatch = useDispatch();
  //
  const { cartItems, priceTotal } = useSelector(cartSelector);
  //

  useEffect(() => {
    calPriceTotal(dispatch, cartItems);
  }, [cartItems]);

  //--------------->
  return (
    <div className="checkout-page">
      {/* -----header----- */}
      <div className="checkout-header">
        <div className="block">
          <span>Product</span>
        </div>
        <div className="block">
          <span>Description</span>
        </div>
        <div className="block">
          <span>Quantity</span>
        </div>
        <div className="block">
          <span>Price</span>
        </div>
        <div className="block">
          <span>Remove</span>
        </div>
      </div>
      {/* -----item----- */}
      {!cartItems.length
        ? null
        : cartItems.map((cartItem, index) => {
            return (
              <CheckoutItem
                key={"KEY:" + index}
                item={cartItem}
                cartItem={cartItem}
              />
            );
          })}

      <div className="total-price">
        <span>TOTAL: ${priceTotal}</span>
      </div>
    </div>
  );
};

export default CheckOut;
