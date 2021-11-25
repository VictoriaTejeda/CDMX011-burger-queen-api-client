/* eslint-disable no-undef */
import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from "@testing-library/react";
import { Items } from "../components/Items";

test('renders content', () => {
  const products ={
    contentName: "name",
    contentPrice: "price"
  }

  const component = render(<Items products={products}/>) 

  component.debug()
})



