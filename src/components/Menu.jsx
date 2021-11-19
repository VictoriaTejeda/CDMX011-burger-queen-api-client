/* eslint-disable react/prop-types */
import React from 'react'
import { Producto } from './Producto';

export const Menu = (props) => {
    let {
        products
      } = props;

    
    return (
        <div>
            <h1>Todos los Productos</h1>
            <section>
            {products.map(product => <Producto product={product} key={product.id}></Producto>)}
            </section>
        </div>
    );
}

