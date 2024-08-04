import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../organisims/Sidebar";

const HomeLayout = () => {
  return (
    <div className="home--layout">
      <Sidebar />
      <div className="home--content-container">
        <Outlet /> 
      </div>
    </div>
  );
};

export default HomeLayout;