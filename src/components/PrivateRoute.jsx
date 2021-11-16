import React from "react";
import { Navigate } from 'react-router-dom';
import { auth } from "../firebaseconfig";

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ children }) => {
  const user = auth.currentUser;
  return user ? children : <Navigate to="/" />;
}