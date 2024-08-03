import React from "react";
import ReactDOM from "react-dom";

const Menu = () => {
  return ReactDOM.createPortal(
    <div>
      Menu!
    </div>, 
    document.querySelector(".menu--container")
  );
}

export default Menu;