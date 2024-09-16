/* eslint-disable no-undef */
import React from "react";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { FormLogin } from '../components/FormLogin'

afterEach(cleanup);

test("sobre el componente FormLogin", () => {
  const mockHandleLogin = jest.fn();
  render(<FormLogin handleLogin={(mockHandleLogin)} />);
  const contentEmail = screen.getByPlaceholderText("ejemplo@burgerqueen.com");
  const contentPasswords = screen.getByPlaceholderText("******");
  const buttonLogin = screen.getByText("Entrar");

  expect(contentEmail).toBeInTheDocument();
  expect(contentPasswords).toBeInTheDocument();
  const emailValue = "luis_mesero@burgerqueen.com";
  const passwordValue = "123456";
  fireEvent.change(contentEmail, { target: { value: emailValue } });
  fireEvent.change(contentPasswords, { target: { value: passwordValue } });
  fireEvent.click(buttonLogin);

  expect(mockHandleLogin).toHaveBeenCalledWith(emailValue, passwordValue);
});
