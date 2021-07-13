import React, { useState, useEffect } from "react";
import "./SignIn.Styles.scss";
import FormInput from "../form-input/Form-Input.Component";
import CustomButton from "../custom-button/Custom-Button.Component";

const SignIn = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //_onSubmit
  function _onSubmit(event) {
    event.preventDefault();
    console.log(user);
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

      <form className="form" onSubmit={_onSubmit}>
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

        <CustomButton type="submit" value="Submit Form">
          Sign in
        </CustomButton>
      </form>
    </div>
  );
};

export default SignIn;
