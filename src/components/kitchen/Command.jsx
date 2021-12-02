/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { helpHttp } from "../../helpers/helpHttp";
export const Command = (props) => {
  let { products } = props;
  console.log("🚀", products);
  const [db, setDb] = useState([]);
  //const [data, setData] = useState([]);

  let api = helpHttp();
  let url = "http://localhost:5000/orders";

  const updateOrder = (data) => {
    let endpoint = `${url}/${data.id}`;
    console.log(endpoint);

    let options = {
      body: { status: "listo" },
      headers: { "content-type": "application/json" },
    };
    console.log(options);

    api.patch(endpoint, options).then((res) => {
      console.log(res);
      console.log(options);
      if (!res.err) {
        console.log("entre al if");
        let newData = db.map((el) => (el.id === data.id ? data : el));
        console.log("🚀:O ", newData);
        setDb(newData);
      } else {
        console.log(res);
        //setError(res)
      }
    });
  };

  function getMinutesBetweenDates(data) {
    let endDate = new Date();
    let llegada= new Date(data.date);
    console.log(llegada)
    let result=  Math.abs(endDate-llegada);
    var minutes = Math.floor((result/1000)/60);
    console.log(minutes)
}


  return (
    <>
      <section className='wrap-command' >
        {products.map((op) => (
          <div className="card-cocina" key={op.id}>
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
            <p>{op.date}</p>
            <p className="waiterMail">{op.waiter}</p>
            <button
              onClick={() => {
                getMinutesBetweenDates(op);
              }}
            >
              Terminar preparación
            </button>
            <button
              onClick={() => {
                updateOrder(op);
              }}
            >
              Enviar a Mesa
            </button>
          </div>
        ))}
      </section>
    </>
  );
};
