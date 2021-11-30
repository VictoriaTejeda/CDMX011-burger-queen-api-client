/* eslint-disable react/prop-types */
import React from "react";

export const Command = (props) => {
  let { products } = props;
  console.log("🚀", products);

  const addProduct = (item) => {
    console.log(item);
  };

  console.log(products[0]);

  return (
    <div>
      {products.map((op) => (
        <div className="comanda" key={op.id}>
          <p>Mesero:{op.waiter}</p>
          <p>Cliente: {op.clientName}</p>
          <p>Status del pedido:{op.status}</p>
          <div>
            {op.orderProducts.map((p) => (
              <div key={p.id}>
                <p>Cantidad:{p.quantity}</p>
                <p>Producto:{p.name}</p>
              </div>
            ))}
          </div>
          {/*<p>Orden:{op.orderProducts}</p>*/}
          <p>Fecha:{op.date}</p>
          <button
            onClick={() => {
              addProduct(products);
            }}
          >
            Finalizar Pedido
          </button>
        </div>
      ))}
    </div>
  );
};
