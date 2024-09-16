import React, { useState } from "react";
import Swal from "sweetalert2";
import { logOut, auth } from "../firebaseconfig";
import { useNavigate } from "react-router";
import { Menu } from "./Menu";
import { Command } from "./Command";
import "../Scss/Order.scss";
export const Order = () => {
  const [setError] = useState("");
  const navigate = useNavigate();
  
  const handleSignOut = () => {
    try {
      Swal.fire({
        title: "¿Desea Cerrar sesión?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#385a64",
        cancelButtonColor: "#e44d57",
        confirmButtonText: "Si",
        cancelButtonText: "No",
        width: "50vh",
        heightAuto: "true",
        position: "top-right",
      }).then((result) => {
        if (result.isConfirmed) {
          logOut(auth);
          navigate("/");
        }
      });
    } catch (error) {
      setError("Error del servidor");
      console.log(error);
    }
  };
  

  return (
    <>{
      auth ? 
      <div>
        <h1>soy Order chavas</h1>
        <button
          onClick={() => {
            handleSignOut(auth);}}>
          Cerrar sesión
        </button>
      </div> : navigate("/")
    }
    <div>
      <Menu/>
      <Command/>
    </div>
    </>

  );
};
