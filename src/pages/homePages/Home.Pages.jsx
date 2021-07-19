import React from "react";
import "./Home.Styles.scss";
import Directory from "../../libs/components/directory/Directory.Component";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center py-20px px-80px">
      <Directory />
    </div>
  );
};

export default HomePage;
