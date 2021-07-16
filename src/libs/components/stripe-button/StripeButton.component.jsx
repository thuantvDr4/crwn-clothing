import React from "react";
import "./StripeButton.styles.scss";
import StripeCheckout from "react-stripe-checkout";

const CODE_TEST = "4242 4242 4242 4242 -----Exp:07/21---CVV:123";

const StripeCheckoutButton = ({ price, paymentSuccess }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    "pk_test_51JDrOPBCQQVQ4dX2Kd6qcFPgSvoIYgy3yxDP3GfPd7kL2GzIOA0AgK6M3FF1H1jJZ6smGaaSi6RW9Y0K664vjpbE00Fau2Oc6F";

  //onToken
  function onToken(token) {
    console.log("[token]----", token);
    alert("Payment successful");
    paymentSuccess && paymentSuccess();
  }

  //----------->
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};

export default StripeCheckoutButton;
