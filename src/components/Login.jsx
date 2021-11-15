import React from "react";
import { useState } from "react";
import { FormLogin } from "./FormLogin";
import { useNavigate } from "react-router";
import logo from "../assets/logo.png";
import "../Scss/Login.scss";
import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseconfig";

export const Login = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log (user);
      navigate("order");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage)  
      setTimeout(() => setError(''), 2000);
      console.log (errorCode,errorMessage );
      
    });
  };
  return (
    <>
      <section className="container">
        <div className="div-logo">
          <img src={logo} alt="logo-img" className="logo" />
        </div>
        <div>
        {error && <p className="error" >{error}</p>}
        </div>
        <div className="form-login">
          <FormLogin handleLogin={handleLogin} />
        </div>
      </section>
    </>
  );
};
