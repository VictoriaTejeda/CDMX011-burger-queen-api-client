/* eslint-disable no-undef */
import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from "@testing-library/react";
import { Items } from "../components/Items";


test('renders content', () => {
  const MockData= [
    {
        "id": 1,
        "name": "Café americano",
        "price": 5,
        "type": "desayuno"
      },
      {
        "id": 2,
        "name": "Jugo de Naranja",
        "price": 7,
        "type": "desayuno"
      },
      {
        "id": 3,
        "name": "Café con leche",
        "price": 10,
        "type": "desayuno"
      },
      {
        "id": 5,
        "name": "Hamburguesa simple",
        "price": 10,
        "type": "comida"
      },
    ]
 
  const products ={
    contentName: MockData.name,
    contentPrice: MockData.price
  }

  const component = render(<Items products={products}/>) 

  component.debug()
})



