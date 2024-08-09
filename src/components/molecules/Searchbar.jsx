import React from "react";
import logo from "../../assets/mim-logo.png";
import SearchInput from "../atoms/SearchInput";
import { MagnifyingGlass } from "@phosphor-icons/react";

const Searchbar = () => {
  return (
    <div className="searchbar--container">
      <img className="searchbar--logo" src={logo}></img>

      <div className="searchbar--input-case">
        <MagnifyingGlass className={"searchbar--search-button"} weight="thin" size={24} />
        <SearchInput />
      </div>
    </div>
  )
}

export default Searchbar
