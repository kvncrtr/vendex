import React, { useState } from "react";
import ReactDOM from "react-dom";
import { XSquare, SquaresFour, Nut, HardDrives, Swap, ChartLineUp, Info, Gear } from "@phosphor-icons/react";
import MenuItem from "../atoms/MenuItem";

import { useDispatch, useSelector } from "react-redux";
import { setActiveStatus } from "../../store/sidebar";

const Menu = ({changeState}) => {
   const dispatch = useDispatch();
   const selected = useSelector(state => state.menu.active);

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

   const handleClick = (key) => {
      dispatch(setActiveStatus(key));
   };

   return ReactDOM.createPortal(
      <nav className="menu--container">
         <div className="menu--general-case">
            
            <div className="menu--bar">
               <h6 className="menu--title">General</h6>
               <XSquare className="menu--icon" weight="thin" onClick={changeState} />
            </div>

            <ul className="menu--list-case">
               {menuItems.map((item) => (
                     <MenuItem 
                        key={item.key}
                        icon={item.icon}
                        label={item.label}
                        isActive={selected === item.key}
                        onClick={() => handleClick(item.key)}
                        size={item.size}
                        to={"#"}
                     />
                  )
               )}
            </ul>
         </div>

         <div className="menu--support-case">
            <div className="menu--support-bar">
               <h6 className="menu--title">Support</h6>
            </div>

            <ul className="menu--support-list-case">
               {supportItems.map((item) => (
                     <MenuItem 
                        key={item.key}
                        icon={item.icon}
                        label={item.label}
                        isActive={selected === item.key}
                        onClick={() => handleClick(item.key)}
                        size={item.size}
                        to={"#"}
                     />
                  )
               )}
            </ul>
         </div>
      </nav>, 
   document.querySelector(".menu--shell")
   );
}

export default Menu;