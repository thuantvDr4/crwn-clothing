import collectionTypes from "./collection.types";
//
export function updateCollection(dispatch, newCollection) {
  dispatch({
    type: collectionTypes.UPDATE_COLLECTION,
    payload: newCollection,
  });
}
//
export const getCollectionId = (collections, collectionUrl) => {
  const newCollection = collections[collectionUrl];
  return newCollection;
};
