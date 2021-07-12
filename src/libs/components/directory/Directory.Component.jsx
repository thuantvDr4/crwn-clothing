import React, { useState, useEffect } from "react";
import "./Directory.Styles.scss";
import MenuItem from "../menu-item/Menu-item.Component";

const DATA = [
  {
    id: 1,
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    linkUrl: "hats",
  },
  {
    id: 2,
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    linkUrl: "",
  },
  {
    id: 3,
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    linkUrl: "",
  },
  {
    id: 4,
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    size: "large",
    linkUrl: "",
  },
  {
    id: 5,
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    size: "large",
    linkUrl: "",
  },
];

const Directory = () => {
  const [sections, setSections] = useState(DATA);

  return (
    <div className="direct-menu">
      {sections.map((menu, index) => {
        return <MenuItem key={"KEY:" + index} {...menu} />;
      })}
    </div>
  );
};

export default Directory;
