import collectionTypes from "./collection.types";
//
const default_state = {
  selectCollection: null,
};
//
const CollectionReducer = (state = default_state, action) => {
  switch (action.type) {
    case collectionTypes.UPDATE_COLLECTION:
      return {
        ...state,
        selectCollection: action.payload,
      };

    default:
      return state;
  }
};

export default CollectionReducer;
