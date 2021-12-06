/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { helpHttp } from "../../helpers/helpHttp";
import Swal from "sweetalert2";

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
    const endDate = new Date();
    const startDate = new Date(data.date);
    const result = endDate - startDate;
    const minutes = Math.round(((result % 86400000) % 3600000) / 60000);
    Swal.fire({
      position: "center",
      icon: "success",
      title: `El tiempo de preparación fue:${minutes} minutos `,
      showConfirmButton: false,
      timer: 3000,
    });
  }
  function refreshPage() {
    window.location.reload();
  }

  return (
    <>
      <section className="wrap-command">
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
                  refreshPage();
                }}
              >
                Enviar a Mesa
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
