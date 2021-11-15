import React, { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Login } from './components/Login';
import { Order } from './components/Order';

function App() {
  const { isLoggedIn} = useState(false)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="order" element={<Order isLoggedIn={isLoggedIn} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
