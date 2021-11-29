/* eslint-disable react/prop-types */
import React from 'react'

export const Items = (props) => {
    let {
        product,
        sendProducts
    } = props;

    const addProduct = (item) => {
        sendProducts(item)
    }
    return (
        <div className="card">
            <p>{product.name}</p>
            <p className="price">$ {product.price}</p>
            <p><button onClick={() => {
                addProduct(product);
            }}>Agregar</button></p>
        </div>
    )
}
