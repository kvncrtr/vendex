import React from 'react';
import { Route, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({component: Component, ...rest}) => {
   const { token } = useAuth();
   const navigate = useNavigate();
   
   return(
      <Route
      {...rest}
      element={token ? <Component /> : navigate("/login")}
      />
   ); 
};

export default PrivateRoute;