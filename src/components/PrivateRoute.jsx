import React from "react";
import { Route, Navigate} from 'react-router-dom';
import { auth } from "../firebaseconfig";

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ component: Component, ...rest }) => {
    const { currentUser } = auth();
   // console.log('user', currentUser)
  
    return (
      <Route
        {...rest}
        render={props => {
          return currentUser ? <Component {...props} /> : <Navigate to='/' />
        }}
      >
  
      </Route>
    )
  }