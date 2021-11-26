import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
export const FormLogin = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPass(e.target.value);

  return (
    <>
      <form >
        <h3>Correo Electrónico:</h3>
        <input
          type="email"
          placeholder="ejemplo@burgerqueen.com" pattern=".+@burgerqueen\.com" size="30" 
          onChange={handleEmail}
          required
        />
        <h3>Password:</h3>
        <input
          type="password"
          placeholder="******"
          onChange={handlePassword}
          size="6" pattern="[0-9]{6}"
          required
        />
        <br />
      </form>
      <button onClick={() => {handleLogin(email, pass); }}> Entrar </button>

    </>
  );
};
