import React, { useState, useEffect } from "react";
import "./Directory.Styles.scss";

import { useSelector } from "react-redux";

import MenuItem from "../menu-item/Menu-item.Component";
import { directorySelector } from "../../../redux/selector";

const Directory = () => {
  const { sections } = useSelector(directorySelector);

  return (
    <div className="direct-menu">
      {sections.map((menu, index) => {
        return <MenuItem key={"KEY:" + index} {...menu} />;
      })}
    </div>
  );
};

export default Directory;
