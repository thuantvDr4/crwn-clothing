import React from "react";
import "./Menu-item.Styles.scss";

const MenuItem = ({ tile = "", imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="image-background"
      />

      <div className="content">
        <h1 className="title">{tile.toUpperCase()}</h1>
        <span className="sub-title">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
