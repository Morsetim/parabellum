import React from "react";
import { ReactComponent as Tv } from "assets/icons/tv.svg";
import { ReactComponent as Search } from "assets/icons/search.svg";
import { ReactComponent as Multi } from "assets/icons/multi.svg";
import { NavbarMain } from "./navbar.styles";
import { useSelector } from 'react-redux';



const Navbar = () => {

    const { currentUser } = useSelector(state => state);

  return (
    <NavbarMain>
      <div className="tab-1">
        <Tv />
        <p>Movix</p>
      </div>
      <div className="tab-2">
        <input className="search" placeholder="What do you want to watch?"/>
        <span className="search-icon"><Search /></span>
      </div>
      <div className="tab-3">
        <p>Hi, {currentUser?.displayName.charAt(0).toUpperCase() + currentUser?.displayName.slice(1)}</p>
        <span className="vid"><Multi /> </span>
      </div>
    </NavbarMain>
  );
};

export default Navbar;
