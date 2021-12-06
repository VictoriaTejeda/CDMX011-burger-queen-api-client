import React,{ useEffect, useState}from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { onAuthStateChanged } from '@firebase/auth';
import { auth } from './firebaseconfig';
import { Login } from './components/Login';
import { WaiterPage } from './components/waiter/WaiterPage';
import { PrivateRoute } from '../src/components/PrivateRoute'
import { ErrorPage } from './components/ErrorPage';
import { KitchenPage } from './components/kitchen/kitchenPage';
import { OrderDone } from './components/waiter/OrderDone';

function App() {
  const [isLoggedIn, setIsLoggedIn]= useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
    });
  }, []);
  
  console.log(isLoggedIn)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="waiter" element={<PrivateRoute> <WaiterPage  /></PrivateRoute>} />
        <Route path="waiter/order" element={ <OrderDone isLoggedIn={isLoggedIn} />} /> 
        <Route path="kitchen" element={ <KitchenPage  />} />
        <Route path="*" element={< ErrorPage/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
