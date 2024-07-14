import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({component: Component, ...props}) => {
   const { isAuthenticated, isValid } = useAuth();
   
   return(
      <Route
         {...props}
         element={isAuthenticated && isValid ? <Component /> : <Navigate to="/login" />}
      />
   ); 
};

export default PrivateRoute;