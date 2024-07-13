import React from 'react';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({component: Component, ...rest}) => {
   const { token } = useAuth();
   
   return(
      <div className="private-route"></div>
   ); 
};

export default PrivateRoute;