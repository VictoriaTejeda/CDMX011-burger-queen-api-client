/* eslint-disable no-undef */
import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent  } from "@testing-library/react";
import { Items } from "../components/Items";
import { Data } from "./DataMock"

test('renders content', () => {
  console.log(Data)
  const mockProducts=Data.products;

  
  const component = render(mockProducts.map((product)=><Items product={product}
    key={product.id}
    />))

  component.debug()
  component.getByText("Café americano")
  component.findByText("$ 5")
  component.getByText("Jugo de Naranja")
  component.findByText("$ 7")
  component.getByText("Café con leche")
  component.findByText("$ 10")
  component.getByText("Hamburguesa doble")
  component.findByText("$ 15")
})

test('clicking the button Agregar', async () => {
  
  const mockProducts=Data.products;

  const mockGetProduct= jest.fn()
  const component = render(mockProducts.map((product)=><Items product={product}
    key={product.id}  sendProducts={mockGetProduct}
    />))

      const button=component.getAllByRole('button')
      button.forEach((x)=>fireEvent.click(x))

      expect(mockGetProduct).toHaveBeenCalledTimes(6)
})




