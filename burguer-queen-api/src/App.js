import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Order from './components/Order';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/order" element={<Order />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
