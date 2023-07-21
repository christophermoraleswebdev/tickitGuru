import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const SignInPage = () => {
  const handleSignInSuccess = (credentialResponse) => {
    console.log("Sign-in success:", credentialResponse);
  };

  const handleSignInFailure = () => {
    console.log("Sign-in failure");
  };

  return (
    <div>
      <h1>Sign In</h1>
      <GoogleOAuthProvider clientId="476385498603-n1og57fjqar1omdjkuunj8jedccf00ja.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={handleSignInSuccess}
          onError={handleSignInFailure}
        />
      </GoogleOAuthProvider>
    </div>
  );
};

export default SignInPage;
