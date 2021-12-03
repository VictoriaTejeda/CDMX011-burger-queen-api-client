import React, { useState, useEffect } from "react";
import { helpHttp } from "../../helpers/helpHttp";
import { Command } from "./Command";
import { logOut, auth } from "../../firebaseconfig";
import logo from "../../assets/logo.png";
import cerrar from "../../assets/cerrar.png";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import "../../Scss/kitchen.scss";

export const KitchenPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [setError] = useState("");
  let api = helpHttp();
  let url = "http://localhost:5000/orders";

  useEffect(() => {
    api.get(url).then((res) => {
      console.log(res);
      if (!res.err) {
        setData(res);
      } else {
        setData(null);
      }
    });
  }, []);
  console.log(data);

  data.sort(function (a, b) {
    return b.id - a.id;
  });

  const handleSignOut = () => {
    try {
      Swal.fire({
        title: "¿Desea Cerrar sesión?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#c93c00",
        cancelButtonColor: "#e7aa2b",
        confirmButtonText: "Si",
        cancelButtonText: "No",
        width: "50vh",
        heightAuto: "true",
        position: "center",
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
  const filterStatus = () => {
    return data.filter((p) => p.status == "pending");
  };
  return (
    <>
      <div className="wrap-logo">
        <img src={logo} alt="logo-img" className="logo-order" />
        {auth ? (
          <div>
            <img
              src={cerrar}
              alt="exit"
              className="cerrar"
              onClick={() => {
                handleSignOut(auth);
              }}
            />
          </div>
        ) : (
          navigate("/")
        )}
      </div>
      <div>
        <h1 className="welcome"> Bienvenido a Cocina </h1>
        <section className="wrap-command">
          <div className="render-menu">
            {data && <Command products={filterStatus()} />}
          </div>
        </section>
      </div>
    </>
  );
};
