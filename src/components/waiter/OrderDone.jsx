import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { auth } from "../../firebaseconfig";
import { helpHttp } from "../../helpers/helpHttp";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import "../../Scss/OrdenDone.scss";
import { CardDone } from "./CardDone";

export const OrderDone = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const user = auth.currentUser;
  const [db, setDb] = useState([]);

  let api = helpHttp();
  let url = "http://localhost:5000/orders";

  useEffect(() => {
    api.get(url).then((res) => {
      if (!res.err) {
        setData(res);
      } else {
        setData(null);
      }
    });
  }, []);

  const waiterEmail = () => {
    if (user) {
      const email = user.email;
      setTimeout(() => email, 1000);
      return email;
    } else {
      console.log("sin usuario");
    }
  };

  const products = data.filter(
    (p) => p.status == "listo" && p.waiter == waiterEmail()
  );

  const updateOrderFinish = (products) => {
    console.log("entre a updateOrderFinish");
    let endpoint = `${url}/${products.id}`;

    let options = {
      body: { status: "entregado" },
      headers: { "content-type": "application/json" },
    };

    api.patch(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = db.map((el) => (el.id === products.id ? products : el));
        console.log("🚀:O ", newData);
        setDb(newData);
      } else {
        console.log(res);
        //setError(res)
      }
    });
  };

  //function refreshPage() {
  //  window.location.reload();
  //}

  return (
    <>
      <div>
        <img src={logo} alt="logo-img" className="logo-order" />
        <div className="icon-menu">
          <img
            src={menu}
            alt="menu"
            className="return-menu"
            onClick={() => {
              navigate("/waiter");
            }}
          />
        </div>
        <h3>hola {waiterEmail()}</h3>
        <section className="card-done">
          {products.map((op) => (
            <div key={op.id}>
              <CardDone
                product={products}
                orderFinish={updateOrderFinish}
                //reloadPage={refreshPage}
              />
            </div>
          ))}
        </section>
      </div>
    </>
  );
};
