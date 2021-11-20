/* eslint-disable react/prop-types */
import React from 'react'

export const Producto = (props) => {
    let {
        product,
        sendProductos
      } = props;

    const agregarProducto = (producto) => {
        console.log("aprieto boton de agregar Producto")
        sendProductos(producto)
    } 

    return (
        <div className="card">
            <h1>{product.name}</h1>
            <p className="price">${product.price}</p>
            <p><button  onClick={() => {
              agregarProducto(product);
            }}>Agregar</button></p>
        </div>
    )
}
