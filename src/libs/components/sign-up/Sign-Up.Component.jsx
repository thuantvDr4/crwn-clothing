import React, { useState } from "react";
import "./Sign-Up.Styles.scss";
import FormInput from "../form-input/Form-Input.Component";
import CustomButton from "../custom-button/Custom-Button.Component";
import {
  auth,
  createUserProfileDocument,
} from "../../../firebase/firebase.utils";

//
const SignUp = () => {
  const [user, setUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //handleSubmit
  async function handleSubmit(event) {
    event.preventDefault();
    //
    const { displayName, email, password, confirmPassword } = user;
    if (password !== confirmPassword) {
      alert("password don't match");
      return;
    }
    //
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      //clear info
      setUser({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log("[error create user]---", error.message);
      alert(error.message);
    }
  }

  //handleChange
  function _handleChange(event) {
    const { value, name } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  }

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span className="sub-title">Sign up with your email and password</span>
      <form onSubmit={handleSubmit} className="form">
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          value={user.displayName}
          handleChange={_handleChange}
        />
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={user.email}
          handleChange={_handleChange}
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={user.password}
          handleChange={_handleChange}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={user.confirmPassword}
          handleChange={_handleChange}
        />
        <CustomButton type="submit">Sign up</CustomButton>
      </form>
    </div>
  );
};
export default SignUp;
