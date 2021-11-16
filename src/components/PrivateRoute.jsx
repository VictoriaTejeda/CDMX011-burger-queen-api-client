import React from "react";
import { Navigate} from 'react-router-dom';
import { auth } from "../firebaseconfig"

// eslint-disable-next-line react/prop-types
export function PrivateRoute({ children }) {
  const user = auth.currentUser;
  return user ? children : <Navigate to="/" />;
}
 