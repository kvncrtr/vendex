import React from "react";
import ReactDOM from "react-dom";
import { XSquare } from "@phosphor-icons/react";
import MenuItem from "../atoms/MenuItem";

import { useDispatch, useSelector } from "react-redux";
import { setActiveStatus } from "../../store/sidebar";
import { useNavigate } from "react-router-dom";

const Menu = ({changeState, menu, support}) => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const selected = useSelector(state => state.menu.active);

   const handleClick = (key) => {
      dispatch(setActiveStatus(key));
      navigate(`/${key}`);
      changeState();
   };

   return ReactDOM.createPortal(
      <nav className="menu--container">
         <div className="menu--general-case">
            
            <div className="menu--bar">
               <h6 className="menu--title">General</h6>
               <XSquare className="menu--icon" weight="thin" onClick={changeState} />
            </div>

            <ul className="menu--list-case">
               {menu.map((item) => (
                     <MenuItem 
                        key={item.key}
                        icon={item.icon}
                        label={item.label}
                        isActive={selected === item.key}
                        onClick={() => handleClick(item.key)}
                        size={item.size}
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
               {support.map((item) => (
                     <MenuItem 
                        key={item.key}
                        icon={item.icon}
                        label={item.label}
                        isActive={selected === item.key}
                        onClick={() => handleClick(item.key)}
                        size={item.size}
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