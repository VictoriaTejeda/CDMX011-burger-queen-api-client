/* eslint-disable react/prop-types */
import React from 'react'

export const Producto = (props) => {
    let {
        product
      } = props;
    return (
        <div>
            <h1>{product.name}</h1>
            <h3>${product.price}</h3>
        </div>
    )
}
