import React, { useEffect, useState } from "react";
import "./Collection.styles.scss";
import { useRouteMatch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { shopSelector, collectionSelector } from "../../redux/selector";
import {
  getCollectionId,
  updateCollection,
} from "../../redux/collection/collection.actions";

import CollectionItem from "../../libs/components/collection-item/Collection-Item.Component";
//
const COLLECTION_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

//
const Collection = () => {
  //
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const { collections } = useSelector(shopSelector);
  const { selectCollection } = useSelector(collectionSelector);
  //
  const [myCollection, setMyCollection] = useState({
    title: "",
    items: [],
  });
  //
  useEffect(() => {
    const categoryId = match.params.categoryId;
    const newCollection = getCollectionId(collections, categoryId);
    //
    updateCollection(dispatch, newCollection);
    //
  }, [match.params.categoryId]);

  //
  useEffect(() => {
    if (selectCollection) {
      setMyCollection(selectCollection);
    }
  }, [selectCollection]);
  //
  return (
    <div className="collection-page">
      <h2 className="title">{myCollection.title}</h2>
      <div className="items">
        {!myCollection.items.length
          ? null
          : myCollection.items.map((collection, index) => {
              return (
                <CollectionItem
                  key={"key:" + index}
                  {...collection}
                  item={collection}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Collection;
