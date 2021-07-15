//
export const authSelector = (state) => state.user;
export const cartSelector = (state) => state.cart;

//
const selector = {
  authSelector,
  cartSelector,
};

export default selector;
