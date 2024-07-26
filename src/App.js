import './style.css'
import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from "react-router-dom";

import ProtectedRoutes from './components/organisims/ProtectedRoute';
import Login from './components/pages/Login';
import Home from './components/pages/Home';

import useAuth from './hooks/useAuth';
import LocalStorageService from './services/local-storage';

function App() {
  const { isAuthenticated } = useAuth();
  const token = LocalStorageService.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && token) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated])

  return (
    <Routes>
      <Route element={<ProtectedRoutes />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="/login" element={<Login />} replace />
      <Route path="*" element={<Login />} replace />
    </Routes>
  );
}

export default App;
