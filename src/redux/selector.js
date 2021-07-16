//
export const authSelector = (state) => state.user;
export const cartSelector = (state) => state.cart;
export const directorySelector = (state) => state.directory;
export const shopSelector = (state) => state.shop;
export const collectionSelector = (state) => state.collection;

//
const selector = {
  authSelector,
  cartSelector,
  directorySelector,
  shopSelector,
  collectionSelector,
};

export default selector;
