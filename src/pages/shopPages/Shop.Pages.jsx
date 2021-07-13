import React, { useState } from "react";
import "./Shop.Styles.scss";
import { SHOP_DATA } from "./Shop.Data";
import CollectionPreview from "../../libs/components/collections/CollectionPreview.Component";

const ShopPage = () => {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div>
      {collections.map((collection, index) => {
        return <CollectionPreview key={"KEY:" + index} {...collection} />;
      })}
    </div>
  );
};

export default ShopPage;
