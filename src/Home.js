import "./App.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Login from "./Login";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setIsLoggedIn(false);
        navigate("/");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        console.log("uid", uid);
        console.log(user.email);
        setIsLoggedIn(true);
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
      }
    });

    const intervalID = setInterval(() => {
      // console.log("yes")
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div>
      <img
        src="linguatour-high-resolution-color-logo.jpeg"
        height="300"
        alt="Logo"
      ></img>

      {isLoggedIn ? (
        <>
          {" "}
          <button onClick={handleLogout}>Logout</button>{" "}
        </>
      ) : (
        <>
          {" "}
          <p>Log in to get learning</p> <Login></Login>
          <p />
          Or have a play around<br></br>
          <button>Test out Linguatour</button>{" "}
        </>
      )}
    </div>
  );
};

export default Home;
