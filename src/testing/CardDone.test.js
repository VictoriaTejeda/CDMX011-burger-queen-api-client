/* eslint-disable no-undef */
import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from "@testing-library/react";
import { CardDone } from "../components/waiter/CardDone";
import { Data } from "./DataMock"

test('renders content', () => {
    const mockOrder=Data.orders;
    //const mockOrderFinish = jest.fn();
    const mockRefreshPage = jest.fn();
    const component = render(<CardDone product={mockOrder} orderFinish={mockOrder} reloadPage={mockRefreshPage}/>)

  component.debug()
  

})