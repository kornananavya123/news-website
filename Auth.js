import { GoogleOAuthProvider,GoogleLogin } from '@react-oauth/google';
//import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useState } from 'react';
import User from "./User"

function Auth() {
    const [userData, setUserData] = useState("");

    if(userData) {
        window.localStorage.setItem("name",userData.name);
        window.localStorage.setItem("email",userData.email);
        window.localStorage.setItem("picture",userData.picture);

        return <User info={userData}/>
    }

    let name = window.localStorage.getItem("name");
    let email = window.localStorage.getItem("email");
    let picture = window.localStorage.getItem("picture");
   
    // if you have name,email,picture in localstorage.
    //it means you are already logged in.

    if (name && email && picture) {
       if (userData) {
    }
    setUserData({name:name, email: email, picture: picture});
    // when you have  key,value is same then we write name,email,picture (name:name )same
    //setUserData({name,email,picture});  // good way
  }

    return(
    <>
      <h1>Logging With Google</h1>
    <GoogleOAuthProvider clientId="813797240291-6s9r59kg68tol17vs963hihqr331g173.apps.googleusercontent.com">
    <GoogleLogin
     onSuccess= {(credentialResponse) => {
      let token = credentialResponse.credential;
      var decoded = jwt_decode(token);
     console.log( decoded);
     setUserData(decoded);
        }}

     onError={() => {
      console.log('Login Failed');
     }}
      />
    </GoogleOAuthProvider>
    </>
    );
}

export default Auth;