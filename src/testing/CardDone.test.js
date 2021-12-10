/* eslint-disable no-undef */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import { CardDone } from "../components/waiter/CardDone";
import { Data } from "./DataMock";

afterEach(cleanup);

test("renders content", () => {
  const mockOrder = Data.orders;

  const mockDataFilter = mockOrder.filter((p) => p.status == "entregado");
  jest.mock();
  //const mockOrderFinish = jest.fn();
  const component = render(
    <CardDone product={mockDataFilter} orderFinish={mockOrder} />
  );

  jest.useFakeTimers();

  //component.debug()
  component.getAllByText("Marco");
  component.getAllByText("1 Hamburguesa simple");
  component.getAllByText("entregado");
});

test("clicking the buttons", async() => {
  const mockOrder = Data.orders;

  const mockDataFilter = mockOrder.filter((p) => p.status == "entregado");
  jest.mock();
  const mockOrderFinish = jest.fn();

  const component = render(
    <CardDone product={mockDataFilter} orderFinish={mockOrderFinish} />
  );
  //component.debug()

  const button = component.getByText("Almacenar comanda");
  fireEvent.click(button);

    await waitFor(() => expect(mockOrderFinish).toBeCalledTimes(1));
});
