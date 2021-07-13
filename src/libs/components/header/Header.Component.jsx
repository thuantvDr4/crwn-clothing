import React from "react";
import "./Header.Styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/crown.svg";

const Header = () => {
  return (
    <div className="header">
      {/* --logo-- */}
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      {/* --group-- */}
      <div className="options-ctn">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
      </div>
    </div>
  );
};

export default Header;
