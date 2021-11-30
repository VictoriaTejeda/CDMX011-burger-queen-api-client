import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Login } from './components/Login';
import { WaiterPage } from './components/WaiterPage';
import { PrivateRoute } from '../src/components/PrivateRoute'
import { ErrorPage } from './components/ErrorPage';
import { KitchenPage } from './components/KitchenPages/KitchenPage';


function App() {
  //const { isLoggedIn } = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="waiter" element={<PrivateRoute> <WaiterPage /></PrivateRoute>} />
        <Route path="/kitchen" element={<KitchenPage />} />
        <Route path="*" element={< ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
