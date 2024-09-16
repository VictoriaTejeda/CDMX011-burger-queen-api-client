import React, { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Login } from './components/Login';
import { Order } from './components/Order';
import { PrivateRoute } from '../src/components/PrivateRoute'
import { ErrorPage } from './components/ErrorPage';

function App() {
  const { isLoggedIn } = useState(false)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="order" element={<PrivateRoute> <Order isLoggedIn={isLoggedIn} /></PrivateRoute>} />
        <Route path="*" element={< ErrorPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
