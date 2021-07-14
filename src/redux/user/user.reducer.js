// user-reducer
import { userTypes } from "./user.types";

const default_state = {
  currentUser: null,
};
//
const userReducer = (state = default_state, action) => {
  switch (action.type) {
    case userTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export const userSelector = (state) => state.user;

export default userReducer;
