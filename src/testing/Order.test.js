/* eslint-disable no-undef */
import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent  } from "@testing-library/react";
import { Items } from "../components/waiter/Items";
import { Products } from "../components/waiter/Products";
import { Data } from "./DataMock"

test('renders content', () => {
  console.log(Data)
  const mockProducts=Data.products;
  const mockGetProduct= jest.fn()
  
  const component = render(<Products product={mockProducts} getProducts={mockGetProduct} />)

  //component.debug()
  component.findByText("Café americano")
  component.findByText("$ 5")
  component.findByText("Jugo de Naranja")
  component.findByText("$ 7")
  component.findByText("Café con leche")
  component.findByText("$ 10")
  component.findByText("Hamburguesa doble")
  component.findByText("$ 15")
})

test('clicking the button Agregar',() => {
  
  const doomyData={
    id:"1",
    name:"Café americano",
    price:"5",
    type:"desayuno"
  }

  const mockGetProduct= jest.fn()

  const component = render(<Items product={doomyData} sendProducts={mockGetProduct}></Items>)

    component.debug()
  const button=component.getByText('Agregar')
  fireEvent.click(button)
  expect(mockGetProduct).toHaveBeenCalledTimes(1)
  expect(mockGetProduct).toHaveBeenCalledWith(doomyData)
})




