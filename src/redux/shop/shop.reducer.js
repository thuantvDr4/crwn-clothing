import { SHOP_DATA } from "../../pages/shopPages/Shop.Data";
//
const default_state = {
  collections: SHOP_DATA,
};

const shopReducer = (state = default_state, action) => {
  switch (action.type) {
    case "default":
      return {
        ...state,
        collections: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
