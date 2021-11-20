/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Producto } from "./Producto";
import "../Scss/Menu.scss";

export const Menu = (props) => {
  let { products } = props;

  const [lProducts, setlProducts] = useState([]);

  const getProductos = (product) => {
    lProducts.push(product);
    console.log("Lista de Productos:");
    console.log(lProducts);
    const newArray = lProducts.map((obj) => obj);
    setlProducts(newArray);
  };

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    document.title = `${lProducts}`;
  });

  return (
    <div>
      <h1>Todos los Productos</h1>
      <div className="menu-wrap">
        <section>
          {products.map((product) => (
            <Producto
              product={product}
              key={product.id}
              sendProductos={getProductos}
            ></Producto>
          ))}
        </section>
        <section className="orden">
          <h2>Ordenes</h2>
          <div>
            {lProducts.map((product) => (
              <div className="comanda" key={product.id}>
                <div>cantidad</div>
                <div>{product.name}</div>
                <div>{product.price}</div>
                <div>total</div>
                <div>
                  <button>+</button>
                  <button>-</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
