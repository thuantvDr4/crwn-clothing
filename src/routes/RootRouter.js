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

function BlogList(props) {
  console.log(props);
  const match = useRouteMatch();
  const history = useHistory();

  return (
    <div>
      <h1>BLOG LIST</h1>
      <Link to={`${match.url}/13`}>Blog detail: ID 13</Link> <br />
      <Link to={`${match.url}/15`}>Blog detail: ID 15</Link> <br />
      <Link to={`${match.url}/21`}>Blog detail: ID 21</Link>
      <button onClick={() => history.push(`${match.url}/13`)}>
        Blog detail
      </button>
    </div>
  );
}

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
      <Route path="/hats" component={Hats} />
    </Switch>
  );
};
