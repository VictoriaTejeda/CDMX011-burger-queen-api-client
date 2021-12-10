/* eslint-disable no-undef */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, waitFor, act } from "@testing-library/react";
import { Command } from "../components/kitchen/Command";
import { Data } from "./DataMock";
import { CommandOrder } from "../components/kitchen/CommandOrder";

test("renders content", () => {
  const mockOrder = Data.orders;

  const component = render(<Command products={mockOrder} />);
  //component.debug()
  component.findByText("Renato");
  component.findByText("1 Jugo de Naranja");
  component.findByText("1 Café con leche");
  component.findByText("pending");
  component.findByText("armando_cocina@burgerqueen.com");
});

test("clicking the buttons", async () => {
  const mockOp = {
    waiter: "armando_cocina@burgerqueen.com",
    clientName: "Marco",
    status: "entregado",
    orderProducts: [
      {
        id: 5,
        name: "Hamburguesa simple",
        price: 10,
        image:
          "https://raw.githubusercontent.com/Fanita90/CDMX011-burger-queen-api-client/hu3/src/assets/menu-items/sencilla.png",
        type: "comida",
        quantity: 1,
      },
      {
        id: 8,
        name: "Aros de cebolla",
        price: 5,
        image:
          "https://raw.githubusercontent.com/Fanita90/CDMX011-burger-queen-api-client/hu3/src/assets/menu-items/aros.png",
        type: "comida",
        quantity: 1,
      },
      {
        id: 11,
        name: "Bebida/gaseosa 500ml",
        price: 7,
        image:
          "https://raw.githubusercontent.com/Fanita90/CDMX011-burger-queen-api-client/hu3/src/assets/menu-items/soda.png",
        type: "comida",
        quantity: 1,
      },
    ],
    date: "7/12/2021 12:28:36",
    total: 22,
    id: 12,
  };

  const mockUpdate= jest.fn()
  const date= jest.fn()
  const component = render(
    <CommandOrder
      product={mockOp}
      updateOrder={mockUpdate}
      date={date}
    ></CommandOrder>
  );

  //component.debug();

  const button=component.getByText('Enviar a Mesa')
 
  act(() => {
    fireEvent.click(button)
  });

 
  await waitFor(() =>expect(mockUpdate).toHaveBeenCalledTimes(1))
  expect(mockUpdate).toHaveBeenCalledWith(mockOp)

});

describe("test window location's reload function", () => {
  const original = window.location;

  const refreshPage = () => {
    window.location.reload(true);
  };

  beforeAll(() => {
    Object.defineProperty(window, "location", {
      configurable: true,
      value: { reload: jest.fn() },
    });
  });

  afterAll(() => {
    Object.defineProperty(window, "location", {
      configurable: true,
      value: original,
    });
  });

  it("mocks reload function", () => {
    expect(jest.isMockFunction(window.location.reload)).toBe(true);
  });

  it("calls reload function", () => {
    refreshPage(); // as defined above..
    expect(window.location.reload).toHaveBeenCalled();
  });
});
