import shopTypes from "./shop.types";

//
export function updateShopCollections(dispatch, collections) {
  dispatch({
    type: shopTypes.UPDATE_SHOP_COLLECTIONS,
    payload: collections,
  });
}
