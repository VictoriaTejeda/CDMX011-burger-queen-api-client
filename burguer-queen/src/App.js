import React from 'react';
//import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Login } from './components/Login';
import { Order } from './components/Order';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/login' component={Login}></Route>
          <Route path='/register' component={Order}></Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
