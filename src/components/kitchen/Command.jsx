/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { helpHttp } from "../../helpers/helpHttp";

export const Command = (props) => {
  let { products } = props;
  
  const [db, setDb] = useState([]);
  
  let api = helpHttp();
  let url = "http://localhost:5000/orders";

  const updateOrder = (data) => {
    let endpoint = `${url}/${data.id}`;
    console.log(endpoint);

    console.log("data manda orden");
    console.log(data);

    let options = {
      body: { status:"listo" },
      headers: { "content-type": "application/json" },
    };

    
    api.patch(endpoint, options).then((res) => {
   
    
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        console.log("entre al if");
        setDb(newData);
      } else {
        console.log(res);
        //setError(res)
      }
    });
  };
  return (
    <>
      <h1> comanda</h1>
      <section>
        {products.map((op) => (
          <div className="card" key={op.id}>
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
            <p>{op.status}</p>
            <p>{op.date}</p>
            <p>{op.waiter}</p>
            <button
              onClick={() => {
                updateOrder(op);
              }}
            >
              Finalizar Pedido
            </button>
          </div>
        ))}
      </section>
    </>
  );
};
