import React, { useState } from "react";
import "./Sign-Up.Styles.scss";
import FormInput from "../form-input/Form-Input.Component";
import CustomButton from "../custom-button/Custom-Button.Component";

const SignUp = () => {
  const [user, setUser] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //_onSubmit
  function _onSubmit(event) {
    event.preventDefault();
    console.log(user);
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
      <form onSubmit={_onSubmit} className="form">
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
