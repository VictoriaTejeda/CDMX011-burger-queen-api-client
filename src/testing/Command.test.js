/* eslint-disable no-undef */
import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render , fireEvent  } from "@testing-library/react";
import { Command } from "../components/kitchen/Command";
import { Data } from "./DataMock"

test('renders content', () => {
    const mockOrder=Data.orders;
    const component = render(<Command products={mockOrder} />)

  component.debug()
  component.findByText("Renato")
  component.findByText("1 Jugo de Naranja")
  component.findByText("1 Café con leche")
  component.findByText("pending")
  component.findByText("armando_cocina@burgerqueen.com")

})

test('clicking the buttons',() => {
const mockOrders=Data.orders;
const component = render(mockOrders.map((op)=><Command products={mockOrders } key={op.id} />))

    component.debug()
  
    const button=component.getAllByRole('button')
   button.forEach((x)=>fireEvent.click(x))
  
})


    