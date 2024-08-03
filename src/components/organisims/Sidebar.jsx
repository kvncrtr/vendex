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
               <List className="sidebar--list-icon" size={24} />
            </div>
         </div>

         {showMenu && <Menu />}
      </div>
   );
};

export default Sidebar;