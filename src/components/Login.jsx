import React, { useEffect } from "react";
import { useState } from "react";
import { FormLogin } from "./FormLogin";
import { useNavigate } from "react-router";
import logo from "../assets/logo.png";
import "../Scss/Login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";

export const Login = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("waiter");
      } else {
        navigate("/");
      }
    });
  }, []);

  const handleLogin = (email, password) => {

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('waiter');
        // ...
      })
      .catch(() => {
        setError('Contraseña y/o correo inválidos, vuelve a intentar');
        setTimeout(() => setError(''), 2500);

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