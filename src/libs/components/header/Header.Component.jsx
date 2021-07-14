import React from "react";
import "./Header.Styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../../assets/crown.svg";
import useFirebase from "../../../firebase/firebase.hook";

const Header = () => {
  const { currentUser, signOutByFirebase } = useFirebase();
  console.log("[currentUser]---", currentUser);
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
