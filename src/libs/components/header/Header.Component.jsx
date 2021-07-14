import React from "react";
import "./Header.Styles.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { ReactComponent as Logo } from "../../../assets/crown.svg";
import useFirebase from "../../../firebase/firebase.hook";
import { authSelector } from "../../../redux/selector";

const Header = () => {
  // Redux
  const { currentUser } = useSelector(authSelector);
  //Hook
  const { signOutByFirebase } = useFirebase();

  //------------->Return
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
        {currentUser ? (
          <div onClick={signOutByFirebase} className="option">
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
