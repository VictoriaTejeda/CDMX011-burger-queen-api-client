/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Products } from "../waiter/Products";
import { helpHttp } from "../../helpers/helpHttp";
import { getAuth } from "firebase/auth";
import Swal from "sweetalert2";

export const Menu = (props) => {
  const auth = getAuth();
  const user = auth.currentUser;
  let { products, client } = props;
  let date = new Date();
  const [orderProducts, setOrderProducts] = useState([]);
  const [db, setDb] = useState([]);
  const [disabledBtn, setDisabledBtn] = useState(true);

  let api = helpHttp();
  let url = "http://localhost:5000/orders";

  const removeOrder = () => {
    setOrderProducts([]);
  };

  function refreshPage() {
    window.location.reload();
  }
  const createOrder = (data) => {
    Swal.fire({
      title: "Enviar comanda",
      text: "¿Estás seguro de enviar comanda a cocina?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "¡Enviar!",
      cancelButtonText: "Cancelar envío",
    }).then((result) => {
      if (result.isConfirmed) {
        let options = {
          body: data,
          headers: { "content-type": "application/json" },
        };

        api.post(url, options).then((res) => {
          if (!res.err) {
            setDb([...db, res]);
          } else {
            console.log(res);
          }
        });
        Swal.fire("Envio realizado con éxito");
        removeOrder();
        setDisabledBtn(true);
        refreshPage();
      }
    });
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
    setDisabledBtn(false);
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
      orderProducts.splice(0, 1);
    } else {
      setOrderProducts(
        orderProducts.map((p) =>
          p.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : p
        )
      );
    }
    console.log(orderProducts);
    if (orderProducts.length === 0) {
      setDisabledBtn(true);
    }
  };

  const itemsPrice = orderProducts.reduce(
    (a, c) => a + c.price * c.quantity,
    0
  );

  const order = {
    waiter: user.email,
    clientName: client,
    status: "pending",
    orderProducts,
    date: date.toLocaleString(),
    total: itemsPrice,
  };

 
  return (
    <div>
      <div className="menu-wrap">
        <Products product={products} getProducts={getProducts} />
        <section className="orden">
          <h2>Orden de: {client ? client : "Favor de ingresar un nombre"} </h2>
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
              disabled={disabledBtn}
              onClick={() => {
                createOrder(order);
              }}
            >
              Enviar pedido
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
