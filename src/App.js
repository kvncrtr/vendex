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

function App() {
  return (
    <>
      <Routes>
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
      </Routes>
    </>
  );
}

export default App;

/*

once logged in I want to show the sidebar component with the home page 
how can I do that?

import './style.css'
import { Route, Routes } from "react-router-dom";

import ProtectedRoutes from './components/organisims/ProtectedRoute';
import Login from './components/pages/Login';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
        </Route> 

        <Route path="/login" element={<Login />} replace />
        <Route path="*" element={<Login />} replace />
      </Routes>
    </>
  );
}

export default App;

here is the sidebar

import { useState } from "react";

import { List } from "@phosphor-icons/react";
import logo from "../../assets/mim-logo.png";
import Menu from "../molecules/Menu";

const Sidebar = () => {
   const [showMenu, setShowMenu] = useState(false);

   const handleClick = () => {
      setShowMenu(!showMenu);
   }

   return (
      <div className="sidebar--container">
         <div className="sidebar--case">
            <div className="sidebar--logo-case">
               <img className="sidebar--logo" src={logo}></img>
            </div>

            <div  onClick={handleClick} className="sidebar--burger-icon">
               <List weight="thin" className="sidebar--list-icon" size={24} />
            </div>
         </div>

         {showMenu && <Menu changeState={handleClick} />}
      </div>
   );
};

export default Sidebar;

here is home

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeById } from "../../store/employee";

const Home = () => {
   const dispatch = useDispatch();
   const employeeId = useSelector(state => state.auth.current_employee.employee_id);
   const current_employee = useSelector(state => state.auth.current_employee);

   useEffect(() => { if (employeeId) { dispatch(fetchEmployeeById(employeeId)) }}, []);

   return (
      <div>
            <h1>HOME</h1>
      </div>
   );
};

export default Home;

*/ 