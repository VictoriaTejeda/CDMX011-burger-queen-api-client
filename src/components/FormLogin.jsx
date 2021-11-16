import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
export const FormLogin = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPass(e.target.value);

  return (
    <>
      <form> 
      <div className="radio-btn">
        <input type="radio" className="radio" value="Admin" name="profile" />
        <label>Admin</label>
        <input type="radio" className="radio" value="Waiter" name="profile" />
        <label>Mesero</label>
        <input type="radio" className="radio" value="kitchen" name="profile" />
        <label>Cocina</label>
      </div>
      <h3>Nombre:</h3>
      <input type="text" required />
      <h3>Correo Electrónico:</h3>
      <input
        type="email"
        placeholder="ejemplo@correo.com"
        onChange={handleEmail}
        required
      ></input>
      <h3>Password:</h3>
      <input
        type="password"
        placeholder="******"
        onChange={handlePassword}
        required
      />
      </form>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleLogin(email, pass);
        }}
      >
        Entrar
      </button>
    </>
  );
};
