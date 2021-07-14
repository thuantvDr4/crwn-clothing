import React, { useState, useEffect } from "react";
import "./SignIn.Styles.scss";
import FormInput from "../form-input/Form-Input.Component";
import CustomButton from "../custom-button/Custom-Button.Component";
import { auth, signInWithGoogle } from "../../../firebase/firebase.utils";
import { useHistory } from "react-router-dom";

const SignIn = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //_onSubmit
  async function _onSubmit(event) {
    event.preventDefault();
    const { email, password } = user;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      setUser({
        email: "",
        password: "",
      });
      // go to home-page
      history.push("/");
      //
    } catch (error) {
      console.log("[error sign-in]---", error);
      alert(error.message);
    }
  }

  //_handleChange
  function _handleChange(event) {
    const { value, name } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span className="sub-title">Sign in with your email and password</span>

      <form onSubmit={_onSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={user.email}
          required
          onChange={_handleChange}
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          value={user.password}
          required
          onChange={_handleChange}
        />

        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
