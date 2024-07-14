import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({component: Component, ...props}) => {
   const { isAuthenticated, isValid } = useAuth();
   
   return <div className="class"></div>; 
};

export default PrivateRoute;