import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { helpHttp } from "../../helpers/helpHttp";
import logo from "../../assets/logo.png"
import menu from "../../assets/menu.png"
import "../../Scss/OrdenDone.scss"



export const OrderDone = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
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

   
  const products = data.filter((p) => p.status  == "listo");
 

  return (
    <div>
    <img src={logo} alt="logo-img" className="logo-order" />
    <div className= "icon-menu">
        <img src={menu} alt="menu" className="return-menu" onClick ={() => {
            navigate("/waiter");
          }} />
        </div>
        <section className = "card-done">
        {products.map((op) => (
          <div key={op.id}>
            <div className="card-cocina">
              <p>{op.clientName}</p>
              <div>
                {" "}
                {op.orderProducts.map((p) => (
                  <ul key={p.id}>
                    <li>
                      {p.quantity} {p.name}
                    </li>
                  </ul>
                ))}
              </div>
              <p className="status">{op.status}</p>
              <button
                onClick={() => {
                 console.log("listo");
                }}
              >
                Terminar preparación
              </button>
            </div>
          </div>
        ))}
        </section>
    </div>
  );
};
