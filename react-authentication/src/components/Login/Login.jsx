/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";

function Login() {
  const auth = getAuth(app);
  //   console.log(app);
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState({});

  const handleGoogleSignIn = () => {
    // console.log("google login in button clicked");
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        // console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error: ", error.message);
      });
  };

  const handleGoogleSignOut = () => {
    // console.log("signed out confirmed");
    signOut(auth).then((result) => {
      console.log(result);
      setUser(null);
    });
  };

  return (
    <>
      <div className="p-24 rounded bg-yellow-100 mx-44 my-16">
        {user ? (
          <button
            onClick={handleGoogleSignOut}
            className="w-full m-6 p-6 font-bold bg-green-500 text-white"
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={handleGoogleSignIn}
            className="w-full m-6 p-6 font-bold bg-yellow-500 text-white"
          >
            Google Login
          </button>
        )}

        {user && (
          <div className="p-6 bg-yellow-200 m-4">
            <h1>User: {user.displaName}</h1>
            <p>Email: {user.email}</p>
            <img src={user.photoURL} alt="" />
          </div>
        )}
      </div>
    </>
  );
}

export default Login;
