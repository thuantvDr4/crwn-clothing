// user-reducer
const default_state = {
  currentUser: null,
  authUser: "test....",
};
//
const userReducer = (state = default_state, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
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
