/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Items } from "./Items";
import { helpHttp } from "../helpers/helpHttp";
import { getAuth } from "firebase/auth";

export const Menu = (props) => {
  const auth = getAuth();
  const user = auth.currentUser;
  let { products, client } = props;
  let date = new Date();
  const [orderProducts, setOrderProducts] = useState([]);
  const [db, setDb] = useState([]);


  const order = {
    waiter: user.email,
    clientName: client,
    status: "pending",
    orderProducts,
    date: date.toLocaleString(),
  };

  let api = helpHttp();
  let url = "http://localhost:5000/orders";

  const createOrder = (data) => {
    console.log('data manda orden')
    console.log(data);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res)=>{
      console.log(res);
      if(!res.err){
        setDb([...db, res])
      } else{
        console.log(res);
      }
    })
  };

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

  const addOrderProduct = (OrderProduct) => {
    const productExist = orderProducts.find((p) => p.id === OrderProduct.id);
    if (productExist) {
      setOrderProducts(
        orderProducts.map((p) =>
          p.id === OrderProduct.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : p
        )
      );
    } else {
      setOrderProducts([...orderProducts, { ...OrderProduct, quantity: 1 }]);
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

  const itemsPrice = orderProducts.reduce(
    (a, c) => a + c.price * c.quantity,
    0
  );

  return (
    <div>
      <div className="menu-wrap">
        <section className="items">
          
          {products.map((product) => (
            <Items
              product={product}
              key={product.id}
              sendProducts={getProducts}
            ></Items>
          ))}
        </section>
        <section className="orden">
          <h2>Orden de: {client}</h2>
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
          <div className="total">
            Total: $ {itemsPrice}
            <button
              className="confirm"
              onClick={() => {
                console.log(order);
                createOrder(order)
              }}
            >
              Confirmar pedido
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
