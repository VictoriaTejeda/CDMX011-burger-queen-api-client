/* eslint-disable react/prop-types */
import React, { useState} from "react";
import { Producto } from "./Producto";
import "../Scss/Menu.scss";

export const Menu = (props) => {
  let { products } = props;

  const [orderProducts, setorderProducts] = useState([]);

  const getProductos = (product) => {
    if (orderProducts.find((p) => p.id === product.id) === undefined) {
      let orderProd = {
        id: product.id,
        quantity: 1,
        price: product.price,
        name: product.name,
        sum: product.price,
      };
      orderProducts.push(orderProd);
    } else {
      let orderProd = orderProducts.find((p) => p.id === product.id);
      const index = orderProducts.findIndex((p) => p.id === orderProd.id);
      let cantidad = orderProd.quantity;
      let sum = cantidad * orderProd.price;
      orderProd.quantity = cantidad;
      orderProd.sum = sum;
      orderProducts.splice(index, 1);
      orderProducts.push(orderProd);
    }
    const newArray = orderProducts.map((obj) => obj);
    setorderProducts(newArray);
  };

  const addOrderProduct = (orderProd) => {
    const index = orderProducts.findIndex((p) => p.id === orderProd.id);
    let cantidad = orderProd.quantity + 1;
    let sum = cantidad * orderProd.price;
    orderProd.quantity = cantidad;
    orderProd.sum = sum;
    orderProducts.splice(index, 1);
    orderProducts.push(orderProd);
    const newArray = orderProducts.map((obj) => obj);
    setorderProducts(newArray);
  };

  const removeOrderProduct = (orderProd) => {
    const index = orderProducts.findIndex((p) => p.id === orderProd.id);
    let cantidad = orderProd.quantity - 1;
    if (cantidad === 0) {
      orderProducts.splice(index, 1);
    } else {
      let sum = cantidad * orderProd.price;
      orderProd.quantity = cantidad;
      orderProd.sum = sum;
      orderProducts.splice(index, 1);
      orderProducts.push(orderProd);
    }

    const newArray = orderProducts.map((obj) => obj);
    setorderProducts(newArray);
  };
  //useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
  //  document.title = `${orderProducts}`;
  //});

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
            {orderProducts.map((op) => (
              <div className="comanda" key={op.id}>
                <div>{op.quantity}</div>
                <div>{op.name}</div>
                <div>{op.price}</div>
                <div>{op.sum}</div>
                <div>
                  <button
                    onClick={() => {
                      addOrderProduct(op);
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      removeOrderProduct(op);
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
