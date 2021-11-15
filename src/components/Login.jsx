import React from "react";
import { useState } from "react";
import { FormLogin } from "./FormLogin";
import { singIn } from "../firebaseconfig";
import { useNavigate } from "react-router";
import logo from "../assets/logo.png";
import "../Scss/Login.scss";

export const Login = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      singIn(email, password);
      navigate("order");
    } catch (error) {
      setError("Error en las credenciales");
      setTimeout(() => setError(""), 3000);
    }
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
