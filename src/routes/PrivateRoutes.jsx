import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export default PrivateRoutes = () => {
   let auth = {'token': false}
   return (
      auth.token ? <Outlet /> : <Navigate to="/login" />
   );
};