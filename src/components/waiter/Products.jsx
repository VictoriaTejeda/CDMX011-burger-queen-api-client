/* eslint-disable react/prop-types */
import React from "react";
import { Items } from "./Items";

export const Products = (props) => {
  let { product, getProducts } = props;

  return (
    <>
      <section className="items">
        {product.map((p) => (
          <Items product={p} key={p.id} sendProducts={getProducts}></Items>
        ))}
      </section>
      <div></div>
    </>
  );
};
