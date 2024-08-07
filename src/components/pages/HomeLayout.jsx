import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../organisims/Sidebar";
import Searchbar from "../molecules/Searchbar";
import Access from "../molecules/Access";

const HomeLayout = () => {
  return (
    <div className="home--layout">
      <Sidebar />
      <Searchbar />
      <div className="home--content-container">
        <Outlet /> 
      </div>
      <Access />
    </div>
  );
};

export default HomeLayout;