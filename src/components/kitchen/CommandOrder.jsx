/* eslint-disable react/prop-types */
import React from "react";
import Swal from "sweetalert2";


export const CommandOrder = (props) => {
  let { product, updateOrder } = props;

  function getMinutesBetweenDates(data) {
    const endDate = new Date();
    console.log(endDate);
    const startDate = new Date (data.date);
    console.log(startDate)
    const result = endDate - startDate;
    console.log(result)
    const minutes = Math.round(((result % 86400000) % 3600000) / 60000);
    Swal.fire({
      position: "center",
      icon: "success",
      title: `El tiempo de preparación fue:${minutes} minutos `,
      showConfirmButton: false,
      timer: 3000,
    });
  }
 
  const date= new Date (product.date).toLocaleString();


  return (
    <div className="card-cocina">
    <p>{product.clientName}</p>
    <div>
      {" "}
      {product.orderProducts.map((p) => (
        <ul key={p.id}>
          <li>
            {p.quantity} {p.name}
          </li>
        </ul>
      ))}
    </div>
    <p className="status">{product.status}</p>
    <p>{date}</p>
    <p className="waiterMail">{product.waiter}</p>
    <button
      onClick={() => {
        getMinutesBetweenDates(product);
      }}
    >
      Terminar preparación
    </button>
    <button
      onClick={() => {
        updateOrder(product);
        
      }}
    >
      Enviar a Mesa
    </button>
  </div>
  );
};