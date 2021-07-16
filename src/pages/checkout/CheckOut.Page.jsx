import React, { useEffect } from "react";
import "./CheckOut.Styles.scss";
import { useSelector, useDispatch } from "react-redux";
import { cartSelector } from "../../redux/selector";
import CheckoutItem from "../../libs/components/checkout-item/Checkout-Item.Component";
import { calPriceTotal } from "../../redux/cart/cart.actions";
import StripeCheckoutButton from "../../libs/components/stripe-button/StripeButton.component";
import { updateCart } from "../../redux/cart/cart.actions";

// ----------->
const CheckOut = () => {
  //
  const dispatch = useDispatch();
  //
  const { cartItems, priceTotal } = useSelector(cartSelector);
  //

  useEffect(() => {
    calPriceTotal(dispatch, cartItems);
  }, [cartItems]);

  //handlePaymentSuccess
  function handlePaymentSuccess() {
    //
    updateCart(dispatch, []);
    //
  }

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
      {/* ----payment--- */}
      {priceTotal === 0 ? null : (
        <>
          <StripeCheckoutButton
            price={priceTotal}
            paymentSuccess={handlePaymentSuccess}
          />
          {/* ----- */}
          <div className="warning">
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 ------Exp:07/21---CVV:123
          </div>
        </>
      )}
    </div>
  );
};

export default CheckOut;
