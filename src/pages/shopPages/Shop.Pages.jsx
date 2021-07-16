import React from "react";
import "./Shop.Styles.scss";
import { Route, useRouteMatch } from "react-router-dom";

import CollectionOverview from "../../libs/components/collection-overview/CollectionOverview.component";
import CollectionPage from "../collection/Collection.Page";

const ShopPage = () => {
  //
  const match = useRouteMatch();
  //
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
