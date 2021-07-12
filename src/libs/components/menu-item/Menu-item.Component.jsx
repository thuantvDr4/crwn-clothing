import React from "react";
import "./Menu-item.Styles.scss";
import { withRouter, useHistory, useRouteMatch } from "react-router-dom";

const MenuItem = ({ title = "", size, imageUrl, linkUrl }) => {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="image-background"
      />

      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="sub-title">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
