import React, { useEffect, useState } from "react";
import "./CollectionOverview.styles.scss";
import { useSelector } from "react-redux";
import CollectionPreview from "../collections/CollectionPreview.Component";
import { shopSelector } from "../../../redux/selector";

const CollectionOverview = () => {
  //
  const { collections } = useSelector(shopSelector);
  //
  const [myCollections, setMyCollections] = useState([]);
  //

  useEffect(() => {
    const _collectionArray = Object.values(collections);
    setMyCollections(_collectionArray);
    console.log("[_collectionArray]----", _collectionArray);
  }, [collections]);

  //
  return (
    <div className="collection-overview">
      {!myCollections.length
        ? null
        : myCollections.map((collection, index) => {
            return <CollectionPreview key={"KEY:" + index} {...collection} />;
          })}
    </div>
  );
};

export default CollectionOverview;
