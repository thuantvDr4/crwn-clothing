import React from "react";
import {
  Route,
  Switch,
  useRouteMatch,
  Link,
  useHistory,
} from "react-router-dom";
//Pages
import HomePage from "../pages/homePages/Home.Pages";
import ShopPage from "../pages/shopPages/Shop.Pages";

function Hats(props) {
  const match = useRouteMatch();
  console.log("[match]---", match);
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
}

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
    </Switch>
  );
};
