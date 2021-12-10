/* eslint-disable no-undef */
import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render , fireEvent, waitFor  } from "@testing-library/react";
import { Command } from "../components/kitchen/Command";
import { Data } from "./DataMock"

test('renders content', () => {
    const mockOrder=Data.orders;
    
    
    const component = render(<Command products={mockOrder} />)
    

    
  //component.debug()
  component.findByText("Renato")
  component.findByText("1 Jugo de Naranja")
  component.findByText("1 Café con leche")
  component.findByText("pending")
  component.findByText("armando_cocina@burgerqueen.com")

})

test('clicking the buttons', async() => {
const mockOrders=Data.orders;
const component = render(mockOrders.map((op)=><Command products={mockOrders } key={op.id} />))


  const button=component.getAllByRole('button')
  await waitFor(() =>button.forEach((x)=>fireEvent.click(x)));
  
  
})

describe("test window location's reload function", () => {
  const original = window.location;

  const refreshPage = () => {
    window.location.reload(true);
  };

  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: { reload: jest.fn() },
    });
  });

  afterAll(() => {
    Object.defineProperty(window, 'location', { configurable: true, value: original });
  });

  it('mocks reload function', () => {
    expect(jest.isMockFunction(window.location.reload)).toBe(true);
  });

  it('calls reload function', () => {
    refreshPage(); // as defined above..
    expect(window.location.reload).toHaveBeenCalled();
  });
});


    