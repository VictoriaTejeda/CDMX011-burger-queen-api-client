import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { auth } from "../../firebaseconfig";
import { helpHttp } from "../../helpers/helpHttp";
import logo from "../../assets/logo.png"
import menu from "../../assets/menu.png"
import "../../Scss/OrdenDone.scss"

export const OrderDone = (isLoggedIn) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const user = auth.currentUser

const waiterEmail=()=>{
if (user) {
    isLoggedIn
    const email= user.email;
   setTimeout(() => email, 1000);
 return email;
  } else {
    console.log('sin usuario')
  }  
}
console.log(waiterEmail());

  

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

   
  const products = data.filter((p) => p.status  == "listo" && p.waiter == waiterEmail());
 

  return (

    <>
   <div>
      <img src={logo} alt="logo-img" className="logo-order" />
      <div className= "icon-menu">
          <img src={menu} alt="menu" className="return-menu" onClick ={() => {
              navigate("/waiter");
            }} />
          </div>
          <h3>hola {waiterEmail()}</h3>
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
    
    </>
    
  );
};
