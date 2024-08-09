import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../organisims/Sidebar";
import Searchbar from "../molecules/Searchbar";
import Access from "../molecules/Access";
import Dashboard from "./Dashboard"

const HomeLayout = () => {
  return (
    <div className="home--layout-container">
      <div className="sidebar--parent">
        <Sidebar />
      </div>

      <div className="searchbar--parent">
        <Searchbar />
      </div>

      <div className="home--content-container">
        {/* <Outlet />  */}
        <Dashboard />
      </div>

      <div className="access--parent">
        <Access />
      </div>
    </div>
  );
};

export default HomeLayout;