//cart-reducer
import cartTypes from "./cart.types";
const default_state = {
  hidden: true,
  cartItems: [],
  cartTotal: 0,
};

const cartReducer = (state = default_state, action) => {
  switch (action.type) {
    case cartTypes.TOGGLE_CART_HINDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case cartTypes.UPDATE_CART:
      return {
        ...state,
        cartItems: action.payload,
      };

    case cartTypes.CAL_CART_TOTAL:
      return {
        ...state,
        cartTotal: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
