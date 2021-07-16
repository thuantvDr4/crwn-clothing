import React from "react";
import "./CollectionOverview.styles.scss";
import { useSelector } from "react-redux";
import CollectionPreview from "../collections/CollectionPreview.Component";
import { shopSelector } from "../../../redux/selector";

const CollectionOverview = ({}) => {
  //
  const { collections } = useSelector(shopSelector);
  //
  return (
    <div className="collection-overview">
      {!collections.length
        ? null
        : collections.map((collection, index) => {
            return <CollectionPreview key={"KEY:" + index} {...collection} />;
          })}
    </div>
  );
};

export default CollectionOverview;
