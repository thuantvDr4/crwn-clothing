//cart-reducer
import cartTypes from "./cart.types";
const default_state = {
  hidden: true,
};

const cartReducer = (state = default_state, action) => {
  switch (action.type) {
    case cartTypes.TOGGLE_CART_HINDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    default:
      return state;
  }
};

export default cartReducer;
