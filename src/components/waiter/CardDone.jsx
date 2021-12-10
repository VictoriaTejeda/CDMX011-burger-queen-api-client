/* eslint-disable react/prop-types */
import React from "react";

export const CardDone = (props) => {
  let { product, orderFinish} = props;

  return (
    <div>
      <section className="card-done">
        {product.map((op) => (
          <div key={op.id} className="card-container">
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
                  orderFinish(op);
                  
                }}
              >
                Almacenar comanda
              </button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
