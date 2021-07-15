import cartTypes from "./cart.types";

export function toggleCartHidden(dispatch) {
  dispatch({
    type: cartTypes.TOGGLE_CART_HINDEN,
  });
}

export function updateCart(dispatch, newCart) {
  dispatch({
    type: cartTypes.UPDATE_CART,
    payload: newCart,
  });
}

export function calCartTotal(dispatch, cartItems) {
  //
  const total = cartItems.reduce((_total, item) => {
    return _total + item.quantity;
  }, 0);
  //
  dispatch({
    type: cartTypes.CAL_CART_TOTAL,
    payload: total,
  });
}

//------------->
export const addItem = (cartItems, item) => {
  let newCart = [...cartItems];

  //check item đã co hay chua
  const foundIndex = cartItems.findIndex((ix) => ix.id === item.id);
  // đã có
  if (foundIndex > -1) {
    //
    newCart[foundIndex] = {
      ...newCart[foundIndex],
      quantity: newCart[foundIndex].quantity + 1,
    };

    return newCart;
  }
  // chua co
  newCart.push({
    ...item,
    quantity: 1,
  });
  //
  return newCart;
};
