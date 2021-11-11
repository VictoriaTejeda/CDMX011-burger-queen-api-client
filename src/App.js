import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Login } from './components/Login';
import { Order } from './components/Order';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
