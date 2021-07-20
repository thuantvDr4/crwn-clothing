import React, { useEffect, useState } from "react";
import "./CollectionOverview.styles.scss";
import { useSelector, useDispatch } from "react-redux";
import CollectionPreview from "../collections/CollectionPreview.Component";
import { shopSelector } from "../../../redux/selector";

//-------------->
import WithWrapComponent from "../HOC/WrapComponent";
//------------------->COMPONENT
const CollectionOverview = () => {
  //
  const { collections } = useSelector(shopSelector);
  //
  const [myCollections, setMyCollections] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //get collection from redux-store
  useEffect(() => {
    //
    if (collections) {
      const _collectionArray = Object.values(collections);
      setMyCollections(_collectionArray);
      //
      setIsLoading(false);
    }
  }, [collections]);

  //
  return (
    <WithWrapComponent className="collection-overview" isLoading={isLoading}>
      {!myCollections.length
        ? null
        : myCollections.map((collection, index) => {
            return <CollectionPreview key={"KEY:" + index} {...collection} />;
          })}
    </WithWrapComponent>
  );
};

export default CollectionOverview;
