//
import { userTypes } from "./user.types";
//
export const setUser = (dispatch, user) => {
  dispatch({
    type: userTypes.SET_CURRENT_USER,
    payload: user,
  });
};
//
