import './style.css'
import { Route, Routes } from "react-router-dom";

import ProtectedRoutes from './components/organisims/ProtectedRoute';

import Login from './components/pages/Login';
import HomeLayout from './components/pages/HomeLayout';
import Dashboard from './components/pages/Dashboard';
import Parts from "./components/pages/Parts";
import Racks from "./components/pages/Racks";
import Transfers from "./components/pages/Transfers";
import Reports from "./components/pages/Reports";
import Help from "./components/pages/Help";
import Settings from "./components/pages/Settings";
import Sidebar from './components/organisims/Sidebar';

function App() {
  return (
    <>
      <Sidebar />
      {/* <Routes>
        <Route path="/login" element={<Login />} replace />
        <Route path="*" element={<Login />} replace />

        <Route element={<ProtectedRoutes />} >
          <Route path="/" element={<HomeLayout />}>
            <Route path="dashboard" index element={<Dashboard />} />
            <Route path="parts" element={<Parts />} />
            <Route path="racks" element={<Racks />} />
            <Route path="transfers" element={<Transfers />} />
            <Route path="reports" element={<Reports />} />
            <Route path="help" element={<Help />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route> 
      </Routes>*/}
    </>
  );
}

export default App;