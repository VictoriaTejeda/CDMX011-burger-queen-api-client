import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { logOut, auth } from "../firebaseconfig";
import { useNavigate } from "react-router";
import { Menu } from "./Menu";
import "../Scss/Home.scss";
import { helpHttp } from "../helpers/helpHttp";

export const Home = () => {
  const [setError] = useState("");
  const [ menu, setmenu ] = useState(1)
  const navigate = useNavigate();

  const [dbData, setDbData] = useState([]);
  //const [dataToEdit, setDataToEdit] = useState(null);
  let api = helpHttp();
  let url = "http://localhost:5000/products";

  useEffect(() => {
    api.get(url).then((res) => {
      console.log(res);
      if (!res.err) {
        setDbData(res);
      } else {
        setDbData(null);
      }
    });
  }, []);

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

  //let productosFiltrados = dbData.filter((p) => p.type == 2)

  const filtrarProductos = () => {
   return dbData.filter((p) => p.type == menu);

  };

  return (
    <>
      {auth ? (
        <div>
          <h1>soy Home chavas</h1>
          <button
            onClick={() => {
              handleSignOut(auth);
            }}
          >
            Cerrar sesión
          </button>
        </div>
      ) : (
        navigate("/")
      )}
      <div>
        <button
          onClick={() => {
           setmenu(1);
          }}
        >desayuno</button>
         <button
          onClick={() => {
           setmenu(2);
          }}
        >Comida</button>
      </div>
      <div>
      {dbData && <Menu products={filtrarProductos()} />}
      </div>
    </>
  );
};
