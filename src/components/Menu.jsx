/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Items } from './Items';

export const Menu = (props) => {

    let { products } = props;

    const [orderProducts, setOrderProducts] = useState([]);

    const getProducts = (product) => {
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
            let cant = orderProd.quantity;
            let sum = cant * orderProd.price;
            orderProd.quantity = cant;
            orderProd.sum = sum;
            orderProducts.splice(index, 1);
            orderProducts.push(orderProd);
        }
        const newArray = orderProducts.map((obj) => obj);
        setOrderProducts(newArray);
    };
    const addOrderProduct = (orderProd) => {
        const index = orderProducts.findIndex((p) => p.id === orderProd.id);
        let cant = orderProd.quantity + 1;
        let sum = cant * orderProd.price;
        orderProd.quantity = cant;
        orderProd.sum = sum;
        orderProducts.splice(index, 1);
        orderProducts.push(orderProd);
        const newArray = orderProducts.map((obj) => obj);
        setOrderProducts(newArray);
    };

    const removeOrderProduct = (orderProd) => {
        const index = orderProducts.findIndex((p) => p.id === orderProd.id);
        let cant = orderProd.quantity - 1;
        if (cant === 0) {
            orderProducts.splice(index, 1);
        } else {
            let sum = cant * orderProd.price;
            orderProd.quantity = cant;
            orderProd.sum = sum;
            orderProducts.splice(index, 1);
            orderProducts.push(orderProd);
        }

        const newArray = orderProducts.map((obj) => obj);
        setOrderProducts(newArray);
    };

    return (
        <div>
            <h1>Producto/Costo  </h1>
            <div className="menu-wrap">
                <section>
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


