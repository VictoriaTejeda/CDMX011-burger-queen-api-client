/* eslint-disable react/prop-types */
import React from "react";

export const Command = (props) => {
  let { products } = props;
  console.log("🚀", products);

  console.log(products[0]);
  console.log(products.map((p) => p.orderProducts.map((p)=> p.quantity)));

  return (
    <>
      <h1> comanda</h1>
      <section>
          { products.map((op)=>(
            <div className="card" key={op.id}> 
            <p>{op.clientName}</p>
            <div > {op.orderProducts.map((p)=>(
                <ul key={p.id}>
                    <li>{p.quantity} {p.name}</li>
                </ul>
            ))}</div>
            <p>{op.status}</p>
            <p>{op.date}</p>
            <p>{op.waiter}</p>
            </div>
          ))}
      </section>
    </>
  );
};
