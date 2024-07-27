import { useEffect } from "react";
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";
import LocalStorageService from '../../services/local-storage';

const ProtectedRoutes = ({ children, ...props }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const isLoggedIn = LocalStorageService.getItem("isLoggedIn")
  const token = LocalStorageService.getItem("token");

  if (!isAuthenticated || !token || !isLoggedIn) (
    <Navigate to="/login" replace />
  );

  return (
    isAuthenticated && token && isLoggedIn ? (
      <Outlet />  
    ) : (
      <Navigate to="/login" replace /> 
    )
  );
};

export default ProtectedRoutes;