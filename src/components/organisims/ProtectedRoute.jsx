import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import LocalStorageService from '../../services/local-storage';

const ProtectedRoutes = ({ children, ...props }) => {
   const { isAuthenticated } = useAuth();
   const token = LocalStorageService.getItem('token')
   
   if (!isAuthenticated || !token) <Navigate to="/Login" replace />

   return (
      isAuthenticated && token ? (
        <Outlet />  
      ) : (
        <Navigate to="/login" replace /> 
      )
    );
  };

export default ProtectedRoutes;