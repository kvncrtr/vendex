import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import {SquaresFour, Nut, XSquare} from "@phosphor-icons/react";

import { useDispatch, useSelector } from "react-redux";
import { setActiveStatus } from "../../store/sidebar";

const Menu = ({changeState}) => {
   const dispatch = useDispatch();
   const selected = useSelector(state => state.menu.active);

   const handleClick = (key) => {
      dispatch(setActiveStatus(key));
   };

   return ReactDOM.createPortal(
      <div className="menu--container">
         <nav className="menu--general-case">
            
            <div className="menu--bar">
               <h6 className="menu--title">General</h6>
               <XSquare className="menu--icon" weight="thin" onClick={changeState} />
            </div>

            <ul className="menu--list-case">
               <li 
                  className={`menu--item ${selected === "dashboard" ? "active" : ""}`} 
                  onClick={() => handleClick("dashboard")}
                  key="dashboard"
               >
                  <SquaresFour size={19}/>
                  <Link className="menu--link" to="">
                     <span className="menu--link-text">Dashboard</span>
                  </Link>
               </li>

               <li
                  className={`menu--item ${selected === "parts" ? "active" : ""}`}
                  key="parts"
                  onClick={() => handleClick("parts")}
               >
                  <Nut size={19} />
                  <Link className="menu--link" to="">
                  <span className="menu--link-text">Parts</span>
                  </Link>
               </li>

               {/* 
                  <li className="menu--list-item">Dashboard</li>
                  <li className="menu--list-item">Parts</li>
                  <li className="menu--list-item">Racks</li>
                  <li className="menu--list-item">Transfers</li>
                  <li className="menu--list-item">Reports</li> 
               */}
            </ul>
         </nav>
      </div>, 
   document.querySelector(".menu--shell")
   );
}

export default Menu;