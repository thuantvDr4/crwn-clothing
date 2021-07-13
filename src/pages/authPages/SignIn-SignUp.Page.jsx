import React from "react";
import "./SignIn-SignUp.Styles.scss";
import SignInForm from "../../libs/components/sign-in/SignIn.Component";
import SignUpForm from "../../libs/components/sign-up/Sign-Up.Component";

const SignInAndSignUp = () => {
  return (
    <div className="signIn-signUp">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default SignInAndSignUp;
