/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Items } from "./Items";

export const Menu = (props) => {
  let { products } = props;

  const [orderProducts, setOrderProducts] = useState([]);

  // const order = {
  //   clientName,
  //   status: 'pending',
  //   order: {
  //     items: orderProducts,
  //     date: today.toLocaleDateString(),
  //     time: time.toLocaleTimeString()
  //   }
  // };


  const getProducts = (product) => {
    const productExist = orderProducts.find((p) => p.id === product.id);
    if (productExist) {
      setOrderProducts(
        orderProducts.map((p) =>
          p.id === product.id
            ? { ...productExist, quantity: productExist.quantity }
            : p
        )
      );
    } else {
      setOrderProducts([...orderProducts, { ...product, quantity: 1 }]);
    }
  };

  const addOrderProduct = (product) => {
    const productExist = orderProducts.find((p) => p.id === product.id);
    if (productExist) {
      setOrderProducts(
        orderProducts.map((p) =>
          p.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : p
        )
      );
    } else {
      setOrderProducts([...orderProducts, { ...product, quantity: 1 }]);
    }
  };

  const removeOrderProduct = (product) => {
    const productExist = orderProducts.find((p) => p.id === product.id);
    if (productExist.quantity === 1) {
      setOrderProducts(orderProducts.filter((p) => p.id !== product.id));
    } else {
      setOrderProducts(
        orderProducts.map((p) =>
          p.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : p
        )
      );
    }
  };

  const itemsPrice = orderProducts.reduce((a, c) => a + c.price * c.quantity, 0);
  
  
  return (
    <div>
      <div className="menu-wrap">
        <section className="items">
          <h1 className="menu-title">Menú</h1>
          {products.map((product) => (
            <Items
              product={product}
              key={product.id}
              sendProducts={getProducts}
            ></Items>
          ))}
        </section>
        <section className="orden">
          <h2>Ordenes</h2>
          <div>
            {orderProducts.map((op) => (
              <div className="comanda" key={op.id}>
                <p>{op.quantity}</p>
                <p>{op.name}</p>
                <p>{op.price}</p>
                <p>{op.sum}</p>
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
          <div className="total">Total: $ {itemsPrice}
          <button className="confirm">confirmarPedido</button>
          </div>
        </section>
      </div>
    </div>
  );
};
