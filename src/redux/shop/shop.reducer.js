import shopTypes from "./shop.types";
// import { SHOP_DATA } from "../../pages/shopPages/Shop.Data";
//
const default_state = {
  collections: null,
};

const shopReducer = (state = default_state, action) => {
  switch (action.type) {
    case shopTypes.UPDATE_SHOP_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
