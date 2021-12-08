/* eslint-disable no-undef */
import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from "@testing-library/react";
import { CardDone } from "../components/waiter/CardDone";
import { Data } from "./DataMock"

test('renders content', () => {
    const mockOrder=Data.orders;

    const  mockDataFilter= mockOrder.filter(
      (p) => p.status == "listo");
    jest.mock()
    //const mockOrderFinish = jest.fn();
    const mockRefreshPage = jest.fn();
    const component = render(<CardDone product={mockDataFilter} orderFinish={mockOrder} reloadPage={mockRefreshPage}/>)
    

  component.debug()
  component.getAllByText("Marco")
  component.getAllByText("1 Hamburguesa simple")
  component.getAllByText("entregado")
})