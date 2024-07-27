import './style.css'
import { Route, Routes } from "react-router-dom";

import ProtectedRoutes from './components/organisims/ProtectedRoute';
import Login from './components/pages/Login';
import Home from './components/pages/Home';

function App() {
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
