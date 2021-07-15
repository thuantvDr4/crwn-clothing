import React from "react";
import "./CollectionPreview.Styles.scss";
import CollectionItem from "../collection-item/Collection-Item.Component";

const CollectionPreview = ({ title = "", items = [] }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item, index) => {
            return (
              <CollectionItem key={"key:" + index} {...item} item={item} />
            );
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
