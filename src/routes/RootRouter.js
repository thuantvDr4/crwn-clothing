import React from "react";
import {
  Route,
  Switch,
  useRouteMatch,
  Link,
  useHistory,
  Redirect,
} from "react-router-dom";
//Pages
import HomePage from "../pages/homePages/Home.Pages";
import ShopPage from "../pages/shopPages/Shop.Pages";
import SignInAndSignUpPage from "../pages/authPages/SignIn-SignUp.Page";
import { useSelector } from "react-redux";
import { authSelector } from "../redux/selector";

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
  const { currentUser } = useSelector(authSelector);
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/shop" component={ShopPage} />
      {/* <Route path="/signin" component={SignInAndSignUpPage} /> */}
      <Route
        path="/signin"
        render={() =>
          currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
        }
      />
    </Switch>
  );
};
