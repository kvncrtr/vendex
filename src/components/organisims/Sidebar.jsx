import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeById } from "../../store/employee";


import { List } from "@phosphor-icons/react";
import logo from "../../assets/mim-logo.png";
import Menu from "../molecules/Menu";

const Sidebar = () => {
   const dispatch = useDispatch();
   const employeeId = useSelector(state => state.auth.current_employee.employee_id);
   const [showMenu, setShowMenu] = useState(false);
   
   useEffect(() => { if (employeeId) { dispatch(fetchEmployeeById(employeeId)) }}, []);

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