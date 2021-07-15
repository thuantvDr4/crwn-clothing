import cartTypes from "./cart.types";

export function toggleCartHidden(dispatch) {
  dispatch({
    type: cartTypes.TOGGLE_CART_HINDEN,
  });
}
