import React, { useState } from "react";
import { ReactComponent as Tv } from "assets/icons/tv.svg";
import { ReactComponent as Search } from "assets/icons/search.svg";
import { ReactComponent as Multi } from "assets/icons/multi.svg";
import { NavbarMain } from "./navbar.styles";
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Logout } from "redux/action";



const Navbar = () => {
    const { currentUser } = useSelector(state => state);
    const [logoutState, setLogoutState] = useState(false)

    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout =() => {
      dispatch(Logout())
      history.push('/user-signin')
   }

   const showLogout = () => { setLogoutState(!logoutState)}

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
      <div className="gen3-tab">
      <div className="tab-3">
        <p>Hi, {currentUser?.displayName.charAt(0).toUpperCase() + currentUser?.displayName.slice(1)}</p>
        <span onClick={showLogout} className="vid"><Multi /> </span>
      </div>
      {logoutState && <div className="logout" onClick={handleLogout}>logout</div>}
      </div>
    </NavbarMain>
  );
};

export default Navbar;
