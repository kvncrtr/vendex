import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployeeById } from "../../store/employee";
import { SquaresFour, Nut, HardDrives, Swap, ChartLineUp, Info, Gear } from "@phosphor-icons/react";

import { List } from "@phosphor-icons/react";
import logo from "../../assets/mim-logo.png";
import Menu from "../molecules/Menu";
import { setActiveStatus } from "../../store/menu";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const employeeId = useSelector(state => state.auth.current_employee.employee_id);
   const selected = useSelector(state => state.menu.active);
   const [showMenu, setShowMenu] = useState(false);

   const menuItems = [
      { key: 'dashboard', label: 'Dashboard', icon: SquaresFour, size: 19 },
      { key: 'parts', label: 'Parts', icon: Nut, size: 19 },
      { key: 'racks', label: 'Racks', icon: HardDrives, size: 19 },
      { key: 'transfers', label: 'Transfers', icon: Swap, size: 19 },
      { key: 'reports', label: 'Reports', icon: ChartLineUp, size: 19 },
   ]

   const supportItems = [
      { key: 'help', label: 'Help', icon: Info, size: 19 },
      { key: 'settings', label: 'Settings', icon: Gear, size: 19 },
   ]
   
   useEffect(() => { if (employeeId) { dispatch(fetchEmployeeById(employeeId)) }}, []);

   const handleClick = () => {
      setShowMenu(!showMenu);
   }

   const switchActive = (key) => {
      dispatch(setActiveStatus(key));
      navigate(`/${key}`);
   };

   return (
      <div className="sidebar--container">
            <div className="sidebar--logo-case">
               <img className="sidebar--logo" src={logo}></img>
            </div>

         <div className="sidebar--case">
            <div  onClick={handleClick} className="sidebar--burger-icon">
               <List weight="thin" className="sidebar--list-icon" size={24} />
            </div>
         </div>

         <div className="sidebar--menu-case">
            <h5 className="sidebar--heading" >General</h5>

            <ul className="sidebar--general-list">
               {menuItems.map(item => (
                  <li key={item.key} onClick={() => switchActive(item.key)} className={`menu--item ${selected === item.key ? "active" : ""}`}>
                     <item.icon size={item.size} />
                     <p className="sidebar--menu-label">{item.label}</p>
                  </li>
                  ))
               }
            </ul>

            <ul className="sidebar--support-list">
               <h5 className="sidebar--heading" >Support</h5>

               {supportItems.map(item => (
                  <li key={item.key} onClick={() => switchActive(item.key)} className={`menu--item ${selected === item.key ? "active" : ""}`}>
                     <item.icon size={item.size} />
                     <p className="sidebar--menu-label">{item.label}</p>
                  </li>
                  ))
               }
            </ul>
         </div>

         {showMenu && <Menu menu={menuItems} support={supportItems} changeState={handleClick} />}
      </div>
   );
};

export default Sidebar;