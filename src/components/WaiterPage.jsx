import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { logOut, auth } from "../firebaseconfig";
import { useNavigate } from "react-router";
import { Menu } from "./Menu";
import "../Scss/Order.scss";
import { helpHttp } from "../helpers/helpHttp";
import logo from "../assets/logo.png";
import cerrar from "../assets/cerrar.png";

export const WaiterPage = () => {
  const user = auth.currentUser;
  const [setError] = useState("");
  const [menu, setMenu] = useState("desayuno");
  const [client, setClient] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  let api = helpHttp();
  let url = "http://localhost:5000/products";

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

  const filterProducts = () => {
    return data.filter((p) => p.type == menu);
  };

  return (
    <>
      <div className="wrap-logo">
        <img src={logo} alt="logo-img" className="logo-order" />
        <div>
          <h3 className="name">Nombre del cliente:</h3>
          <input
            className="name-input"
            type="text"
            placeholder="Nombre completo"
            pattern="[a-z]{1,15}"
            onBlur={(event) => setClient(event.target.value)}
            required
          />
        </div>
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
        <button
          className="btn-menu"
          onClick={() => {
            setMenu("desayuno");
          }}
        >
          Desayuno
        </button>
        <button
          className="btn-menu"
          onClick={() => {
            setMenu("comida");
          }}
        >
          Comida
        </button>
      </div>
      <div className="render-menu">
        {data && <Menu products={filterProducts()} client={client} />}
      </div>
      <h3 className="waiter">Usuario: {user.email}</h3>
    </>
  );
};
