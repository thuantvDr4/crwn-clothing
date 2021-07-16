import collectionTypes from "./collection.types";
//
export function updateCollection(dispatch, newCollection) {
  dispatch({
    type: collectionTypes.UPDATE_COLLECTION,
    payload: newCollection,
  });
}
//
export const getCollectionId = (collections, collectionId) => {
  const newCollection = collections.find(
    (collection) => collection.id === collectionId
  );
  return newCollection;
};
