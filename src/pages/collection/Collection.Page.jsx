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
import WithWrapComponent from "../../libs/components/HOC/WrapComponent";
//

//
const Collection = () => {
  //
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const { selectCollection } = useSelector(collectionSelector);
  const { collections } = useSelector(shopSelector);

  //
  const [myCollection, setMyCollection] = useState({
    title: "",
    items: [],
  });

  const [isLoading, setIsLoading] = useState(true);
  //
  useEffect(() => {
    const categoryId = match.params.categoryId;

    if (!collections) return;
    const newCollection = getCollectionId(collections, categoryId);

    //
    updateCollection(dispatch, newCollection);
    //
  }, [match.params.categoryId]);

  //
  useEffect(() => {
    //
    if (selectCollection) {
      setMyCollection(selectCollection);
      //
      setIsLoading(false);
      //
      return;
    }
    //waiting only 1 minute
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    //
  }, [selectCollection]);

  //

  //
  return (
    <WithWrapComponent className="collection-page" isLoading={isLoading}>
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
    </WithWrapComponent>
  );
};

export default Collection;
